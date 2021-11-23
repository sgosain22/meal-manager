document.getElementById("btnFour").addEventListener("click", function (event) {
  event.preventDefault();
});


const local = JSON.parse(localStorage.getItem("Meal"));
console.log(local)
let meal_value = local.meal_type;
let guest_no = local.NOP;
let restro_name = local.resto;
let dish_name = local.dishes;
let dish_qty = local.NOD;
document.getElementById("inner_box_one").innerHTML= meal_value;
document.getElementById("inner_box_two").innerHTML= guest_no;
document.getElementById("inner_box_three").innerHTML= restro_name;
document.getElementById("inner_box_four").innerHTML= dish_name;
document.getElementById("inner_box_five").innerHTML= dish_qty;


