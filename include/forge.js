/* --------------
JeForceX™ Forge
JavaScript Engine
-------------- */

// Notification Controller
const modNotification = document.getElementById("notification-container");
const notificationWindow = document.getElementById("notification-content");
const notificationMessage = document.getElementById("notification-message");
function showNotification() {modNotification.style.display = "block";}
function hideNotification() {modNotification.style.display = "none";}

/* Module Controller
----------------- */

// Define Modules
const modDashboard = document.getElementById("modDashboard");
const modBoardroom = document.getElementById("modBoardroom");
const modCafeteria = document.getElementById("modCafeteria");
const modLibrary = document.getElementById("modLibrary");
const modAbout = document.getElementById("modAbout");

// List of Modules
var modList = [
  modDashboard,
  modBoardroom,
  modCafeteria,
  modLibrary,
  modAbout
];

// Function to Unload All Modules
function unloadModAll() {
  for (i = 0; i < modList.length; i++) {
    modList[i].style.display = "none";
  }
}

// Functions to Load Modules
function gotoDashboard() {
  unloadModAll();
  modDashboard.style.display = "block";
}

function gotoBoardroom() {
  unloadModAll();
  modBoardroom.style.display = "block";
}

function gotoCafeteria() {
  unloadModAll();
  modCafeteria.style.display = "block";
}

function gotoLibrary() {
  unloadModAll();
  modLibrary.style.display = "block";
}

function gotoAbout() {
  unloadModAll();
  modAbout.style.display = "block";
}

// System Boot Commands
gotoDashboard();

/* Forge Controller
---------------- */

// Forge Status Parameters
var forgeHealth = document.getElementById("forgeHealth");
var forgeTempDisp = document.getElementById("forgeTempDisp");
var forgeTempCore = 50;

// Forge Temperature: Check
function forgeTempCheck() {
  if (forgeTempCore > 55) {
    forgeHealth.innerHTML = "Overheating";
    forgeHealth.style.color = "#DD8844";
  } else if (forgeTempCore < 45) {
    forgeHealth.innerHTML = "Freezing";
    forgeHealth.style.color = "#4488DD";
  } else {
    forgeHealth.innerHTML = "Excellent";
    forgeHealth.style.color = "#008800";
  }
}

// Forge Temperature: Increase
function forgeTempIncr() {
  forgeTempCore += 1;
  forgeTempDisp.innerHTML = forgeTempCore;
  forgeTempCheck();
}

// Forge Temperature: Decrease
function forgeTempDecr() {
  forgeTempCore -= 1;
  forgeTempDisp.innerHTML = forgeTempCore;
  forgeTempCheck();
}

// Write Current Year to Copyright Notice
const current_date = new Date();
const current_year = current_date.getFullYear();
document.getElementById("copyright-year").innerHTML = current_year;