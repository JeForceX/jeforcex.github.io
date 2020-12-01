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
const jfx_copyright_year = document.getElementById("jfx_copyright_year");

/* Navigation Controller
-------------------- */

function gotoPrivacy() {
  alert("Privacy Policy: Under Construction");
}

function gotoTerms() {
  alert("Terms of Use: Under Construction");
}

/* System Boot Controller
------------------------- */

// Functions to be Executed during System Boot
jfx_copyright_year.innerHTML = current_year;