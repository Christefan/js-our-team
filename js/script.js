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
const gridObj = document.querySelector(".obj");
for(let i=0; i < team.length;i++){
    const currentElement = team[i];
    console.log(currentElement.name, currentElement.role,currentElement.image);
    const domElement = generateBox(currentElement.name, currentElement.role,currentElement.image)



    // appendo questo elemnto 
    gridObj.append(domElement);
}



function generateBox(newobj1,newobj2,newobj3) {
    const newElement = document.createElement("div");

    newElement.innerHTML = `<p>${newobj1} - ${newobj2} - ${newobj3}</p>`    
    // ritorno elemnto
    return newElement;
    
}
