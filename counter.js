let button = document.getElementById("button")
let form = document.getElementById("form")
let result = document.getElementById("result")
let walkingInput = document.getElementById("walking")
let cyclingInput = document.getElementById("cycling")
let runningInput = document.getElementById("running")

button.addEventListener("click", calculateCalories)

function calculateCalories(event){
    event.preventDefault()

    const walkingTime = walkingInput.value
    const cyclingTime = cyclingInput.value
    const runningTime = runningInput.value

    walkingTimeCalories = walkingTime * 5
    cyclingTimeCalories = cyclingTime * 8
    runningTimeCalories = runningTime * 10

    const totalCaloriesBurned = walkingTimeCalories + cyclingTimeCalories + runningTimeCalories

    result.innerHTML = `The Total Calories Burned = ${totalCaloriesBurned}`

    walkingInput.value = ''
    cyclingInput.value = ''
    runningInput.value = ''

}