window.onload=  () =>{
    const formulaire_list = document.querySelector('#addForm');

    let tasks = document.getElementById('tasks');
    let submit = document.getElementById('submit');

    let editItem = null;

    formulaire_list.addEventListener('submit', addItem);
    tasks.addEventListener('click', removeItem);
}

 // Fonction pour l'ajout d'un item ici une tâche //

function addItem(e) {
      e.preventDefault();
    if(submit.value != 'Ajouter'){
        editItem.target.parentNode.childNodes[0].data = document.getElementById('task').value;
        submit.value = "Ajouter";
        document.getElementById('task').value = '';
        
        document.getElementById("success").innerHTML = "Nom de la tâche bien modifié";
        document.getElementById("success").style.display = "block";
        setTimeout( function(){ document.getElementById("success").style.display = "none"; } ,3000);			

        return false;
    }

    let newItem = document.getElementById('task').value;
    if(newItem.trim() == '' || newItem.trim() ==null){
        return false;
    }else{
        document.getElementById('task').value = '';
    }

    let li = document.createElement('li');
    li.className = "list-group-item";

    // Les boutons Modifier / Supprimer / Check(fait)

    let checkButton = document.createElement('button');
    checkButton.className = "btn-warning btn btn-sm float-right";

    var check = function(){
        this.parentNode.classList.toggle('checked');
    }

    checkButton.addEventListener('click', check);

    let deleteButton = document.createElement('button');
    deleteButton.className = "btn-danger btn btn-sm float-right delete";

    let editButton = document.createElement('button');
    editButton.className = "btn-success btn btn-sm float-right edit";

    editButton.appendChild(document.createTextNode("Modifier"));
    checkButton.appendChild(document.createTextNode("Fait"));
    deleteButton.appendChild(document.createTextNode("Supprimer"));


    li.appendChild(document.createTextNode(newItem));
    li.appendChild(checkButton);
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    tasks.appendChild(li);
}

 // Fonction supprimer un item ici une tâche //
function removeItem(e){

    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm("Vous voulez vraiment supprimer la tâche ?")){
            let li = e.target.parentNode;
            tasks.removeChild(li);
            document.getElementById("success").innerHTML = "Tâche supprimé";
            document.getElementById("success").style.display = "block";
            setTimeout( function(){ document.getElementById("success").style.display = "none"; } ,3000);		
        }
    }
    if(e.target.classList.contains('edit')){
        document.getElementById('task').value = e.target.parentNode.childNodes[0].data;
        submit.value = "EDIT";
        editItem = e;		
    }
}

function toggleButton(ref,btnID){
    document.getElementById(btnID).disabled = false;
}