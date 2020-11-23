/* --------------
JeForceX™ Forge
JavaScript Engine
-------------- */

// Write Current Year to Copyright Notice
const current_date = new Date();
const current_year = current_date.getFullYear();
document.getElementById("copyright-year").innerHTML = current_year;

/* Module Controller
----------------- */

// Define Modules
const modDashboard = document.getElementById("modDashboard");
const modLearn = document.getElementById("modLearn");
const modStage = document.getElementById("modStage");
const modPortfolio = document.getElementById("modPortfolio");
const modAbout = document.getElementById("modAbout");
const modContact = document.getElementById("modContact");
const modPrivacy = document.getElementById("modPrivacy");
const modTerms = document.getElementById("modTerms");

// List of Modules
const modList = [
  modDashboard,
  modLearn,
  modStage,
  modPortfolio,
  modAbout,
  modContact,
  modPrivacy,
  modTerms
];

// Function to Load All Modules
function loadModAll() {
  for (i = 0; i < modList.length; i++) {
    modList[i].style.display = "block";
  }
}

// Function to Unload All Modules
function unloadModAll() {
  for (i = 0; i < modList.length; i++) {
    modList[i].style.display = "none";
  }
}

// Functions to Load Individual Modules
function gotoDashboard() {
  unloadModAll();
  modDashboard.style.display = "block";
}

function gotoLearn() {
  unloadModAll();
  modLearn.style.display = "block";
}

function gotoStage() {
  unloadModAll();
  modStage.style.display = "block";
}

function gotoPortfolio() {
  unloadModAll();
  modPortfolio.style.display = "block";
}

function gotoAbout() {
  unloadModAll();
  modAbout.style.display = "block";
}

function gotoContact() {
  unloadModAll();
  modContact.style.display = "block";
}

function gotoPrivacy() {
  unloadModAll();
  modPrivacy.style.display = "block";
}

function gotoTerms() {
  unloadModAll();
  modTerms.style.display = "block";
}

/* System Boot Controller
---------------------- */

// Function to be Executed during System Boot
gotoDashboard();