/* --------------
JeForceX™ Forge
JavaScript Engine
-------------- */

// Write Current Year to Copyright Notice
const current_date = new Date();
const current_year = current_date.getFullYear();
document.getElementById("copyright-year").innerHTML = current_year;

/* Module Controller: Main
----------------------- */

// Define Main Modules
const modDashboard = document.getElementById("modDashboard");
const modLearn = document.getElementById("modLearn");
const modStage = document.getElementById("modStage");
const modPortfolio = document.getElementById("modPortfolio");
const modAbout = document.getElementById("modAbout");
const modContact = document.getElementById("modContact");
const modPrivacy = document.getElementById("modPrivacy");
const modTerms = document.getElementById("modTerms");

// List of Main Modules
const modListMain = [
  modDashboard,
  modLearn,
  modStage,
  modPortfolio,
  modAbout,
  modContact,
  modPrivacy,
  modTerms
];

// Function to Show All Main Modules
function modListMain_Show() {
  for (i = 0; i < modListMain.length; i++) {
    modListMain[i].style.display = "block";
  }
}

// Function to Hide All Main Modules
function modListMain_Hide() {
  for (i = 0; i < modListMain.length; i++) {
    modListMain[i].style.display = "none";
  }
}

// Functions to Show Individual Main Modules
function gotoDashboard() {
  modListMain_Hide();
  modDashboard.style.display = "block";
}

function gotoLearn() {
  modListMain_Hide();
  modLearn.style.display = "block";
}

function gotoStage() {
  modListMain_Hide();
  modStage.style.display = "block";
}

function gotoPortfolio() {
  modListMain_Hide();
  modPortfolio.style.display = "block";
}

function gotoAbout() {
  modListMain_Hide();
  modAbout.style.display = "block";
}

function gotoContact() {
  modListMain_Hide();
  modContact.style.display = "block";
}

function gotoPrivacy() {
  modListMain_Hide();
  modPrivacy.style.display = "block";
}

function gotoTerms() {
  modListMain_Hide();
  modTerms.style.display = "block";
}

/* Module Controller: Sidebar
-------------------------- */

// Define Sidebar Modules
const modSideRPG = document.getElementById("modSideRPG");
const modSideNetwork = document.getElementById("modSideNetwork");

// List of Sidebar Modules
const modListSide = [
  modSideRPG,
  modSideNetwork
]

// Function to Show All Sidebar Modules
function modListSide_Show() {
  for (i = 0; i < modListSide.length; i++) {
    modListSide[i].style.display = "block";
  }
}

// Function to Hide All Sidebar Modules
function modListSide_Hide() {
  for (i = 0; i < modListSide.length; i++) {
    modListSide[i].style.display = "none";
  }
}

/* System Boot Controller
---------------------- */

// Functions to be Executed during System Boot
gotoDashboard();
modListSide_Show();