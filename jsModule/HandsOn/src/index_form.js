function valueReader() {document.querySelector("#firstName").addEventListener
    ("input", function(e){
        console.log("firstname = " + e.target.value);
        document.querySelector("#myName").innerHTML = e.target.value;
    });

    document.querySelector("#lastName").addEventListener("input",
        function(){
            console.log("lastName");
        })
    }

    window.onload = valueReader;