function myval() {
    let s1 = document.getElementById('select_meal').value;
    let s2 = document.getElementById('people').value;
    let s1h = document.getElementById('one1');
    let s2h = document.getElementById('one2');
    if (s1 == 'none') {
        s1h.style.display = 'inline';
    }
    if (s2 == 'none') {
        s2h.style.display = 'inline';
    }


    if (s1 != 'none') {
        s1h.style.display = 'none';
    }
    if (s2 != 'none') {
        s2h.style.display = 'none';
    }
}

function validateOne() {
    let s1 = document.getElementById('select_meal').value;
    let s2 = document.getElementById('people').value;
    let s1h = document.getElementById('one1');
    let s2h = document.getElementById('one2');

    if (s1 == 'none') {
        s1h.style.display = 'inline';
    }
    if (s2 == 'none') {
        s2h.style.display = 'inline'
    }
    if (s1 !== 'none') {
        s1h.style.display = 'none';
        localStorage.setItem('Type', s1);
        window.location.href = 'break.html'
    }
    if (s2 !== 'none') {
        s2h.style.display = 'none'
        localStorage.setItem('NoPeople', s2)
    }
    if (s1 == 'Breakfast') {
        localStorage.setItem('Type', s1);
        localStorage.setItem('NoPeople', s2);
        window.location.href = 'break.html'

    }
    if (s1 == 'Lunch') {
        localStorage.setItem('Type', s1);
        localStorage.setItem('NoPeople', s2);
        window.location.href = 'lunch.html'

    }
    if (s1 == 'Dinner') {
        localStorage.setItem('Type', s1);
        localStorage.setItem('NoPeople', s2);
        window.location.href = 'dinner.html'

    }






    console.log(s1);
    console.log(s2);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// break fast
function mybreak() {
    let s2_one = document.getElementById('break').value;
    let s2_oneh = document.getElementById('twobreak');

    if (s2_one == 'none') {
        s2_oneh.style.display = 'inline';
    }
    if (s2_one !== 'none') {
        s2_oneh.style.display = 'none';
    }

    console.log(s2_one);


}

function backmain_break() {
    window.location.href = 'index.html';


}

function validatetwo_break() {
    let s2_1 = document.getElementById('break').value;
    let s2_1h = document.getElementById('twobreak');



    if (s2_1 == 'none') {
        s2_1h.style.display = 'inline';
    } if (s2_1 !== 'none') {
        s2_1h.style.display = 'none';
    }
    if (s2_1 == 'Mc Donalds') {
        localStorage.setItem('Rest', s2_1);
        window.location.href = 'mc.html'

    }
    if (s2_1 == 'Vege Deli') {
        localStorage.setItem('Rest', s2_1);
        window.location.href = 'vege.html'

    }
    if (s2_1 == 'Olive Garden') {
        localStorage.setItem('Rest', s2_1);
        window.location.href = 'oli.html'

    }


}
const rr = JSON.parse(localStorage.getItem('task'));
console.log(rr);
console.log(rr[4].availableMeals[0]);

const breakfast = document.getElementById('break');

breakfast.innerHTML = `<option value="none">Select Restaurant</option>
                    <option value="Mc Donalds">${rr[4].restaurant}</option>
                    <option value="Vege Deli">${rr[13].restaurant}</option>
                    <option value="Olive Garden">${rr[29].restaurant}</option>`

/////////////////////////////////////////////////////////
// mac donald

function mc_break_select() {
    let mc_break_select = document.getElementById('mc_break_select').value;
    let mc_break_h = document.getElementById('mc_break_h');

    if (mc_break_select == 'none') {
        mc_break_h.style.display = 'inline';
    }
    if (mc_break_select !== 'none') {
        mc_break_h.style.display = 'none';
    }

    console.log(mc_break_select);

}

function backmc_break() {

    let mc_select = document.getElementById('mc_break_select');


    window.location.href = 'break.html';
    mc_select.selectedIndex = 0;


}

function validatemc_break() {
    let mc_break_select_vali = document.getElementById('mc_break_select').value;
    let mc_break_h_vali = document.getElementById('mc_break_h');
    let count = document.getElementById('count').value;


    if (mc_break_select_vali == 'none') {
        mc_break_h_vali.style.display = 'inline';
    }
    if (mc_break_select_vali !== 'none') {
        mc_break_h_vali.style.display = 'none';
        localStorage.setItem('Mealtype', mc_break_select_vali);
        localStorage.setItem('count', count);



    }
    console.log('count valu' + count);


}


///////////////////////////////////////
// oli start

function myoli() {
    let oli_break_select = document.getElementById('oli_break_select').value;
    let oli_break_h = document.getElementById('oli_break_h');

    if (oli_break_select == 'none') {
        oli_break_h.style.display = 'inline';
    }
    if (oli_break_select !== 'none') {
        oli_break_h.style.display = 'none';
    }

    console.log(oli_break_select);

}
function backoli_break() {

    let oli_select = document.getElementById('oli_break_select');
    window.location.href = 'break.html'



    oli_select.selectedIndex = 0;

}
function validateoli_break() {
    let oli_break_select_vali = document.getElementById('oli_break_select').value;
    let oli_break_h_vali = document.getElementById('oli_break_h');
    let count = document.getElementById('count').value;



    if (oli_break_select_vali == 'none') {
        oli_break_h_vali.style.display = 'inline';
    }
    if (oli_break_select_vali !== 'none') {
        oli_break_h_vali.style.display = 'none';

        localStorage.setItem('Mealtype', oli_break_select_vali);
        localStorage.setItem('count', count);



    }
    console.log('count value' + count);


}


////////////////////////////////////////
// vege break
function myvege() {
    let vege_break_select = document.getElementById('vege_break_select').value;
    let vege_break_h = document.getElementById('vege_break_h');
    let grill = document.getElementById('vege_grilled');
    let col = document.getElementById('vege_col');
    let addbtn = document.getElementById('add_btn');

    if (vege_break_select == 'none') {
        vege_break_h.style.display = 'inline';
        addbtn.style.display = 'none';

    }
    if (vege_break_select !== 'none') {
        vege_break_h.style.display = 'none';
    }

    if (vege_break_select == 'Coleslaw Sandwich' || vege_break_select == 'Grilled Sandwich') {
        addbtn.style.display = 'inline';



    }

    grill.style.display = 'none';
    col.style.display = 'none';


    console.log(vege_break_select);


}


function myvege_one() {
    let vege_select_one = document.getElementById('vege_break_select_one').value;
    let vege_one_h = document.getElementById('vege_break_one_h');

    if (vege_select_one == 'none') {
        vege_one_h.style.display = 'inline';
    }
    if (vege_select_one !== 'none') {
        vege_one_h.style.display = 'none';
    }

}
function myvege_two() {
    let vege_select_one = document.getElementById('vege_break_select_two').value;
    let vege_one_h = document.getElementById('vege_break_two_h');

    if (vege_select_one == 'none') {
        vege_one_h.style.display = 'inline';
    }
    if (vege_select_one !== 'none') {
        vege_one_h.style.display = 'none';
    }

}
function addbtnvege() {
    let vege_break_select = document.getElementById('vege_break_select').value;
    let grill = document.getElementById('vege_grilled');
    let col = document.getElementById('vege_col');
    let addbtn = document.getElementById('add_btn');
    if (vege_break_select == 'Coleslaw Sandwich') {
        grill.style.display = 'inline';
        addbtn.style.display = 'none';

    }
    if (vege_break_select == 'Grilled Sandwich') {
        col.style.display = 'inline';
        addbtn.style.display = 'none';
    }

}
function backvege_break() {
    let vege_select = document.getElementById('vege_break_select');
    let vege_select_one_back = document.getElementById('vege_break_select_one');
    let vege_select_two_back = document.getElementById('vege_break_select_two');
    window.location.href = 'break.html'



    vege_select.selectedIndex = 0;
    vege_select_one_back.selectedIndex = 0;
    vege_select_two_back.selectedIndex = 0;

}
function validatevege_break() {
    let vege_break_select_vali = document.getElementById('vege_break_select').value;
    let vege_break_select_vali_one = document.getElementById('vege_break_select_one').value;
    let vege_break_select_vali_two = document.getElementById('vege_break_select_two').value;
    let vege_break_h_vali = document.getElementById('vege_break_h');
    let count = document.getElementById('count').value;
    let count_one = document.getElementById('count_one').value;
    let count_two = document.getElementById('count_two').value;



    if (vege_break_select_vali == 'none') {
        vege_break_h_vali.style.display = 'inline';
    }
    if (vege_break_select_vali !== 'none') {
        vege_break_h_vali.style.display = 'none';



    }
    if (vege_break_select_vali == 'Coleslaw Sandwich') {
        localStorage.setItem('Mealtype', vege_break_select_vali);
        localStorage.setItem('count', count);

        localStorage.setItem('Mealtypeone', '');
        localStorage.setItem('count1', '')

    }
    if (vege_break_select_vali == 'Grilled Sandwich') {
        localStorage.setItem('Mealtype', vege_break_select_vali);
        localStorage.setItem('count', count);

        localStorage.setItem('Mealtypeone', '');
        localStorage.setItem('count1', '')

    }

    if (vege_break_select_vali == 'Coleslaw Sandwich' && vege_break_select_vali_one == 'Grilled Sandwich') {
        localStorage.setItem('Mealtype', vege_break_select_vali);
        localStorage.setItem('count', count);

        localStorage.setItem('Mealtypeone', vege_break_select_vali_one);
        localStorage.setItem('count1', count_one)




    }
    if (vege_break_select_vali == 'Grilled Sandwich' && vege_break_select_vali_two == 'Coleslaw Sandwich') {
        localStorage.setItem('Mealtype', vege_break_select_vali);
        localStorage.setItem('count', count);
        localStorage.setItem('Mealtypeone', vege_break_select_vali_two);
        localStorage.setItem('count2', count_two);



    }
    console.log('count value' + count);


}





