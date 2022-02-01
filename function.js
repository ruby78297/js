// function
//basic function 

function myFirstFunction() {
    console.log("hi this is my my function")
}
myFirstFunction()


//juice processor

function juiceProcessor(apple, orange) {
    const juice = `Juice with ${apple}  apples and ${orange} oranges `;
    return juice;
}

const juice = juiceProcessor(2, 3);
console.log(juice)

//fuction declaration


const currentYear = new Date().getFullYear();
console.log(currentYear)

function ageCalculator(birthYear) {
    const ageCal = currentYear - birthYear
    return ageCal
}

const age1 = ageCalculator(1992)
console.log(age1)


//function expression or annonmious function

const ageCalculator2 = function (birthYear) {
    return currentYear -birthYear
}
const age2 = ageCalculator2(1991)
console.log(age2)

//Arrow function
const retirementTime = birthYear =>1994 - birthYear;
const yearLeft = retirementTime(1998)
console.log(yearLeft)

//2---->
const retirementTime2 = (birthYear, firstName) => {
    retirement=2047-birthYear
    return `${firstName} will retire in ${retirement}`
}
const resultRetirementTime2 = retirementTime2(1992, `Ruby`)
console.log(resultRetirementTime2)