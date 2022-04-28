const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  document.getElementById("addMemberButton").addEventListener("click", addMember);

function addMember(){
    const userName = document.getElementById('name').value;
    console.log(userName);

    const userRole= document.getElementById('role').value;
    console.log(userRole);

    const userImg= document.getElementById('image').value;
    console.log(userImg);

    gridObjContainer(userName,userRole,userImg)
}



//Stampa
for(let i=0; i < team.length;i++){
    const currentElement = team[i];
    console.log(currentElement.name, currentElement.role,currentElement.image);
    gridObjContainer(currentElement.name, currentElement.role,currentElement.image)
}

function gridObjContainer(name,role,img){
const gridObjContainer = document.querySelector(".team-container");
const domElement1 = generateBoxImg(img);
const domElement2 = generateBoxName(name);
const domElement3 = generateBoxRole(role);

domElement2.appendChild(domElement3);

// appendo questo elemnto 
gridObjContainer.append(createBox(domElement1,domElement2));
}




function createBox(prova1,prova2){
    const gridObjBox = document.createElement("div");
    gridObjBox.setAttribute("class","team-card");
    gridObjBox.append(prova1,prova2);
    return gridObjBox;
}

function generateBoxImg(newobj3) {
    const newElement1 = document.createElement("div");

    newElement1.setAttribute('class','card-image')    
    newElement1.innerHTML =`<img src="img/${newobj3}"></img>`;
    // ritorno elemnto
    return newElement1;
    
}



function generateBoxName(newobj1) {
    const newElement2 = document.createElement("div");

    newElement2.setAttribute('class','card-text') 
    newElement2.innerHTML =`<h3>${newobj1}</h3>`;
    // ritorno elemnto
    return newElement2;
    
}



function generateBoxRole(newobj2){
    const newElement3 = document.createElement("p");
    newElement3.innerHTML =`${newobj2}`;
    // ritorno elemnto
    return newElement3;
}
