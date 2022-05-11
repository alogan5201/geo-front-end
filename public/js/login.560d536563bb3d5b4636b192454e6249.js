/*!
* GeoTools
* Boilerplate for a Static website using EJS and SASS
* example.com
* @author Brenton Cozby -- https://brentoncozby.com
* Copyright 2022. MIT Licensed.
*/

!function(e){function n(n){for(var a,s,i=n[0],_=n[1],l=n[2],d=0,u=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(a in _)Object.prototype.hasOwnProperty.call(_,a)&&(e[a]=_[a]);for(c&&c(n);u.length;)u.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,i=1;i<t.length;i++){var _=t[i];0!==o[_]&&(a=!1)}a&&(r.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},o={9:0},r=[];function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/js/";var i=window.webpackJsonp=window.webpackJsonp||[],_=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var c=_;r.push([45,0]),t()}({4:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return googleSignin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createRandomUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return sanitizeReply; });\n/* unused harmony export addCommentMessage */\n/* harmony import */ var bootstrap_dist_js_bootstrap_esm_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);\n/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);\n/* harmony import */ var utils_comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);\n/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);\n\n\n\n\n\n\n\nconst firebaseConfig = {\n  apiKey: "AIzaSyBCU8RRxV3qaSyxOgc4ObSWmUhlfnJsYTo",\n  authDomain: "geotools-bc75a.firebaseapp.com",\n  databaseURL: "https://geotools-bc75a-default-rtdb.firebaseio.com",\n  projectId: "geotools-bc75a",\n  storageBucket: "geotools-bc75a.appspot.com",\n  messagingSenderId: "106157954659",\n  appId: "1:106157954659:web:3e189110236a2138438a56",\n  measurementId: "G-Z6GK19K3L0"\n}; // Initialize Firebase\n\nconst app = Object(firebase_app__WEBPACK_IMPORTED_MODULE_1__[/* initializeApp */ "a"])(firebaseConfig);\nconst auth = Object(firebase_auth__WEBPACK_IMPORTED_MODULE_2__[/* getAuth */ "b"])();\nconst db = Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* getDatabase */ "b"])();\nconst functions = Object(firebase_functions__WEBPACK_IMPORTED_MODULE_4__[/* getFunctions */ "b"])(app);\nconst prettyDate = Object(utils_helpers__WEBPACK_IMPORTED_MODULE_6__[/* getDate */ "a"])();\n\nif (location.hostname === "localhost") {\n  Object(firebase_functions__WEBPACK_IMPORTED_MODULE_4__[/* connectFunctionsEmulator */ "a"])(functions, "localhost", 5001);\n}\n\nconst path = window.location.pathname;\nconst commentRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* ref */ "f"])(db, `messages${path}`);\nconst commentFormInputs = $("#comment-form :input");\nconst googleProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__[/* GoogleAuthProvider */ "a"](); // login-link-text login-link-icon\n\nObject(firebase_auth__WEBPACK_IMPORTED_MODULE_2__[/* onAuthStateChanged */ "c"])(auth, user => {\n  const userData = localStorage.getItem("userData");\n\n  if (user) {\n    if (window.location.href.includes("login")) {\n      let history = localStorage.getItem("page-history") || "/";\n      window.location.replace(history);\n    }\n  }\n});\n\nfunction writeUserData(userId, userInfo) {\n  return Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* set */ "g"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* ref */ "f"])(db, "users"), userInfo);\n}\n\nasync function getIp() {\n  const query = await fetch(`https://ipapi.co/json`, {\n    method: "GET"\n  });\n\n  if (query.status !== 200) {\n    alert(query.status);\n    return;\n  }\n\n  const data = await query.json();\n  let lat = data.latitude;\n  let lon = data.longitude;\n  let obj = {\n    lat: lat,\n    lon: lon\n  };\n  localStorage.setItem("userlocation", `${JSON.stringify(obj)}`);\n  return data;\n}\nfunction googleSignin() {\n  return Object(firebase_auth__WEBPACK_IMPORTED_MODULE_2__[/* signInWithRedirect */ "e"])(auth, googleProvider);\n}\n\nfunction googleSignOut() {\n  Object(firebase_auth__WEBPACK_IMPORTED_MODULE_2__[/* signOut */ "f"])(auth);\n}\n\nfunction checkIfUserExists(data) {\n  const uid = data.uid;\n  const userRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* ref */ "f"])(db, `users`);\n  const users = [];\n  return Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* get */ "a"])(userRef).then(snapshot => {\n    if (snapshot.exists()) {\n      const data = snapshot.val();\n      const map = new Map(Object.entries(data));\n      const values = Array.from(map.values());\n      console.log(values);\n\n      for (let index = 0; index < values.length; index++) {\n        const element = values[index];\n        console.log(index, element.id);\n\n        if (element.id == uid) {\n          console.log("user already exists");\n          break;\n        } else {\n          console.log("user does not exist");\n        }\n      }\n    }\n  }).catch(error => {\n    console.error(error);\n  });\n}\n\nfunction checkIfAnonymousUserExists() {\n  const userRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* ref */ "f"])(db, `anonymousUsers`);\n  Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* get */ "a"])(userRef).then(snapshot => {\n    if (snapshot.exists()) {\n      const data = snapshot.val();\n      const map = new Map(Object.entries(data));\n\n      for (const [key, value] of map.entries()) {\n        console.log(key, value);\n      }\n    }\n  }).catch(error => {\n    console.error(error);\n  });\n}\n\nasync function writeUsertoDatabase(data) {\n  Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* get */ "a"])(db, `users/${data.uid}`).then(snapshot => {\n    if (snapshot.exists()) {\n      console.log(snapshot.val());\n    } else {\n      const userListRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* ref */ "f"])(db, `users/${data.uid}`);\n      const newPostRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* push */ "e"])(userListRef);\n      return Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* set */ "g"])(newPostRef, data);\n    }\n  }).catch(error => {\n    console.error(error);\n    return error;\n  }).finally(() => {\n    let msg = "Promise complete";\n    console.log(\'Promise completed\');\n    return msg;\n  });\n}\n\nasync function createRandomUser() {\n  const ipAddress = await getIp();\n  return Object(firebase_auth__WEBPACK_IMPORTED_MODULE_2__[/* signInAnonymously */ "d"])(auth).then(data => {\n    let ip = ipAddress || null;\n    let userInfo = {\n      uid: data.user.uid,\n      emailVerified: data.user.emailVerified,\n      isAnonymous: data.user.isAnonymous,\n      metadata: data.user.metadata,\n      ip: ip\n    };\n    let userData = JSON.stringify(userInfo);\n    localStorage.setItem("userData", userData);\n    console.log(userInfo);\n    return userInfo;\n  }).catch(error => {\n    const errorCode = error.code;\n    const errorMessage = error.message;\n    return error;\n  });\n}\nasync function handleComment(message, name, userData, path) {\n  const addComment = Object(firebase_functions__WEBPACK_IMPORTED_MODULE_4__[/* httpsCallable */ "c"])(functions, "addComment");\n  addComment({\n    text: message,\n    name: name,\n    uid: userData,\n    page: path\n  }).then(function (result) {\n    // Read result of the Cloud Function.\n    let sanitizedMessage = result.data.text;\n    let sanitizedName = result.data.name;\n    const documentId = result.data.id;\n\n    if (message !== sanitizedMessage) {\n      $(\'#comment-btn\').prop("disabled", false);\n      $("#comment-btn").html("Submit");\n\n      for (let index = 0; index < commentFormInputs.length; index++) {\n        const element = commentFormInputs[index];\n        element.value = "";\n      }\n\n      Object(utils_helpers__WEBPACK_IMPORTED_MODULE_6__[/* toggleModal */ "b"])("fail");\n    } else if (message == sanitizedMessage) {\n      const newCommentData = {\n        id: documentId,\n        name: sanitizedName,\n        date: prettyDate,\n        message: sanitizedMessage\n      };\n      const newComment = Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* push */ "e"])(commentRef);\n      Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* set */ "g"])(newComment, newCommentData);\n\n      for (let index = 0; index < commentFormInputs.length; index++) {\n        const element = commentFormInputs[index];\n        element.value = "";\n      }\n\n      let commentComponent = Object(utils_comments__WEBPACK_IMPORTED_MODULE_5__[/* comment */ "a"])(documentId, sanitizedName, prettyDate, sanitizedMessage, "", "");\n      $(\'#comment-btn\').prop("disabled", false);\n      $("#comment-btn").html("Submit");\n      Object(utils_helpers__WEBPACK_IMPORTED_MODULE_6__[/* toggleModal */ "b"])("success");\n      $("#comment-section").append(commentComponent);\n    }\n  }).catch(function (error) {\n    // Getting the Error details.\n    let code = error.code;\n    let message = error.message;\n    let details = error.details;\n    console.error("There was an error when calling the Cloud Function", error);\n    window.alert("There was an error when calling the Cloud Function:\\n\\nError Code: " + code + "\\nError Message:" + message + "\\nError Details:" + details);\n    $(\'#comment-btn\').prop("disabled", false);\n    $("#comment-btn").html("Submit");\n  });\n}\n\nif (!window.location.pathname.includes("login")) {\n  $("#mainNav").on("click", "#sign-out", function (e) {\n    e.preventDefault();\n    console.log(e);\n    Object(firebase_auth__WEBPACK_IMPORTED_MODULE_2__[/* signOut */ "f"])(auth).then(() => {\n      let myModal = new bootstrap_dist_js_bootstrap_esm_min_js__WEBPACK_IMPORTED_MODULE_0__[/* Modal */ "c"](document.getElementById("modalSignOut"));\n      myModal.toggle();\n      toggleLogInNav();\n    }).catch(error => {});\n  });\n}\n\nfunction getUser() {\n  let result = auth.currentUser ? auth.currentUser : null;\n  return result;\n}\n\n$("#login-link-icon").on("click", function (e) {\n  e.preventDefault();\n  localStorage.setItem("page-history", window.location.href);\n  window.location.replace("/login");\n});\nsetTimeout(() => {\n  if ($("#mainNav")) {\n    if (auth.currentUser) {\n      toggleLogOutNav();\n\n      if ($(\'#comment-form\')) {\n        $(\'#panelsStayOpen-collapseOne\').addClass("d-none");\n      }\n    } else {\n      toggleLogInNav();\n    }\n  }\n}, 1000);\n\nfunction toggleLogOutNav() {\n  let logoutNav = `    <div class="nav-item dropdown">\n          <a\n            class="nav-link dropdown-toggle"\n            href="#"\n            id="login-link-icon"\n            role="button"\n            data-bs-toggle="dropdown"\n            aria-expanded="false"\n          >\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\n              \x3c!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --\x3e\n              <path\n                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"\n              /></svg\n          ></a>\n          <ul class="dropdown-menu" aria-labelledby="login-link-icon">\n            <li><a class="dropdown-item" href="#">New project...</a></li>\n            <li><a class="dropdown-item" href="#">Settings</a></li>\n            <li><a class="dropdown-item" href="#">Profile</a></li>\n            <li>\n              <hr class="dropdown-divider" />\n            </li>\n            <li>\n              <a id="sign-out" class="dropdown-item" href="#">Sign out</a>\n            </li>\n          </ul>\n        </div>`;\n  $("#user-profile").html(logoutNav);\n}\n\nfunction toggleLogInNav() {\n  let loginNav = `\n                          <div class="nav-item">\n                            <a class="nav-link" href="/login" id="login-link-icon">\n                              <svg width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0\n                                448 512">\n                                \x3c!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --\x3e\n                                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0\n                                  224 0 96 57.3 96 128s57.3 128 128 128zm89.6\n                                  32h-16.7c-22.2 10.2-46.9 16-72.9\n                                  16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0\n                                  422.4V464c0 26.5 21.5 48 48 48h352c26.5 0\n                                  48-21.5\n                                  48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg></a>\n\n                            </div>\n                         `;\n  $("#user-profile").html(loginNav);\n}\n\nasync function sanitizeReply(message, name, userData, path) {\n  const addComment = Object(firebase_functions__WEBPACK_IMPORTED_MODULE_4__[/* httpsCallable */ "c"])(functions, "addComment");\n  return addComment({\n    text: message,\n    name: name,\n    uid: userData,\n    page: path\n  }).then(function (result) {\n    // Read result of the Cloud Function.\n    let sanitizedMessage = result.data.text;\n    let sanitizedName = result.data.name;\n    const documentId = result.data.id;\n    const userid = result.data.uid;\n\n    if (message !== sanitizedMessage) {\n      let returnmessage = "user is swearing";\n      return returnmessage;\n    } else if (message == sanitizedMessage) {\n      const newCommentData = {\n        id: documentId,\n        name: sanitizedName,\n        date: prettyDate,\n        message: sanitizedMessage,\n        uid: userid,\n        status: true\n      };\n      return newCommentData;\n    }\n\n    return result;\n  }).catch(function (error) {\n    // Getting the Error details.\n    let code = error.code;\n    let message = error.message;\n    let details = error.details;\n    console.error("There was an error when calling the Cloud Function", error);\n    window.alert("There was an error when calling the Cloud Function:\\n\\nError Code: " + code + "\\nError Message:" + message + "\\nError Details:" + details);\n    return error;\n  });\n}\nfunction addCommentMessage(data) {\n  const path = window.location.pathname;\n  const addComment = Object(firebase_functions__WEBPACK_IMPORTED_MODULE_4__[/* httpsCallable */ "c"])(functions, "addComment");\n  const docId = data.docId;\n  addComment({\n    text: data.cleanMessage,\n    name: data.cleanName,\n    uid: data.uid,\n    page: path\n  }).then(function (result) {\n    // Read result of the Cloud Function.\n    let sanitizedMessage = result.data.text;\n    let sanitizedName = result.data.name;\n\n    if (data.cleanMessage !== sanitizedMessage) {\n      let message = `message ${cleanMessage} was not clean`;\n      return message;\n    } else {\n      return Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* get */ "a"])(commentRef).then(snapshot => {\n        if (snapshot.exists()) {\n          const data = snapshot.val();\n          const map = new Map(Object.entries(data));\n\n          for (const [key, value] of map.entries()) {\n            if (value.id == docId) {\n              const postListRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* ref */ "f"])(db, `messages${path}${key}/replies`);\n              let messageContent = {\n                name: data.sanitizedName,\n                id: data.uid,\n                message: data.sanitizedMessage,\n                date: prettyDate,\n                recipient: value.id\n              };\n              const newPostRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* push */ "e"])(postListRef);\n              Object(firebase_database__WEBPACK_IMPORTED_MODULE_3__[/* set */ "g"])(newPostRef, messageContent);\n              return messageContent;\n            }\n          }\n        }\n      }).catch(error => {\n        console.error(error);\n        return error;\n      });\n    }\n  }).catch(function (error) {\n    // Getting the Error details.\n    let code = error.code;\n    let message = error.message;\n    let details = error.details;\n    console.error("There was an error when calling the Cloud Function", error);\n    window.alert("There was an error when calling the Cloud Function:\\n\\nError Code: " + code + "\\nError Message:" + message + "\\nError Details:" + details);\n    return error;\n  });\n}\n/* unused harmony default export */ var _unused_webpack_default_export = ({\n  addCommentMessage,\n  googleSignin,\n  createRandomUser,\n  getIp,\n  sanitizeReply\n});\n\n//# sourceURL=webpack:///./src/js/firebase.js?')},45:function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(46);\n\n\n//# sourceURL=webpack:///multi_./src/js/login.js?")},46:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);\n\n\nlet url = window.location.href;\n\nDate.prototype.toShortFormat = function () {\n  let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];\n  let day = this.getDate();\n  let monthIndex = this.getMonth();\n  let monthName = monthNames[monthIndex];\n  let year = this.getFullYear();\n  return `${monthName} ${year}`;\n};\n\nlet today = new Date();\nconst prettyDate = today.toShortFormat();\nwindow.addEventListener("DOMContentLoaded", event => {\n  console.log("test");\n  setTimeout(() => {\n    $("#spinner-box").addClass("d-none");\n    $("main").removeClass("d-none");\n    $("#google-sign-in").on("click", function (e) {\n      e.preventDefault();\n      $("main").addClass("d-none");\n      $("#spinner-box").removeClass("d-none");\n      Object(_firebase__WEBPACK_IMPORTED_MODULE_0__[/* googleSignin */ "c"])();\n    });\n  }, 2000);\n});\n\n//# sourceURL=webpack:///./src/js/login.js?')},6:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return toggleModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getDate; });\n/* harmony import */ var bootstrap_dist_js_bootstrap_esm_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);\n\nlet filterCommentSuccess = new bootstrap_dist_js_bootstrap_esm_min_js__WEBPACK_IMPORTED_MODULE_0__[/* Modal */ \"c\"](document.getElementById('filterCommentSuccess'), {\n  keyboard: false\n});\nlet filterCommentFail = new bootstrap_dist_js_bootstrap_esm_min_js__WEBPACK_IMPORTED_MODULE_0__[/* Modal */ \"c\"](document.getElementById('filterCommentFail'), {\n  keyboard: false\n});\nfunction toggleModal(id) {\n  const modal = id == \"success\" ? filterCommentSuccess.toggle() : filterCommentFail.toggle();\n  return modal;\n}\n\nDate.prototype.toShortFormat = function () {\n  let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];\n  let day = this.getDate();\n  let monthIndex = this.getMonth();\n  let monthName = monthNames[monthIndex];\n  let year = this.getFullYear();\n  return `${monthName} ${year}`;\n};\n\nfunction getDate() {\n  let today = new Date();\n  const prettyDate = today.toShortFormat();\n  return prettyDate;\n}\n/* unused harmony default export */ var _unused_webpack_default_export = ({\n  getDate,\n  toggleModal\n});\n\n//# sourceURL=webpack:///./src/js/utils/helpers.js?")},8:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* unused harmony export popupContent */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return commentReply; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return comment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return replyForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return extractReplies; });\nfunction popupContent(data) {\n  let result = `  <div class="row">\n\n            <div class="col">\n\n\n     <div class="modal-content rounded-6 shadow">\n\n      <div class="modal-body py-3">\n\n\n        <p>This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.</p>\n      </div>\n      <div class="modal-footer flex-column border-top-0">\n\n   <button type="button" id="getAltitude"class="btn btn-primary">Get Altitude</button>\n\n\n  <button type="button" class="btn  bookmark-btn  btn-light text-primary border-primary"> Bookmark <i class="far fa-bookmark"></i></button>\n\n\n\n\n      </div>\n    </div>\n            </div>\n        </div>`;\n  return result;\n}\nfunction commentReply(name, id, date, message) {\n  let data = `  <div class="col-md-11 p-3 mb-3" id=${id} >\n       <div class="row ">\n       <div class="col-lg-12 border-start">\n          <div class="d-flex justify-content-between align-items-center border-bottom pb-2">\n         <h6 class="fw-bold text-primary mb-1 ">${name}</h6>\n         <p class="text-muted small m-0">\n          ${date}\n         </p>\n         </div>\n         <p class="mt-3 mb-0 pb-2">\n         ${message}\n         </p>\n       </div>\n       </div>\n         </div>`;\n  return data;\n}\nfunction comment(id, name, date, message, likes, dislikes) {\n  let data = `\n   <div class="col-md-12 col-lg-12 col-xl-12">\n     <div class="card border-0 " id=${id} style="background-color: transparent">\n       <div class="card-body">\n         <div class="d-flex justify-content-between align-items-center border-bottom pb-2">\n           <h6 class="fw-bold text-primary mb-1 ">${name}</h6>\n           <p class="text-muted m-0">\n             ${date}\n           </p>\n         </div>\n         <p class="mt-3 mb-0 pb-2">\n           ${message}\n         </p>\n\n         <div class=" d-flex justify-content-start">\n           <button  id="thumbs-up" role="button" class="d-flex align-items-center me-3 btn btn-link  border-0" style="background-color: transparent !important; padding-left: 0 !important; margin-right: 0.25rem  !important">\n             <i class="far fa-thumbs-up me-2"></i> <span id="count">${likes}</span>\n           </button>\n             <button  id="thumbs-down" role="button" class="d-flex align-items-center me-3 btn btn-link  border-0" style="background-color: transparent !important; padding-left: 0 !important; margin-right: 0.25rem  !important">\n             <i class="far fa-thumbs-down me-2"></i> <span id="count">${dislikes}</span>\n           </button>\n           <button id= "reply-btn" class="d-flex align-items-center me-3 reply-btn btn btn-link  border-0" style="background-color: transparent !important; padding-left: 0 !important; margin-right: 0.25rem  !important">\n             <i class="far fa-comment-dots me-2"></i>\n             <p class="m-0">Reply</p>\n           </button>\n\n         </div>\n       </div>\n       <div class="card-footer py-3 border-0  row " style="background-color: transparent !important">\n         <div class="other-comments">\n\n         </div>\n       </div>\n     </div>\n   </div>`;\n  return data;\n}\nfunction replyForm(user) {\n  let userField = user && user.isAnonymous ? ` <div class="mb-3">\n        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="replyName" placeholder="Name (Optional)">\n      </div>` : "";\n  let data = `<form class="reply-form">\n <div class="d-flex flex-start w-100 ">\n     <div class="col-md-11 p-3 mb-3">\n    <div class="form-outline w-100">\n${userField}\n      <textarea class="form-control" id="textAreaExample" rows="4" style="background: #fff;" placeholder="Write a comment."></textarea>\n\n    </div>\n\n    <button type="submit" id="reply-btn" class="btn btn-primary btn-sm mt-3">Send <i class="far fa-paper-plane"></i></button>\n   </div>\n\n    </div>\n\n\n</form>`;\n  return data;\n}\nfunction extractReplies(replies) {\n  let response = [];\n  const map = new Map(Object.entries(replies));\n\n  for (const [key, value] of map.entries()) {\n    let newObject = {\n      id: key,\n      name: value.name,\n      message: value.message,\n      date: value.date,\n      recipient: value.recipient\n    };\n    response.push(newObject);\n  }\n\n  return response;\n}\n/* unused harmony default export */ var _unused_webpack_default_export = ({\n  comment,\n  commentReply,\n  extractReplies\n});\n\n//# sourceURL=webpack:///./src/js/utils/comments.js?')}});