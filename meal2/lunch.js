function mylunch() {
    let s2_one = document.getElementById('lunch').value;
    let s2_oneh = document.getElementById('twolunch');

    if (s2_one == 'none') {
        s2_oneh.style.display = 'inline';
    }
    if (s2_one !== 'none') {
        s2_oneh.style.display = 'none';
    }

    console.log(s2_one);


}

function backmain_lunch() {
    window.location.href = 'index.html';


}
function validatetwo_lunch() {
    let s2_1 = document.getElementById('lunch').value;
    let s2_1h = document.getElementById('twolunch');



    if (s2_1 == 'none') {
        s2_1h.style.display = 'inline';
    } if (s2_1 !== 'none') {
        s2_1h.style.display = 'none';
    }
    if(s2_1=='Mc Donalds'){
        localStorage.setItem('Rest', s2_1);
        window.location.href = 'mclunch.html'

    }
    if(s2_1=='Vege Deli'){
        localStorage.setItem('Rest', s2_1);
        window.location.href = 'vegelunch.html'

    }
    if(s2_1=='Olive Garden'){
        localStorage.setItem('Rest', s2_1);
        window.location.href = 'olilunch.html'

    }
    if(s2_1=='Taco Bell'){
        localStorage.setItem('Rest', s2_1);
        window.location.href = 'tacolunch.html'

    }
    if(s2_1=='Pizzeria'){
        localStorage.setItem('Rest', s2_1);
        window.location.href = 'pizalunch.html'

    }
    if(s2_1=='Panda Express'){
        localStorage.setItem('Rest', s2_1);
        window.location.href = 'pandalunch.html'

    }


}
const rr = JSON.parse(localStorage.getItem('task'));
console.log(rr);
console.log(rr[4].availableMeals[0]);

const lunch_dom = document.getElementById('lunch');

lunch_dom.innerHTML = `<option value="none">Select Restaurant</option>
                    <option value="Mc Donalds">${rr[4].restaurant}</option>
                    <option value="Vege Deli">${rr[13].restaurant}</option>
                    <option value="Olive Garden">${rr[29].restaurant}</option>
                    <option value="Taco Bell">${rr[7].restaurant}</option>
                    <option value="Pizzeria">${rr[20].restaurant}</option>
                    <option value="Panda Express">${rr[25].restaurant}</option>`