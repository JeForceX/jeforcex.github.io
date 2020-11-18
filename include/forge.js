/* --------------
JeForceX™ Forge
JavaScript Engine
-------------- */

// Define System Modules
const mod_forge = document.getElementById("mod-forge");
const mod_worlds = document.getElementById("mod-worlds");

// List of System Modules
var mod_all = [
  mod_forge,
  mod_worlds
];

// Display System Modules

function loadForge() { // Forge
  mod_forge.style.display = "block";
}

function loadWORLDS() { // WORLDS
  mod_worlds.style.display = "block";
}

// Hide All Modules
function unloadModules() {
  for (i = 0; i < mod_all.length; i++) {
    mod_all[i].style.display = "none";
  }
}

// Initialize the Forge
loadForge();