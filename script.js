const familyTree = {
  name: "Daddy",
  spouse: "Mummy",
  children: [
    {
      name: "Bobby Alexx",
      spouse: "Ann cleine joseph",
      children: [
        { name: "Alex", gender: "male" },
        { name: "Nikkitha", gender: "female" },
        { name: "Thamnanna", gender: "female" }
      ]
    },
    {
      name: "Kishore",
      spouse: "Julie",
      children: [
        { name: "Alex Geo kishore", gender: "male" },
        { name: "Ann Rita kishore", gender: "female" }
      ]
    },
    {
      name:"Rajesh",
      spouse:"Tina",
      children:[
        { name: "Tarun Alexx", gender: "male" },
        { name: "Roshan Alexx", gender: "male" },
        { name: "Reuben Alexx", gender: "male" }
      ]
    },
    {
      name:"Renju",
      spouse:"Deepa",
      children:[
        { name: "Rohan", gender: "male" },
        { name: "Reshma", gender: "female" }
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
