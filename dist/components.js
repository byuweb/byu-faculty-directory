/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='7' viewBox='0 0 10 7'%3E%3Cpath fill='%23ADADAD' d='M10 0v3L5 7 0 3V0l5 4 5-4z'/%3E%3C/svg%3E"

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='30' viewBox='0 0 18 30'%3E%3Cpath fill='%23ADADAD' d='M0 0h9.333L18 15.001 9.333 30H0l8.667-14.999L0 0z'/%3E%3C/svg%3E"

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_matchesSelector__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"]; });
/* unused harmony reexport matchesSelector */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__["a"]; });
/* unused harmony reexport createEvent */
/**
 * Created by ThatJoeMoore on 2/14/17
 */










/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matchesSelector;
/*
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */


function matchesSelector(el, selector) {
    let proto = Element.prototype;
    let actual =
        proto.matches ||
        proto.matchesSelector ||
        proto.mozMatchesSelector ||
        proto.msMatchesSelector ||
        proto.oMatchesSelector ||
        proto.webkitMatchesSelector ||
        function (s) {
            let doc = this.document || this.ownerDocument;
            return doc.querySelectorAll(s).indexOf(this) !== -1;
        };

    return actual.call(el, selector);
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_directory_html__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_directory_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_faculty_directory_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whatwg_fetch__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_whatwg_fetch__);
/**
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/






const ATTR_API_KEY = 'api-key';
const ATTR_DEPARTMENT = 'department';

const DEFAULT_API_KEY = '-1';
const DEFAULT_DEPARTMENT = 'all';

const ENDPOINT = 'https://ws.byu.edu/services/facultyProfile/faculty';

class ByuFacultyDirectory extends HTMLElement {
  constructor() {
    super();
    this._initialized = false;
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-faculty-directory', __WEBPACK_IMPORTED_MODULE_0__byu_faculty_directory_html___default.a, () => {
      this._initialized = true;
      applyFacultyData(this);
    })
  }

  disconnectedCallback() {
    //TODO: Add Cleanup
  }

  static get observedAttributes() {
    return [ATTR_API_KEY, ATTR_DEPARTMENT];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      case ATTR_API_KEY:
        applyFacultyData(this);
      case ATTR_DEPARTMENT:
    }
  }

  // ATTRIBUTES

  set apiKey(value) {
    this.setAttribute(ATTR_API_KEY, value);
  }

  get apiKey() {
    if (this.hasAttribute(ATTR_API_KEY)) {
      return this.getAttribute(ATTR_API_KEY);
    }
    return DEFAULT_API_KEY;
  }

  set department(value) {
    this.setAttribute(ATTR_DEPARTMENT);
  }

  get department() {
    if (this.hasAttribute(ATTR_DEPARTMENT)) {
      return this.getAttribute(ATTR_DEPARTMENT);
    }
    return DEFAULT_DEPARTMENT;
  }

  // END ATTRIBUTES

}

window.customElements.define('byu-faculty-directory', ByuFacultyDirectory);
window.ByuFacultyDirectory = ByuFacultyDirectory;

// -------------------- Helper Functions --------------------

function applyFacultyData(component) {
  if (!component._initialized) return;

  let output = component.shadowRoot.querySelector('.output');

  //Remove all current children (if there are any)
  while(output.firstChild) {
    output.removeChild(output.firstChild);
  }

  let slot = component.shadowRoot.querySelector('#directory-template');
  let template = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["b" /* querySelectorSlot */](slot, 'template');

  if (!template) {
    throw new Error('No template was specified!');
  }

  let data = {
    title: component.title,
    apiKey: component.apiKey,
    department: component.department
  };

  /*let cache = sessionStorage.getItem("cache");
  if (cache.expires < new Date().getTime())*/
  let url = ENDPOINT + '?applicationKey=' + data.apiKey;
  fetch(url, {method: 'get'}).then(response => {
    if (response.ok) {
      return response.text()
    }
    throw new Error('Network response was not OK.')
  }).then(xml => {
    let xmlObject = new DOMParser().parseFromString(xml, "text/xml");
    let entries = xmlObject.getElementsByTagName("Record");
    if (entries.length <= 0) {
      console.warn('Network response was empty');
      return;
    }

    else {
      for (let i = 0; i < 10; i++) {//entries; i++) {
        if (entries[i].getElementsByTagName("EMP_STATUS")[0].childNodes[0].nodeValue == 'Active') {
          let element = document.importNode(template.content, true);
          let root = element.querySelector('.directory-child');
          element.querySelector('.listing-name').innerHTML = entries[i].getElementsByTagName("FNAME")[0].childNodes[0].nodeValue + " " + entries[i].getElementsByTagName("LNAME")[0].childNodes[0].nodeValue;


          if (entries[i].getElementsByTagName("BIO").length > 0)
          {
            if (entries[i].getElementsByTagName("BIO")[0].childNodes.length > 0)
            {
              element.querySelector('.listing-biography').innerHTML = entries[i].getElementsByTagName("BIO")[0].childNodes[0].nodeValue;
            }
          }

          if (entries[i].getElementsByTagName("OPHONE1").length > 0)
          {
            if (entries[i].getElementsByTagName("OPHONE1")[0].childNodes.length > 0)
            {
              element.querySelector('.listing-phone').innerHTML = entries[i].getElementsByTagName("OPHONE1")[0].childNodes[0].nodeValue + "-" + entries[i].getElementsByTagName("OPHONE2")[0].childNodes[0].nodeValue + "-" + entries[i].getElementsByTagName("OPHONE3")[0].childNodes[0].nodeValue;
            }
          }

          if (entries[i].getElementsByTagName("ADDRESS").length > 0)
          {
            if (entries[i].getElementsByTagName("ADDRESS")[0].childNodes.length > 0)
            {
              element.querySelector('.listing-office').innerHTML = entries[i].getElementsByTagName("ADDRESS")[0].childNodes[0].nodeValue.substring(0, entries[i].getElementsByTagName("ADDRESS")[0].childNodes[0].nodeValue.indexOf(","));
            }
          }

          if (entries[i].getElementsByTagName("EMAIL").length > 0)
          {
            if (entries[i].getElementsByTagName("EMAIL")[0].childNodes.length > 0)
            {
              element.querySelector('.listing-email').innerHTML = entries[i].getElementsByTagName("EMAIL")[0].childNodes[0].nodeValue;
            }
          }
          output.appendChild(element);
        }
      }
      //alert(xmlObject.getElementsByTagName("FNAME")[0].childNodes[0].nodeValue);
    }
  });
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_listing_html__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_listing_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_faculty_listing_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(2);
/**
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/





const ATTR_PROFILE_IMAGE = "faculty-image";
const ATTR_NAME = 'faculty-name';
const ATTR_TITLE = 'faculty-title';
const ATTR_OFFICE = 'faculty-office';
const ATTR_PHONE = 'faculty-phone';
const ATTR_EMAIL = 'faculty-email';
const ATTR_OFFICE_HOURS = 'faculty-office-hours';
const ATTR_RESEARCH = 'faculty-research';
const ATTR_BIOGRAPHY = 'faculty-biography';
const ATTR_PROFILE_LINK = 'faculty-profile-link';

const DEFAULT_INFORMATION = "Unknown";

class ByuFacultyListing extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    //This will stamp our template for us, then let us perform actions on the stamped DOM.
    __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-faculty-listing', __WEBPACK_IMPORTED_MODULE_0__byu_faculty_listing_html___default.a, () => {
      applyProfileImage(this);
      applyProfileLinks(this);
      truncateText(this);
      setupSlotListeners(this);
    });
  }

  disconnectedCallback() {
    teardownButtonListeners(this);
  }

  static get observedAttributes() {
    return [ATTR_PROFILE_IMAGE, ATTR_NAME, ATTR_TITLE, ATTR_OFFICE, ATTR_PHONE, ATTR_EMAIL, ATTR_OFFICE_HOURS, ATTR_RESEARCH, ATTR_BIOGRAPHY, ATTR_PROFILE_LINK];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      case ATTR_NAME:
      case ATTR_TITLE:
      case ATTR_OFFICE:
      case ATTR_PHONE:
      case ATTR_EMAIL:
      case ATTR_OFFICE_HOURS:
      case ATTR_RESEARCH:
        truncateText(this);
        break;
      case ATTR_BIOGRAPHY:
        truncateText(this);
        break;
      case ATTR_PROFILE_LINK:
        applyProfileLinks(this);
        break;
      case ATTR_PROFILE_IMAGE:
        applyProfileImage(this);
        break;
    }
  }

  set name(value) {
    this.setAttribute(ATTR_NAME, value);
  }

  get name() {
    if (this.hasAttribute(ATTR_NAME)) {
      return this.getAttribute(ATTR_NAME);
    }
    return DEFAULT_INFORMATION;
  }

  set title(value) {
    this.setAttribute(ATTR_TITLE, value);
  }

  get title() {
    if (this.hasAttribute(ATTR_TITLE)) {
      return this.getAttribute(ATTR_TITLE);
    }
    return DEFAULT_INFORMATION;
  }

  set office(value) {
    this.setAttribute(ATTR_OFFICE, value);
  }

  get office() {
    if (this.hasAttribute(ATTR_OFFICE)) {
      return this.getAttribute(ATTR_OFFICE);
    }
    return DEFAULT_INFORMATION;
  }

  set phone(value) {
    this.setAttribute(ATTR_PHONE, value);
  }

  get phone() {
    if (this.hasAttribute(ATTR_PHONE)) {
      return this.getAttribute(ATTR_PHONE);
    }
    return DEFAULT_INFORMATION;
  }

  set email(value) {
    this.setAttribute(ATTR_EMAIL, value);
  }

  get email() {
    if (this.hasAttribute(ATTR_EMAIL)) {
      return this.getAttribute(ATTR_EMAIL);
    }
    return DEFAULT_INFORMATION;
  }

  set office_hours(value) {
    this.setAttribute(ATTR_OFFICE_HOURS, value);
  }

  get office_hours() {
    if (this.hasAttribute(ATTR_OFFICE_HOURS)) {
      return this.getAttribute(ATTR_OFFICE_HOURS);
    }
    return DEFAULT_INFORMATION;
  }

  set research(value) {
    this.setAttribute(ATTR_RESEARCH, value);
  }

  get research() {
    if (this.hasAttribute(ATTR_RESEARCH)) {
      return this.getAttribute(ATTR_RESEARCH);
    }
    return DEFAULT_INFORMATION;
  }

  set biography(value) {
    this.setAttribute(ATTR_BIOGRAPHY, value);
  }

  get biography() {
    if (this.hasAttribute(ATTR_BIOGRAPHY)) {
      return this.getAttribute(ATTR_BIOGRAPHY);
    }
    return DEFAULT_INFORMATION;
  }

  set profileImage(value) {
    this.setAttribute(ATTR_PROFILE_IMAGE, value);
  }

  get profileImage() {
    if (this.hasAttribute(ATTR_PROFILE_IMAGE)) {
      return this.getAttribute(ATTR_PROFILE_IMAGE);
    }
    return '';
  }

  set profileLink(value) {
    this.setAttribute(ATTR_PROFILE_LINK, value);
  }

  get profileLink() {
    if (this.hasAttribute(ATTR_PROFILE_LINK)) {
      return this.getAttribute(ATTR_PROFILE_LINK);
    }
    return '';
  }
}

window.customElements.define('byu-faculty-listing', ByuFacultyListing);
window.ByuFacultyListing = ByuFacultyListing;

// -------------------- Helper Functions --------------------
function applyProfileImage(component) {
  let profileImages = component.shadowRoot.querySelectorAll('.faculty-image');

  for (var i = 0; i < profileImages.length; i++) {
    profileImages[i].src = component.profileImage;
    //profileImages[i].parentNode.setAttribute('href', component.profileLink);
  }
}

function applyProfileLinks(component) {
  let profileLinks = component.shadowRoot.querySelectorAll('.profile-link');
  for (var i = 0; i < profileLinks.length; i++) {
    profileLinks[i].setAttribute('href', component.profileLink);
  }
}

function truncateText(component) {
  let slots = component.shadowRoot.querySelectorAll('.slot');

  for(var i = 0; i < slots.length; i++) {
    var slot = slots[i].children[0].assignedNodes()[0];

    if (slots[i].parentNode.className == "research-slot-wrapper") {
      if (slot.innerText.length > 140) {
        while (slot.innerText.length > 140) {
          slot.innerText = slot.innerText.replace(/\W*\s(\S)*$/, '... ');
        }
      }
    }
    else {
      if (slot.innerText.length > 500) {
        while (slot.innerText.length > 500) {
          slot.innerText = slot.innerText.replace(/\W*\s(\S)*$/, '... ');
        }
        slot.innerHTML = slot.innerHTML + "<a style='color: #008080' href='" + component.profileLink + "'>Read More</a>";
      }
    }
  }
}

function setupButtonListeners(component) {
  // let button = component.shadowRoot.querySelector('.root');

  // let callback = component.__buttonListener = function(event) {
  //    alert("Testing");
  // };

  // button.addEventListener('click', callback, false);
}

//We generally want to be good neighbors and clean up after ourselves when we're done with things.
function teardownButtonListeners(component) {
  // let button = component.shadowRoot.querySelector('.root');

  // button.removeEventListener('click', component.__buttonListener, false);
}

function setupSlotListeners(component) {
  // let slot = component.shadowRoot.querySelector('#apiKey-template');

  // //this will listen to changes to the contents of our <slot>, so we can take appropriate action
  // slot.addEventListener('slotchange', () => {
  //   applyApiKey(component);
  // }, false);
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_profile_html__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_profile_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_faculty_profile_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(2);
/**
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/





const ATTR_API_KEY = 'api-key';
const ATTR_NAME = 'faculty-name';
const ATTR_TITLE = 'faculty-title';
const ATTR_OFFICE = 'faculty-office';
const ATTR_PHONE = 'faculty-phone';
const ATTR_EMAIL = 'faculty-email';
const ATTR_OFFICE_HOURS = 'faculty-office-hours';
const ATTR_RESEARCH = 'faculty-research';
const ATTR_BIOGRAPHY = 'faculty-biography';
const ATTR_PROFILE_IMAGE = 'faculty-image';
const ATTR_BACKGROUND_IMAGE = 'background-image';

const DEFAULT_apiKey = 1;
const DEFAULT_INFORMATION = "Unknown";

class ByuFacultyProfile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    //This will stamp our template for us, then let us perform actions on the stamped DOM.
    __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-faculty-profile', __WEBPACK_IMPORTED_MODULE_0__byu_faculty_profile_html___default.a, () => {
      applyBackgroundImage(this);
      applyProfileImage(this);
      setupButtonListeners(this);
      showContent(this);
      //applyApiKey(this);

      //setupSlotListeners(this);
    });
  }

  disconnectedCallback() {
    teardownButtonListeners(this);
  }

  static get observedAttributes() {
    return [ATTR_PROFILE_IMAGE, ATTR_BACKGROUND_IMAGE, ATTR_API_KEY, ATTR_NAME, ATTR_TITLE, ATTR_OFFICE, ATTR_PHONE, ATTR_EMAIL, ATTR_OFFICE_HOURS, ATTR_RESEARCH, ATTR_BIOGRAPHY];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      case ATTR_NAME:
      case ATTR_TITLE:
      case ATTR_OFFICE:
      case ATTR_PHONE:
      case ATTR_EMAIL:
      case ATTR_OFFICE_HOURS:
      case ATTR_RESEARCH:
      case ATTR_BIOGRAPHY:
      case ATTR_API_KEY:
      case ATTR_BACKGROUND_IMAGE:
        applyBackgroundImage(this);
        break
      case ATTR_PROFILE_IMAGE:
        applyProfileImage(this);
        break;
    }
  }

  set apiKey(value) {
    this.setAttribute(ATTR_API_KEY, value);
  }

  get apiKey() {
    if (this.hasAttribute(ATTR_API_KEY)) {
      return this.getAttribute(ATTR_API_KEY);
    }
    return DEFAULT_apiKey;
  }

  set name(value) {
    this.setAttribute(ATTR_NAME, value);
  }

  get name() {
    if (this.hasAttribute(ATTR_NAME)) {
      return this.getAttribute(ATTR_NAME);
    }
    return DEFAULT_INFORMATION;
  }

  set title(value) {
    this.setAttribute(ATTR_TITLE, value);
  }

  get title() {
    if (this.hasAttribute(ATTR_TITLE)) {
      return this.getAttribute(ATTR_TITLE);
    }
    return DEFAULT_INFORMATION;
  }

  set office(value) {
    this.setAttribute(ATTR_OFFICE, value);
  }

  get office() {
    if (this.hasAttribute(ATTR_OFFICE)) {
      return this.getAttribute(ATTR_OFFICE);
    }
    return DEFAULT_INFORMATION;
  }

  set phone(value) {
    this.setAttribute(ATTR_PHONE, value);
  }

  get phone() {
    if (this.hasAttribute(ATTR_PHONE)) {
      return this.getAttribute(ATTR_PHONE);
    }
    return DEFAULT_INFORMATION;
  }

  set email(value) {
    this.setAttribute(ATTR_EMAIL, value);
  }

  get email() {
    if (this.hasAttribute(ATTR_EMAIL)) {
      return this.getAttribute(ATTR_EMAIL);
    }
    return DEFAULT_INFORMATION;
  }

  set office_hours(value) {
    this.setAttribute(ATTR_OFFICE_HOURS, value);
  }

  get office_hours() {
    if (this.hasAttribute(ATTR_OFFICE_HOURS)) {
      return this.getAttribute(ATTR_OFFICE_HOURS);
    }
    return DEFAULT_INFORMATION;
  }

  set research(value) {
    this.setAttribute(ATTR_RESEARCH, value);
  }

  get research() {
    if (this.hasAttribute(ATTR_RESEARCH)) {
      return this.getAttribute(ATTR_RESEARCH);
    }
    return DEFAULT_INFORMATION;
  }

  set biography(value) {
    this.setAttribute(ATTR_BIOGRAPHY, value);
  }

  get biography() {
    if (this.hasAttribute(ATTR_BIOGRAPHY)) {
      return this.getAttribute(ATTR_BIOGRAPHY);
    }
    return DEFAULT_INFORMATION;
  }

  set profileImage(value) {
    this.setAttribute(ATTR_PROFILE_IMAGE, value);
  }

  get profileImage() {
    if (this.hasAttribute(ATTR_PROFILE_IMAGE)) {
      return this.getAttribute(ATTR_PROFILE_IMAGE);
    }
    return '';
  }

  set backgroundImage(value) {
    this.setAttribute(ATTR_BACKGROUND_IMAGE, value);
  }

  get backgroundImage() {
    if (this.hasAttribute(ATTR_BACKGROUND_IMAGE)) {
      return this.getAttribute(ATTR_BACKGROUND_IMAGE);
    }
    return '';
  }
}

window.customElements.define('byu-faculty-profile', ByuFacultyProfile);
window.ByuFacultyProfile = ByuFacultyProfile;

// -------------------- Helper Functions --------------------
function applyBackgroundImage(component) {
  let imageBox = component.shadowRoot.querySelector('div.background-image-wrapper');
  imageBox.style.backgroundImage = "url('" + component.backgroundImage + "')";
}

function applyProfileImage(component) {
  let profileImages = component.shadowRoot.querySelectorAll('.faculty-image');

  for (var i = 0; i < profileImages.length; i++) {
    profileImages[i].src = component.profileImage;
  }
}

function setupButtonListeners(component) {
  /*let buttons = component.shadowRoot.querySelectorAll('.chevron');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      if (this.src.includes('Chevron-Right')) {
        this.src = "/components/byu-faculty-profile/Chevron-Down.svg";

        var element = this, i = 5;
        while(i-- && (element = element.parentNode));
        element.className += " expanded";
      }

      else {
        this.src = "/components/byu-faculty-profile/Chevron-Right.svg";

        var element = this, i = 5;
        while(i-- && (element = element.parentNode));
        element.classList.remove("expanded");
      }
    });
  }*/

  let buttons = component.shadowRoot.querySelectorAll('.click-area');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function cardClick() {
      var element = this;
      element = element.children[0];
      element = element.children[0];
      element = element.children[0];
      element = element.children[1];

      if (!element.children[0].classList.contains('hide')) {
        element.children[0].className += ' hide';
        element.children[1].classList.remove('hide');

        this.parentNode.className += ' expanded';
      }

      else {
        element.children[0].classList.remove('hide');
        element.children[1].className += ' hide';

        this.parentNode.classList.remove('expanded');
      }
    });
  }

  // let callback = component.__buttonListener = function(event) {
  //   component.apiKey = component.apiKey + 1;
  // };

  // button.addEventListener('click', callback, false);
}

