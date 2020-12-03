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

// Write Website Address to Privacy Policy
const site_address = document.getElementById("site_address");
const site_address_url = window.location.protocol + "//" + window.location.hostname;
site_address.innerHTML = "<a href='" + site_address_url + "' target='_blank'>" + site_address_url + "</a>";

// Write Game Address to Privacy Policy
const game_address = document.getElementById("game_address");
const game_address_url = site_address_url + "/game/";
game_address.innerHTML = "<a href='" + game_address_url + "' target='_blank'>" + game_address_url + "</a>";

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

// Functions to be Executed during Development System Boot
/*
mod_list_hide();
mod_privacy.style.display = "block";
*/

// Functions to be Executed during Production System Boot

mod_privacy.style.display = "none";
mod_terms.style.display = "none";