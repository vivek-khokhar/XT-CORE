function reqListner() {
	console.log(this.responseText)
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListner);
oReq.open("GET","https://jsonplaceholder.typicode.com/users");
oReq.send();