//We generally want to be good neighbors and clean up after ourselves when we're done with things.
function teardownButtonListeners(component) {
  // let button = component.shadowRoot.querySelector('.apiKey-button');

  // button.removeEventListener('click', component.__buttonListener, false);
  let buttons = component.shadowRoot.querySelectorAll('.click-area');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].removeEventListener('click', cardClick);
  }
}

function setupSlotListeners(component) {
  // let slot = component.shadowRoot.querySelector('#apiKey-template');

  // //this will listen to changes to the contents of our <slot>, so we can take appropriate action
  // slot.addEventListener('slotchange', () => {
  //   applyApiKey(component);
  // }, false);
}

function showContent(component) {
  let slots = component.shadowRoot.querySelectorAll('.card-slot');
  let cards = component.shadowRoot.querySelectorAll('.card');
  for (var i = 0; i < slots.length; i++) {
    var element = slots[i].parentNode.parentNode;

    if (slots[i].assignedNodes().length > 0) {
      element.classList.remove("hide");
    }
  }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_listing_byu_faculty_listing_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__byu_faculty_profile_byu_faculty_profile_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__byu_faculty_directory_byu_faculty_directory_js__ = __webpack_require__(5);
/**
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/







/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/*
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */


function createEvent(name, detail) {
    if (typeof window.CustomEvent === 'function') {
        return new CustomEvent(name, {detail, cancelable: true, bubbles: true})
    }
    let evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, true, true, detail);
    return evt;
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = querySelectorSlot;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__ = __webpack_require__(4);
/*
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */




function querySelectorSlot(slot, selector) {
    let roots = slot.assignedNodes({flatten: true})
        .filter(n => n.nodeType === Node.ELEMENT_NODE);

    for (let i = 0, len = roots.length; i < len; i++) {
        let each = roots[i];
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__["a" /* default */])(each, selector)) {
            return each;
        }
        let child = each.querySelector(selector);
        if (child) {
            return child;
        }
    }
    return null;
}



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyTemplate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hash_sum__);
/*
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */




