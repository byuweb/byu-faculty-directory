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

import template from './byu-faculty-directory.html';
import * as util from 'byu-web-component-utils';
import 'whatwg-fetch';

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
    util.applyTemplate(this, 'byu-faculty-directory', template, () => {
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
  let template = util.querySelectorSlot(slot, 'template');

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
