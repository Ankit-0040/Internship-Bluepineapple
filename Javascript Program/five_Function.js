function hello() {
  alert("Hello Ankit");
}

var hi = () => {
  alert("Hi Ankit!");
};

var morning = () => {
  alert("Good morning Ankit!");
};

function night() {
  alert("Good night Ankit");
}

let user = prompt("Enter the function to call");
window[user]();
