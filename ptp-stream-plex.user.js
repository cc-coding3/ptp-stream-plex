// ==UserScript==
// @name         PTP - Stream Plex
// @namespace    http://tampermonkey.net/
// @version      1.3
// @match        https://passthepopcorn.me/*
// @import       /test-import.js
// @grant        none
// ==/UserScript==

import { message } from './test-import.js';

(function() {

    console.log(message); 

    'use strict';
    console.log("This userscript is hosted in github. 1.2")

})();