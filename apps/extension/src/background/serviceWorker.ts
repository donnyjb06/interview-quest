chrome.runtime.onStartup.addListener(() =>
  console.log("this extension is running currently"),
);

chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  console.log(`${message.type} has been received by the service worker`);
  sendResponse(
    `${message.type} has been processed and here is your data ${{ success: true }}`,
  );
});
