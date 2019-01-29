;(function() {
"use strict";

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // identity function for calling harmony imports with the correct context
  /******/__webpack_require__.i = function (value) {
    return value;
  };
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 6);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports) {

  module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='30' viewBox='0 0 18 30'%3E%3Cpath fill='%23ADADAD' d='M0 0h9.333L18 15.001 9.333 30H0l8.667-14.999L0 0z'/%3E%3C/svg%3E";

  /***/
},
/* 1 */
/***/function (module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function () {
    var list = [];

    // return the list of modules as css string
    list.toString = function toString() {
      var result = [];
      for (var i = 0; i < this.length; i++) {
        var item = this[i];
        if (item[2]) {
          result.push("@media " + item[2] + "{" + item[1] + "}");
        } else {
          result.push(item[1]);
        }
      }
      return result.join("");
    };

    // import a list of modules into the list
    list.i = function (modules, mediaQuery) {
      if (typeof modules === "string") modules = [[null, modules, ""]];
      var alreadyImportedModules = {};
      for (var i = 0; i < this.length; i++) {
        var id = this[i][0];
        if (typeof id === "number") alreadyImportedModules[id] = true;
      }
      for (i = 0; i < modules.length; i++) {
        var item = modules[i];
        // skip already imported module
        // this implementation is not 100% perfect for weird media query combinations
        //  when a module is imported multiple times with different media queries.
        //  I hope this will never occur (Hey this way we have smaller bundles)
        if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
          if (mediaQuery && !item[2]) {
            item[2] = mediaQuery;
          } else if (mediaQuery) {
            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
          }
          list.push(item);
        }
      }
    };
    return list;
  };

  /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(9);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__lib_matchesSelector__ = __webpack_require__(3);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__ = __webpack_require__(8);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__ = __webpack_require__(7);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
    return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"];
  });
  /* unused harmony reexport matchesSelector */
  /* unused harmony reexport querySelectorSlot */
  /* unused harmony reexport createEvent */
  /**
   * Created by ThatJoeMoore on 2/14/17
   */

  /***/
},
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = matchesSelector;
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
    var proto = Element.prototype;
    var actual = proto.matches || proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector || function (s) {
      var doc = this.document || this.ownerDocument;
      return doc.querySelectorAll(s).indexOf(this) !== -1;
    };

    return actual.call(el, selector);
  }

  /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_listing_html__ = __webpack_require__(15);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_listing_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_faculty_listing_html__);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(2);
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

  var ATTR_PROFILE_IMAGE = "faculty-image";
  var ATTR_NAME = 'faculty-name';
  var ATTR_TITLE = 'faculty-title';
  var ATTR_OFFICE = 'faculty-office';
  var ATTR_PHONE = 'faculty-phone';
  var ATTR_EMAIL = 'faculty-email';
  var ATTR_OFFICE_HOURS = 'faculty-office-hours';
  var ATTR_RESEARCH = 'faculty-research';
  var ATTR_BIOGRAPHY = 'faculty-biography';
  var ATTR_PROFILE_LINK = 'faculty-profile-link';

  var DEFAULT_INFORMATION = "Unknown";

  var ByuFacultyListing = function (_HTMLElement) {
    _inherits(ByuFacultyListing, _HTMLElement);

    function ByuFacultyListing() {
      _classCallCheck(this, ByuFacultyListing);

      var _this = _possibleConstructorReturn(this, (ByuFacultyListing.__proto__ || Object.getPrototypeOf(ByuFacultyListing)).call(this));

      _this.attachShadow({ mode: 'open' });
      return _this;
    }

    _createClass(ByuFacultyListing, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        //This will stamp our template for us, then let us perform actions on the stamped DOM.
        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-faculty-listing', __WEBPACK_IMPORTED_MODULE_0__byu_faculty_listing_html___default.a, function () {
          applyProfileImage(_this2);
          applyProfileLinks(_this2);
          truncateText(_this2);
          setupSlotListeners(_this2);
          clearEmptyFields(_this2);
        });
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        teardownButtonListeners(this);
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
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
    }, {
      key: 'name',
      set: function set(value) {
        this.setAttribute(ATTR_NAME, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_NAME)) {
          return this.getAttribute(ATTR_NAME);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'title',
      set: function set(value) {
        this.setAttribute(ATTR_TITLE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_TITLE)) {
          return this.getAttribute(ATTR_TITLE);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'office',
      set: function set(value) {
        this.setAttribute(ATTR_OFFICE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_OFFICE)) {
          return this.getAttribute(ATTR_OFFICE);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'phone',
      set: function set(value) {
        this.setAttribute(ATTR_PHONE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_PHONE)) {
          return this.getAttribute(ATTR_PHONE);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'email',
      set: function set(value) {
        this.setAttribute(ATTR_EMAIL, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_EMAIL)) {
          return this.getAttribute(ATTR_EMAIL);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'office_hours',
      set: function set(value) {
        this.setAttribute(ATTR_OFFICE_HOURS, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_OFFICE_HOURS)) {
          return this.getAttribute(ATTR_OFFICE_HOURS);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'research',
      set: function set(value) {
        this.setAttribute(ATTR_RESEARCH, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_RESEARCH)) {
          return this.getAttribute(ATTR_RESEARCH);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'biography',
      set: function set(value) {
        this.setAttribute(ATTR_BIOGRAPHY, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_BIOGRAPHY)) {
          return this.getAttribute(ATTR_BIOGRAPHY);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'profileImage',
      set: function set(value) {
        this.setAttribute(ATTR_PROFILE_IMAGE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_PROFILE_IMAGE)) {
          return this.getAttribute(ATTR_PROFILE_IMAGE);
        }
        return '';
      }
    }, {
      key: 'profileLink',
      set: function set(value) {
        this.setAttribute(ATTR_PROFILE_LINK, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_PROFILE_LINK)) {
          return this.getAttribute(ATTR_PROFILE_LINK);
        }
        return '';
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return [ATTR_PROFILE_IMAGE, ATTR_NAME, ATTR_TITLE, ATTR_OFFICE, ATTR_PHONE, ATTR_EMAIL, ATTR_OFFICE_HOURS, ATTR_RESEARCH, ATTR_BIOGRAPHY, ATTR_PROFILE_LINK];
      }
    }]);

    return ByuFacultyListing;
  }(HTMLElement);

  window.customElements.define('byu-faculty-listing', ByuFacultyListing);
  window.ByuFacultyListing = ByuFacultyListing;

  // -------------------- Helper Functions --------------------
  function applyProfileImage(component) {
    var profileImages = component.shadowRoot.querySelectorAll('.faculty-image');

    for (var i = 0; i < profileImages.length; i++) {
      profileImages[i].src = component.profileImage;
      //profileImages[i].parentNode.setAttribute('href', component.profileLink);
    }
  }

  function applyProfileLinks(component) {
    var profileLinks = component.shadowRoot.querySelectorAll('.profile-link');
    for (var i = 0; i < profileLinks.length; i++) {
      profileLinks[i].setAttribute('href', component.profileLink);
    }
  }

  function truncateText(component) {
    var slots = component.shadowRoot.querySelectorAll('.slot');

    for (var i = 0; i < slots.length; i++) {
      if (slots[i].children[0].assignedNodes().length > 0) {
        var slot = slots[i].children[0].assignedNodes()[0];

        if (slots[i].parentNode.className == "research-slot-wrapper") {
          if (slot.innerText.length > 140) {
            while (slot.innerText.length > 140) {
              slot.innerText = slot.innerText.replace(/\W*\s(\S)*$/, '...');
            }
          }
        } else {
          if (slot.innerText.length > 400) {
            while (slot.innerText.length > 400) {
              slot.innerText = slot.innerText.replace(/\W*\s(\S)*$/, '...');
            }
            slot.innerHTML = slot.innerHTML + "<a style='color: #008080' href='" + component.profileLink + "'>Read More</a>";
          }
        }
      }
    }
  }

  function clearEmptyFields(component) {
    var office_hours = component.shadowRoot.querySelectorAll('.office-hours-slot-wrapper');

    for (var i = 0; i < office_hours.length; i++) {
      var element = office_hours[i];
      element = element.children[2];

      if (element.assignedNodes().length == 0) {
        office_hours[i].classList.add("hide");
      }
    }

    var research = component.shadowRoot.querySelectorAll('.research-slot-wrapper');
    var biography = component.shadowRoot.querySelectorAll('.biography-slot-wrapper');
    for (var i = 0; i < research.length; i++) {
      var element = research[i];
      element = element.children[1].children[0];

      if (element.assignedNodes().length == 0) {
        research[i].classList.add("hide");
        biography[i].children[0].classList.remove("section-header");
        biography[i].children[0].classList.add("adjusted-header");
      }

      element = biography[i];
      element = element.children[1].children[0];
      if (element.assignedNodes().length == 0) {
        biography[i].classList.add("hide");
      }
    }
  }

  function setupButtonListeners(component) {}
  // let button = component.shadowRoot.querySelector('.root');

  // let callback = component.__buttonListener = function(event) {
  //    alert("Testing");
  // };

  // button.addEventListener('click', callback, false);


  //We generally want to be good neighbors and clean up after ourselves when we're done with things.
  function teardownButtonListeners(component) {
    // let button = component.shadowRoot.querySelector('.root');

    // button.removeEventListener('click', component.__buttonListener, false);
  }

  function setupSlotListeners(component) {}
  // let slot = component.shadowRoot.querySelector('#apiKey-template');

  // //this will listen to changes to the contents of our <slot>, so we can take appropriate action
  // slot.addEventListener('slotchange', () => {
  //   applyApiKey(component);
  // }, false);


  /***/
},
/* 5 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_profile_html__ = __webpack_require__(16);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_profile_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_faculty_profile_html__);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(2);
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

  var ATTR_API_KEY = 'api-key';
  var ATTR_NAME = 'faculty-name';
  var ATTR_TITLE = 'faculty-title';
  var ATTR_OFFICE = 'faculty-office';
  var ATTR_PHONE = 'faculty-phone';
  var ATTR_EMAIL = 'faculty-email';
  var ATTR_OFFICE_HOURS = 'faculty-office-hours';
  var ATTR_RESEARCH = 'faculty-research';
  var ATTR_BIOGRAPHY = 'faculty-biography';
  var ATTR_PROFILE_IMAGE = 'faculty-image';
  var ATTR_BACKGROUND_IMAGE = 'background-image';

  var DEFAULT_apiKey = 1;
  var DEFAULT_INFORMATION = "Unknown";

  var ByuFacultyProfile = function (_HTMLElement2) {
    _inherits(ByuFacultyProfile, _HTMLElement2);

    function ByuFacultyProfile() {
      _classCallCheck(this, ByuFacultyProfile);

      var _this3 = _possibleConstructorReturn(this, (ByuFacultyProfile.__proto__ || Object.getPrototypeOf(ByuFacultyProfile)).call(this));

      _this3.attachShadow({ mode: 'open' });
      return _this3;
    }

    _createClass(ByuFacultyProfile, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this4 = this;

        //This will stamp our template for us, then let us perform actions on the stamped DOM.
        __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-faculty-profile', __WEBPACK_IMPORTED_MODULE_0__byu_faculty_profile_html___default.a, function () {
          applyBackgroundImage(_this4);
          applyProfileImage(_this4);
          setupButtonListeners(_this4);
          showContent(_this4);
          //applyApiKey(this);
          //setupSlotListeners(this);
        });
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        teardownButtonListeners(this);
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
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
            break;
          case ATTR_PROFILE_IMAGE:
            applyProfileImage(this);
            break;
        }
      }
    }, {
      key: 'apiKey',
      set: function set(value) {
        this.setAttribute(ATTR_API_KEY, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_API_KEY)) {
          return this.getAttribute(ATTR_API_KEY);
        }
        return DEFAULT_apiKey;
      }
    }, {
      key: 'name',
      set: function set(value) {
        this.setAttribute(ATTR_NAME, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_NAME)) {
          return this.getAttribute(ATTR_NAME);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'title',
      set: function set(value) {
        this.setAttribute(ATTR_TITLE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_TITLE)) {
          return this.getAttribute(ATTR_TITLE);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'office',
      set: function set(value) {
        this.setAttribute(ATTR_OFFICE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_OFFICE)) {
          return this.getAttribute(ATTR_OFFICE);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'phone',
      set: function set(value) {
        this.setAttribute(ATTR_PHONE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_PHONE)) {
          return this.getAttribute(ATTR_PHONE);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'email',
      set: function set(value) {
        this.setAttribute(ATTR_EMAIL, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_EMAIL)) {
          return this.getAttribute(ATTR_EMAIL);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'office_hours',
      set: function set(value) {
        this.setAttribute(ATTR_OFFICE_HOURS, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_OFFICE_HOURS)) {
          return this.getAttribute(ATTR_OFFICE_HOURS);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'research',
      set: function set(value) {
        this.setAttribute(ATTR_RESEARCH, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_RESEARCH)) {
          return this.getAttribute(ATTR_RESEARCH);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'biography',
      set: function set(value) {
        this.setAttribute(ATTR_BIOGRAPHY, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_BIOGRAPHY)) {
          return this.getAttribute(ATTR_BIOGRAPHY);
        }
        return DEFAULT_INFORMATION;
      }
    }, {
      key: 'profileImage',
      set: function set(value) {
        this.setAttribute(ATTR_PROFILE_IMAGE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_PROFILE_IMAGE)) {
          return this.getAttribute(ATTR_PROFILE_IMAGE);
        }
        return '';
      }
    }, {
      key: 'backgroundImage',
      set: function set(value) {
        this.setAttribute(ATTR_BACKGROUND_IMAGE, value);
      },
      get: function get() {
        if (this.hasAttribute(ATTR_BACKGROUND_IMAGE)) {
          return this.getAttribute(ATTR_BACKGROUND_IMAGE);
        }
        return '';
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return [ATTR_PROFILE_IMAGE, ATTR_BACKGROUND_IMAGE, ATTR_API_KEY, ATTR_NAME, ATTR_TITLE, ATTR_OFFICE, ATTR_PHONE, ATTR_EMAIL, ATTR_OFFICE_HOURS, ATTR_RESEARCH, ATTR_BIOGRAPHY];
      }
    }]);

    return ByuFacultyProfile;
  }(HTMLElement);

  window.customElements.define('byu-faculty-profile', ByuFacultyProfile);
  window.ByuFacultyProfile = ByuFacultyProfile;

  // -------------------- Helper Functions --------------------
  function applyBackgroundImage(component) {
    var imageBox = component.shadowRoot.querySelector('div.background-image-wrapper');

    if (imageBox) {
      imageBox.style.backgroundImage = "url('" + component.backgroundImage + "')";
    }
    //remove background of table in front of background image in firefox
    var table = component.shadowRoot.querySelector('table.content-wrapper');
    //Allow font of heading to be inherited
    var tableData = component.shadowRoot.querySelector('td#right-column');
    //Widen space for profile image
    var imageContainer = component.shadowRoot.querySelector('td#left-column');
    if (table) {
      table.style.background = 'transparent';
      table.style.border = 'solid 0px #fff';
      tableData.style['color'] = 'inherit';
      tableData.style['font-size'] = 'inherit';
      tableData.style['font-family'] = 'inherit';
      imageContainer.style['width'] = '191px';
    }
  }

  function applyProfileImage(component) {
    var profileImages = component.shadowRoot.querySelectorAll('.faculty-image');

    for (var i = 0; i < profileImages.length; i++) {
      profileImages[i].src = component.profileImage;
    }
  }

  function setupButtonListeners(component) {

    var buttons = component.shadowRoot.querySelectorAll('.click-area');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function cardClick() {
        var element = this;
        if (!this.parentNode.classList.contains('expanded')) {
          this.parentNode.className += ' expanded';
          element.children[1].children[0].setAttribute('style', 'transform:rotate(90deg)');
        } else {
          this.parentNode.classList.remove('expanded');
          element.children[1].children[0].setAttribute('style', 'transform:rotate(0deg)');
        }
      });
    }
  }

  //We generally want to be good neighbors and clean up after ourselves when we're done with things.
  function teardownButtonListeners(component) {
    // let button = component.shadowRoot.querySelector('.apiKey-button');

    // button.removeEventListener('click', component.__buttonListener, false);
    var buttons = component.shadowRoot.querySelectorAll('.click-area');
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
    var slots = component.shadowRoot.querySelectorAll('.card-slot');
    var cards = component.shadowRoot.querySelectorAll('.card');
    for (var i = 0; i < slots.length; i++) {
      var element = slots[i].parentNode.parentNode;

      if (slots[i].assignedNodes().length > 0) {
        element.classList.remove("hide");
      }
    }
  }

  /***/
},
/* 6 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__byu_faculty_listing_byu_faculty_listing_js__ = __webpack_require__(4);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__byu_faculty_profile_byu_faculty_profile_js__ = __webpack_require__(5);
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

  /***/
},
/* 7 */
/***/function (module, __webpack_exports__, __webpack_require__) {

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
      return new CustomEvent(name, { detail: detail, cancelable: true, bubbles: true });
    }
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, true, true, detail);
    return evt;
  }

  /***/
},
/* 8 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* unused harmony export default */
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__ = __webpack_require__(3);
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
    var roots = slot.assignedNodes({ flatten: true }).filter(function (n) {
      return n.nodeType === Node.ELEMENT_NODE;
    });

    for (var i = 0, len = roots.length; i < len; i++) {
      var each = roots[i];
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__["a" /* default */])(each, selector)) {
        return each;
      }
      var child = each.querySelector(selector);
      if (child) {
        return child;
      }
    }
    return null;
  }

  /***/
},
/* 9 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["a"] = applyTemplate;
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(14);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_hash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hash_sum__);
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

  var TEMPLATE_RENDERED_CLASS = 'byu-component-rendered';

  function applyTemplate(element, elementName, template, callback) {
    var sum = __WEBPACK_IMPORTED_MODULE_0_hash_sum___default()(template);

    var elSettings = element.__byu_webCommunity_components = element.__byu_webCommunity_components || {};
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
    var templateId = '__byu-custom-element-template_' + elementName + '_' + sum;
    var templateElement = document.head.querySelector('template#' + templateId);
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
    var imported = document.importNode(templateElement.content, true);
    var shadow = element.shadowRoot;
    //It'd be nice if we could just diff the DOM and replace what changed between templates, but that might lead to
    // event listeners getting applied twice.  Easier to just clear out the shadow DOM and replace it.
    while (shadow.firstChild) {
      shadow.removeChild(shadow.firstChild);
    }
    shadow.appendChild(imported);
    setTimeout(function () {
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

  /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
  // imports
  exports.i(__webpack_require__(12), "");

  // module
  exports.push([module.i, "/*!\r\n *  @license\r\n *    Copyright 2017 Brigham Young University\r\n *\r\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\r\n *    you may not use this file except in compliance with the License.\r\n *    You may obtain a copy of the License at\r\n *\r\n *        http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n *    Unless required by applicable law or agreed to in writing, software\r\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\r\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n *    See the License for the specific language governing permissions and\r\n *    limitations under the License.\r\n */\n/*!\r\n *  @license\r\n *    Copyright 2017 Brigham Young University\r\n *\r\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\r\n *    you may not use this file except in compliance with the License.\r\n *    You may obtain a copy of the License at\r\n *\r\n *        http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n *    Unless required by applicable law or agreed to in writing, software\r\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\r\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n *    See the License for the specific language governing permissions and\r\n *    limitations under the License.\r\n */.adjusted-header{color:#002e5d;margin:0}.biography-slot-wrapper{line-height:20px}.contact-wrapper{margin:36px 0 16px}.contact-wrapper>div ::slotted(p){margin:0}.container-fluid{max-width:1032px;margin-right:auto;margin-left:auto}.faculty-image{height:278px;vertical-align:middle;width:auto;border-radius:5px;box-shadow:4px 5px 2px -2px rgba(0,0,0,.2);-moz-box-shadow:rgba(0,0,0,.2) 4px 5px 2px -2px;-webkit-box-shadow:rgba(0,0,0,.2) 4px 5px 2px -2px}#faculty-listing-column-middle>a ::slotted(div){display:block;font-size:1.5em;font-weight:700}#faculty-listing-column-middle>a ::slotted(div),#faculty-listing-column-middle>a ::slotted(h2){color:#002e5d;font-family:HCo Ringside Narrow SSm,Arial Narrow,sans-serif;margin:0}#faculty-listing-column-right{padding-right:40px}#faculty-listing-column-middle ::slotted(h2){margin-top:0}.hide{display:none}.listing-root{padding:16px;background-color:#fff;color:#515151;font-weight:200;line-height:20px;margin:24px auto;min-width:274px;min-height:282px;vertical-align:top;border-radius:5px;box-shadow:1px 4px 2px -2px rgba(0,0,0,.2);-moz-box-shadow:rgba(0,0,0,.2) 1px 4px 2px -2px;-webkit-box-shadow:rgba(0,0,0,.2) 1px 4px 2px -2px}.listing-root,.listing-root ::slotted(h2){font-family:HCo Ringside Narrow SSm,Arial Narrow,sans-serif}.listing-root ::slotted(h2){color:#002e5d;margin:0}.listing-root ::slotted(p),.slot>::slotted(p){margin:0}.profile-link{text-decoration:none}.biography-slot-wrapper,.research-slot-wrapper{overflow:hidden}.research-slot-wrapper{line-height:20px}.research-slot-wrapper>h3{margin-top:0}.section-header{color:#002e5d;margin:12px 0 0}@media only screen and (max-width:1290px){.container-fluid{margin-right:10%;margin-left:10%}}@media only screen and (max-width:1200px){.listing-root{max-width:750px;margin-left:auto;margin-right:auto}}@media only screen and (max-width:950px){.image-wrapper{margin:0 auto;padding-left:0}.container-fluid{margin-right:10%;margin-left:10%}#faculty-listing-column-middle{padding-left:40px}}@media only screen and (max-width:630px){.faculty-image{height:150px;width:auto}#faculty-listing-column-middle{text-align:center;padding-left:15px}.image-wrapper{margin:0 auto;padding-left:0;padding-bottom:10px;text-align:center}}@media (min-width:631px){.col-sm-5{width:41.66666667%}}@media (min-width:1200px){.col-lg-3{width:25%}}@media (min-width:992px){.col-md-3{width:25%}}", ""]);

  // exports


  /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
  // imports
  exports.i(__webpack_require__(13), "");

  // module
  exports.push([module.i, "/*!\r\n *  @license\r\n *    Copyright 2017 Brigham Young University\r\n *\r\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\r\n *    you may not use this file except in compliance with the License.\r\n *    You may obtain a copy of the License at\r\n *\r\n *        http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n *    Unless required by applicable law or agreed to in writing, software\r\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\r\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n *    See the License for the specific language governing permissions and\r\n *    limitations under the License.\r\n */\n/*!\r\n *  @license\r\n *    Copyright 2017 Brigham Young University\r\n *\r\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\r\n *    you may not use this file except in compliance with the License.\r\n *    You may obtain a copy of the License at\r\n *\r\n *        http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n *    Unless required by applicable law or agreed to in writing, software\r\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\r\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n *    See the License for the specific language governing permissions and\r\n *    limitations under the License.\r\n */#background-image{display:none;overflow:hidden;max-height:0;height:0;opacity:0}.background-image-wrapper{background-position:50%;background-size:cover;height:300px;width:100%}.card{background-color:#fff;color:#515151;font-family:HCo Ringside Narrow SSm,Arial Narrow,sans-serif;font-weight:200;line-height:20px;margin:20px auto;max-width:824px;min-width:300px;border-radius:5px;box-shadow:1px 4px 2px -2px rgba(0,0,0,.2);-moz-box-shadow:rgba(0,0,0,.2) 1px 4px 2px -2px;-webkit-box-shadow:rgba(0,0,0,.2) 1px 4px 2px -2px}.card-chevron-wrapper{text-align:right;display:inline;float:right}.card-content{padding:8px 20px 16px;display:none;overflow:hidden;max-height:0;height:0;opacity:0}.card-title-wrapper ::slotted(h3){color:#002e5d;margin:0}.card-title-wrapper ::slotted(div){color:#002e5d;margin:0;font-size:1.17em;font-family:HCo Ringside Narrow SSm,Arial Narrow,sans-serif;font-weight:600;line-height:20px;display:inline}.card-content ::slotted(*){margin:0}.card-title-wrapper>h3{color:#002e5d;margin:0;display:inline}.card-title-wrapper{display:inline}.center-col{margin:0 auto;padding-left:0}.click-area{padding:16px;transition:.2s ease-in-out;-webkit-transition:.2s ease-in-out;-moz-transition:.2s ease-in-out;-ms-transition:.2s ease-in-out;-o-transition:.2s ease-in-out}.click-area:hover{background-color:#c5c5c5;cursor:pointer}.chevron.svg-md{transition:.2s ease-in-out;-webkit-transition:.2s ease-in-out;-moz-transition:.2s ease-in-out;-ms-transition:.2s ease-in-out;-o-transition:.2s ease-in-out}.contact-wrapper{margin:32px 0 0}.container-fluid{padding:0}.content-wrapper{align-content:center;color:#fff;font-family:HCo Ringside Narrow SSm,Arial Narrow,sans-serif;font-weight:500;line-height:24px;margin:auto;text-shadow:4px 4px 8px #000;max-width:824px;height:300px;min-width:350px}.expanded>.card-content{display:block;max-height:500px;opacity:1;height:auto}.faculty-image{height:250px;width:auto;border-radius:5px;box-shadow:4px 5px 2px -2px rgba(0,0,0,.2);-moz-box-shadow:rgba(0,0,0,.2) 4px 5px 2px -2px;-webkit-box-shadow:rgba(0,0,0,.2) 4px 5px 2px -2px}.faculty-image-wrapper{padding-top:25px}#faculty-name::slotted(div){line-height:28px}.hide{display:none;overflow:hidden;max-height:0;height:0;opacity:0}.content-wrapper ::slotted(div),.content-wrapper ::slotted(h1){font-family:HCo Ringside Narrow SSm,Arial Narrow,sans-serif;margin:0 0 8px;font-weight:500}.content-wrapper ::slotted(div){display:block;font-size:2em}.svg-md{fill:#c1c1c1;height:24px;vertical-align:middle;width:24px}.svg-md:hover{cursor:pointer}.svg-shadow{-webkit-filter:drop-shadow(2px 2px 4px #000);filter:drop-shadow(2px 2px 4px #000000)}.svg-sm{fill:#fff;height:16px;vertical-align:middle;width:16px}.vertical-center-col{padding-top:60px;padding-left:0}@media only screen and (max-width:1050px){.card,.content-wrapper{margin-left:10%;margin-right:10%}}@media only screen and (max-width:700px){.vertical-center-col{padding-right:0;padding-left:30px}.faculty-image{height:200px}.faculty-image-wrapper{padding-top:50px}}@media only screen and (max-width:499px){.faculty-image{height:120px}.faculty-image-wrapper{padding-top:10px}.center-col,.vertical-center-col{text-align:center;padding-left:15px}.vertical-center-col{padding-top:10px;padding-right:15px}.contact-wrapper{margin-top:15px}}@media (min-width:500px){.col-sm-4{width:33.333333%}.col-sm-8{width:66.666666%}}", ""]);

  // exports


  /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
  // imports


  // module
  exports.push([module.i, "/*!\n * Generated using the Bootstrap Customizer (https://getbootstrap.com/docs/3.4/customize/)\n */\n/*!\n * Bootstrap v3.4.0 (https://getbootstrap.com/)\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=button]{cursor:pointer}.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{margin-right:-15px;margin-left:-15px}.row-no-gutters{margin-right:0;margin-left:0}.row-no-gutters [class*=col-]{padding-right:0;padding-left:0}.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before,.row:after,.row:before{display:table;content:\" \"}.clearfix:after,.container-fluid:after,.container:after,.row:after{clear:both}.center-block{display:block;margin-right:auto;margin-left:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-lg,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block,.visible-md,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-sm,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-xs,.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block{display:none!important}@media (max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table!important}tr.visible-xs{display:table-row!important}td.visible-xs,th.visible-xs{display:table-cell!important}}@media (max-width:767px){.visible-xs-block{display:block!important}}@media (max-width:767px){.visible-xs-inline{display:inline!important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table!important}tr.visible-sm{display:table-row!important}td.visible-sm,th.visible-sm{display:table-cell!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table!important}tr.visible-md{display:table-row!important}td.visible-md,th.visible-md{display:table-cell!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block!important}}@media (min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table!important}tr.visible-lg{display:table-row!important}td.visible-lg,th.visible-lg{display:table-cell!important}}@media (min-width:1200px){.visible-lg-block{display:block!important}}@media (min-width:1200px){.visible-lg-inline{display:inline!important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block!important}}@media (max-width:767px){.hidden-xs{display:none!important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none!important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none!important}}@media (min-width:1200px){.hidden-lg{display:none!important}}.visible-print{display:none!important}@media print{.visible-print{display:block!important}table.visible-print{display:table!important}tr.visible-print{display:table-row!important}td.visible-print,th.visible-print{display:table-cell!important}}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}}@media print{.hidden-print{display:none!important}}", ""]);

  // exports


  /***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1)();
  // imports


  // module
  exports.push([module.i, "/*!\n * Generated using the Bootstrap Customizer (https://getbootstrap.com/docs/3.4/customize/)\n */\n/*!\n * Bootstrap v3.4.0 (https://getbootstrap.com/)\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=button]{cursor:pointer}.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{margin-right:-15px;margin-left:-15px}.row-no-gutters{margin-right:0;margin-left:0}.row-no-gutters [class*=col-]{padding-right:0;padding-left:0}.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before,.row:after,.row:before{display:table;content:\" \"}.clearfix:after,.container-fluid:after,.container:after,.row:after{clear:both}.center-block{display:block;margin-right:auto;margin-left:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-lg,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block,.visible-md,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-sm,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-xs,.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block{display:none!important}@media (max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table!important}tr.visible-xs{display:table-row!important}td.visible-xs,th.visible-xs{display:table-cell!important}}@media (max-width:767px){.visible-xs-block{display:block!important}}@media (max-width:767px){.visible-xs-inline{display:inline!important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table!important}tr.visible-sm{display:table-row!important}td.visible-sm,th.visible-sm{display:table-cell!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table!important}tr.visible-md{display:table-row!important}td.visible-md,th.visible-md{display:table-cell!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block!important}}@media (min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table!important}tr.visible-lg{display:table-row!important}td.visible-lg,th.visible-lg{display:table-cell!important}}@media (min-width:1200px){.visible-lg-block{display:block!important}}@media (min-width:1200px){.visible-lg-inline{display:inline!important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block!important}}@media (max-width:767px){.hidden-xs{display:none!important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none!important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none!important}}@media (min-width:1200px){.hidden-lg{display:none!important}}.visible-print{display:none!important}@media print{.visible-print{display:block!important}table.visible-print{display:table!important}tr.visible-print{display:table-row!important}td.visible-print,th.visible-print{display:table-cell!important}}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}}@media print{.hidden-print{display:none!important}}", ""]);

  // exports


  /***/
},
/* 14 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  function pad(hash, len) {
    while (hash.length < len) {
      hash = '0' + hash;
    }
    return hash;
  }

  function fold(hash, text) {
    var i;
    var chr;
    var len;
    if (text.length === 0) {
      return hash;
    }
    for (i = 0, len = text.length; i < len; i++) {
      chr = text.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash < 0 ? hash * -2 : hash;
  }

  function foldObject(hash, o, seen) {
    return Object.keys(o).sort().reduce(foldKey, hash);
    function foldKey(hash, key) {
      return foldValue(hash, o[key], key, seen);
    }
  }

  function foldValue(input, value, key, seen) {
    var hash = fold(fold(fold(input, key), toString(value)), typeof value === 'undefined' ? 'undefined' : _typeof(value));
    if (value === null) {
      return fold(hash, 'null');
    }
    if (value === undefined) {
      return fold(hash, 'undefined');
    }
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      if (seen.indexOf(value) !== -1) {
        return fold(hash, '[Circular]' + key);
      }
      seen.push(value);
      return foldObject(hash, value, seen);
    }
    return fold(hash, value.toString());
  }

  function toString(o) {
    return Object.prototype.toString.call(o);
  }

  function sum(o) {
    return pad(foldValue(0, o, '', []).toString(16), 8);
  }

  module.exports = sum;

  /***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

  module.exports = "<style>/*" + __webpack_require__(10) + "*/</style> <div class=\"root listing-root container-fluid\"> <div class=\"row\"> <div id=\"faculty-listing-column-left\" class=\"col-lg-3 col-md-5 col-sm-5 col-xs-12\"> <div class=\"image-wrapper\"> <a class=\"profile-link\" href=\"\"> <img class=\"faculty-image\" id=\"default-image\"> </a> </div> </div> <div id=\"faculty-listing-column-middle\" class=\"col-lg-3 col-md-5 col-sm-5 col-xs-12\"> <a class=\"profile-link\" href=\"\"> <slot id=\"listing-name\" name=\"listing-name\"></slot> </a> <i><slot name=\"listing-title\"></slot></i> <div class=\"contact-wrapper\"> <div class=\"office-slot-wrapper\"> <b>Office: </b><slot name=\"listing-office\"></slot> </div> <div class=\"phone-slot-wrapper\"> <b>Phone: </b><slot name=\"listing-phone\"></slot> </div> <div class=\"email-slot-wrapper\"> <b>Email: </b><slot name=\"listing-email\"></slot> </div> </div> <div class=\"office-hours-slot-wrapper\"> <b>Office Hours: </b><br> <slot name=\"listing-office-hours\"></slot> </div> </div> <div id=\"faculty-listing-column-right\" class=\"col-lg-6 visible-lg\"> <div class=\"research-slot-wrapper\"> <h3 class=\"section-header\">Research</h3> <div class=\"slot\"> <slot name=\"listing-research\"></slot> </div> </div> <div class=\"biography-slot-wrapper\"> <h3 class=\"section-header\">Biography</h3> <div class=\"slot\"> <slot name=\"listing-biography\"></slot> </div> </div> </div> </div> </div>";

  /***/
},
/* 16 */
/***/function (module, exports, __webpack_require__) {

  module.exports = "<head> </head> <style>" + __webpack_require__(11) + "</style> <div class=\"root profile-root\"> <div class=\"background-image-wrapper\"> <div class=\"content-wrapper container-fluid\"> <div class=\"col-xs-12 col-sm-4 center-col\"> <div class=\"faculty-image-wrapper\"> <img class=\"faculty-image\" id=\"default-image\" src=\"xxxHTMLLINKxxx0.24222444686637190.9062782358037982xxx\" alt=\"Faculty Image\"> </div> </div> <div class=\"col-xs-12 col-sm-8 vertical-center-col\"> <slot id=\"faculty-name\" name=\"faculty-name\"></slot> <i><slot name=\"faculty-title\"></slot></i> <div class=\"contact-wrapper\"> <div class=\"office-slot-wrapper\"> <span><img class=\"svg-sm svg-shadow\" src=\"" + __webpack_require__(18) + "\" alt=\"Desk\"> Office: <slot name=\"faculty-office\"></slot></span> </div> <div class=\"email-slot-wrapper\"> <span><img class=\"svg-sm svg-shadow\" src=\"" + __webpack_require__(19) + "\" alt=\"Email\"> Email: <slot name=\"faculty-email\"></slot></span> </div> <div class=\"phone-slot-wrapper\"> <span><img class=\"svg-sm svg-shadow\" src=\"" + __webpack_require__(17) + "\" alt=\"Phone\"> Phone: <slot name=\"faculty-phone\"></slot></span> </div> </div> </div> </div> </div> </div> <div class=\"additional-info-wrapper\"> <div class=\"card biography-card hide container-fluid\"> <div class=\"click-area\"> <div class=\"card-title-wrapper\"> <h3>Biography</h3> </div> <div class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(0) + "\"> </div> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-biography\">No Information</slot> </div> </div> <div class=\"card research-card hide container-fluid\"> <div class=\"click-area\"> <div class=\"card-title-wrapper\"> <h3>Research</h3> </div> <div class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(0) + "\"> </div> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-research\">No Information</slot> </div> </div> <div class=\"card committees-card hide container-fluid\"> <div class=\"click-area\"> <div class=\"card-title-wrapper\"> <h3>Committees</h3> </div> <div class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(0) + "\"> </div> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-committees\">No Information</slot> </div> </div> <div class=\"card students-card hide container-fluid\"> <div class=\"click-area\"> <div class=\"card-title-wrapper\"> <h3>Students</h3> </div> <div class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(0) + "\"> </div> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-students\">No Information</slot> </div> </div> <div class=\"card papers-card hide container-fluid\"> <div class=\"click-area\"> <div class=\"card-title-wrapper\"> <h3>Publications</h3> </div> <div class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(0) + "\"> </div> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-papers\">No Information</slot> </div> </div> <div class=\"card awards-card hide container-fluid\"> <div class=\"click-area\"> <div class=\"card-title-wrapper\"> <h3>Awards</h3> </div> <div class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(0) + "\"> </div> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-awards\">No Information</slot> </div> </div> <div class=\"card courses-card hide container-fluid\"> <div class=\"click-area\"> <div class=\"card-title-wrapper\"> <h3>Courses</h3> </div> <div class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(0) + "\"> </div> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-courses\">No Information</slot> </div> </div> <div class=\"card office-hours-card hide container-fluid\"> <div class=\"click-area\"> <div class=\"card-title-wrapper\"> <h3>Office Hours</h3> </div> <div class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(0) + "\"> </div> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-office-hours\">No Information</slot> </div> </div> <div class=\"card links-card hide container-fluid\"> <div class=\"click-area\"> <div class=\"card-title-wrapper\"> <h3>Links</h3> </div> <div class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(0) + "\"> </div> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-links\">No Information</slot> </div> </div> <div class=\"card custom-card hide container-fluid\"> <div class=\"click-area\"> <div class=\"card-title-wrapper\"> <slot class=\"card-slot\" name=\"faculty-custom-header\"></slot> </div> <div class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(0) + "\"> </div> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-custom-body\">No Information</slot> </div> </div> <div class=\"card education-card hide container-fluid\"> <div class=\"click-area\"> <div class=\"card-title-wrapper\"> <h3>Education</h3> </div> <div class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(0) + "\"> </div> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-education\">No Information</slot> </div> </div> <div class=\"card cv-card hide container-fluid\"> <div class=\"click-area\"> <div class=\"card-title-wrapper\"> <h3>Curriculum Vitae</h3> </div> <div class=\"card-chevron-wrapper\"> <img class=\"chevron svg-md\" src=\"" + __webpack_require__(0) + "\"> </div> </div> <div class=\"card-content\"> <slot class=\"card-slot\" name=\"faculty-cv\">No Information</slot> </div> </div> </div>";

  /***/
},
/* 17 */
/***/function (module, exports) {

  module.exports = "data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 600.000000 600.000000'%3E%3Cg fill='%23fff'%3E%3Cpath d='M213 63.2c-11.4 5.8-11.9 18.9-1 24.5 3.8 2 6 2.3 15.1 2.3 161.9 0 295.8 98.9 318.3 235 1.3 7.7 3 30.9 3.4 45.3.4 12.4 20.9 17.4 30.2 7.3 2.3-2.6 2.5-3.6 2.8-14.9 1.1-39.8-7.8-77.6-28.3-119.2C518.9 173.1 458.9 121 374 87.7c-43.9-17.3-80.8-24.2-139.5-26.2-16.3-.5-17.2-.5-21.5 1.7zM97.5 103.9c-11.6 2.6-19.7 6.6-32.4 16.1-16.7 12.7-31.1 31.4-37.8 49.2C11 212.6 19 255.1 53.1 306.5c12.4 18.6 28.8 40.7 42.6 57.3 11.9 14.4 45.2 47.9 58.8 59.1 49.6 41.2 128.1 87.5 176 103.8 24.5 8.3 45 12.2 68.5 13 47.6 1.6 88.4-12.6 117-40.7 12.6-12.5 17.3-22.9 17.3-38.5-.1-16.7-3.9-28.5-11-34.4-5.1-4.2-8.9-5.6-52.3-18.2-20.6-6-43.6-12.9-51-15.2-12-3.7-14.6-4.2-23.5-4.2-9.3 0-10.5.2-16.6 3.2-4.2 2.1-12.9 8.6-24.5 18.4-19.5 16.5-24.4 19.5-30.6 18.5-4.2-.7-31.2-13.9-47.4-23.1-48.6-28-86.8-62.5-113.7-103-9.9-14.8-13.1-21.5-12.2-25.4.8-4 3.9-7.1 21.7-22 22.9-19.2 25.7-23.1 25.8-34.8 0-5.7-1.2-9.2-15-43.3-17.2-42.5-23.1-56-26.5-61.2-3.4-5.1-9.5-8.4-19.5-10.3-9.8-1.9-33.6-2.8-39.5-1.6z'/%3E%3Cpath d='M243 135.9c-12.3 6.5-9.8 23 3.9 26 2.5.5 12 1.2 21.1 1.5 47.9 1.4 95.2 18.4 130.4 46.7 12.2 9.8 29.8 28.8 38 41.2 16.1 24.2 23.5 45.9 25.7 75.7 1.4 19.9 1.6 20.6 5 24.5 7.3 8.3 23.8 6.5 28.3-2.9 2-4.3 2.1-19 .1-33.7-8.7-65.5-51.6-121.4-118-154C340.8 143 301.9 134 260.6 134c-11.8 0-14.7.3-17.6 1.9z'/%3E%3Cpath d='M270.5 208.8c-4.5 2.1-7.2 5.6-8.1 10.2-.9 4.2.2 7.4 3.6 11.4 3.7 4.1 8 5.2 23.5 6 18 .9 34.2 6.2 49.6 16.1 15.1 9.8 24.1 19.5 30.5 33 4.3 8.9 6.3 17 7.3 29 .6 7 1.3 10.4 2.8 12.3 2.6 3.7 9.9 7.2 14.8 7.2 5.7 0 12.6-3.7 14.8-8 1.6-3 1.8-5.1 1.3-14.5-1.1-24.6-11-46.7-29-64.9-24.1-24.4-56.4-38-93.6-39.2-11.8-.4-14-.3-17.5 1.4z'/%3E%3C/g%3E%3C/svg%3E";

  /***/
},
/* 18 */
/***/function (module, exports) {

  module.exports = "data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' width='801.333' height='800' viewBox='0 0 601.000000 600.000000'%3E%3Cg fill='%23fff'%3E%3Cpath d='M280.2 49.1c-9 1.1-19.7 6.6-26.9 13.7-10.3 10.2-11.2 12.7-22 61.9l-9.6 43.8-.1 15c-.1 33 7.7 43.9 38.4 54.1 8.4 2.8 8.8 2.8 37.5 3.2 28.2.3 29.3.2 38.7-2.2 12.7-3.2 25.1-9.2 30.6-14.5 8.7-8.5 12.7-23.1 12-43.4-.4-12.4-4.9-35.8-15.8-83-4.7-20.2-7.2-25.9-14.5-33.6-11.2-11.8-24.3-16.2-47.4-16-8 .1-17.4.5-20.9 1zM178.9 196.5c-3.6 2-5.3 6.5-4.7 12.7.9 9.1 6.5 11.6 23.9 10.6 10.3-.6 13.2-2.1 14.9-7.4 1.9-5.6.7-11.4-3-14.7-3-2.7-3.3-2.7-15.8-2.7-9 .1-13.5.5-15.3 1.5zm213.5-.5c-3.7 1.5-5.4 5-5.4 11.2 0 5 .4 6.2 2.9 9l2.9 3.3h13.5c13 0 13.6-.1 16.1-2.4 5.7-5.4 5.6-15.6-.1-20-2.3-1.9-3.9-2.1-15.2-2-6.9 0-13.6.4-14.7.9zm-204.5 35.1c-1.5 1.5-1.9 3-1.7 6.2l.3 4.2 4.9.3c7.8.5 9.6-.3 9.6-4.2 0-7.4-8.1-11.5-13.1-6.5zm214.4-.6c-2.4 1.7-3.8 6.4-2.8 9.5.6 1.7 1.5 2 7.5 2 3.8 0 7.2-.5 7.5-1.1 1.1-1.7-.5-7.9-2.6-10-2.3-2.3-6.6-2.5-9.6-.4zM20.3 251c-4.2 2.5-5.6 7.5-5.1 17.4.3 7 .6 7.9 3.6 10.9l3.2 3.2 277.3.3c262.4.2 277.4.1 280.7-1.5 4.9-2.5 6-5.4 6-16.1 0-9.4 0-9.4-3.4-12.8l-3.4-3.4H301.4c-273.7 0-277.9 0-281.1 2zm25.9 41.5c-6.5 2.8-6.2-2.5-6.2 113 0 112.6-.2 109.2 5.1 112.9 1.8 1.2 4.7 1.6 12.1 1.6 9.4 0 9.9-.1 13-2.9l3.3-2.9.5-55.4c.3-30.4.9-56.1 1.4-57.1 2.4-4.9-9.4-4.7 224.7-4.7h218.1l3.4 3.4 3.4 3.4v53.1c0 57.7 0 58.1 5.5 61.7 1.9 1.3 4.7 1.7 11 1.7 9.7 0 13.4-1.2 15.8-5.2 1.6-2.7 1.7-11.2 1.7-109.3 0-83-.3-106.8-1.3-108.8-.7-1.4-2.8-3.3-4.7-4.2-3.3-1.7-17.4-1.8-253.5-1.8-214.4.1-250.5.3-253.3 1.5z'/%3E%3Cpath d='M295.3 404.2c-.6.7-1.3 2.5-1.7 4-.3 1.6-1.1 2.8-1.6 2.8s-1.8 1.2-2.7 2.7c-1.3 2-1.9 5.5-2.3 13.2l-.5 10.4-54 16.5c-29.7 9-54.3 16.9-54.7 17.6-.4.6-.8 2.3-.8 3.8 0 2 .5 2.8 1.8 2.8 1.4 0 83.4-17.5 107.6-23 2.7-.6 5.3-.7 5.8-.2.4.4 1.7 5.7 2.7 11.7 1.9 10 3 12.5 5.6 12.5 2.6 0 3.6-2.4 5.5-12.5 1.1-6 2.4-11.3 2.8-11.7.5-.5 3.1-.4 5.8.2 24.2 5.5 106.2 23 107.6 23 2.3 0 2.5-5.2.3-7-.8-.7-25.5-8.5-54.7-17.4l-53.3-16.2-.5-10.5c-.4-7.7-1-11.2-2.3-13.2-.9-1.5-2.2-2.7-2.7-2.7s-1.3-1.2-1.6-2.8c-1-4.2-2.3-5.2-6.9-5.2-2.3 0-4.7.6-5.2 1.2zm-125 86.2c-2.4 2.1-2.8 3.2-2.8 7.6 0 4.4.4 5.5 2.8 7.6 6.6 5.7 16.7 1.1 16.7-7.6s-10.1-13.3-16.7-7.6zm123.6.5c-6.2 6.2-2 17.1 6.6 17.1 2 0 4.5-.5 5.6-1 2.2-1.2 4.9-6.1 4.9-8.9 0-8.8-10.9-13.4-17.1-7.2zm124.6-1.7c-3.4 1.9-4.4 4.1-4.5 9.1 0 6.3 3.3 9.7 9.5 9.7 6.1 0 9.5-3.6 9.5-10 0-4.2-.4-5.2-3.1-7.4-3.3-2.8-8-3.4-11.4-1.4z'/%3E%3C/g%3E%3C/svg%3E";

  /***/
},
/* 19 */
/***/function (module, exports) {

  module.exports = "data:image/svg+xml,%3Csvg version='1' xmlns='http://www.w3.org/2000/svg' width='800' height='801.333' viewBox='0 0 600.000000 601.000000'%3E%3Cg fill='%23fff'%3E%3Cpath d='M48 108.1c-2.5.5-7.4 2.3-11 4.1-7.3 3.8-11.6 8.7-15.2 17.5l-2.3 5.8v164c0 152.4.1 164.4 1.7 169.6 3.5 11.2 11.4 19.2 22.8 23.2l6.5 2.2 245.5.3c176.5.2 247.7 0 253.5-.8 8.7-1.2 16.2-4.2 21.1-8.3 3.9-3.3 8.9-12.7 10.3-19.5.8-3.8 1.1-51.9 1.1-164.8 0-141.9-.2-160.3-1.6-166.5-2.7-11.9-10-20.2-22.1-25.1l-5.8-2.3-250-.1c-138.4-.1-252 .2-254.5.7zm462 37.3c0 .5-209.1 206-210 206.4-.4.2-42.8-42.8-94.1-95.5-51.2-52.7-96.6-99.3-100.8-103.6l-7.6-7.7h206.3c113.4 0 206.2.2 206.2.4zM220 331c0 .3-3.9 4.1-8.7 8.4-4.9 4.3-32.9 31.6-62.4 60.6-34.2 33.7-55.1 53.6-58 55.1-4 2.2-5.6 2.4-19.1 2.4H57v-290l81.5 81.5c44.8 44.8 81.5 81.7 81.5 82zm324-17.5V458l-11.7-.1c-21.2-.1-17.6 2-46.5-26.2-13.9-13.6-42.8-42-64.3-63.1l-39-38.5 80.5-80.5c44.3-44.3 80.6-80.6 80.7-80.6.2 0 .3 65 .3 144.5zm-269.6 66.8c7.6 7.3 12.4 10.2 20.5 12.2 7.9 2.1 13.8 1.4 22.2-2.6 4.9-2.3 9.3-6.1 21.5-18l15.2-15.1 51.5 49.9 51.5 49.8-77.4.3c-42.6.1-112.4.1-155.1 0l-77.6-.3 51.9-50.7 51.9-50.8 8.9 9.8c5 5.3 11.7 12.3 15 15.5z'/%3E%3Cpath d='M291 158.6c-19.6 4-35.4 13.2-45.6 26.7-17.7 23.4-20.2 53-6.6 79.2 5.4 10.5 18.1 22.8 29.2 28.3 11.7 5.8 21.8 8.2 34.7 8.2 15.5 0 30.4-3.7 41-10.2 3.2-1.9 3.2-2 1.8-4.9-.9-1.6-1.8-2.9-2.1-2.9-.3 0-3.8 1.5-7.7 3.4-11 5.3-18.5 6.9-31.7 7-19.9 0-34.1-5.5-47.1-18.4-13.2-13.1-19.7-29.9-18.6-48.4 1.5-26.7 17-47.7 42.5-57.4 6.1-2.4 8-2.6 21.2-2.6 13.8 0 14.9.1 22.7 3.1 10.3 3.9 17.3 8.6 25 16.6 10.4 10.8 15.3 22.9 15.3 37.8 0 13.9-4.2 24.4-11.6 28.9-4.8 3.1-11.3 3.2-15.1.4-5-3.8-5.1-5.3-.5-31.5 2.3-13.2 4-24.4 3.7-24.8-.6-1.1-17.2-3.4-19-2.7-.8.3-1.5 1.7-1.5 3.1 0 1.4-.2 2.5-.5 2.5s-2.5-1.5-4.9-3.4c-12.1-9.2-30.7-6.6-42.5 5.9-12.3 13-15.4 32-7.8 46.7 5.2 9.9 13.8 14.8 26.3 14.8 7.6 0 13.9-1.8 19.7-5.8 4-2.8 4.6-3 5.8-1.6.7.9 3.6 2.7 6.3 4.2 5.9 3 19.3 4.2 26.2 2.3 8.9-2.4 16.6-10 20.7-20.4 2.9-7.4 3.5-24.9 1.2-33.7-5.9-22.6-25.8-41.9-50-48.5-5.9-1.6-25.7-2.8-30.5-1.9zm17.7 52.4c6.6 4 8.6 11 5.9 20.2-3.9 13.7-18.9 19.7-27.7 11.2-10.8-10.4-.8-33.2 14.6-33.4 2.3 0 5.4.9 7.2 2z'/%3E%3C/g%3E%3C/svg%3E";

  /***/
}]
/******/);
}());

//# sourceMappingURL=components-compat.js.map
