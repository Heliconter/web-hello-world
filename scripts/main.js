var heading = document.querySelector('h1')
heading.textContent += ' :)'

var changeUserButton = document.querySelector('button')
var userName = document.querySelector('#user-name')
var storedUserName = localStorage.getItem('user-name')
if (storedUserName)
    userName.textContent = storedUserName
changeUserButton.onclick = function() {
    var newUserName = prompt("Enter new user name")
    if (!newUserName)
        return
    userName.textContent = newUserName
    localStorage.setItem('user-name', newUserName)
}

