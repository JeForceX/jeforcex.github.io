/* ----------------
JeForceX™ Forge
GitHub User Website
JavaScript Engine
------------------- */

/* Global Controller
-------------------- */

// Write Current Year to Copyright Notice
const current_date = new Date();
const current_year = current_date.getFullYear();
const site_copyright_year = document.getElementById("site_copyright_year");
site_copyright_year.innerHTML = current_year;

// Define Website & Game Addresses
const site_address_url = window.location.protocol + "//" + window.location.hostname;
const site_address = "<a href='" + site_address_url + "' target='_blank'>" + site_address_url + "</a>";
const game_address = "<a href='" + site_address_url + "/game/" + "' target='_blank'>" + site_address_url + "/game/" + "</a>";

// Write Website & Game Addresses to Legal Documents
document.getElementById("site_address_privacy").innerHTML = site_address;
document.getElementById("game_address_privacy").innerHTML = game_address;
document.getElementById("site_address_terms").innerHTML = site_address;
document.getElementById("game_address_terms").innerHTML = game_address;

/* Module Controller
-------------------- */

// Individual Modules
const mod_forge = document.getElementById("forge");
const mod_game = document.getElementById("game");
const mod_guide = document.getElementById("guide");
const mod_about = document.getElementById("about");
const mod_privacy = document.getElementById("privacy");
const mod_terms = document.getElementById("terms");

// List of ALL Modules
const mod_list = [
  mod_forge,
  mod_game,
  mod_guide,
  mod_about,
  mod_privacy,
  mod_terms
]

// Show ALL Modules
function mod_list_show() {
  for (i = 0; i < mod_list.length; i++) {
    mod_list[i].style.display = "block";
  }
}

// Hide ALL Modules
function mod_list_hide() {
  for (i = 0; i < mod_list.length; i++) {
    mod_list[i].style.display = "none";
  }
}

/* Navigation Controller
------------------------ */

function gotoHome() {
  mod_list_show();
  mod_privacy.style.display = "none";
  mod_terms.style.display = "none";
}

function gotoGame() {
  alert("Under Construction");
}

function gotoPrivacy() {
  mod_list_hide();
  mod_privacy.style.display = "block";
}

function gotoTerms() {
  mod_list_hide();
  mod_terms.style.display = "block";
}

/* System Boot Controller
------------------------- */

// Functions to be Executed during System Boot
mod_privacy.style.display = "none";
mod_terms.style.display = "none";