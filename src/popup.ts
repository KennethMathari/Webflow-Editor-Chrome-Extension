/* eslint-disable no-console */
/// <reference types="chrome"/>
import { executeScript } from './utils/chrome';
/**
 * Initialize checkbox in extension's UI
 */
const checkBox = document.getElementById('CheckBox') as HTMLInputElement;

/**
 * Event Listener for CheckBox
 */
checkBox.addEventListener('change', async () => {
  if (checkBox.checked) {
    //sets sync storage value of checkbox to 'on'
    chrome.storage.sync.set({ checkboxstate: 'on' }, function () {
      console.log('Checkbox is switched on');
    });
  } else {
    // sets sync storage value of checkbox to 'off'
    chrome.storage.sync.set({ checkboxstate: 'off' }, function () {
      console.log('Checkbox is switched off');
    });
  }
});

/**
 * Handles state of the checkbox
 */
chrome.storage.sync.get(['checkboxstate'], function (result) {
  checkBox.checked = result.checkboxstate === 'on';
});

/**
 * listens for checkboxstate data change and calls script injection function.
 */
chrome.storage.onChanged.addListener(function (changes) {
  console.log(changes.checkboxstate.newValue);
  if (changes.checkboxstate.newValue === 'on') {
    executeScript('hideSideBar');
  } else {
    executeScript('showSideBar');
  }
});