const TEMPLATE_RENDERED_CLASS = 'byu-component-rendered';

function applyTemplate(element, elementName, template, callback) {
    let sum = __WEBPACK_IMPORTED_MODULE_0_hash_sum___default()(template);

    let elSettings = element.__byu_webCommunity_components = element.__byu_webCommunity_components || {};
    if (elSettings.templateHash === sum) {
        //Nothing has changed in the element.  Don't replace the DOM, don't fire the callback.
        return;
    }
    elSettings.templateHash = sum;

    if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
        applyTemplateShady(element, elementName, template, callback, sum);
    } else {
        applyTemplateNative(element, template, callback);
    }
}

function applyTemplateShady(element, elementName, template, callback, sum) {
    let templateId = '__byu-custom-element-template_' + elementName + '_' + sum;
    let templateElement = document.head.querySelector('template#' + templateId);
    if (!templateElement) {
        templateElement = document.createElement('template');
        templateElement.id = templateId;
        templateElement.innerHTML = template;
        document.head.appendChild(templateElement);
        ShadyCSS.prepareTemplate(templateElement, elementName);
    }
    if (ShadyCSS.styleElement) {
        ShadyCSS.styleElement(element);
    } else if (ShadyCSS.applyStyle) {
        ShadyCSS.applyStyle(element);
    } else {
        throw new Error('ShadyCSS is not properly defined: no styleElement or applyStyle!');
    }
    let imported = document.importNode(templateElement.content, true);
    let shadow = element.shadowRoot;
    //It'd be nice if we could just diff the DOM and replace what changed between templates, but that might lead to
    // event listeners getting applied twice.  Easier to just clear out the shadow DOM and replace it.
    while (shadow.firstChild) {
        shadow.removeChild(shadow.firstChild);
    }
    shadow.appendChild(imported);
    setTimeout(function() {
        runAfterStamping(element, callback);
    });
}

