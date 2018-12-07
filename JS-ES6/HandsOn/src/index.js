function component() {
    console.log('component is called');
    const node = document.querySelector("#myHeading");
    console.dir(node);
    console.dir(node.innerHTML);
    createElement();
}

function createElement() {
    const newHeader = document.createElement('h2');
    newHeader.innerHTML="Created Element";
    console.dir(newHeader);
    document.body.appendChild(newHeader);
}

window.onload = component;