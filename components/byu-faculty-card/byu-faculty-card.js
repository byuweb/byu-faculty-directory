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

import template from './byu-faculty-card.html';
import * as util from 'byu-web-component-utils';

const ATTR_PROFILE_IMAGE = "faculty-image";
const ATTR_NAME = 'faculty-name';
const ATTR_TITLE = 'faculty-title';
const ATTR_OFFICE = 'faculty-office';
const ATTR_PHONE = 'faculty-phone';
const ATTR_EMAIL = 'faculty-email';
const ATTR_OFFICE_HOURS = 'faculty-office-hours';
const ATTR_PROFILE_LINK = 'faculty-profile-link';
const ATTR_SIZE = 'size';

const DEFAULT_INFORMATION = "Unknown";

class ByuFacultyCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    //This will stamp our template for us, then let us perform actions on the stamped DOM.
    util.applyTemplate(this, 'byu-faculty-card', template, () => {
      applyProfileImage(this);
      applyProfileLinks(this);
      clearEmptyFields(this);
      
    });
  }

  disconnectedCallback() {
    teardownButtonListeners(this);
  }

  static get observedAttributes() {
    return [ATTR_PROFILE_IMAGE, ATTR_NAME, ATTR_TITLE, ATTR_OFFICE, ATTR_PHONE, ATTR_EMAIL, ATTR_OFFICE_HOURS, ATTR_PROFILE_LINK, ATTR_SIZE];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      case ATTR_NAME:
      case ATTR_TITLE:
      case ATTR_OFFICE:
      case ATTR_PHONE:
      case ATTR_EMAIL:
      case ATTR_OFFICE_HOURS:
      case ATTR_PROFILE_LINK:
        applyProfileLinks(this);
        break;
      case ATTR_PROFILE_IMAGE:
        applyProfileImage(this);
        break;
      case ATTR_SIZE:
        //switchToSmall(this);
        //break;
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

window.customElements.define('byu-faculty-card', ByuFacultyCard);
window.ByuFacultyCard = ByuFacultyCard;

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

function clearEmptyFields(component) {
  let office_hours = component.shadowRoot.querySelectorAll('.office-hours-slot-wrapper');
  for (var i = 0; i < office_hours.length; i++) {
      var element = office_hours[i];
      element = element.children[2];

      if (element.assignedNodes().length == 0) {
        office_hours[i].classList.add("hide");
      }
    }
}