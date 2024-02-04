function openList() {
  let listUrl = chrome.runtime.getURL("toDoList/index.html");
  chrome.windows.create({url: listUrl, type: "popup", width: 625, height: 480}) //创建窗口
}
chrome.action.onClicked.addListener(function( tab ) {
	openList();
});