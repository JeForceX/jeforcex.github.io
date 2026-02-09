/* -------------------------------------------------------------
WHAT : Application Launcher
WHY  : Execute Mission Critical Function to launch the
       Application
------------------------------------------------------------- */

// Product Metadata
const product = {
  name: 'JΞFØRCΞX GitHub Pages Site',
  version: '0.0.1'
}

// API Library
const api = {
  getYear: (id) => {
    let target = document.getElementById(id);
    let YYYY = new Date().getFullYear();
    target.textContent = YYYY;
  }
}

// Application Start-up Function Execution
api.getYear('YYYY');
console.log(`[System] SUCCESS: ${product.name} v${product.version} is operational.`);