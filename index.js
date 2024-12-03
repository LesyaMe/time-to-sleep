let timeElement = document.getElementById('currentTime');
  setInterval(function () {
    const currentTime = new Date();
    timeElement.textContent = currentTime.toLocaleTimeString();
  }, 1000);