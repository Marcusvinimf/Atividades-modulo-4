const fetch = require('node-fetch')

async function fetchDez(url){
   let response = await fetch(url)
   let data = await response.json()

   let naoQueria = []

    for(let i=0; i<10; i++){
        naoQueria.push(data.meals[i].strMeal)
        console.log(i+1, ":", data.meals[i])
    }

    console.log(naoQueria)
}
fetchDez('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')