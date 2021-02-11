const fetch = require('node-fetch')

fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
.then( (response) => {
    if(response.ok) return response.json()
})
.then((data)=>{
    console.log("")
    console.log(`Formato: ${data.meals[0].strCategory}`)
    console.log("")
    console.log(`Nome: ${data.meals[0].strMeal}`)
    console.log("")
    console.log(`ID: ${data.meals[0].idMeal}`)
    console.log("")
    console.log(`Região: ${data.meals[0].strArea}`)
    console.log("")
    console.log(`Ingredientes: ${data.meals[0].strIngredient1}, ${data.meals[0].strIngredient2}, ${data.meals[0].strIngredient3}, ${data.meals[0].strIngredient4}, ${data.meals[0].strIngredient5}, ${data.meals[0].strIngredient6}, ${data.meals[0].strIngredient7}, ${data.meals[0].strIngredient8}, ${data.meals[0].strIngredient9}`)
    console.log("")
    console.log(`Instruções: ${data.meals[0].strInstructions}`)
})