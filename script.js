import Action from "./classes/Action.js";
import ActionsManager from "./classes/ActionsManager.js";

let manager = new ActionsManager();
let food = new Action("expense", "fruits", 200)
manager.addAction(food);
manager.addAction(new Action("income", "salary", 10000));
console.log(manager.actions);
//manager.deleteAction(food.id);
//console.log(manager.actions);
manager.updateAction(food.id, 350);
manager.calcBalance();
console.log(manager.balance);


// a function that shows all the actions according to manager.actions array
function showActionsInTable() {
    document.getElementById('actions').innerHTML = "";
    for (let action of manager.actions) {
        document.getElementById(
            "actions"
        ).innerHTML += `<tr class=${action.type == "income" ? "text-success" : "text-danger"}> <td>${action.description} </td> <td>${action.amount} </td><td><i class="fa-regular fa-pen-to-square" onclick="updateAction(${action.id})"></i> </td> <td><i class="fa-regular fa-trash-can" onclick="deleteAction(${action.id})"></i> </td></tr>`;
    }

}

//a function that clear the actions inputs
function clear() {
    document.getElementById('type').value = "income";
    document.getElementById('amount').value = "";
    document.getElementById('descrip').value = "";
}

showActionsInTable();

//a function that shows all the actions according to the update manager.actions array
window.showActionsInTable2 = () => {
    let actionType = document.getElementById('type').value;
    let theAmount = +document.getElementById('amount').value;
    let theDes = document.getElementById('descrip').value;

    let newAct = new Action(actionType, theDes, theAmount);
    manager.addAction(newAct);
    console.log(manager.actions);

    document.getElementById('actions').innerHTML += `<tr class=${actionType == "income" ? "text-success" : "text-danger"}><td>${theDes}</td><td>${actionType == "expense" ? -theAmount : theAmount}</td><td><i class="fa-regular fa-pen-to-square"></i> </td> <td><i class="fa-regular fa-trash-can"></i> </td></tr>`
    clear();
    localStorage.setItem("balance", JSON.stringify(manager.actions));
};


window.updateAction = (id) => {
    //prompt
    let update = prompt("Please Enter New Amount");

    //update action
    if (update == "" || update == null) {
        alert("Something went Wrong");
        showActionsInTable();
    } else {
        alert("Thank you");
        manager.updateAction(id, update)
        showActionsInTable();
    }

};

window.deleteAction = (id) => {
    //prompt
    let deleteAction = confirm("Are you sure You want To Delete this action?");

    //update action
    if (deleteAction == true) {
        manager.deleteAction(id)
        showActionsInTable();
    } else {
        showActionsInTable();
    }

};

