/* --------------
JeForceX™ Forge
Role-Playing Game
JavaScript Engine
----------------- */

/* Section: User Interface
-------------------------- */

// Message Dialog
const ui_dialog = {
  window: document.getElementById("ui_dialog_window"),
  title: document.getElementById("ui_dialog_title").innerHTML,
  content: document.getElementById("ui_dialog_content").innerHTML,
  button: document.getElementById("ui_dialog_button")
}

// Set Dialog Position to Center of Screen
function ui_dialog_refresh() {
  ui_dialog.window.style.top = ((window.innerHeight - ui_dialog.window.clientHeight) * 0.5) + "px";
  ui_dialog.window.style.left = ((window.innerWidth - ui_dialog.window.clientWidth) * 0.5) + "px";
}

/* Section: Player Character
---------------------------- */

const player = { // Player Character
  profile: {
    firstName: "",
    lastName: "",
    gender: "",
    race: "",
    class: "",
    ideology:"",
    biography: ""
  },
  attribute_base: { // Base Attribute Score
    STR: 10, // Strength
    DEX: 10, // Dexterity
    CON: 10, // Constitution
    WIS: 10, // Wisdom
    INT: 10, // Intelligence
    CHA: 10  // Charisma
  },
  attribute_bonus: { // Bonus Attribute Score
    STR: 0, // Strength
    DEX: 0, // Dexterity
    CON: 0, // Constitution
    WIS: 0, // Wisdom
    INT: 0, // Intelligence
    CHA: 0  // Charisma
  }
}

/* Section: Character Creation
------------------------------ */

/* Section: System Boot
----------------------- */

ui_dialog_refresh(); // Set Dialog Position to Center of Screen