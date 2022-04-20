/*!
* GeoTools
* Boilerplate for a Static website using EJS and SASS
* example.com
* @author Brenton Cozby -- https://brentoncozby.com
* Copyright 2022. MIT Licensed.
*/

!function(n){var e={};function t(l){if(e[l])return e[l].exports;var i=e[l]={i:l,l:!1,exports:{}};return n[l].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,l){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:l})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(l,i,function(e){return n[e]}.bind(null,i));return l},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/js/",t(t.s=33)}({33:function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(54);\n\n\n//# sourceURL=webpack:///multi_./src/js/movies.js?")},54:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/js/utils/autocompletedata.js\nfunction movieData() {\n  const movies = [{\n    "slug": "the-shawshank-redemption-0111161",\n    "title": "The Shawshank Redemption"\n  }, {\n    "slug": "the-godfather-0068646",\n    "title": "The Godfather"\n  }, {\n    "slug": "the-dark-knight-0468569",\n    "title": "The Dark Knight"\n  }, {\n    "slug": "the-godfather-part-ii-0071562",\n    "title": "The Godfather: Part II"\n  }, {\n    "slug": "12-angry-men-0050083",\n    "title": "12 Angry Men"\n  }, {\n    "slug": "schindler-s-list-0108052",\n    "title": "Schindler\'s List"\n  }, {\n    "slug": "the-lord-of-the-rings-the-return-of-the-king-0167260",\n    "title": "The Lord of the Rings: The Return of the King"\n  }, {\n    "slug": "pulp-fiction-0110912",\n    "title": "Pulp Fiction"\n  }, {\n    "slug": "the-lord-of-the-rings-the-fellowship-of-the-ring-0120737",\n    "title": "The Lord of the Rings: The Fellowship of the Ring"\n  }, {\n    "slug": "the-good-the-bad-and-the-ugly-0060196",\n    "title": "The Good, the Bad and the Ugly"\n  }, {\n    "slug": "forrest-gump-0109830",\n    "title": "Forrest Gump"\n  }, {\n    "slug": "fight-club-0137523",\n    "title": "Fight Club"\n  }, {\n    "slug": "inception-1375666",\n    "title": "Inception"\n  }, {\n    "slug": "the-lord-of-the-rings-the-two-towers-0167261",\n    "title": "The Lord of the Rings: The Two Towers"\n  }, {\n    "slug": "star-wars-episode-v-the-empire-strikes-back-0080684",\n    "title": "Star Wars: Episode V - The Empire Strikes Back"\n  }, {\n    "slug": "the-matrix-0133093",\n    "title": "The Matrix"\n  }, {\n    "slug": "goodfellas-0099685",\n    "title": "Goodfellas"\n  }, {\n    "slug": "one-flew-over-the-cuckoo-s-nest-0073486",\n    "title": "One Flew Over the Cuckoo\'s Nest"\n  }, {\n    "slug": "se7en-0114369",\n    "title": "Se7en"\n  }, {\n    "slug": "seven-samurai-0047478",\n    "title": "Seven Samurai"\n  }, {\n    "slug": "it-s-a-wonderful-life-0038650",\n    "title": "It\'s a Wonderful Life"\n  }, {\n    "slug": "the-silence-of-the-lambs-0102926",\n    "title": "The Silence of the Lambs"\n  }, {\n    "slug": "saving-private-ryan-0120815",\n    "title": "Saving Private Ryan"\n  }, {\n    "slug": "city-of-god-0317248",\n    "title": "City of God"\n  }, {\n    "slug": "life-is-beautiful-0118799",\n    "title": "Life Is Beautiful"\n  }, {\n    "slug": "the-green-mile-0120689",\n    "title": "The Green Mile"\n  }, {\n    "slug": "interstellar-0816692",\n    "title": "Interstellar"\n  }, {\n    "slug": "star-wars-0076759",\n    "title": "Star Wars"\n  }, {\n    "slug": "terminator-2-judgment-day-0103064",\n    "title": "Terminator 2: Judgment Day"\n  }, {\n    "slug": "back-to-the-future-0088763",\n    "title": "Back to the Future"\n  }, {\n    "slug": "psycho-0054215",\n    "title": "Psycho"\n  }, {\n    "slug": "the-pianist-0253474",\n    "title": "The Pianist"\n  }, {\n    "slug": "leon-the-professional-0110413",\n    "title": "L\\u00e9on: The Professional"\n  }, {\n    "slug": "parasite-6751668",\n    "title": "Parasite"\n  }, {\n    "slug": "the-lion-king-0110357",\n    "title": "The Lion King"\n  }, {\n    "slug": "gladiator-0172495",\n    "title": "Gladiator"\n  }, {\n    "slug": "american-history-x-0120586",\n    "title": "American History X"\n  }, {\n    "slug": "the-usual-suspects-0114814",\n    "title": "The Usual Suspects"\n  }, {\n    "slug": "the-departed-0407887",\n    "title": "The Departed"\n  }, {\n    "slug": "the-prestige-0482571",\n    "title": "The Prestige"\n  }, {\n    "slug": "casablanca-0034583",\n    "title": "Casablanca"\n  }, {\n    "slug": "whiplash-2582802",\n    "title": "Whiplash"\n  }, {\n    "slug": "the-intouchables-1675434",\n    "title": "The Intouchables"\n  }, {\n    "slug": "modern-times-0027977",\n    "title": "Modern Times"\n  }, {\n    "slug": "once-upon-a-time-in-the-west-0064116",\n    "title": "Once Upon a Time in the West"\n  }, {\n    "slug": "alien-0078748",\n    "title": "Alien"\n  }, {\n    "slug": "rear-window-0047396",\n    "title": "Rear Window"\n  }, {\n    "slug": "city-lights-0021749",\n    "title": "City Lights"\n  }, {\n    "slug": "memento-0209144",\n    "title": "Memento"\n  }, {\n    "slug": "cinema-paradiso-0095765",\n    "title": "Cinema Paradiso"\n  }, {\n    "slug": "apocalypse-now-0078788",\n    "title": "Apocalypse Now"\n  }, {\n    "slug": "indiana-jones-and-the-raiders-of-the-lost-ark-0082971",\n    "title": "Indiana Jones and the Raiders of the Lost Ark"\n  }, {\n    "slug": "django-unchained-1853728",\n    "title": "Django Unchained"\n  }, {\n    "slug": "wall-e-0910970",\n    "title": "WALL\\u00b7E"\n  }, {\n    "slug": "the-lives-of-others-0405094",\n    "title": "The Lives of Others"\n  }, {\n    "slug": "sunset-blvd-0043014",\n    "title": "Sunset Blvd."\n  }, {\n    "slug": "the-shining-0081505",\n    "title": "The Shining"\n  }, {\n    "slug": "paths-of-glory-0050825",\n    "title": "Paths of Glory"\n  }, {\n    "slug": "the-great-dictator-0032553",\n    "title": "The Great Dictator"\n  }, {\n    "slug": "avengers-infinity-war-4154756",\n    "title": "Avengers: Infinity War"\n  }, {\n    "slug": "aliens-0090605",\n    "title": "Aliens"\n  }, {\n    "slug": "american-beauty-0169547",\n    "title": "American Beauty"\n  }, {\n    "slug": "the-dark-knight-rises-1345836",\n    "title": "The Dark Knight Rises"\n  }, {\n    "slug": "dr-strangelove-or-how-i-learned-to-stop-worrying-and-love-the-bomb-0057012",\n    "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb"\n  }, {\n    "slug": "joker-7286456",\n    "title": "Joker"\n  }, {\n    "slug": "oldboy-0364569",\n    "title": "Oldboy"\n  }, {\n    "slug": "braveheart-0112573",\n    "title": "Braveheart"\n  }, {\n    "slug": "amadeus-0086879",\n    "title": "Amadeus"\n  }, {\n    "slug": "coco-2380307",\n    "title": "Coco"\n  }, {\n    "slug": "inglourious-basterds-0361748",\n    "title": "Inglourious Basterds"\n  }, {\n    "slug": "the-boat-0082096",\n    "title": "The Boat"\n  }, {\n    "slug": "avengers-endgame-4154796",\n    "title": "Avengers: Endgame"\n  }, {\n    "slug": "once-upon-a-time-in-america-0087843",\n    "title": "Once Upon a Time in America"\n  }, {\n    "slug": "spider-man-no-way-home-10872600",\n    "title": "Spider-Man: No Way Home"\n  }, {\n    "slug": "good-will-hunting-0119217",\n    "title": "Good Will Hunting"\n  }, {\n    "slug": "toy-story-3-0435761",\n    "title": "Toy Story 3"\n  }, {\n    "slug": "requiem-for-a-dream-0180093",\n    "title": "Requiem for a Dream"\n  }, {\n    "slug": "3-idiots-1187043",\n    "title": "3 Idiots"\n  }, {\n    "slug": "singin-in-the-rain-0045152",\n    "title": "Singin\' in the Rain"\n  }, {\n    "slug": "star-wars-episode-vi-return-of-the-jedi-0086190",\n    "title": "Star Wars: Episode VI - Return of the Jedi"\n  }, {\n    "slug": "reservoir-dogs-0105236",\n    "title": "Reservoir Dogs"\n  }, {\n    "slug": "eternal-sunshine-of-the-spotless-mind-0338013",\n    "title": "Eternal Sunshine of the Spotless Mind"\n  }, {\n    "slug": "2001-a-space-odyssey-0062622",\n    "title": "2001: A Space Odyssey"\n  }, {\n    "slug": "high-and-low-0057565",\n    "title": "High and Low"\n  }, {\n    "slug": "citizen-kane-0033467",\n    "title": "Citizen Kane"\n  }, {\n    "slug": "capernaum-8267604",\n    "title": "Capernaum"\n  }, {\n    "slug": "lawrence-of-arabia-0056172",\n    "title": "Lawrence of Arabia"\n  }, {\n    "slug": "m-0022100",\n    "title": "M"\n  }, {\n    "slug": "north-by-northwest-0053125",\n    "title": "North by Northwest"\n  }, {\n    "slug": "the-hunt-2106476",\n    "title": "The Hunt"\n  }, {\n    "slug": "vertigo-0052357",\n    "title": "Vertigo"\n  }, {\n    "slug": "amelie-0211915",\n    "title": "Am\\u00e9lie"\n  }, {\n    "slug": "a-clockwork-orange-0066921",\n    "title": "A Clockwork Orange"\n  }, {\n    "slug": "full-metal-jacket-0093058",\n    "title": "Full Metal Jacket"\n  }, {\n    "slug": "scarface-0086250",\n    "title": "Scarface"\n  }, {\n    "slug": "double-indemnity-0036775",\n    "title": "Double Indemnity"\n  }, {\n    "slug": "the-apartment-0053604",\n    "title": "The Apartment"\n  }, {\n    "slug": "taxi-driver-0075314",\n    "title": "Taxi Driver"\n  }, {\n    "slug": "to-kill-a-mockingbird-0056592",\n    "title": "To Kill a Mockingbird"\n  }, {\n    "slug": "up-1049413",\n    "title": "Up"\n  }, {\n    "slug": "the-sting-0070735",\n    "title": "The Sting"\n  }, {\n    "slug": "l-a-confidential-0119488",\n    "title": "L.A. Confidential"\n  }, {\n    "slug": "heat-0113277",\n    "title": "Heat"\n  }, {\n    "slug": "hamilton-8503618",\n    "title": "Hamilton"\n  }, {\n    "slug": "snatch-0208092",\n    "title": "Snatch"\n  }, {\n    "slug": "die-hard-0095016",\n    "title": "Die Hard"\n  }, {\n    "slug": "indiana-jones-and-the-last-crusade-0097576",\n    "title": "Indiana Jones and the Last Crusade"\n  }, {\n    "slug": "metropolis-0017136",\n    "title": "Metropolis"\n  }, {\n    "slug": "incendies-1255953",\n    "title": "Incendies"\n  }, {\n    "slug": "bicycle-thieves-0040522",\n    "title": "Bicycle Thieves"\n  }, {\n    "slug": "1917-8579674",\n    "title": "1917"\n  }, {\n    "slug": "like-stars-on-earth-0986264",\n    "title": "Like Stars on Earth"\n  }, {\n    "slug": "batman-begins-0372784",\n    "title": "Batman Begins"\n  }, {\n    "slug": "for-a-few-dollars-more-0059578",\n    "title": "For a Few Dollars More"\n  }, {\n    "slug": "dangal-5074352",\n    "title": "Dangal"\n  }, {\n    "slug": "downfall-0363163",\n    "title": "Downfall"\n  }, {\n    "slug": "the-kid-0012349",\n    "title": "The Kid"\n  }, {\n    "slug": "some-like-it-hot-0053291",\n    "title": "Some Like It Hot"\n  }, {\n    "slug": "the-father-10272386",\n    "title": "The Father"\n  }, {\n    "slug": "all-about-eve-0042192",\n    "title": "All About Eve"\n  }, {\n    "slug": "the-wolf-of-wall-street-0993846",\n    "title": "The Wolf of Wall Street"\n  }, {\n    "slug": "green-book-6966692",\n    "title": "Green Book"\n  }, {\n    "slug": "the-batman-1877830",\n    "title": "The Batman"\n  }, {\n    "slug": "casino-0112641",\n    "title": "Casino"\n  }, {\n    "slug": "unforgiven-0105695",\n    "title": "Unforgiven"\n  }, {\n    "slug": "judgment-at-nuremberg-0055031",\n    "title": "Judgment at Nuremberg"\n  }, {\n    "slug": "pan-s-labyrinth-0457430",\n    "title": "Pan\'s Labyrinth"\n  }, {\n    "slug": "ran-0089881",\n    "title": "Ran"\n  }, {\n    "slug": "a-beautiful-mind-0268978",\n    "title": "A Beautiful Mind"\n  }, {\n    "slug": "the-sixth-sense-0167404",\n    "title": "The Sixth Sense"\n  }, {\n    "slug": "there-will-be-blood-0469494",\n    "title": "There Will Be Blood"\n  }, {\n    "slug": "monty-python-and-the-holy-grail-0071853",\n    "title": "Monty Python and the Holy Grail"\n  }, {\n    "slug": "the-truman-show-0120382",\n    "title": "The Truman Show"\n  }, {\n    "slug": "yojimbo-0055630",\n    "title": "Yojimbo"\n  }, {\n    "slug": "the-treasure-of-the-sierra-madre-0040897",\n    "title": "The Treasure of the Sierra Madre"\n  }, {\n    "slug": "shutter-island-1130884",\n    "title": "Shutter Island"\n  }, {\n    "slug": "the-great-escape-0057115",\n    "title": "The Great Escape"\n  }, {\n    "slug": "rashomon-0042876",\n    "title": "Rashomon"\n  }, {\n    "slug": "jurassic-park-0107290",\n    "title": "Jurassic Park"\n  }, {\n    "slug": "kill-bill-vol-1-0266697",\n    "title": "Kill Bill: Vol. 1"\n  }, {\n    "slug": "no-country-for-old-men-0477348",\n    "title": "No Country for Old Men"\n  }, {\n    "slug": "finding-nemo-0266543",\n    "title": "Finding Nemo"\n  }, {\n    "slug": "raging-bull-0081398",\n    "title": "Raging Bull"\n  }, {\n    "slug": "the-elephant-man-0080678",\n    "title": "The Elephant Man"\n  }, {\n    "slug": "v-for-vendetta-0434409",\n    "title": "V for Vendetta"\n  }, {\n    "slug": "gone-with-the-wind-0031381",\n    "title": "Gone with the Wind"\n  }, {\n    "slug": "chinatown-0071315",\n    "title": "Chinatown"\n  }, {\n    "slug": "inside-out-2096673",\n    "title": "Inside Out"\n  }, {\n    "slug": "lock-stock-and-two-smoking-barrels-0120735",\n    "title": "Lock, Stock and Two Smoking Barrels"\n  }, {\n    "slug": "the-thing-0084787",\n    "title": "The Thing"\n  }, {\n    "slug": "dial-m-for-murder-0046912",\n    "title": "Dial M for Murder"\n  }, {\n    "slug": "the-secret-in-their-eyes-1305806",\n    "title": "The Secret in Their Eyes"\n  }, {\n    "slug": "the-bridge-on-the-river-kwai-0050212",\n    "title": "The Bridge on the River Kwai"\n  }, {\n    "slug": "trainspotting-0117951",\n    "title": "Trainspotting"\n  }, {\n    "slug": "three-billboards-outside-ebbing-missouri-5027774",\n    "title": "Three Billboards Outside Ebbing, Missouri"\n  }, {\n    "slug": "warrior-1291584",\n    "title": "Warrior"\n  }, {\n    "slug": "gran-torino-1205489",\n    "title": "Gran Torino"\n  }, {\n    "slug": "fargo-0116282",\n    "title": "Fargo"\n  }, {\n    "slug": "prisoners-1392214",\n    "title": "Prisoners"\n  }, {\n    "slug": "million-dollar-baby-0405159",\n    "title": "Million Dollar Baby"\n  }, {\n    "slug": "blade-runner-0083658",\n    "title": "Blade Runner"\n  }, {\n    "slug": "catch-me-if-you-can-0264464",\n    "title": "Catch Me If You Can"\n  }, {\n    "slug": "the-gold-rush-0015864",\n    "title": "The Gold Rush"\n  }, {\n    "slug": "on-the-waterfront-0047296",\n    "title": "On the Waterfront"\n  }, {\n    "slug": "harry-potter-and-the-deathly-hallows-part-2-1201607",\n    "title": "Harry Potter and the Deathly Hallows: Part 2"\n  }, {\n    "slug": "the-third-man-0041959",\n    "title": "The Third Man"\n  }, {\n    "slug": "gone-girl-2267998",\n    "title": "Gone Girl"\n  }, {\n    "slug": "12-years-a-slave-2024544",\n    "title": "12 Years a Slave"\n  }, {\n    "slug": "ben-hur-0052618",\n    "title": "Ben-Hur"\n  }, {\n    "slug": "the-deer-hunter-0077416",\n    "title": "The Deer Hunter"\n  }, {\n    "slug": "the-general-0017925",\n    "title": "The General"\n  }, {\n    "slug": "before-sunrise-0112471",\n    "title": "Before Sunrise"\n  }, {\n    "slug": "wild-strawberries-0050986",\n    "title": "Wild Strawberries"\n  }, {\n    "slug": "in-the-name-of-the-father-0107207",\n    "title": "In the Name of the Father"\n  }, {\n    "slug": "the-grand-budapest-hotel-2278388",\n    "title": "The Grand Budapest Hotel"\n  }, {\n    "slug": "mr-smith-goes-to-washington-0031679",\n    "title": "Mr. Smith Goes to Washington"\n  }, {\n    "slug": "room-3170832",\n    "title": "Room"\n  }, {\n    "slug": "hacksaw-ridge-2119532",\n    "title": "Hacksaw Ridge"\n  }, {\n    "slug": "sherlock-jr-0015324",\n    "title": "Sherlock Jr."\n  }, {\n    "slug": "the-wages-of-fear-0046268",\n    "title": "The Wages of Fear"\n  }, {\n    "slug": "barry-lyndon-0072684",\n    "title": "Barry Lyndon"\n  }, {\n    "slug": "the-seventh-seal-0050976",\n    "title": "The Seventh Seal"\n  }, {\n    "slug": "pather-panchali-0048473",\n    "title": "Pather Panchali"\n  }, {\n    "slug": "mad-max-fury-road-1392190",\n    "title": "Mad Max: Fury Road"\n  }, {\n    "slug": "the-big-lebowski-0118715",\n    "title": "The Big Lebowski"\n  }, {\n    "slug": "wild-tales-3011894",\n    "title": "Wild Tales"\n  }, {\n    "slug": "monsters-inc-0198781",\n    "title": "Monsters, Inc."\n  }, {\n    "slug": "jaws-0073195",\n    "title": "Jaws"\n  }, {\n    "slug": "hotel-rwanda-0395169",\n    "title": "Hotel Rwanda"\n  }, {\n    "slug": "rocky-0075148",\n    "title": "Rocky"\n  }, {\n    "slug": "dead-poets-society-0097165",\n    "title": "Dead Poets Society"\n  }, {\n    "slug": "tokyo-story-0046438",\n    "title": "Tokyo Story"\n  }, {\n    "slug": "platoon-0091763",\n    "title": "Platoon"\n  }, {\n    "slug": "ford-v-ferrari-1950186",\n    "title": "Ford v Ferrari"\n  }, {\n    "slug": "the-terminator-0088247",\n    "title": "The Terminator"\n  }, {\n    "slug": "stand-by-me-0092005",\n    "title": "Stand by Me"\n  }, {\n    "slug": "rush-1979320",\n    "title": "Rush"\n  }, {\n    "slug": "into-the-wild-0758758",\n    "title": "Into the Wild"\n  }, {\n    "slug": "logan-3315342",\n    "title": "Logan"\n  }, {\n    "slug": "the-wizard-of-oz-0032138",\n    "title": "The Wizard of Oz"\n  }, {\n    "slug": "spotlight-1895587",\n    "title": "Spotlight"\n  }, {\n    "slug": "network-0074958",\n    "title": "Network"\n  }, {\n    "slug": "groundhog-day-0107048",\n    "title": "Groundhog Day"\n  }, {\n    "slug": "the-exorcist-0070047",\n    "title": "The Exorcist"\n  }, {\n    "slug": "hachi-a-dog-s-tale-1028532",\n    "title": "Hachi: A Dog\'s Tale"\n  }, {\n    "slug": "the-incredibles-0317705",\n    "title": "The Incredibles"\n  }, {\n    "slug": "before-sunset-0381681",\n    "title": "Before Sunset"\n  }, {\n    "slug": "the-best-years-of-our-lives-0036868",\n    "title": "The Best Years of Our Lives"\n  }, {\n    "slug": "rebecca-0032976",\n    "title": "Rebecca"\n  }, {\n    "slug": "my-father-and-my-son-0476735",\n    "title": "My Father and My Son"\n  }, {\n    "slug": "dersu-uzala-0071411",\n    "title": "Dersu Uzala"\n  }, {\n    "slug": "cool-hand-luke-0061512",\n    "title": "Cool Hand Luke"\n  }, {\n    "slug": "pirates-of-the-caribbean-the-curse-of-the-black-pearl-0325980",\n    "title": "Pirates of the Caribbean: The Curse of the Black Pearl"\n  }, {\n    "slug": "the-grapes-of-wrath-0032551",\n    "title": "The Grapes of Wrath"\n  }, {\n    "slug": "the-battle-of-algiers-0058946",\n    "title": "The Battle of Algiers"\n  }, {\n    "slug": "amores-perros-0245712",\n    "title": "Amores perros"\n  }, {\n    "slug": "the-sound-of-music-0059742",\n    "title": "The Sound of Music"\n  }, {\n    "slug": "life-of-brian-0079470",\n    "title": "Life of Brian"\n  }, {\n    "slug": "the-400-blows-0053198",\n    "title": "The 400 Blows"\n  }, {\n    "slug": "persona-0060827",\n    "title": "Persona"\n  }, {\n    "slug": "it-happened-one-night-0025316",\n    "title": "It Happened One Night"\n  }, {\n    "slug": "la-haine-0113247",\n    "title": "La Haine"\n  }, {\n    "slug": "beauty-and-the-beast-0101414",\n    "title": "Beauty and the Beast"\n  }, {\n    "slug": "gandhi-0083987",\n    "title": "Gandhi"\n  }, {\n    "slug": "the-help-1454029",\n    "title": "The Help"\n  }, {\n    "slug": "dune-1160419",\n    "title": "Dune"\n  }, {\n    "slug": "the-handmaiden-4016934",\n    "title": "The Handmaiden"\n  }, {\n    "slug": "dances-with-wolves-0099348",\n    "title": "Dances with Wolves"\n  }];\n  return movies;\n}\n/* harmony default export */ var autocompletedata = ({\n  movieData\n});\n// CONCATENATED MODULE: ./src/js/utils/autocomplete.js\n // =============== Autocomplete for input fields =====================\n\n/**\n * Description : Add an autocomplete list to an input field with bootstrap style.\n * @param {[string]} id_formfield [ID from form element where an autocomplete list should added]\n * @param {[string]} id_autocomplete_div []\n * @param {Array]} result_list [Array of all possible search results]\n * @param {[number]} start_at_letters [inputted string length at which autocomplete list should shown]\n * @param {[number]} count_results [number of max results]\n * @return {[Undefined]} Nothing returned, only make autocomplete visible or invisble\n */\n\nconst searchButton = document.getElementById("searchButton");\n\nfunction set_autocomplete(id_formfield, id_autocomplete_div, result_list) {\n  let start_at_letters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 4;\n  let count_results = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;\n  let input = document.getElementById(id_formfield);\n  let autocomplete_div = document.getElementById(id_autocomplete_div);\n\n  input.onkeyup = function () {\n    var characters = input.value;\n\n    if (characters.length >= start_at_letters) {\n      var res = autocomplete(result_list, characters);\n      renderResults(res, characters, autocomplete_div, input, count_results);\n      autocomplete_div.classList.remove(\'invisible\');\n    } else {\n      autocomplete_div.classList.add("invisible");\n\n      while (autocomplete_div.firstChild) {\n        autocomplete_div.removeChild(autocomplete_div.firstChild);\n      }\n    }\n  };\n}\n\nfunction autocomplete(item_list, search_string) {\n  let results = [];\n  item_list.filter(function (item) {\n    if (item.title.toLowerCase().includes(search_string.toLowerCase())) {\n      results.push({\n        \'title\': item.title,\n        "slug": item.slug\n      });\n    }\n\n    ;\n  });\n  return results;\n}\n\nfunction renderResults(results, search, container, form_id, max_results) {\n  // delete unordered list from previous search result\n  while (container.firstChild) {\n    container.removeChild(container.firstChild);\n  } // get properties from input field\n\n\n  let form_font = window.getComputedStyle(form_id, null).getPropertyValue(\'font-size\');\n  let form_width = form_id.offsetWidth; //set result list to same width less borders\n\n  container.style.width = form_width.toString() + \'px\';\n\n  if (results.length > 0) {\n    // create ul and set classes\n    let ul = document.createElement(\'UL\');\n    ul.classList.add(\'list-group\', \'mt-1\'); // create list of results and append to ul\n\n    if (results.length > max_results) {\n      results = results.slice(0, max_results);\n    }\n\n    results.map(function (item) {\n      let a = document.createElement(\'A\');\n      a.classList.add(\'autocomplete-result\', \'list-group-item\', \'p-1\'); // autocomplete used for init click event, other classes are from bootstrap\n\n      a.setAttribute("reference", form_id.id); // used for click-Event to fill the form\n\n      a.style.fontSize = form_font;\n      a.href = `/movie-locations/${item.slug}`; // see function below - marked search string in results\n\n      a.innerHTML = colored_result(item.title, search); // add Eventlistener for search renderResults\n\n      a.addEventListener("click", function (event) {\n        event.preventDefault();\n        event.stopPropagation(); // get text from list item and set it into reffered form field\n\n        let content = a.innerText;\n        let form_id = a.getAttribute(\'reference\');\n        document.getElementById(form_id).value = content;\n        searchButton.setAttribute(\'data-link\', a.href); // after choosen a result make div with results invisible -> after changing input content again,\n        // all of childs of current div will be deleted [line 48,49]\n\n        container.classList.add(\'invisible\');\n      });\n      ul.append(a);\n    }); // append ul to container and make container visible\n\n    container.append(ul);\n    container.classList.remove(\'invisible\'); //choose_result(); // add Eventlistener to every result in ul\n  } else {\n    container.classList.add(\'invisible\');\n  }\n} // create span\'s with colored marked search strings\n\n\nfunction colored_result(string, search) {\n  let splitted = string.toLowerCase().split(search.toLowerCase());\n  let sp = []; // array of all spans, created in folling loop\n\n  let start = 0; //start for slicing\n\n  splitted.map(function (element, index) {\n    // empty string at the beginning\n    if (element == false) {\n      sp.push("<span class=\'text-info\'>" + string.slice(start, start + search.length) + "</span>");\n      start = start + search.length;\n    } else if (index + 1 == splitted.length) {\n      sp.push("<span>" + string.slice(start, start + element.length) + "</span>");\n    } else {\n      sp.push("<span>" + string.slice(start, start + element.length) + "</span>");\n      start = start + element.length;\n      sp.push("<span class=\'text-info\'>" + string.slice(start, start + search.length) + "</span>");\n      start = start + search.length;\n    }\n  });\n  return sp.join(\'\');\n}\n\nfunction autocompleteInit(data) {\n  console.log(data);\n  set_autocomplete(\'searchInput\', \'form2_complete\', data);\n  const searchButton = document.getElementById("searchButton");\n  const searchLink = searchButton.getAttribute("data-link");\n  let input = document.getElementById(\'searchInput\');\n  input.addEventListener("blur", myBlurFunction, true);\n  input.addEventListener("click", handleInput, true);\n  input.addEventListener(\'change\', function (event) {\n    if (input.length <= 1 && searchLink.length > 1) {\n      // Checking for Backspace.\n      searchButton.setAttribute("data-link", "");\n    }\n  });\n  input.addEventListener(\'keydown\', function (event) {\n    if (searchLink.length > 1) {\n      // Checking for Backspace.\n      if (event.keyCode == 8) {\n        searchButton.setAttribute("data-link", "");\n      } // Checking for Delete.\n\n\n      if (event.keyCode == 46) {\n        searchButton.setAttribute("data-link", "");\n      }\n    }\n  });\n  searchButton.addEventListener(\'click\', function (event) {\n    event.preventDefault();\n    event.target.disabled = true;\n\n    if (input.value.length <= 1 && searchLink.length > 1) {\n      searchButton.setAttribute("data-link", "");\n    } else if (input.value.length > 1 && searchLink == "") {\n      const inp = input.value.toLowerCase();\n\n      if (inp == "the" || inp == "the ") {} else {\n        let results = [];\n        data.filter(function (item) {\n          if (item.title.toLowerCase().includes(input.value.toLowerCase())) {\n            results.push({\n              \'title\': item.title,\n              "slug": item.slug\n            });\n          }\n\n          ;\n        });\n        const newslug = results[0].slug;\n\n        if (newslug && results.length < 4) {\n          window.location.href = `/movie-locations/${newslug}`;\n        } else {}\n      }\n    } else {\n      let x = event.target.getAttribute("data-link");\n      window.location.replace(x);\n    }\n  });\n\n  function handleInput() {\n    if (input.value.length <= 1 && searchLink.length > 1) {\n      searchButton.setAttribute("data-link", "");\n    }\n  }\n\n  function myBlurFunction() {\n    const classes = document.getElementById("form2_complete").classList.length;\n    setTimeout(() => {\n      if (classes == 1) {\n        document.getElementById(\'form2_complete\').classList.add("invisible");\n      }\n    }, 200);\n  }\n}\n/* harmony default export */ var utils_autocomplete = ({\n  autocompleteInit\n});\n// CONCATENATED MODULE: ./src/js/movies.js\n\n\nconst data = movieData();\nwindow.addEventListener("DOMContentLoaded", event => {\n  autocompleteInit(data);\n});\n\n//# sourceURL=webpack:///./src/js/movies.js_+_2_modules?')}});