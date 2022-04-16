/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use-scrict'
// projects/660236032468/secrets/mapbox/versions/1
const functions = require('firebase-functions')
const sanitizer = require('./sanitizer')
const admin = require('firebase-admin')
const { v4: uuidv4 } = require('uuid')
admin.initializeApp()
const name = 'projects/660236032468/secrets/mapbox/versions/2'
const fetch = require('node-fetch');

// Imports the Secret Manager library
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager')

// Instantiates a client
const client = new SecretManagerServiceClient()
async function convertAddress (city) {
  const query = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoibG9nYW41MjAxIiwiYSI6ImNrcTQybTFoZzE0aDQyeXM1aGNmYnR1MnoifQ.4kRWNfEH_Yao_mmdgrgjPA`,
    { method: 'GET' }
  )
  if (query.status !== 200) {
    alert(query.status)
    return
  }

  const data = await query.json()

  return data
}
async function accessSecretVersion (city) {

  const [version] = await client.accessSecretVersion({
    name: name
  })

  // Extract the payload as a string.
  const payload = version.payload.data.toString()
  const response = await fetch( `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${payload}`,  { method: 'GET' });
  if (response.status !== 200) {
    console.log(response.status)
    return
  }

  const data = await response.json()

  return data
  // WARNING: Do not print the secret in a production environment - this
  // snippet is showing how to access the secret material.

}


exports.getLatLon = functions.https.onCall(data => {

  const result = accessSecretVersion()

return result
  // [END returnAddData]
})
// [START allAdd]
// [START addFunctionTrigger]
// Adds two numbers to each other.
exports.addNumbers = functions.https.onCall(data => {
  // [END addFunctionTrigger]
  // [START readAddData]
  // Numbers passed from the client.
  const firstNumber = data.firstNumber
  const secondNumber = data.secondNumber
  // [END readAddData]

  // [START addHttpsError]
  // Checking that attributes are present and are numbers.
  if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    // Throwing an HttpsError so that the client gets the error details.
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function must be called with ' +
        'two arguments "firstNumber" and "secondNumber" which must both be numbers.'
    )
  }
  // [END addHttpsError]

  // [START returnAddData]
  // returning result.
  return {
    firstNumber: firstNumber,
    secondNumber: secondNumber,
    operator: '+',
    operationResult: firstNumber + secondNumber
  }
  // [END returnAddData]
})
// [START allAdd]
// [START addFunctionTrigger]
// Adds two numbers to each other.
exports.addNumbers = functions.https.onCall(data => {
  // [END addFunctionTrigger]
  // [START readAddData]
  // Numbers passed from the client.
  const firstNumber = data.firstNumber
  const secondNumber = data.secondNumber
  // [END readAddData]

  // [START addHttpsError]
  // Checking that attributes are present and are numbers.
  if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    // Throwing an HttpsError so that the client gets the error details.
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function must be called with ' +
        "two arguments 'firstNumber' and 'secondNumber' which must both be numbers."
    )
  }
  // [END addHttpsError]

  // [START returnAddData]
  // returning result.
  return {
    firstNumber: firstNumber,
    secondNumber: secondNumber,
    operator: '+',
    operationResult: firstNumber + secondNumber
  }
  // [END returnAddData]
})
// [END allAdd]

// [START messageFunctionTrigger]
// Saves a message to the Firebase Realtime Database but sanitizes the text by removing swearwords.
exports.addComment = functions.https.onCall((data, context) => {
  const text = data.text
  const name = data.name
  const uid = data.uid
  const documentId = uuidv4()

  if (!(typeof text === 'string') || text.length === 0) {
    // Throwing an HttpsError so that the client gets the error details.
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function must be called with ' +
        "one arguments 'text' containing the message text to add."
    )
  }

  const authenticated = context.auth ? context.auth.uid : null

  // [END authIntegration]

  // [START returnMessageAsync]
  // Saving the new message to the Realtime Database.
  // Sanitize the message.

  const sanitizedName = sanitizer.sanitizeText(name)

  const sanitizedMessage = sanitizer.sanitizeText(text) // Sanitize the message.
  return {
    text: sanitizedMessage,
    name: sanitizedName,
    uid: uid,
    id: documentId
  }
  // [END_EXCLUDE]
})
// [END messageFunctionTrigger]
