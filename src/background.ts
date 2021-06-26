/* eslint-disable no-console */
import { executeScript } from './utils/chrome';
chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === 'install') {
    //set the checkbox state value to off when extension is first installed.
    chrome.storage.sync.set({ checkboxstate: 'off' }, function () {
      // eslint-disable-next-line no-console
      console.log('Checkbox is switched off when extension is installed');
    });
  } else if (details.reason === 'update') {
    console.log('Extension updated!!');
  }
});

//Listen for command event
chrome.commands.onCommand.addListener(function (command) {
  switch (command) {
    case 'hide-right-sidebar':
      // injects hideSideBar() to webpage after keyboard command is pressed
      executeScript('hideSideBar');
      chrome.storage.sync.set({ checkboxstate: 'on' }, function () {
        console.log('Checkbox is switched on via command');
      });
      break;
    case 'show-right-sidebar':
      // injects showSideBar() to webpage after keyboard command is pressed
      executeScript('showSideBar');
      chrome.storage.sync.set({ checkboxstate: 'off' }, function () {
        console.log('Checkbox is switched off via command');
      });
      break;
    default:
      console.log(`Command ${command} not found`);
  }
});

/**
 * Navigate to webflow tab  and run function after page load
 */
chrome.webNavigation.onCompleted.addListener(
  ({tabId}) => {
    chrome.storage.sync.get(['checkboxstate'], function (result) {
      if (result.checkboxstate === 'on') {
        executeScript('hideSideBar', tabId);
      } else {
        executeScript('showSideBar', tabId);
      }
    });
  },
  {
    url: [
      {
        hostSuffix: '.webflow.com',
        pathPrefix: '/design/',
      },
    ],
  }
);
