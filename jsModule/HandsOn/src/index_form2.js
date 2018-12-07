function valueReader() {
    function saveDetails() {
        let hero = document.querySelector("#heroName");
        let alias = document.querySelector("#aliasName");
        let powers = document.querySelectorAll('[name="powers"]');
        let backStory = document.querySelector("#backStory");
        let affiliation = document.querySelectorAll('[name="affiliation"]');
        let rating = document.querySelector("#rating");

        let ablities = "";

        let associated;

        powers.forEach((power) => {
            ablities += power.checked ? power.value + " " : "";
        })

        affiliation.forEach(a => {
            associated = a.checked ? a.value: associated;
        })

        document.querySelector("#summary").innerHTML = 
            `Superhero name ${hero.value} has alias ${alias.value} and powers ${ablities}
             with backstory ${backStory.value} affiliated with ${associated}. Hero rating is ${rating.value}`
    };
    document.querySelector("#saveDetails").addEventListener("click", saveDetails.bind(this,));

    }

    window.onload = valueReader;