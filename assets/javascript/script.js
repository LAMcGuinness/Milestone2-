// fetch cocktails from json

fetch("https://thecocktaildb.com/api/json/v1/1/search.php?f=m")
    .then((response) => {
        return response.json()
    })

    