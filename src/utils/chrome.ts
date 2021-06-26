import ACTIONS from './actions';

/**
 * Get the active tab
 * @returns A promise of the tab id, if found
 */
const getTabId = async (): Promise<number | undefined> => {
  const [{ id }] = await chrome.tabs.query({ active: true, currentWindow: true });
  return id;
};

/**
 * Execute a script in the active tab
 * @param scriptKey Script to be executed
 */
export const executeScript = async (scriptKey: keyof typeof ACTIONS, tabId?:number): Promise<void> => {
  //gets the object key if tabId is not parsed
  if(!tabId) tabId = await getTabId();

  //checks if object key exists
  if (!tabId) return;

  //executes if tabId is parsed
  chrome.scripting.executeScript({
    target: { tabId },
    function: ACTIONS[scriptKey],
  });
};
