const familyTree = {};

function renderPerson(person) {
  const div = document.createElement('div');
  div.classList.add('person');
    if (person.gender === "male") {
     div.style.backgroundColor = "#d0ebff";
    } 
    else if (person.gender === "female") {
    div.style.backgroundColor = "rgb(248, 224, 243)";
    }
    div.innerHTML = person.name ;
    if (person.spouse)
        {
            div.innerHTML +=" & "+person.spouse;
        }
  if (person.children && person.children.length > 0)
     {
    const childrenDiv = document.createElement('div');
    childrenDiv.classList.add('children', 'hidden');
     person.children.forEach(child => {
      childrenDiv.appendChild(renderPerson(child));
    });
  
    div.appendChild(childrenDiv);
    div.addEventListener('click', e => {
      e.stopPropagation();
      childrenDiv.classList.toggle('hidden');
    });
  }

 


  return div;
}
 function findPersonByName(person, name) {
  if (person.name.trim().toLowerCase() === name.trim().toLowerCase()) {
    return person;
  }
  if (person.children && person.children.length > 0) {
    for (let i = 0; i < person.children.length; i++) {
  let found = findPersonByName(person.children[i], name);
  if (found) return found;
  }
}

  return null;
}
function rerenderTree() {
  const treeDiv = document.getElementById("family-tree");
  treeDiv.innerHTML = ""; 
  treeDiv.appendChild(renderPerson(familyTree));
}

document.getElementById("addBtn").addEventListener("click", addMember());


function addMember() {
  const parentName = document.getElementById("parentInput").value;
  const userEnteredName = document.getElementById("nameInput").value;
  const userEnteredSpouse = document.getElementById("spouseInput").value;
  const userEnteredGender=document.getElementById("genderInput").value;
  const newPerson = {
      name: userEnteredName,
      spouse: userEnteredSpouse,
      gender:userEnteredGender,
      children: []
    };
   if (!familyTree.name) {   /*if the tree is empty*/
    Object.assign(familyTree, newPerson);
    rerenderTree();
    return;
  }
  const parent = findPersonByName(familyTree, parentName);
  

  if (parent) {
    
   
    parent.children = parent.children || [];
    parent.children.push(newPerson);
    rerenderTree();
  } else {
    alert("Parent not found!");
  }
}

rerenderTree();