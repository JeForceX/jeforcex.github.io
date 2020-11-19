/* --------------
JeForceX™ Forge
JavaScript Engine
-------------- */

/* Calendar System
--------------- */

// Define System Date
const current_date = new Date();
const current_year = current_date.getFullYear();

// Write Current Year to Copyright Notice
document.getElementById("copyright-year").innerHTML = current_year;

// Define System Modules
const mod_forge = document.getElementById("mod-forge");
const mod_worlds = document.getElementById("mod-worlds");

// List of System Modules
var mod_list = [
  mod_forge,
  mod_worlds
];

/* System Module Controller
------------------------ */

// Load Module: Forge
function loadForge() {
  mod_forge.style.display = "block";
}

// Load Module: WORLDS
function loadWORLDS() {
  mod_worlds.style.display = "block";
}

// Unload Module: All
function unloadModules() {
  for (i = 0; i < mod_list.length; i++) {
    mod_list[i].style.display = "none";
  }
}

// Initialize the Forge
loadForge();