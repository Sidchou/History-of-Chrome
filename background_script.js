
chrome.tabs.onCreated.addListener(iconChange);

function iconChange (){
  console.log('Clicked the browser action!');

  chrome.tabs.executeScript({file: 'content_script.js'}, function() {
        console.log('background script injected content_script');
      });

}
