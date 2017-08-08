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
"use strict";

import template from './byu-faculty-profile.html';
import * as util from 'byu-web-component-utils';

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
    util.applyTemplate(this, 'byu-faculty-profile', template, () => {
      applyBackgroundImage(this);
      applyProfileImage(this);
      setupButtonListeners(this);
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
      var element = this
      element = element.children[0];
      element = element.children[0];
      element = element.children[1];
      element = element.children[0];

      if (element.src.includes('Chevron-Right')) {
        element.src = "/components/byu-faculty-profile/Chevron-Down.svg";

        this.parentNode.className += " expanded";
      }

      else {
        element.src = "/components/byu-faculty-profile/Chevron-Right.svg";
        this.parentNode.classList.remove("expanded");
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
