import React from "react";
import "./DisplayPage.css";
export default function DisplayPage(props) {
  console.log(props);
  return (
    <>
      <div>
        <img src={props.drink[5]["strDrinkThumb"]}></img>
      </div>
      <h3>Instructions</h3>
      <p>{props.drink[4]["strInstructions"]}</p>
      <h3>Ingredients</h3>
      {[...Array(15)].map((val, index) => {
        index++;
        if (
          props.drink[5 + index][`strIngredient${index}`] !== null ||
          props.drink[20 + index][`strMeasure${index}`] !== null
        ) {
          return (
            <p>
              {props.drink[5 + index][`strIngredient${index}`] +
                ": " +
                props.drink[20 + index][`strMeasure${index}`]}
            </p>
          );
        }
      })}
      {/* <p>
        {props.drink[6]["strIngredient1"]}: {props.drink[21]["strMeasure1"]}
      </p> */}
      {/* <p>
        {props.drink[7]["strIngredient2"]}: {props.drink[22]["strMeasure2"]}
      </p> */}
      {/* <p>
        {props.drink[8]["strIngredient3"]}: {props.drink[23]["strMeasure3"]}
      </p> */}
      {/* <p>
        {props.drink[9]["strIngredient4"]}: {props.drink[24]["strMeasure4"]}
      </p> */}
      {/* <p>
        {props.drink[10]["strIngredient5"]} : {props.drink[25]["strMeasure5"]}
      </p> */}
      {/* <p>
        {props.drink[11]["strIngredient6"]} : {props.drink[26]["strMeasure6"]}
      </p> */}
      {/* <p>
        {props.drink[12]["strIngredient7"]} : {props.drink[27]["strMeasure7"]}
      </p> */}
      {/* <p>
        {props.drink[13]["strIngredient8"]} : {props.drink[28]["strMeasure8"]}
      </p> */}
      {/* <p>
        {props.drink[14]["strIngredient9"]} : {props.drink[29]["strMeasure9"]}
      </p> */}
      {/* <p>
        {props.drink[15]["strIngredient10"]} : {props.drink[30]["strMeasure10"]}
      </p> */}
      {/* <p>
        {props.drink[16]["strIngredient11"]} : {props.drink[31]["strMeasure11"]}
      </p> */}
      {/* <p>
        {props.drink[17]["strIngredient12"]} : {props.drink[32]["strMeasure12"]}
      </p> */}
      {/* <p>
        {props.drink[18]["strIngredient13"]} : {props.drink[33]["strMeasure13"]}
      </p> */}
      {/* <p>
        {props.drink[19]["strIngredient14"]} : {props.drink[34]["strMeasure14"]}
      </p> */}
      {/* {props.drink[20]["strIngredient15"] !== null && (
        <p>
          {props.drink[20]["strIngredient15"]} :15
          {props.drink[35]["strMeasure15"]}
        </p>
      )} */}
    </>
  );
}
