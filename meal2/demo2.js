const mc = JSON.parse(localStorage.getItem('mc_lunch_select'));
console.log(mc);
console.log(mc[4].availableMeals[0]);

const mc = document.getElementById('lunch');

mc.innerHTML = `<option value="none">Select Restaurant</option>
<option value="Chicken Burger">Chicken Burger</option> <option value="Mc Donalds">${mc[0].name}</option>
<option value="Ham Burger">Ham Burger</option> <option value="Vege Deli">${mc[1].name}</option>
                     
<option value="Cheese Burger">Cheese Burger</option><option value="Olive Garden">${mc[2].name}</option>
<option value="Fries">Fries</option>  <option value="Taco Bell">${mc[3].name}</option>
                     `;






