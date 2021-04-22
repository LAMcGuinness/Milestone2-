// api used https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

function getCocktail(){
  // code from google devoloper
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
     .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        displayCocktail(data);
      });
    }
)
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

getCocktail();

function displayCocktail(cocktail){
  let cocktailSection = document.querySelector('#cocktail-section');
  
  let cocktailName = document.createElement('h2');
  cocktailName.innerHTML = cocktail.drinks[0].strDrink;

  cocktailSection.appendChild(cocktailName);

  let img = document.createElement('img');
  img.setAttribute('id', 'cocktailImage');
  img.src = cocktail.drinks[0].strDrinkThumb;

  cocktailSection.appendChild(img);
  // maybe cards/bootstrap better?

  // create loop for ingredients and measures 


  //for(let i=1; 1<15; i++){
    //let ingredient = document.createElement('list')
   // ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ':' + cocktail.drinks[0][`strIngredient${i}`];

    //cocktailSection.appendChild(ingredient);
 // }
};
