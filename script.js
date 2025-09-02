let users = []

function emptyValue() {
    if (users.length === 0) {
        return alert('Users not found')
    }
}

function addStart() {
    let inputValue = document.getElementById('inputField').value;

    if (inputValue === '') {
        alert('Please write your name')
        return
    } else if (inputValue.length < 3) {
        alert('Please enter complete name')
        return
    } else {
        users.unshift(inputValue);
        document.getElementById('Output').innerHTML = users;
    }
}

function addEnd() {
    let inputValue = document.getElementById('inputField').value;

    if (inputValue.length < 3) {
        return alert('Please write your name correctly')
    }
    users.push(inputValue);
    document.getElementById('Output').innerHTML = users;
}

function RemoveStart() {
    emptyValue()
    users.shift();
    document.getElementById('Output').innerHTML = users;
}

function removeEnd() {
    emptyValue()
    users.pop();
    document.getElementById('Output').innerHTML = users;
}

function showConsole() {
    emptyValue()
    console.log(users)
}

function showWebPage() {
    emptyValue()
    document.write(`<h2 style="color:blue; font-family:Arial; background:yellow; padding:5px;">${users}</h2>`);
}