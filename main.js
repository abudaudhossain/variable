const button = document.querySelector('button');

button.onclick = function() {
    let name = prompt('What is your name?');
    

    alert('Hello' + name + ', nice to see you');
}

let myName = 'Chris';
 myName = 'abu';
function logName() {
    console.log(myName);
}
logName();