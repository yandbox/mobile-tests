(function () {
  var obj = {
    screen: {
      width: screen.width
    },
    window: {
      innerWidth: window.innerWidth
    },
    root: {
      clientWidth: document.documentElement.clientWidth
    },
    navigator: {
      platform: navigator.platform,
      userAgent: navigator.userAgent
    }
  }

  document.getElementById('pre').textContent = JSON.stringify(obj, null, 2)
})()
