// API used www.thecocktaildb.com/api/json/v1/1/random.php error wrong api used
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
// fetch() from google developers

// for search bar
function grabSearchValue() {
  let searchVal = document.getElementById('search').value;
  fetch(baseUrl + '?s=' + searchVal)
  .then(function(response) {
    for (var resp ; response; {
      buildCocktailDiv(cocktail)
    });    
});
}

function getRandomCocktail(){
    fetch(baseUrl)
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        console.log(data);
        buildCocktailDiv(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

}

buildCocktailDiv();

function buildCocktailDiv(cocktail){

    let cocktailSection = document.querySelector("#cocktail-section");
// add cocktail name and append

    let cocktailName = document.createElement("h2");
    cocktailName.innerHTML = cocktail.drinks[0].strDrink;

    cocktailSection.appendChild(cocktailName);

// add image

    let img = document.createElement('img');
    img.src = cocktail.drinks[0].strDrinkThumb;

    cocktailSection.appendChild(img);
 

    for(let i=1; i<15; i++){
        if(cocktail.drinks[0][`strIngredient${i}`] == null){
            break;
        }
// if statement will run break loop when ingredients = null. Measures will be same. 

// concat ingredients and measures so they are side by side
        let ingredient = document.createElement('li');
        ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + cocktail.drinks[0][`strIngredient${i}`];

        cocktailSection.appendChild(ingredient);
    }

// add instructions 
    let instructionCard =  document.createElement('card');
    instructionCard.innerHTML = cocktail.drinks[0].strInstructions;

    cocktailSection.appendChild(instructionCard);


}