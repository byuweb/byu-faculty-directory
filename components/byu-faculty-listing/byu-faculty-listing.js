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

import template from './byu-faculty-listing.html';
import * as util from 'byu-web-component-utils';

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
    util.applyTemplate(this, 'byu-faculty-listing', template, () => {
      applyProfileImage(this);
      applyProfileLinks(this);
      truncateText(this);
      setupSlotListeners(this);
      clearEmptyFields(this);
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
    if (slots[i].children[0].assignedNodes().length > 0) {
      var slot = slots[i].children[0].assignedNodes()[0];

      if (slots[i].parentNode.className == "research-slot-wrapper") {
        if (slot.innerText.length > 140) {
          while (slot.innerText.length > 140) {
            slot.innerText = slot.innerText.replace(/\W*\s(\S)*$/, '...');
          }
        }
      }
      else {
        if (slot.innerText.length > 500) {
          while (slot.innerText.length > 500) {
            slot.innerText = slot.innerText.replace(/\W*\s(\S)*$/, '...');
          }
          slot.innerHTML = slot.innerHTML + "<a style='color: #008080' href='" + component.profileLink + "'>Read More</a>";
        }
      }
    }
  }
}

function clearEmptyFields(component) {
  let office_hours = component.shadowRoot.querySelectorAll('.office-hours-slot-wrapper');

  for (var i = 0; i < office_hours.length; i++) {
      var element = office_hours[i];
      element = element.children[2];

      if (element.assignedNodes().length == 0) {
        office_hours[i].classList.add("hide");
      }
    }

    let research = component.shadowRoot.querySelectorAll('.research-slot-wrapper');
    let biography = component.shadowRoot.querySelectorAll('.biography-slot-wrapper');
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
