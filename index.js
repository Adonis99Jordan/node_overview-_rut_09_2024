const nums = [10, 3, 100, 70, 8, 55, 88];
const user = [
    {
        name: 'Bob',
        age: 99
    },
    {
        name: 'Jim',
        age: 25
    },
    {
        name: 'Sarah',
        age: 40
    }
];

const students = [
    {
        name: 'Roman',
        average: 99
    },
    {
        name: 'Matt',
        average: 80
    },
    {
        name: 'Izzy',
        average: 95
    },
    {
        name: 'Kandyce',
        average: 90
    }
]

const sum = nums.reduce((output, num) => {
    return output + num
}, 0);

// const overallaverage = students.reduce((output, studentobj, index, arr) => {
//     // If we are on the last student return the output divided by the arr length
//     if (index === arr.length - 1) {
//         return (output + studentobj.average) / arr.length;
//     }
//     //Otherwise, return output + studentobj's average
//     return output + studentobj.average;
// }, 0);

const studentinfo = students.reduce((output, studentobj, index, arr) => {
    output.overallaverage += studentobj.average;

    if (index == arr.length - 1) {
        output.overallaverage = output.overallaverage / arr.length;
    }


    output.studentcount = arr.length;

    return output;
}, {
    overallaverage: 0,
    studentcount: students.length
});

console.log(studentinfo);




// let average = 0;

// for (const studentobj of students) {
//     total += studentobj.average;
// }

// const overall = total / students.length;

// console.log(overall);











// const evenarray = nums.map((num) => {
//     if ((num % 2) === 0) {
//         return `$(num) is even`
//     } else {
//         return `$(num) is odd`
//     }
// });

// console.log(evenarray);





// nums.forEach((num, index) => {
//     console.log(index);
// });

// for (const num of nums) {
//     if (num > 10) {
//         break;
//     }
//     console.log(num);
// }





// for (let i = 0; i < nums.length; i ++) {
//     console.log(nums[i]);
// }






















//Filtering out values/items
// const filternums = nums.filter((num) => {
//     if (num > 10) {
//         return true;
//     }
// });

// const filterusers = user.filter((userobj) => {
//     if (userobj.age > 30) {
//         return true;
//     }
// })

// console.log(filterusers);





























//Algorithim challenge - write a function that orders the array numbers from lowest to highest
// const sorted = nums.sort((currentnum, nextnum) => {
//     return nextnum - currentnum;
// });


//Create a variable that stores a sorted userarray. In your callback function, return the difference between the current object's age and the next object's age
// const sortedUsers = user.sort((currentuser, nextuser) => {
//     return currentuser.age - nextuser.age;
// });

//Create a variable that stores the sorted userraary and sorts the objects by name -hint (all leter character have a number that you can pull with JS)

// console.log(sorted);
// console.log(sortedUsers);