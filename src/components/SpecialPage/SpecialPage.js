// import React, { useState } from "react";
// import DisplayPage from "../DisplayPage/DisplayPage";
// export default function SearchPage() {
//   const [drinks, setDrinks] = useState([]);
//   async function getDrinkRandom() {
//     try {
//       let response = await fetch(
//         `https://www.thecocktaildb.com/api/json/v1/1/random.php`
//       );
//       let json = await response.json();
//       console.log(json.drinks[0]);
//       let newArrObject = [{}];
//       for (const property in json.drinks[0]) {
//         switch (property) {
//           case "idDrink":
//           case "strDrink":
//           case "strAlcoholic":
//           case "strInstructions":
//           case "strDrinkThumb":
//           case "strIngredient1":
//           case "strIngredient2":
//           case "strIngredient3":
//           case "strIngredient4":
//           case "strIngredient5":
//           case "strIngredient6":
//           case "strIngredient7":
//           case "strIngredient8":
//           case "strIngredient9":
//           case "strIngredient10":
//           case "strIngredient11":
//           case "strIngredient12":
//           case "strIngredient13":
//           case "strIngredient14":
//           case "strIngredient15":
//           case "strMeasure1":
//           case "strMeasure2":
//           case "strMeasure3":
//           case "strMeasure4":
//           case "strMeasure5":
//           case "strMeasure6":
//           case "strMeasure7":
//           case "strMeasure8":
//           case "strMeasure9":
//           case "strMeasure10":
//           case "strMeasure11":
//           case "strMeasure12":
//           case "strMeasure13":
//           case "strMeasure14":
//           case "strMeasure15":
//             newArrObject = [
//               ...newArrObject,
//               { [property]: json.drinks[0][property] },
//             ];
//             break;
//         }
//       }
//       // console.log(newArrObject);
//       setDrinks(newArrObject);
//     } catch (e) {}
//     getDrinkRandom();
//   }
//   return ({
//     drinks.length !== 0 && (
//       <DisplayPage key={drinks[1]} drink={drinks}></DisplayPage>
//     );
//   })
// }
