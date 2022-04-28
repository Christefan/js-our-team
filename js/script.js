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



//Stampa
for(let k in team){
    console.log(team[k]);
}
const gridObj = document.querySelector(".team-card");
for(let i=0; i < team.length;i++){
    const currentElement = team[i];
    console.log(currentElement.name, currentElement.role,currentElement.image);
    const domElement1 = generateBoxImg(currentElement.image);
    const domElement2 = generateBoxName(currentElement.name);
    const domElement3 = generateBoxRole(currentElement.role);
    domElement2.appendChild(domElement3);

    // appendo questo elemnto 
    gridObj.append(domElement1,domElement2);
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
