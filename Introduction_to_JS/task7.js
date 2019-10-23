


let login = prompt("введіть дані");

if (login === "" || login === null) {
  console.log("Canceled.");
} else if (login.length < 4) {
  console.log("I dont know any users having name length less than 4 symbols");
} else if (login === "user" || login === "admin") {
  let pasword = prompt("введіть пароль");
  if (pasword === "UserPass" || pasword === "RootPass") {
    let currentHours =new Date().getHours(); //18
    if (currentHours < 20 && pasword === "UserPass") {
      console.log("Good day, dear User!");
    } else if (currentHours >= 20 && pasword === "UserPass") {
      console.log("Good evening, dear User!");
    } else if (currentHours < 20 && pasword === "RootPass") {
      console.log("Good day, dear Admin!");
    } else if (currentHours >= 20 && pasword === "RootPass") {
      console.log("Good evening, dear Admin!");
    }
  } else {
    console.log("Wrong password");
  }
} else {
  console.log("I don’t know you");
}



//другий варіант розвязку
const users = {
  "User": "UserPass",
  "Admin": "RootPass"
};
const d = new Date();
const hours = d.getHours();
let login = prompt("Login: ","");
if (login === "" || login === null){
alert("Canceled");
} else if(login.length < 4){
alert("I don't know any users having name length less than 4 symbols")
} else if(users[login]){
  let password = prompt("Password: ","");
  if (password === users[login]){
      if (hours < 20){
          alert(`Good day, dear ${login}!`);
      } else {
            alert(`Good evening, dear ${login}!`);
          }
  } else {
      alert("Wrong password")
  }
} else {
alert("I don`t know you");
}