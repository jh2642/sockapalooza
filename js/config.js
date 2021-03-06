// API Host
// var api = 'https://powerful-coast-15525.herokuapp.com/'
var api = 'http://1fb503fe.ngrok.io'

// Utilities
function fetchApi(method, endpoint, formFields, callback) {
  var statusCode,
      payload

  if (method === undefined) {
    method = 'POST'
  }

  if (formFields === undefined || formFields === null || formFields === '') {
    formFields = {}
  }

  payload = {
    credentials: 'include',
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (method.toUpperCase() === 'POST') {
	  payload.body = JSON.stringify(formFields)
  }

  fetch(api + endpoint, payload)
    .then(function(response) {
	     statusCode = response.status
      return response.json()
    })
    .then(function(data) {
      if (typeof callback === 'function') {
        callback(data, statusCode)
      }
    })
}

function redirect(url) {
  window.location.href = url
}
