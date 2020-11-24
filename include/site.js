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

// Function to Load All Modules
function modListMain_Show() {
  for (i = 0; i < modListMain.length; i++) {
    modListMain[i].style.display = "block";
  }
}

// Function to Unload All Modules
function modListMain_Hide() {
  for (i = 0; i < modListMain.length; i++) {
    modListMain[i].style.display = "none";
  }
}

// Functions to Load Individual Modules
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
const modSideSoftware = document.getElementById("modSideSoftware");
const modSideServices = document.getElementById("modSideServices");
const modSideResources = document.getElementById("modSideResources");

// List of Sidebar Modules
const modListSide = [
  modSideRPG,
  modSideSoftware,
  modSideServices,
  modSideResources
]

// Function to Load All Sidebar Modules
function modListSide_Load() {
  for (i = 0; i < modListSide.length; i++) {
    modListSide[i].style.display = "block";
  }
}

/* System Boot Controller
---------------------- */

// Functions to be Executed during System Boot
gotoDashboard();
modListSide_Load();