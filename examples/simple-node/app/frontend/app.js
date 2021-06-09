 "use strict";

 (function() {
    const BACKEND_URL = "https://simple-node-web-app-backend-server-dot-pulumi-development.uc.r.appspot.com";

    /**
    * Add a function that will be called when the window is loaded.
    */
    window.addEventListener("load", init);

    function init() {
      id("gen-num-btn").addEventListener("click", genRandNum);
    }

    /**
     * Generates a random number by fetching from `BACKEND_URL`
     */
    function genRandNum() {
      console.log("trying to fetch");
      fetch(`${BACKEND_URL}/randNum`)
        .then(res => res.json())
        .then(result => {
          id("rand-num").textContent = result.randNum;
        })
        .catch(err => console.error(err));
    }

    /** ------------------------------ Helper Functions  ------------------------------ */

    /**
    * Returns the element that has the ID attribute with the specified value.
    * @param {string} idName - element ID
    * @returns {object} DOM object associated with id.
    */
    function id(idName) {
      return document.getElementById(idName);
    }
 })();