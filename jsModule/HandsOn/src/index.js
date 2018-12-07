const btn1 = document.querySelector('#btn1');

const component = {

    sayHello: function(name){
        alert('I am from Component '+ name);
    }
}

btn1.addEventListener("click", component.sayHello.bind(null, 'testUser'));