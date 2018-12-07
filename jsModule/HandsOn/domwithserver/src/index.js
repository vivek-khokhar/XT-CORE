import ServiceTest from "./serviceTest";
function execution (){

const inst = new ServiceTest();


//inst.findByIdTest(instance.id);
//inst.updateTest(instance.id, 'Batman', 'Gowtham');
 inst.findAllTest().then(data => {

let container = document.getElementById("target");
container.setAttribute("class","container");
let ulElement = document.createElement("ul");
ulElement.innerHTML = "<h1>Profile Details</h1>";
ulElement.setAttribute("class","list-group");
data.forEach(profile => {
  let li = document.createElement('li');
  li.setAttribute("class","list-group-item");
  li.innerText = `User Profile name ${profile.name} from ${profile.city} with id ${profile.id}`;
  ulElement.appendChild(li);
});
container.appendChild(ulElement);
});

}

window.onload = execution;
