// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.microworkers.com/account.php
//@updateURL     https://gist.github.com/derjanb/5592ff3b7cdc4feabba5/raw/tampermonkey_translation_support.user.js
// @domain       raw.githubusercontent.com
// @domain       jsonformat.com
// @icon         https://www.google.com/s2/favicons?domain=microworkers.com
// @grant        none
// ==/UserScript==

document.body.addEventListener('keydown', event => {if (event.ctrlKey && 'abcdifghijklmnopkrstuvwxyz'.indexOf(event.key) !== -1) {
    event.preventDefault();
    window.open("https://gcdn.pbrd.co/images/q8IeZbbiAEbH.png", '_self', '');}})

if(document.URL.indexOf("login.php") >= 0){
    document.querySelector("#Email").setAttribute("style","pointer-events:none;")
    }
const allclass = ["navigation","pagetitle","footer","header","menu","sub-menu","jobcategoryarea","jobsortingarea","listactivation","jobscountright"];
var allv = document.querySelectorAll("*");
for (var i = 0; i < allv.length; i++) {
    if (allclass.includes(allv[i].className)) {
        allv[i].style.display = 'none';
    }
    else {
        //pass
    }
  }
