   

   function one() {
        var num1 = 900;
        console.log(num1);
        return function two() {
            return num1++;
        }
    }

    var two = one();
    console.log(two());

    function createCounter() {
        let count = 0;
        return {
            increment () {
                count++;
                return count;
            },
            deccrement () {
                count--;
                return count;
            }
        }
    }
    var test = createCounter();
    console.log(test.increment());
    console.log(test.increment());
    console.log(test.increment());
    console.log(test.deccrement());
