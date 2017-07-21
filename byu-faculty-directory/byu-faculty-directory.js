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

const ATTR_API_KEY = 'api-key';

const DEFAULT_apiKey = 1;

class ByuFacultyDirectory extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    //This will stamp our template for us, then let us perform actions on the stamped DOM.
    util.applyTemplate(this, 'byu-faculty-directory', template, () => {
      setupButtonListeners(this);
      applyApiKey(this);

      setupSlotListeners(this);
    });
  }

  disconnectedCallback() {
    teardownButtonListeners(this);
  }

  static get observedAttributes() {
    return [ATTR_API_KEY];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      case ATTR_API_KEY:
        applyApiKey(this);
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

}

window.customElements.define('byu-faculty-directory', ByuFacultyDirectory);
window.ByuFacultyDirectory = ByuFacultyDirectory;

// -------------------- Helper Functions --------------------

function applyApiKey(component) {
  // let output = component.shadowRoot.querySelector('.output');

  // let count = component.apiKey;

  // //Remove all current children
  // while(output.firstChild) {
  //   output.removeChild(output.firstChild);
  // }

  // if (count === 0) return;

  // let slot = component.shadowRoot.querySelector('#apiKey-template');

  // let template = util.querySelectorSlot(slot, 'template');

  // if (!template) {
  //   throw new Error('No template was specified!');
  // }

  // for (let i = 0; i < count; i++) {
  //   let element = document.importNode(template.content, true);
  //   output.appendChild(element);
  // }
  let apiKey = component.apiKey;
  console.log(apiKey);
  console.log(component.apiKey);
  if (apiKey && apiKey != '') {
    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //   if (xhr.readyState == XMLHttpRequest.DONE) {
    //     if (xhr.status == 200) {
    //       console.log(xhr.responseText);
    //     }
    //     else if (xhr.status == 400) {
    //       alert('Bad Request');
    //     }
    //     else {
    //       alert('unspecified error');
    //       console.log(xhr);
    //     }
    //   }
    // };
    // xhr.open("GET", "https://ws.byu.edu/services/facultyProfile/faculty?applicationKey=" + apiKey, true);
    // xhr.send();

    jsonp('https://ws.byu.edu/services/facultyProfile/faculty?applicationKey=' + apiKey, function (data) {
      console.log(data)
    });
  }
}


function jsonp(url, callback) {
  var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
  window[callbackName] = function (data) {
    delete window[callbackName];
    document.body.removeChild(script);
    callback(data);
  };

  var script = document.createElement('script');
  script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
  document.body.appendChild(script);
}

jsonp('http://www.helloword.com', function (data) {
  alert(data);
});

function setupButtonListeners(component) {
  // let button = component.shadowRoot.querySelector('.apiKey-button');

  // let callback = component.__buttonListener = function(event) {
  //   component.apiKey = component.apiKey + 1;
  // };

  // button.addEventListener('click', callback, false);
}

//We generally want to be good neighbors and clean up after ourselves when we're done with things.
function teardownButtonListeners(component) {
  // let button = component.shadowRoot.querySelector('.apiKey-button');

  // button.removeEventListener('click', component.__buttonListener, false);
}

function setupSlotListeners(component) {
  // let slot = component.shadowRoot.querySelector('#apiKey-template');

  // //this will listen to changes to the contents of our <slot>, so we can take appropriate action
  // slot.addEventListener('slotchange', () => {
  //   applyApiKey(component);
  // }, false);
}
