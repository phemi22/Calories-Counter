// Using function declaration
// CREATE A FUNCTION THAT CALCULATES THE TOTAL PRICE OF TWO ITEMS

// Function declaration
function totalPrice(priceForItem1, priceForItem2){
    let totalPrice = priceForItem1 + priceForItem2
    return totalPrice
}
let firstTotalPrice = totalPrice(10, 20)
let secondTotalPrice = totalPrice(40, 40)
console.log(firstTotalPrice, secondTotalPrice)


// Function expression
const anotherTotalPrice = function(priceForItem1, priceForItem2){
    let totalPrice = priceForItem1 + priceForItem2
    return totalPrice
}
let newTotal = anotherTotalPrice(100, 100)
let anotherNewTotal = anotherTotalPrice(200,200)
console.log(newTotal, anotherNewTotal)


// Arrow function
const totalPrice3 = (priceForItem1, priceForItem2)=>{
    let totalPrice = priceForItem1 + priceForItem2
    return totalPrice
}
let test = totalPrice3(300, 300)
console.log(test)

const newArrow = fullName => fullName
let result = newArrow("Joseph")
console.log(result)



// Word Problem 1
const employee1 = {
    baseSalary : 50000,
    yearsOfService : 6
}
const employee2 = {
    baseSalary : 60000,
    yearsOfService : 4
}
const employee3 = {
    baseSalary : 45000,
    yearsOfService : 8
}

function calculateTotalPayment(baseSalary, yearsOfService){
    let bonusPercent
    if(yearsOfService >= 5){
        bonusPercent = 0.10
    }else{
        bonusPercent = 0.05
    }

    let bonus = baseSalary * bonusPercent
    let totalSalary = bonus + baseSalary

    return totalSalary
}

const firstEmployeeSalary = calculateTotalPayment(employee1.baseSalary, employee1.yearsOfService)

const secondEmployeeSalary = calculateTotalPayment(employee2.baseSalary, employee2.yearsOfService)

const thirdEmployeeSalary = calculateTotalPayment(employee3.baseSalary, employee3.yearsOfService)

const completeTotalSalary = firstEmployeeSalary + secondEmployeeSalary + thirdEmployeeSalary

console.log(`The total salary you will pay for the year including bonus is $${completeTotalSalary}`)




// Word Problem 2
function calorieCounter(walkingtime, runningtime, cyclingtime){
    const walkingCaloriesaMinute = 5
    const runningCaloriesaMinute = 10
    const cyclingCaloriesaMinute = 8

    const walkingCaloriesBurnt = walkingtime * walkingCaloriesaMinute
    const runningCaloriesBurnt = runningtime * runningCaloriesaMinute
    const cyclingCaloriesBurnt = cyclingtime * cyclingCaloriesaMinute;

    const totalCaloriesburnt = walkingCaloriesBurnt + runningCaloriesBurnt + cyclingCaloriesBurnt

    return totalCaloriesburnt
}

let resultOfCalories = calorieCounter(30, 15, 20)
console.log(`Your total calories burnt is ${resultOfCalories}`)