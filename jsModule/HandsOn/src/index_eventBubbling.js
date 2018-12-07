function init() {
    document.querySelector("#div1").addEventListener("click", _ => console.log("event in div 1"));
    document.querySelector("#div2").addEventListener("click", _ => console.log("event in div 2"));
    document.querySelector("#div3").addEventListener("click", _ => console.log("event in div 3"));
    document.querySelector("#btn").addEventListener("click", e => {
        //e.stopImmediatePropagation();
        console.log("event in btn")});
}

window.onload = init;