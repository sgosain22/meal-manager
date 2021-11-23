var dishes = [
  {
    id: 1,
    name: "Chicken Burger",
    restaurant: "Mc Donalds",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 2,
    name: "Ham Burger",
    restaurant: "Mc Donalds",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 3,
    name: "Cheese Burger",
    restaurant: "Mc Donalds",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 4,
    name: "Fries",
    restaurant: "Mc Donalds",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 5,
    name: "Egg Muffin",
    restaurant: "Mc Donalds",
    availableMeals: ["breakfast"],
  },
  {
    id: 6,
    name: "Burrito",
    restaurant: "Taco Bell",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 7,
    name: "Tacos",
    restaurant: "Taco Bell",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 8,
    name: "Quesadilla",
    restaurant: "Taco Bell",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 9,
    name: "Steak",
    restaurant: "BBQ Hut",
    availableMeals: ["dinner"],
  },
  {
    id: 10,
    name: "Yakitori",
    restaurant: "BBQ Hut",
    availableMeals: ["dinner"],
  },
  {
    id: 11,
    name: "Nankotsu",
    restaurant: "BBQ Hut",
    availableMeals: ["dinner"],
  },
  {
    id: 12,
    name: "Piman",
    restaurant: "BBQ Hut",
    availableMeals: ["dinner"],
  },
  {
    id: 13,
    name: "Vegan Bento",
    restaurant: "Vege Deli",
    availableMeals: ["lunch"],
  },
  {
    id: 14,
    name: "Coleslaw Sandwich",
    restaurant: "Vege Deli",
    availableMeals: ["breakfast"],
  },
  {
    id: 15,
    name: "Grilled Sandwich",
    restaurant: "Vege Deli",
    availableMeals: ["breakfast"],
  },
  {
    id: 16,
    name: "Veg. Salad",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 17,
    name: "Fruit Salad",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 18,
    name: "Corn Soup",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 19,
    name: "Tomato Soup",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 20,
    name: "Minestrone Soup",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 21,
    name: "Pepperoni Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 22,
    name: "Pepperoni Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 23,
    name: "Hawaiian Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 24,
    name: "Seafood Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 25,
    name: "Deep Dish Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["dinner"],
  },
  {
    id: 26,
    name: "Chow Mein",
    restaurant: "Panda Express",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 27,
    name: "Mapo Tofu",
    restaurant: "Panda Express",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 28,
    name: "Kung Pao",
    restaurant: "Panda Express",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 29,
    name: "Wontons",
    restaurant: "Panda Express",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 30,
    name: "Garlic Bread",
    restaurant: "Olive Garden",
    availableMeals: ["breakfast", "lunch", "dinner"],
  },
  {
    id: 31,
    name: "Ravioli",
    restaurant: "Olive Garden",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 32,
    name: "Rigatoni Spaghetti",
    restaurant: "Olive Garden",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 33,
    name: "Fettucine Pasta",
    restaurant: "Olive Garden",
    availableMeals: ["lunch", "dinner"],
  },
];


var arr = [];
var select = document.getElementById("formSelectDish");
const local = JSON.parse(localStorage.getItem("Meal"));
const filterData = () => {
  const data = dishes.filter((rest, index) =>
    rest.restaurant.toLowerCase().includes(local.resto.toLowerCase())
  );
  let arr = [];
  const fData = data.map((meal, id) =>
    meal.availableMeals.map((_) => {
      if (_ == local.meal_type) {
          console.log(meal.name)
        arr.push(meal.name);
        
      }
    })
  );
  console.log("data", arr);
  select.innerHTML = arr.map(
    (_) => `<option>${_}</option>`
  );
console.log(arr)
};
filterData();

var mutiDish = [];
document.getElementById("formSelectDish").addEventListener("click", (e) => {
  local.dishes = e.target.value;
  
});
console.log("obj ", local);
document.getElementById("serving_no").addEventListener("change", () => {
  local.NOD = document.getElementById("serving_no").value;
});


document.getElementById("add").addEventListener("click", () => {
  localStorage.setItem("Meal", JSON.stringify(local));
});



// document.getElementById("btnThree").addEventListener("click", function (event) {
//   event.preventDefault();
// });

// var listThree = [];
// function storelistThree() {
//   var formSelectDish = document.getElementById("formSelectDish").value;
//   console.log(formSelectDish);
//   localStorage.setItem("listThree", JSON.stringify(listThree));
//   listThree.push({
//     formSelectDish: formSelectDish,
//   });
//   localStorage.setItem("listThree", JSON.stringify(listThree));
//   console.log(localStorage);
//   console.log(listThree);
// }

// var allDishes = dishes.map((x) => {
//   return x.name;
// });

// var outputArray = [];

// // Count variable is used to add the
// // new unique value only once in the
// // outputArray.
// var count = 0;

// // Start variable is used to set true
// // if a repeated duplicate value is
// // encontered in the output array.
// var start = false;

// for (j = 0; j < allDishes.length; j++) {
//   for (k = 0; k < outputArray.length; k++) {
//     if (allDishes[j] == outputArray[k]) {
//       start = true;
//     }
//   }
//   count++;
//   if (count == 1 && start == false) {
//     outputArray.push(allDishes[j]);
//   }
//   start = false;
//   count = 0;
// }
// //console.log(outputArray);
// select = document.getElementById("formSelectDish");
// let str = "";
// outputArray.forEach((key) => {
//   str += `<option value='${key}'>${key}</option>`;
// });
// select.innerHTML = str;

// /////////////////////////

// // let firstMeal = JSON.parse(localStorage.getItem("listOne"));
// // var getMeal = firstMeal.map((h) => {
// //   return h.threeMeal;
// // });

// // var resName = JSON.parse(localStorage.getItem("listTwo"));
// // var externalPerRes = (resName[0].resList);
// // var InternalRes = dishes;
// // console.log(InternalRes)

// //var v = JSON.stringify(getMeal);
// //console.log(v);
// // let secondMeal = lunch;
// // let thirdMeal = dinner;
// // var refine_dish = dishes
// //   .filter((x) => {
// //     //console.log(x.availableMeals);
// //     x.availableMeals.filter((t) => {
// //      // console.log(t);
// //       // console.log(getMeal)
// //     });
// //   })
// //   .map((x) => {
// //     return x;
// //   });
// // console.log(refine_dish);


  // function addMore() {
  //   let a = document.getElementById("formSelectDish");
  //   let c = document.getElementById("serving_no");
    // document.getElementById("select_complete_dish").appendChild(c)
    // document.getElementById("select_complete_dish").innerHTML =c.value
    
    // console.log(y)
    // let b = document.getElementById("select_complete_dish");
    // y.insertBefore(b, y);
  // }

