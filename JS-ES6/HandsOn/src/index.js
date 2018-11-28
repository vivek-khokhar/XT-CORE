const list = new Array(1,2,3,4,5);
console.log(list);

const names = ['doga', 'a', 'we', 'jack'];
console.log(names);

names.forEach(function (item, index) {
    console.log(item, index);
})

//quiz

const video = {
    genere:"si fi",
    list: ['a','b','c'],
    findMovies() {
        let genere = this.genere;
        this.list.forEach(function(movie, index) {
            console.log(genere);
            console.log(movie);
        })
    }
}
video.findMovies();

const video4 = {
    genere:"si fi",
    list: ['a','b','c'],
    findMovies() {
        console.log('call function');
        this.list.forEach.call(this.list,function(movie, index) {
            console.log(this.genere);
            console.log(movie);
            console.log('call function');
        })
    }
}
video4.findMovies();

const video3 = {
    genere:"si fi",
    list: ['a','b','c'],
    findMovies() {
        console.log('bind function');
        function named(movie, index) {
            console.log(this.genere);
            console.log(movie);
            console.log('bind function');
        }
        this.list.forEach(named.bind(this));
    }
}
video3.findMovies();

const video1 = {
    genere:"si fi",
    list: ['a','b','c'],
    findMovies() {
        let genere = this.genere;
        this.list.forEach(function(movie, index) {
            console.log(genere);
            console.log(movie);
        })
    }
}
video1.findMovies();

const video2 = {
    genere:"si fi",
    list: ['a','b','c'],
    findMovies() {
        //let self = this;
        this.list.forEach((movie, index) => {
            console.log(this.genere);
            console.log(movie);
        })
    }
}
video2.findMovies();