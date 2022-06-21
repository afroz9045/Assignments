// hamburger
let hamburger = document.querySelector("#hamburger");
let hamIcon = document.querySelector(".fa-bars");
let nav = document.querySelector("#nav");
let form = document.getElementById("form");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("visible");
    hamIcon.classList.toggle("fa-times");

})

let inputField = document.querySelectorAll(".input");
let addFriendBtn = document.querySelector("#addFriendBtn");

//validation
addFriendBtn.addEventListener("click", validate);
function validate() {
    let name = document.querySelector("#name");
    let surname = document.querySelector("#surname");
    let mail = document.querySelector("#mail");
    let errorMsg = document.querySelectorAll(".errMsg");

    if (name.value == "" || surname.value == "" || mail.value == "") {
        alert("No blank input field allowed!");
        return false;
    }
    else if (!(isNaN(name.value))) {
        errorMsg[0].textContent = "Name should not contain number";
        return false;
    }
    else if (name.value.length < 3) {
        errorMsg[0].textContent = "Name length should be minimum 3";
        return false;
    }
    else if (!(isNaN(surname.value))) {
        errorMsg[1].textContent = "Surname should not contain number";
        return false;
    }
    else if (surname.value.length < 3) {
        errorMsg[1].textContent = "Name length should be minimum 3";
        return false;
    }
    else if (mail.value.startsWith("@")) {
        errorMsg[2].textContent = "Email Can't starts with @";
        return false;
    }
    else if (!(isNaN(mail.value))) {
        errorMsg[2].textContent = "Email can't accept numbers";
        return false;
    }
    else if (!(mail.value.endsWith("qualminds.com") || mail.value.endsWith("gmail.com"))) {
        errorMsg[2].textContent = "Enter valid mail!";
        return false;
    }
    else {
        for (let i = 0; i < errorMsg.length; i++) {
            errorMsg[i].innerHTML = "";
        }
        save();
        return true;
    }
}

// CRUD operation
let arr = [];
function save() {
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
        console.log("hello wr")
        
        let data = localStorage.getItem("friendsData");
        if (data) {
            arr = JSON.parse(data);
            // console.log(arr);
        }
        else {
            setData();
        }
    }
    getData();
    
let tBody = document.getElementById("tBody");
    for(let i=0;i<arr.length;i++){
let tableData = `<tr>
                    <td>${arr[i].name}</td>
                    <td>${arr[i].surname}</td>
                    <td>${arr[i].email}</td>
                    <td><i class="fa-solid fa-trash"></i><i class="fa-solid fa-pen-to-square"></i></td>
                 </tr>`;
                 tBody.innerHTML += tableData
                }