function applyTemplateNative(element, template, callback) {
    element.shadowRoot.innerHTML = template;
    runAfterStamping(element, callback);
}

function runAfterStamping(element, callback) {
    element.classList.add(TEMPLATE_RENDERED_CLASS);
    if (callback) {
        callback();
    }
}



/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */\n/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */\n/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.biography-slot-wrapper{height:194px;line-height:20px}#column-left{padding:16px 8px 16px 16px}#column-middle{padding:16px 8px;width:232px;vertical-align:top}#column-middle ::slotted(h2){margin-top:0}#column-middle ::slotted(div){display:block;font-size:1.5em;font-weight:700;color:#002e5d;font-family:Vitesse A,Vitesse B,Georgia,serif;margin:0}#column-right{padding:16px 16px 16px 8px;vertical-align:top}.contact-wrapper{margin:32px 0 16px}.faculty-image{height:270px;vertical-align:middle;width:auto;padding:4px 0}#hidden-image{display:none}.listing-root{background-color:#fff;color:#515151;font-family:Gotham Book,Helvetica,sans-serif;font-weight:200;margin:24px auto;min-width:250px;width:1024px;vertical-align:top;-moz-box-shadow:5px 5px 10px 1px rgba(0,0,0,.2);-webkit-box-shadow:5px 5px 10px 1px rgba(0,0,0,.2);box-shadow:5px 5px 10px 1px rgba(0,0,0,.2)}.listing-root ::slotted(h2){color:#002e5d;font-family:Vitesse A,Vitesse B,Georgia,serif;margin:0}.listing-root ::slotted(p){margin:0}.profile-link{text-decoration:none}.biography-slot-wrapper,.research-slot-wrapper{overflow:hidden}.research-slot-wrapper{line-height:20px;height:64px}.research-slot-wrapper>h3{margin-top:0}.section-header{color:#002e5d;margin:15px 0 0}@media only screen and (max-width:1023px){#column-right{display:none}#column-middle{padding:16px 16px 16px 8px;vertical-align:top}.listing-root{width:672px}}@media only screen and (max-width:671px){#column-left{display:none}#column-middle{text-align:center;margin:auto;padding:16px;width:288px}#default-image{display:none}#hidden-image{display:block;height:150px;margin:0 auto;padding-top:15px;width:auto}.listing-root{width:320px}}", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */\n/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */#background-image{display:none}.background-image-wrapper{background-position:50%;background-size:cover;height:300px;width:100%}.card{background-color:#fff;color:#515151;font-family:Gotham,Helvetica,sans-serif;font-weight:200;line-height:20px;margin:20px auto;width:100%;max-width:824px;-moz-box-shadow:8px 8px 16px 1px rgba(0,0,0,.2);-webkit-box-shadow:8px 8px 16px 1px rgba(0,0,0,.2);box-shadow:8px 8px 16px 1px rgba(0,0,0,.2)}.card-chevron-wrapper{text-align:right}.card-content{padding:8px 20px 16px;display:none}.card-content ::slotted(*){margin:0}.card-title-wrapper>h3{color:#002e5d;margin:0}.click-area{padding:16px}.click-area:hover{background-color:#c5c5c5;cursor:pointer}.click-area>table{width:100%}.contact-wrapper{margin:32px 0 0}.content-wrapper{align-content:center;color:#fff;font-family:Gotham A,Gotham B,Helvetica,sans-serif;font-weight:500;line-height:24px;margin:auto;text-shadow:4px 4px 8px #000;width:824px}.expanded>.card-content{display:block}.faculty-image{height:250px;margin:8px 0 0;width:auto}#hidden-image,.hide{display:none}#left-column{width:170px;padding:16px 16px 16px 0}.profile-root ::slotted(div),.profile-root ::slotted(h1){font-family:Vitesse A,Vitesse B,Georgia,serif;margin:0 0 8px;font-weight:500}.profile-root ::slotted(div){display:block;font-size:2em}#right-column{vertical-align:middle;padding:16px 16px 16px 0}.svg-md{fill:#c1c1c1;height:24px;vertical-align:middle;width:24px}.svg-md:hover{cursor:pointer}.svg-shadow{-webkit-filter:drop-shadow(2px 2px 4px #000);filter:drop-shadow(2px 2px 4px #000000)}.svg-sm{fill:#fff;height:16px;vertical-align:middle;width:16px}@media only screen and (max-width:859px){.card,.content-wrapper{width:456px}}@media only screen and (max-width:491px){.card{width:290px}.contact-wrapper{margin:16px}.content-wrapper{line-height:18px;text-align:center;width:100%}#default-image,#left-column{display:none}#hidden-image{height:140px;margin:auto;padding:16px 0 8px;width:auto;display:block}}", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function pad (hash, len) {
  while (hash.length < len) {
    hash = '0' + hash;
  }
  return hash;
}

