const familyTree = {
  name: "Grandfather",
  spouse: "Grandmother",
  children: [
    {
      name: "Son1",
      spouse: "Spouse1",
      children: [
        { name: "Son1", gender: "male" },
        { name: "Daughter1", gender: "female" },
        { name: "Daughter2", gender: "female" }
      ]
    },
    {
      name: "Son2",
      spouse: "Spouse2",
      children: [
        { name: "Son1", gender: "male" },
        { name: "Daugther1", gender: "female" }
      ]
    },
    {
      name:"Son3",
      spouse:"Spouse3",
      children:[
        { name: "Son1", gender: "male" },
        { name: "Son2", gender: "male" },
        { name: "Son3", gender: "male" }
      ]
    },
    {
      name:"Son4",
      spouse:"Spouse",
      children:[
        { name: "Son1", gender: "male" },
        { name: "Daughter1", gender: "female" }
      ]
    }
  ]
};

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
  if (person.children && person.children.length > 0) {
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

let tree=document.getElementById('family-tree');
tree.appendChild(renderPerson(familyTree));
