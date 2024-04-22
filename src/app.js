import { getDatabase, set, get, update, remove, ref, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
import { app } from "./firebase.js";

const db = getDatabase(app);

const enterID = document.querySelector("#enterID");
const enterName = document.querySelector("#enterName");
const enterAge = document.querySelector("#enterAge");
const findID = document.querySelector("#findID");
const findName = document.querySelector("#findName");
const findAge = document.querySelector("#findAge");

const insertBtn = document.querySelector("#insert");
const updateBtn = document.querySelector("#update");
const removeBtn = document.querySelector("#remove");
const findBtn = document.querySelector("#find");

insertBtn.addEventListener('click', insertData);
updateBtn.addEventListener('click', updateData);
removeBtn.addEventListener('click', removeData);
findBtn.addEventListener('click', findData);

function insertData() {
    set(ref(db, "People/" + enterID.value), {
        Name: enterName.value,
        ID: enterID.value,
        Age: enterAge.value
    }).then(() => {
        alert("Data added successfully!");
    }).catch((error) => {
        alert(error);
    });
}

function updateData() {
    update(ref(db, "People/" + enterID.value), {
        Name: enterName.value,
        Age: enterAge.value
    }).then(() => {
        alert("Data updated successfully!");
    }).catch((error) => {
        alert(error);
    });
}

function removeData() {
    remove(ref(db, "People/" + enterID.value)).then(() => {
        alert("Data deleted successfully!");
    }).catch((error) => {
        alert(error);
    });
}

function findData() {
    const dbref = ref(db);

    get(child(dbref, "People/" + findID.value)).then((snapshot) => {
        if (snapshot.exists()) {
            findName.innerHTML = "Name: " + snapshot.val().Name;
            findAge.innerHTML = "Age: " + snapshot.val().Age;
        } else {
            alert("No data found");
        }
    }).catch((error) => {
        alert(error);
    });
}