function fold (hash, text) {
  var i;
  var chr;
  var len;
  if (text.length === 0) {
    return hash;
  }
  for (i = 0, len = text.length; i < len; i++) {
    chr = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash < 0 ? hash * -2 : hash;
}

function foldObject (hash, o, seen) {
  return Object.keys(o).sort().reduce(foldKey, hash);
  function foldKey (hash, key) {
    return foldValue(hash, o[key], key, seen);
  }
}

function foldValue (input, value, key, seen) {
  var hash = fold(fold(fold(input, key), toString(value)), typeof value);
  if (value === null) {
    return fold(hash, 'null');
  }
  if (value === undefined) {
    return fold(hash, 'undefined');
  }
  if (typeof value === 'object') {
    if (seen.indexOf(value) !== -1) {
      return fold(hash, '[Circular]' + key);
    }
    seen.push(value);
    return foldObject(hash, value, seen);
  }
  return fold(hash, value.toString());
}

function toString (o) {
  return Object.prototype.toString.call(o);
}

function sum (o) {
  return pad(foldValue(0, o, '', []).toString(16), 8);
}

module.exports = sum;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(12) + "</style> <div class=\"root\"> <div class=\"output\"></div> <div class=\"directory-template-wrapper slot-container\"> <slot id=\"directory-template\"> <template> <byu-faculty-listing faculty-image=\"\" class=\"directory-child\"> <h2 slot=\"listing-name\" class=\"listing-name\"></h2> <span slot=\"listing-title\" class=\"listing-title\"></span> <span slot=\"listing-office\" class=\"listing-office\"></span> <span slot=\"listing-phone\" class=\"listing-phone\"></span> <span slot=\"listing-email\" class=\"listing-email\"></span> <span slot=\"listing-office-hours\" class=\"listing-office-hours\"></span> <p slot=\"listing-research\" class=\"listing-research\"></p> <p slot=\"listing-biography\" class=\"listing-biography\"></p> </byu-faculty-listing> </template> </slot> </div> </div>";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(13) + "</style> <div class=\"root listing-root\"> <div class=\"image-wrapper\"> <img class=\"faculty-image\" id=\"hidden-image\"> </div> <table> <tbody> <tr> <td id=\"column-left\" class=\"column\"> <div class=\"image-wrapper\"> <a class=\"profile-link\" href=\"\"> <img class=\"faculty-image\" id=\"default-image\"> </a> </div> </td> <td id=\"column-middle\" class=\"column\"> <a class=\"profile-link\" href=\"\"> <slot id=\"listing-name\" name=\"listing-name\"></slot> </a> <i><slot name=\"listing-title\"></slot></i> <div class=\"contact-wrapper\"> <div class=\"office-slot-wrapper\"> <b>Office: </b><slot name=\"listing-office\"></slot> </div> <div class=\"phone-slot-wrapper\"> <b>Phone: </b><slot name=\"listing-phone\"></slot> </div> <div class=\"email-slot-wrapper\"> <b>Email: </b><slot name=\"listing-email\"></slot> </div> </div> <div class=\"office-hours-slot-wrapper\"> <b>Office Hours: </b><br> <slot name=\"listing-office-hours\"></slot> </div> </td> <td id=\"column-right\" class=\"column\"> <div class=\"research-slot-wrapper\"> <h3 class=\"section-header\">Research</h3> <div class=\"slot\"> <slot name=\"listing-research\"></slot> </div> </div> <div class=\"biography-slot-wrapper\"> <h3 class=\"section-header\">Biography</h3> <div class=\"slot\"> <slot name=\"listing-biography\"></slot> </div> </div> </td> </tr> </tbody> </table> </div>";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(14) + "</style> <div class=\"root profile-root\"> <div class=\"background-image-wrapper\"> <div> <div class=\"faculty-image-wrapper\"> <img class=\"faculty-image\" id=\"hidden-image\" src=\"xxxHTMLLINKxxx0.74826876964686130.5462706109101794xxx\" alt=\"Faculty Image\"> </div> <table class=\"content-wrapper\"> <tr> <td id=\"left-column\"> <div class=\"faculty-image-wrapper\"> <img class=\"faculty-image\" id=\"default-image\" src=\"xxxHTMLLINKxxx0.80577589341406970.19388572341936272xxx\" alt=\"Faculty Image\"> </div> </td> <td id=\"right-column\"> <slot id=\"faculty-name\" name=\"faculty-name\"></slot> <i><slot name=\"faculty-title\"></slot></i> <div class=\"contact-wrapper\"> <div class=\"office-slot-wrapper\"> <span><img class=\"svg-sm svg-shadow\" src=\"" + __webpack_require__(20) + "\" alt=\"Desk\"> Office: <slot name=\"faculty-office\"></slot></span> </div> <div class=\"email-slot-wrapper\"> <span><img class=\"svg-sm svg-shadow\" src=\"" + __webpack_require__(21) + "\" alt=\"Email\"> Email: <slot name=\"faculty-email\"></slot></span> </div> <div class=\"phone-slot-wrapper\"> <span><img class=\"svg-sm svg-shadow\" src=\"" + __webpack_require__(19) + "\" alt=\"Phone\"> Phone: <slot name=\"faculty-phone\"></slot></span> </div> </div> </td> </tr> </table> </div> </div> <div class=\"additional-info-wrapper\"> <div class=\"card biography-card expanded hide\"> <div class=\"click-area\"> <table> <tbody> <tr> <td class=\"card-title-wrapper\"> <h3>Biography</h3> </td> <td class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md hide\" src=\"" + __webpack_require__(1) + "\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(0) + "\"> </td> </tr> </tbody> </table> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-biography\">No Information</slot> </div> </div> <div class=\"card research-card hide\"> <div class=\"click-area\"> <table> <tbody> <tr> <td class=\"card-title-wrapper\"> <h3>Research</h3> </td> <td class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(1) + "\"> <img class=\"chevron svg-md hide\" src=\"" + __webpack_require__(0) + "\"> </td> </tr> </tbody> </table> </div> <div class=\"card-content hide\"> <slot class=\"card-slot\" name=\"faculty-research\">No Information</slot> </div> </div> <div class=\"card committees-card hide\"> <div class=\"click-area\"> <table> <tbody> <tr> <td class=\"card-title-wrapper\"> <h3>Committees</h3> </td> <td class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(1) + "\"> <img class=\"chevron svg-md hide\" src=\"" + __webpack_require__(0) + "\"> </td> </tr> </tbody> </table> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-committees\">No Information</slot> </div> </div> <div class=\"card students-card hide\"> <div class=\"click-area\"> <table> <tbody> <tr> <td class=\"card-title-wrapper\"> <h3>Students</h3> </td> <td class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(1) + "\"> <img class=\"chevron svg-md hide\" src=\"" + __webpack_require__(0) + "\"> </td> </tr> </tbody> </table> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-students\">No Information</slot> </div> </div> <div class=\"card papers-card hide\"> <div class=\"click-area\"> <table> <tbody> <tr> <td class=\"card-title-wrapper\"> <h3>Papers</h3> </td> <td class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(1) + "\"> <img class=\"chevron svg-md hide\" src=\"" + __webpack_require__(0) + "\"> </td> </tr> </tbody> </table> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-papers\">No Information</slot> </div> </div> <div class=\"card awards-card hide\"> <div class=\"click-area\"> <table> <tbody> <tr> <td class=\"card-title-wrapper\"> <h3>Awards</h3> </td> <td class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(1) + "\"> <img class=\"chevron svg-md hide\" src=\"" + __webpack_require__(0) + "\"> </td> </tr> </tbody> </table> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-awards\">No Information</slot> </div> </div> <div class=\"card courses-card hide\"> <div class=\"click-area\"> <table> <tbody> <tr> <td class=\"card-title-wrapper\"> <h3>Courses</h3> </td> <td class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(1) + "\"> <img class=\"chevron svg-md hide\" src=\"" + __webpack_require__(0) + "\"> </td> </tr> </tbody> </table> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-courses\">No Information</slot> </div> </div> <div class=\"card office-hours-card hide\"> <div class=\"click-area\"> <table> <tbody> <tr> <td class=\"card-title-wrapper\"> <h3>Office Hours</h3> </td> <td class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(1) + "\"> <img class=\"chevron svg-md hide\" src=\"" + __webpack_require__(0) + "\"> </td> </tr> </tbody> </table> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-office-hours\">No Information</slot> </div> </div> <div class=\"card links-card hide\"> <div class=\"click-area\"> <table> <tbody> <tr> <td class=\"card-title-wrapper\"> <h3>Links</h3> </td> <td class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(1) + "\"> <img class=\"chevron svg-md hide\" src=\"" + __webpack_require__(0) + "\"> </td> </tr> </tbody> </table> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-links\">No Information</slot> </div> </div> </div> </div>";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 600.000000 600.000000'%3E%3Cg fill='%23fff'%3E%3Cpath d='M213 63.2c-11.4 5.8-11.9 18.9-1 24.5 3.8 2 6 2.3 15.1 2.3 161.9 0 295.8 98.9 318.3 235 1.3 7.7 3 30.9 3.4 45.3.4 12.4 20.9 17.4 30.2 7.3 2.3-2.6 2.5-3.6 2.8-14.9 1.1-39.8-7.8-77.6-28.3-119.2C518.9 173.1 458.9 121 374 87.7c-43.9-17.3-80.8-24.2-139.5-26.2-16.3-.5-17.2-.5-21.5 1.7zM97.5 103.9c-11.6 2.6-19.7 6.6-32.4 16.1-16.7 12.7-31.1 31.4-37.8 49.2C11 212.6 19 255.1 53.1 306.5c12.4 18.6 28.8 40.7 42.6 57.3 11.9 14.4 45.2 47.9 58.8 59.1 49.6 41.2 128.1 87.5 176 103.8 24.5 8.3 45 12.2 68.5 13 47.6 1.6 88.4-12.6 117-40.7 12.6-12.5 17.3-22.9 17.3-38.5-.1-16.7-3.9-28.5-11-34.4-5.1-4.2-8.9-5.6-52.3-18.2-20.6-6-43.6-12.9-51-15.2-12-3.7-14.6-4.2-23.5-4.2-9.3 0-10.5.2-16.6 3.2-4.2 2.1-12.9 8.6-24.5 18.4-19.5 16.5-24.4 19.5-30.6 18.5-4.2-.7-31.2-13.9-47.4-23.1-48.6-28-86.8-62.5-113.7-103-9.9-14.8-13.1-21.5-12.2-25.4.8-4 3.9-7.1 21.7-22 22.9-19.2 25.7-23.1 25.8-34.8 0-5.7-1.2-9.2-15-43.3-17.2-42.5-23.1-56-26.5-61.2-3.4-5.1-9.5-8.4-19.5-10.3-9.8-1.9-33.6-2.8-39.5-1.6z'/%3E%3Cpath d='M243 135.9c-12.3 6.5-9.8 23 3.9 26 2.5.5 12 1.2 21.1 1.5 47.9 1.4 95.2 18.4 130.4 46.7 12.2 9.8 29.8 28.8 38 41.2 16.1 24.2 23.5 45.9 25.7 75.7 1.4 19.9 1.6 20.6 5 24.5 7.3 8.3 23.8 6.5 28.3-2.9 2-4.3 2.1-19 .1-33.7-8.7-65.5-51.6-121.4-118-154C340.8 143 301.9 134 260.6 134c-11.8 0-14.7.3-17.6 1.9z'/%3E%3Cpath d='M270.5 208.8c-4.5 2.1-7.2 5.6-8.1 10.2-.9 4.2.2 7.4 3.6 11.4 3.7 4.1 8 5.2 23.5 6 18 .9 34.2 6.2 49.6 16.1 15.1 9.8 24.1 19.5 30.5 33 4.3 8.9 6.3 17 7.3 29 .6 7 1.3 10.4 2.8 12.3 2.6 3.7 9.9 7.2 14.8 7.2 5.7 0 12.6-3.7 14.8-8 1.6-3 1.8-5.1 1.3-14.5-1.1-24.6-11-46.7-29-64.9-24.1-24.4-56.4-38-93.6-39.2-11.8-.4-14-.3-17.5 1.4z'/%3E%3C/g%3E%3C/svg%3E"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' width='801.333' height='800' viewBox='0 0 601.000000 600.000000'%3E%3Cg fill='%23fff'%3E%3Cpath d='M280.2 49.1c-9 1.1-19.7 6.6-26.9 13.7-10.3 10.2-11.2 12.7-22 61.9l-9.6 43.8-.1 15c-.1 33 7.7 43.9 38.4 54.1 8.4 2.8 8.8 2.8 37.5 3.2 28.2.3 29.3.2 38.7-2.2 12.7-3.2 25.1-9.2 30.6-14.5 8.7-8.5 12.7-23.1 12-43.4-.4-12.4-4.9-35.8-15.8-83-4.7-20.2-7.2-25.9-14.5-33.6-11.2-11.8-24.3-16.2-47.4-16-8 .1-17.4.5-20.9 1zM178.9 196.5c-3.6 2-5.3 6.5-4.7 12.7.9 9.1 6.5 11.6 23.9 10.6 10.3-.6 13.2-2.1 14.9-7.4 1.9-5.6.7-11.4-3-14.7-3-2.7-3.3-2.7-15.8-2.7-9 .1-13.5.5-15.3 1.5zm213.5-.5c-3.7 1.5-5.4 5-5.4 11.2 0 5 .4 6.2 2.9 9l2.9 3.3h13.5c13 0 13.6-.1 16.1-2.4 5.7-5.4 5.6-15.6-.1-20-2.3-1.9-3.9-2.1-15.2-2-6.9 0-13.6.4-14.7.9zm-204.5 35.1c-1.5 1.5-1.9 3-1.7 6.2l.3 4.2 4.9.3c7.8.5 9.6-.3 9.6-4.2 0-7.4-8.1-11.5-13.1-6.5zm214.4-.6c-2.4 1.7-3.8 6.4-2.8 9.5.6 1.7 1.5 2 7.5 2 3.8 0 7.2-.5 7.5-1.1 1.1-1.7-.5-7.9-2.6-10-2.3-2.3-6.6-2.5-9.6-.4zM20.3 251c-4.2 2.5-5.6 7.5-5.1 17.4.3 7 .6 7.9 3.6 10.9l3.2 3.2 277.3.3c262.4.2 277.4.1 280.7-1.5 4.9-2.5 6-5.4 6-16.1 0-9.4 0-9.4-3.4-12.8l-3.4-3.4H301.4c-273.7 0-277.9 0-281.1 2zm25.9 41.5c-6.5 2.8-6.2-2.5-6.2 113 0 112.6-.2 109.2 5.1 112.9 1.8 1.2 4.7 1.6 12.1 1.6 9.4 0 9.9-.1 13-2.9l3.3-2.9.5-55.4c.3-30.4.9-56.1 1.4-57.1 2.4-4.9-9.4-4.7 224.7-4.7h218.1l3.4 3.4 3.4 3.4v53.1c0 57.7 0 58.1 5.5 61.7 1.9 1.3 4.7 1.7 11 1.7 9.7 0 13.4-1.2 15.8-5.2 1.6-2.7 1.7-11.2 1.7-109.3 0-83-.3-106.8-1.3-108.8-.7-1.4-2.8-3.3-4.7-4.2-3.3-1.7-17.4-1.8-253.5-1.8-214.4.1-250.5.3-253.3 1.5z'/%3E%3Cpath d='M295.3 404.2c-.6.7-1.3 2.5-1.7 4-.3 1.6-1.1 2.8-1.6 2.8s-1.8 1.2-2.7 2.7c-1.3 2-1.9 5.5-2.3 13.2l-.5 10.4-54 16.5c-29.7 9-54.3 16.9-54.7 17.6-.4.6-.8 2.3-.8 3.8 0 2 .5 2.8 1.8 2.8 1.4 0 83.4-17.5 107.6-23 2.7-.6 5.3-.7 5.8-.2.4.4 1.7 5.7 2.7 11.7 1.9 10 3 12.5 5.6 12.5 2.6 0 3.6-2.4 5.5-12.5 1.1-6 2.4-11.3 2.8-11.7.5-.5 3.1-.4 5.8.2 24.2 5.5 106.2 23 107.6 23 2.3 0 2.5-5.2.3-7-.8-.7-25.5-8.5-54.7-17.4l-53.3-16.2-.5-10.5c-.4-7.7-1-11.2-2.3-13.2-.9-1.5-2.2-2.7-2.7-2.7s-1.3-1.2-1.6-2.8c-1-4.2-2.3-5.2-6.9-5.2-2.3 0-4.7.6-5.2 1.2zm-125 86.2c-2.4 2.1-2.8 3.2-2.8 7.6 0 4.4.4 5.5 2.8 7.6 6.6 5.7 16.7 1.1 16.7-7.6s-10.1-13.3-16.7-7.6zm123.6.5c-6.2 6.2-2 17.1 6.6 17.1 2 0 4.5-.5 5.6-1 2.2-1.2 4.9-6.1 4.9-8.9 0-8.8-10.9-13.4-17.1-7.2zm124.6-1.7c-3.4 1.9-4.4 4.1-4.5 9.1 0 6.3 3.3 9.7 9.5 9.7 6.1 0 9.5-3.6 9.5-10 0-4.2-.4-5.2-3.1-7.4-3.3-2.8-8-3.4-11.4-1.4z'/%3E%3C/g%3E%3C/svg%3E"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' width='800' height='801.333' viewBox='0 0 600.000000 601.000000'%3E%3Cg fill='%23fff'%3E%3Cpath d='M48 108.1c-2.5.5-7.4 2.3-11 4.1-7.3 3.8-11.6 8.7-15.2 17.5l-2.3 5.8v164c0 152.4.1 164.4 1.7 169.6 3.5 11.2 11.4 19.2 22.8 23.2l6.5 2.2 245.5.3c176.5.2 247.7 0 253.5-.8 8.7-1.2 16.2-4.2 21.1-8.3 3.9-3.3 8.9-12.7 10.3-19.5.8-3.8 1.1-51.9 1.1-164.8 0-141.9-.2-160.3-1.6-166.5-2.7-11.9-10-20.2-22.1-25.1l-5.8-2.3-250-.1c-138.4-.1-252 .2-254.5.7zm462 37.3c0 .5-209.1 206-210 206.4-.4.2-42.8-42.8-94.1-95.5-51.2-52.7-96.6-99.3-100.8-103.6l-7.6-7.7h206.3c113.4 0 206.2.2 206.2.4zM220 331c0 .3-3.9 4.1-8.7 8.4-4.9 4.3-32.9 31.6-62.4 60.6-34.2 33.7-55.1 53.6-58 55.1-4 2.2-5.6 2.4-19.1 2.4H57v-290l81.5 81.5c44.8 44.8 81.5 81.7 81.5 82zm324-17.5V458l-11.7-.1c-21.2-.1-17.6 2-46.5-26.2-13.9-13.6-42.8-42-64.3-63.1l-39-38.5 80.5-80.5c44.3-44.3 80.6-80.6 80.7-80.6.2 0 .3 65 .3 144.5zm-269.6 66.8c7.6 7.3 12.4 10.2 20.5 12.2 7.9 2.1 13.8 1.4 22.2-2.6 4.9-2.3 9.3-6.1 21.5-18l15.2-15.1 51.5 49.9 51.5 49.8-77.4.3c-42.6.1-112.4.1-155.1 0l-77.6-.3 51.9-50.7 51.9-50.8 8.9 9.8c5 5.3 11.7 12.3 15 15.5z'/%3E%3Cpath d='M291 158.6c-19.6 4-35.4 13.2-45.6 26.7-17.7 23.4-20.2 53-6.6 79.2 5.4 10.5 18.1 22.8 29.2 28.3 11.7 5.8 21.8 8.2 34.7 8.2 15.5 0 30.4-3.7 41-10.2 3.2-1.9 3.2-2 1.8-4.9-.9-1.6-1.8-2.9-2.1-2.9-.3 0-3.8 1.5-7.7 3.4-11 5.3-18.5 6.9-31.7 7-19.9 0-34.1-5.5-47.1-18.4-13.2-13.1-19.7-29.9-18.6-48.4 1.5-26.7 17-47.7 42.5-57.4 6.1-2.4 8-2.6 21.2-2.6 13.8 0 14.9.1 22.7 3.1 10.3 3.9 17.3 8.6 25 16.6 10.4 10.8 15.3 22.9 15.3 37.8 0 13.9-4.2 24.4-11.6 28.9-4.8 3.1-11.3 3.2-15.1.4-5-3.8-5.1-5.3-.5-31.5 2.3-13.2 4-24.4 3.7-24.8-.6-1.1-17.2-3.4-19-2.7-.8.3-1.5 1.7-1.5 3.1 0 1.4-.2 2.5-.5 2.5s-2.5-1.5-4.9-3.4c-12.1-9.2-30.7-6.6-42.5 5.9-12.3 13-15.4 32-7.8 46.7 5.2 9.9 13.8 14.8 26.3 14.8 7.6 0 13.9-1.8 19.7-5.8 4-2.8 4.6-3 5.8-1.6.7.9 3.6 2.7 6.3 4.2 5.9 3 19.3 4.2 26.2 2.3 8.9-2.4 16.6-10 20.7-20.4 2.9-7.4 3.5-24.9 1.2-33.7-5.9-22.6-25.8-41.9-50-48.5-5.9-1.6-25.7-2.8-30.5-1.9zm17.7 52.4c6.6 4 8.6 11 5.9 20.2-3.9 13.7-18.9 19.7-27.7 11.2-10.8-10.4-.8-33.2 14.6-33.4 2.3 0 5.4.9 7.2 2z'/%3E%3C/g%3E%3C/svg%3E"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ })
/******/ ]);
//# sourceMappingURL=components.js.map