document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var currentUrl = tabs[0].url;
      document.getElementById("currentUrl").textContent = currentUrl;
  
      var actionButton = document.getElementById("actionButton");
      actionButton.addEventListener("click", function() {
        var socket = new WebSocket("ws://localhost:8765/");
        socket.onopen = function(event) {
          console.log("WebSocket connection established");
          socket.send(currentUrl);
        };
  
        socket.onclose = function(event) {
          console.log("WebSocket connection closed");
        };
      });
    });
  });
  