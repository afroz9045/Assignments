// hamburger
let hamburger = document.querySelector("#hamburger");
let hamIcon = document.querySelector(".fa-bars");
let nav = document.querySelector("#nav");
let form = document.getElementById("form");
let table = document.querySelector(".form1");
let isTableVisible = false;
hamburger.addEventListener("click", () => {
    nav.classList.toggle("visible");
    hamIcon.classList.toggle("fa-times");

})

let inputField = document.querySelectorAll(".input");
let addFriendBtn = document.querySelector("#addFriendBtn");

addFriendBtn.addEventListener("click", validate);
// addFriendBtn.addEventListener("click", istableLoad);
document.addEventListener("DOMContentLoaded", istableLoad);


//validation
function validate() {
    // debugger
    let name = document.querySelector("#name");
    let surname = document.querySelector("#surname");
    let mail = document.querySelector("#mail");
    let errorMsg = document.querySelectorAll(".errMsg");
    let valid = false;
    if (name.value == "") {
        errorMsg[0].textContent = "Name can't be empty";
        return valid;
    }
    else if (!(isNaN(name.value))) {
        errorMsg[0].textContent = "Name should not contain number";
        return valid;
    }
    else if (name.value.length < 3) {
        errorMsg[0].textContent = "Name length should be minimum 3";
        return valid;
    }
    else {
        errorMsg[0].textContent = "";
    }

    if (surname.value == "") {
        errorMsg[1].textContent = "Surname can't be empty";
        return valid;
    }
    else if (!(isNaN(surname.value))) {
        errorMsg[1].textContent = "Surname should not contain number";
        return valid;
    }
    else if (surname.value.length < 3) {
        errorMsg[1].textContent = "Surname length should be minimum 3";
        return valid;
    }
    else {
        errorMsg[1].textContent = "";
    }

    if (mail.value == "") {
        errorMsg[2].textContent = "Email can't be empty";
        return valid;
    }

    else if (mail.value.startsWith("@")) {
        errorMsg[2].textContent = "Email Can't starts with @";
        return valid;
    }
    else if (!(isNaN(mail.value))) {
        errorMsg[2].textContent = "Email can't accept numbers";
        return valid;
    }
    else if (!(mail.value.endsWith("qualminds.com") || mail.value.endsWith("gmail.com"))) {
        errorMsg[2].textContent = "Enter valid mail!";
        return valid;
    }
    else {
        errorMsg[2].textContent = "";
        valid = true;
    }
    if (valid) {
        save();
        istableLoad();
        return true;
    }
    else {
        return false;
    }
}

// CRUD operation
let arr = [];
function save() {
    debugger
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("mail").value;

    var friendsObj = {
        name: name,
        surname: surname,
        email: email
    }

    arr.push(friendsObj);
    setData();

    var name = document.getElementById("name").value = "";
    var surname = document.getElementById("surname").value = "";
    var email = document.getElementById("mail").value = "";


}
function setData() {
    let friendsDB = localStorage.setItem("friendsData", JSON.stringify(arr));
    console.log("data set in local storage :" + friendsDB);
}
function getData() {
    debugger
    let data = localStorage.getItem("friendsData");
    console.log(data)
    console.log("local storage data :" + data);
    if (data) {
        arr = JSON.parse(data);
        // console.log(arr);
    }
    else {
        setData();
    }
}
getData();
function istableLoad() {
    debugger
    if (localStorage.getItem("friendsData").length > 0) {
        updateDataToTable();
    }
    else {
        table.style.display = "none";
    }
}


let trash = document.querySelector(".fa-trash");
function deleteRecord(index) {
    debugger
    console.log("delete function clicked!" + index);
    arr.splice(index, 1);
    setData();
    // save();
}
function updateDataToTable() {
    debugger
    table.style.display = "block";
    let tBody = document.getElementById("tBody");
    tBody.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let tableData = `
        <tr>
                    <td>${arr[i].name}</td>
                    <td>${arr[i].surname}</td>
                    <td>${arr[i].email}</td>
                    <td><i class="fa-solid fa-trash" onclick ="deleteRecord(${i})"></i><i class="fa-solid fa-pen-to-square"></i></td>
        </tr>           `;
        tBody.innerHTML += tableData;
    }
}
