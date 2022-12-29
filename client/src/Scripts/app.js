// IIFE

const { start } = require("live-server");

(function () {
  function start() {
    console.log("App is working");
  }

  window.addEventListener("load", start);
})();
