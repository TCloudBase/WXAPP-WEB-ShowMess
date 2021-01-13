function getEnvinfo (success) {
  const url = '/cloudbaseenv.json'
  const request = new XMLHttpRequest()
  request.open('get', url)
  request.send(null)
  request.onload = function () {
    if (request.status === 200) {
      var json = JSON.parse(request.responseText)
      success(json)
    }
  }
}
