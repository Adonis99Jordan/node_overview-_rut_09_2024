const mathtools = {
    num1: 15,
    num2: 10,
    //short hand for sum:function()
    // sum()
    sum: function() {
        //return the sum of num 1 and 2
        // console.log(module);
        const nested = () => {
            console.log('nested', this.num1);
            const morenested = () => {
                console.log('morenested', this.num2);
            }

            morenested();
        }

        nested();

        return this.num1 + this.num2;
    },
    difference: function() {
        //return the difference of num 1 and 2 (ie. num1- num2)
        return this.num1 - this.num2;
    }
};

const sum = mathtools.sum();
const diff = mathtools.difference();

console.log('sum', sum);
console.log('diff', diff);



// function printName(userName) {
//     const capitalize = str => str[0].toUpperCase() + str.slice(1);

//     const capName = capitalize(userName);

//     console.log(capName);
// }

// printName('sarah');
