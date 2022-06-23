// hamburger
let hamburger = document.querySelector("#hamburger");
let hamIcon = document.querySelector(".fa-bars");
let nav = document.querySelector("#nav");
let form = document.getElementById("form");
let tableContainer = document.querySelector(".form1");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("visible");
    hamIcon.classList.toggle("fa-times");

})

let inputField = document.querySelectorAll(".input");
let addFriendBtn = document.querySelector("#addFriendBtn");

addFriendBtn.addEventListener("click", save);
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
        return true;
    }
    else {
        return false;
    }
}

// CRUD operation
let arr = [];
function save() {
    if (validate()) {


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
        istableLoad();

        var name = document.getElementById("name").value = "";
        var surname = document.getElementById("surname").value = "";
        var email = document.getElementById("mail").value = "";
    }

}
function setData() {
    localStorage.setItem("friendsData", JSON.stringify(arr));
    console.log("data set in local storage :" + arr);
}
function getData() {
    debugger
    let data = localStorage.getItem("friendsData");
    console.log(data)
    console.log("local storage data :" + data);
    if (data) {
        arr = JSON.parse(data);
    }
    else {
        setData();
    }
}
getData();
function istableLoad() {
    debugger
    tableContainer.style.display = "none";
    if (arr.length > 0) {
        updateDataToTable();
        tableContainer.style.display = "block";
    }
    else {
        tableContainer.style.display = "none";
    }
}


let trash = document.querySelector(".fa-trash");
function deleteRecord(index) {
    debugger
    console.log("delete function clicked!" + index);
    arr.splice(index, 1);
    setData();
    istableLoad();
}
function edit(index) {
    console.log("edit function called!");
    debugger
    document.querySelector(".form2").innerHTML = "";
    let newForm = `<div class="input-field">
    <label for="name">Enter correct name</label>
    <input type="text" name="name" id="name" value = "${arr[index].name}" class="input"/>
    <small class="errMsg"></small>
  </div>

  <div class="input-field">
    <label for="surname">Enter correct Surname</label>
    <input type="text" name="surname" id="surname" value = "${arr[index].surname}" class="input"/>
    <small class="errMsg"></small>
  </div>

  <div class="input-field">
    <label for="Email address">Enter correct  Email address</label>
    <input type="email" name="email" id="mail" value = "${arr[index].email}" class="input"/>
    <small class="errMsg"></small>
  </div>

  <div class="add-friend-btn input-field">
    <input type = "submit" value="update" class="btn" id="updateBtn" onclick= "update(${index})"/>
  </div>`;
    document.querySelector(".form2").innerHTML = newForm;
}

function update(index) {



    debugger
    console.log("edit called");
    // document.querySelector(".form2").removeAttribute("onsubmit");
    debugger
    var editName = document.getElementById("name").value;
    var editSurname = document.getElementById("surname").value;
    var editEmail = document.getElementById("mail").value;



    if (validate()) {
        arr[index] = {
            name: editName,
            surname: editSurname,
            email: editEmail
        }
        setData();
        istableLoad();
        editName = "";
        editSurname = "";
        editEmail = "";
    }
}

function updateDataToTable() {
    debugger
    let table = `<table>
<thead>
<tr>
<td>Name</td>
<td>Surname</td>
<td>Email</td>
<td>Actions</td>
</tr>
</thead>

<tbody id="tBody">`;
    for (let i = 0; i < arr.length; i++) {
        table += `<tr>
    <td>${arr[i].name}</td>
    <td>${arr[i].surname}</td>
    <td>${arr[i].email}</td>
    <td><i class="fa-solid fa-trash" onclick ="deleteRecord(${i})"></i><i class="fa-solid fa-pen-to-square" onclick ="edit(${i})"></i></td>
    </tr>`;
    }
    table += `</tbody>
  </table>`;
    tableContainer.innerHTML = table;
    console.log(table);
}
