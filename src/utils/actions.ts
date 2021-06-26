/**
 * The body of these functions:hideSideBar() & showSideBar() will be executed as a content script inside the current page
 */
const hideSideBar = (): void => {
  const rightSideBar = document.getElementById('right-sidebar') as HTMLElement;
  const topBar = document.querySelector('.bem-TopBar_Body') as HTMLElement;
  const workspace = document.querySelector('.wf-doc') as HTMLElement;
  const bottomBar = document.querySelector('.bem-BottomBar') as HTMLElement;

  rightSideBar.style.width = '0%';
  topBar.style.width = '97.5%';
  workspace.style.width = '100%';
  bottomBar.style.width = '100%';
};

const showSideBar = (): void => {
  const rightSideBar = document.getElementById('right-sidebar') as HTMLElement;
  const topBar = document.querySelector('.bem-TopBar_Body') as HTMLElement;
  const workspace = document.querySelector('.wf-doc') as HTMLElement;
  const bottomBar = document.querySelector('.bem-BottomBar') as HTMLElement;

  rightSideBar.style.width = '';
  topBar.style.width = '';
  workspace.style.width = '';
  bottomBar.style.width = '';
};

// Export an object with all the actions
const ACTIONS = {
  hideSideBar,
  showSideBar,
} as const;

export default ACTIONS;
