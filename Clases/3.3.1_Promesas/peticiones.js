const axios = require('axios');

axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian')
  .then(function ({ data }) {
    // handle success
    console.log(data.meals[0].idMeal);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  Hacer una petición por autor y devolver la lista de 
  sus libros

  http://openlibrary.org/search.json?author=asimov