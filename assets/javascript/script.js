// api used https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

// constants
const cocktailList = document.getElementById('cocktailList');
const searchBar = document.getElementById('searchBar');

// event listener for keyboard search
searchBar.addEventListener('keyup', (e) => {


});



const loadCocktails = async () => {
    try {
        const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
        let cocktailByIngredient = await res.json();
        displayCocktail(cocktailByIngredient);
    } catch (err) {
        console.error(err);
    }
};

const displayCocktail = (cocktails) => {
    const htmlString = cocktails
    .map((cocktails) => {
        return `
        <li class="cocktails">
            <h2>${cocktails.drinks[0].strDrink}</h2>
            <p>Method: ${cocktails.drinks[0].strInstructions}</p>
            <img src="${cocktail.drinks[0].strDrinkThumb}"></img>
        </li>
        `;
    })
    .join ('');
    cocktailList.innerHTML = htmlString;
  };

  loadCocktails();


