(()=>{var s=(e,t,o)=>new Promise((n,m)=>{var l=c=>{try{r(o.next(c))}catch(i){m(i)}},u=c=>{try{r(o.throw(c))}catch(i){m(i)}},r=c=>c.done?n(c.value):Promise.resolve(c.value).then(l,u);r((o=o.apply(e,t)).next())});var y=()=>{let e=document.getElementById("right-sidebar"),t=document.querySelector(".bem-TopBar_Body"),o=document.querySelector(".wf-doc"),n=document.querySelector(".bem-BottomBar");e.style.width="0%",t.style.width="97.5%",o.style.width="100%",n.style.width="100%"},B=()=>{let e=document.getElementById("right-sidebar"),t=document.querySelector(".bem-TopBar_Body"),o=document.querySelector(".wf-doc"),n=document.querySelector(".bem-BottomBar");e.style.width="",t.style.width="",o.style.width="",n.style.width=""},f={hideSideBar:y,showSideBar:B},h=f;var w=()=>s(void 0,null,function*(){let[{id:e}]=yield chrome.tabs.query({active:!0,currentWindow:!0});return e}),a=(e,t)=>s(void 0,null,function*(){t||(t=yield w()),!!t&&chrome.scripting.executeScript({target:{tabId:t},function:h[e]})});var d=document.getElementById("CheckBox");d.addEventListener("change",()=>s(void 0,null,function*(){d.checked?chrome.storage.sync.set({checkboxstate:"on"},function(){console.log("Checkbox is switched on")}):chrome.storage.sync.set({checkboxstate:"off"},function(){console.log("Checkbox is switched off")})}));chrome.storage.sync.get(["checkboxstate"],function(e){d.checked=e.checkboxstate==="on"});chrome.storage.onChanged.addListener(function(e){console.log(e.checkboxstate.newValue),e.checkboxstate.newValue==="on"?a("hideSideBar"):a("showSideBar")});})();