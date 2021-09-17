////////////////////////////////////////////////////////////////////
// form one 
function myval() {
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
    let one = document.getElementById('one');
    let maindiv = document.getElementById('main');
    let breakfast = document.getElementById('two_break');
    let lunch = document.getElementById('two_lunch');
    let dinner = document.getElementById('two_dinner')
    let restdiv = document.getElementById('rest_div');
    if (s1 == 'none') {
        s1h.style.display = 'inline';
    }
    if (s2 == 'none') {
        s2h.style.display = 'inline'
    }

    if (s2 !== 'none' && s1 !== 'none') {
        one.style.display = 'none'
        maindiv.style.display = 'inline';
    }

    if (s1 == 'Breakfast' && s2 !== 'none') {

        breakfast.style.display = 'inline';
    }
    if (s1 == 'Lunch' && s2 !== 'none') {

        lunch.style.display = 'inline'
    }
    if (s1 == 'Dinner' && s2 !== 'none') {

        dinner.style.display = 'inline'
    }

    document.getElementById('meal').innerHTML = s1;
    document.getElementById('no_peop').innerHTML = s2;


    console.log(s1);
    console.log(s2);
}
/////////////////////////////////////////////////////////////////////////////////////////////
var count_mc = 1;
var countEl_mc = document.getElementById('count_mc_break');
function plus_mc() {
    count_mc++;
    countEl_mc.value = count_mc;
}
function minus_mc() {
    if (count_mc > 1) {
        count_mc--;
        countEl_mc.value = count_mc;
    }
}



let resth = document.getElementById('rest_h');
let rests = document.getElementById('rest');
let mainpage = document.getElementById('one');
let headerpage = document.getElementById('main');

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
function validatetwo_break() {
    let s2_1 = document.getElementById('break').value;
    let s2_1h = document.getElementById('twobreak');
    let divbreak = document.getElementById('mc_break');
    // let resth = document.getElementById('rest_h');
    // let rests = document.getElementById('rest');
    let breakfast_vali = document.getElementById('two_break');
    let vege_break = document.getElementById('vege_break');
    let oli_break = document.getElementById('oli_break');
    if (s2_1 == 'none') {
        s2_1h.style.display = 'inline';
    } if (s2_1 !== 'none') {
        s2_1h.style.display = 'none';

    }
    if (s2_1 == 'Mc Donalds') {
        resth.style.display = 'inline'
        rests.innerHTML = s2_1;
        breakfast_vali.style.display = 'none';
        divbreak.style.display = 'inline';
    }
    if (s2_1 == 'Vege Deli') {
        resth.style.display = 'inline'
        rests.innerHTML = s2_1;
        breakfast_vali.style.display = 'none';
        vege_break.style.display = 'inline'
    }
    if (s2_1 == 'Olive Garden') {
        resth.style.display = 'inline'
        rests.innerHTML = s2_1;
        breakfast_vali.style.display = 'none';
        oli_break.style.display = 'inline'
    }
}
function backmain_break() {
    let page_break = document.getElementById('two_break');
    let break_page = document.getElementById('break');
    break_page.selectedIndex = 0;
    page_break.style.display = 'none';
    mainpage.style.display = 'inline';
    headerpage.style.display = 'none';


}
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
    let break_page = document.getElementById('two_break');
    let mc_break = document.getElementById('mc_break');
    let mc_select = document.getElementById('mc_break_select');
    let rest_header = document.getElementById('rest_h');

    rest_header.style.display = 'none'
    break_page.style.display = 'inline';
    mc_break.style.display = 'none';
    mc_select.selectedIndex = 0;


}
function validatemc_break() {
    let mc_break_select_vali = document.getElementById('mc_break_select').value;
    let mc_break_h_vali = document.getElementById('mc_break_h');
    let foodone_vali_break = document.getElementById('foodone');
    let foodonespan_food_vali_break = document.getElementById('foodonespan_food')
    let foodonespan_count_vali_break = document.getElementById('foodonespan_count');
    let count_mc = document.getElementById('count_mc_break').value;
    let mc_break_div = document.getElementById('mc_break');
    let mainbtn = document.getElementById('mainbtndiv');
    let mc_final_btn = document.getElementById('mainbtnback');
    let vegeback = document.getElementById('vegeback');


    if (mc_break_select_vali == 'none') {
        mc_break_h_vali.style.display = 'inline';
    }
    if (mc_break_select_vali !== 'none') {
        mc_break_h_vali.style.display = 'none';
        foodone_vali_break.style.display = 'inline';
        foodonespan_food_vali_break.innerHTML = mc_break_select_vali;
        foodonespan_count_vali_break.innerHTML = count_mc;
        mc_break_div.style.display = 'none';
        vegeback.style.display = 'none';
        mc_final_btn.style.display = 'inline';
        mainbtn.style.display = 'inline'


    }
    console.log('count valu' + count_mc);


}
function finalback() {
    let foodone_back = document.getElementById('foodone');
    let mainbtndiv_final = document.getElementById('mainbtndiv');
    let mc_break = document.getElementById('mc_break');
    let mc_final_btn = document.getElementById('mainbtnback');
    mc_final_btn.style.display = 'inline';


    foodone_back.style.display = 'none';
    mainbtndiv_final.style.display = 'none';

    mc_break.style.display = 'inline'

}


////////////////////////////////////////////////////////////////////////////////////////////////////
// vege Breakfast 
var count_vege = 1;
var countEl_vege = document.getElementById('count_vege_break');
function plus_vege() {
    count_vege++;
    countEl_vege.value = count_vege;
}
function minus_vege() {
    if (count_vege > 1) {
        count_vege--;
        countEl_vege.value = count_vege;
    }
}
var count_vege_one = 1;
var countEl_vege_one = document.getElementById('count_vege_break_one');
function plus_vege_one() {
    count_vege_one++;
    countEl_vege_one.value = count_vege_one;
}
function minus_vege_one() {
    if (count_vege_one > 1) {
        count_vege_one--;
        countEl_vege_one.value = count_vege_one;
    }
}
var count_vege_two = 1;
var countEl_vege_two = document.getElementById('count_vege_break_two');
function plus_vege_two() {
    count_vege_two++;
    countEl_vege_two.value = count_vege_two;
}
function minus_vege_two() {
    if (count_vege_two > 1) {
        count_vege_two--;
        countEl_vege_two.value = count_vege_two;
    }
}
function backvege_break() {
    let break_page = document.getElementById('two_break');
    let vege_break = document.getElementById('vege_break');
    let vege_select = document.getElementById('vege_break_select');
    let vege_select_one_back = document.getElementById('vege_break_select_one');
    let vege_select_two_back = document.getElementById('vege_break_select_two');
    let rest_header = document.getElementById('rest_h');
    let foodtwo_back = document.getElementById('foodtwo');

    rest_header.style.display = 'none'
    break_page.style.display = 'inline';
    vege_break.style.display = 'none';
    foodtwo_back.style.display = 'none'

    vege_select.selectedIndex = 0;
    vege_select_one_back.selectedIndex = 0;
    vege_select_two_back.selectedIndex = 0;

}
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
////////////////////////////////////////////////////////////////
function validatevege_break() {
    let vege_break_select_vali = document.getElementById('vege_break_select').value;
    let vege_break_select_vali_one = document.getElementById('vege_break_select_one').value;
    let vege_break_select_vali_two = document.getElementById('vege_break_select_two').value;
    let vege_break_h_vali = document.getElementById('vege_break_h');
    let foodone_vali_break = document.getElementById('foodone');
    let foodonespan_food_vali_break = document.getElementById('foodonespan_food')
    let foodonespan_count_vali_break = document.getElementById('foodonespan_count');

    let foodtwo_vali_break = document.getElementById('foodtwo');
    let foodtwospan_food_vali_break = document.getElementById('foodtwospan_food')
    let foodtwospan_count_vali_break = document.getElementById('foodtwospan_count');

    let count_vege = document.getElementById('count_vege_break').value;
    let count_vege_one = document.getElementById('count_vege_break_one').value;
    let count_vege_two = document.getElementById('count_vege_break_two').value;

    let vege_break_div = document.getElementById('vege_break');
    let mainbtn = document.getElementById('mainbtndiv');
    let vege_final_btn = document.getElementById('vegeback');


    if (vege_break_select_vali == 'none') {
        vege_break_h_vali.style.display = 'inline';
    }
    if (vege_break_select_vali !== 'none') {
        vege_break_h_vali.style.display = 'none';
        foodone_vali_break.style.display = 'inline';
        foodonespan_food_vali_break.innerHTML = vege_break_select_vali;
        foodonespan_count_vali_break.innerHTML = count_vege;

        vege_break_div.style.display = 'none';
        vege_final_btn.style.display = 'inline';
        mainbtn.style.display = 'inline'


    }

    if (vege_break_select_vali == 'Coleslaw Sandwich' && vege_break_select_vali_one == 'Grilled Sandwich') {
        foodone_vali_break.style.display = 'inline';
        foodonespan_food_vali_break.innerHTML = vege_break_select_vali;
        foodonespan_count_vali_break.innerHTML = count_vege;


        foodtwo_vali_break.style.display = 'inline';
        foodtwospan_food_vali_break.innerHTML = vege_break_select_vali_one;
        foodtwospan_count_vali_break.innerHTML = count_vege_one;

        vege_break_div.style.display = 'none';
        vege_final_btn.style.display = 'inline';
        mainbtn.style.display = 'inline'




    }
    if (vege_break_select_vali == 'Grilled Sandwich' && vege_break_select_vali_two == 'Coleslaw Sandwich') {
        foodone_vali_break.style.display = 'inline';
        foodonespan_food_vali_break.innerHTML = vege_break_select_vali;
        foodonespan_count_vali_break.innerHTML = count_vege;


        foodtwo_vali_break.style.display = 'inline';
        foodtwospan_food_vali_break.innerHTML = vege_break_select_vali_two;
        foodtwospan_count_vali_break.innerHTML = count_vege_two;

        vege_break_div.style.display = 'none';
        vege_final_btn.style.display = 'inline';
        mainbtn.style.display = 'inline'




    }
    console.log('count value' + count_vege);


}
///////////////////////////
function vegefinalback() {
    let foodone_back = document.getElementById('foodone');
    let mainbtndiv_final = document.getElementById('mainbtndiv');
    let vege_break = document.getElementById('vege_break');
    let vege_final_btn = document.getElementById('vegeback');
    let foodtwo_finalback = document.getElementById('foodtwo');
    vege_final_btn.style.display = 'inline';
    foodtwo_finalback.style.display = 'none'

    foodone_back.style.display = 'none';
    mainbtndiv_final.style.display = 'none';

    vege_break.style.display = 'inline'

}
function myvege_one() {
    let vege_select_one = document.getElementById('vege_break_select_one');
    let vege_one_h = document.getElementById('vege_break_one_h');

    if (vege_select_one == 'none') {
        vege_one_h.style.display = 'inline';
    }
    if (vege_select_one !== 'none') {
        vege_one_h.style.display = 'none';
    }

}








////////////////////////////////////////////////////////////////////////////////////////////////////
// olive Garden BreakFast
var count_oli = 1;
var countEl_oli = document.getElementById('count_oli_break');
function plus_oli() {
    count_oli++;
    countEl_oli.value = count_oli;
}
function minus_oli() {
    if (count_oli > 1) {
        count_oli--;
        countEl_oli.value = count_oli;
    }
}
function backoli_break() {
    let break_page = document.getElementById('two_break');
    let oli_break = document.getElementById('oli_break');
    let oli_select = document.getElementById('oli_break_select');
    let rest_header = document.getElementById('rest_h');

    rest_header.style.display = 'none'
    break_page.style.display = 'inline';
    oli_break.style.display = 'none';
    oli_select.selectedIndex = 0;

}
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
function validateoli_break() {
    let oli_break_select_vali = document.getElementById('oli_break_select').value;
    let oli_break_h_vali = document.getElementById('oli_break_h');
    let foodone_vali_break = document.getElementById('foodone');
    let foodonespan_food_vali_break = document.getElementById('foodonespan_food')
    let foodonespan_count_vali_break = document.getElementById('foodonespan_count');
    let count_oli = document.getElementById('count_oli_break').value;
    let oli_break_div = document.getElementById('oli_break');
    let mainbtn = document.getElementById('mainbtndiv');
    let oli_final_btn = document.getElementById('oliback');


    if (oli_break_select_vali == 'none') {
        oli_break_h_vali.style.display = 'inline';
    }
    if (oli_break_select_vali !== 'none') {
        oli_break_h_vali.style.display = 'none';
        foodone_vali_break.style.display = 'inline';
        foodonespan_food_vali_break.innerHTML = oli_break_select_vali;
        foodonespan_count_vali_break.innerHTML = count_oli;
        oli_break_div.style.display = 'none';
        oli_final_btn.style.display = 'inline';
        mainbtn.style.display = 'inline'


    }
    console.log('count value' + count_oli);


}
function olifinalback() {
    let foodone_back = document.getElementById('foodone');
    let mainbtndiv_final = document.getElementById('mainbtndiv');
    let oli_break = document.getElementById('oli_break');
    let oli_final_btn = document.getElementById('oliback');
    oli_final_btn.style.display = 'inline';


    foodone_back.style.display = 'none';
    mainbtndiv_final.style.display = 'none';

    oli_break.style.display = 'inline'

}



//////////////////////////////////////////////////////////////////////////////////////////





function mylunch() {
    let s2_2 = document.getElementById('lunch').value;
    let s2_2h = document.getElementById('twolunch');

    if (s2_2 == 'none') {
        s2_2h.style.display = 'inline'
    } else {
        s2_2h.style.display = 'none'
    }


}

function validatetwo_lunch() {

    let s2_two = document.getElementById('lunch').value;
    let s2_twoh = document.getElementById('twolunch');
    let mclunch = document.getElementById('mc_lunch');

    let lunch_vali = document.getElementById('two_lunch');
    if (s2_two == 'none') {
        s2_twoh.style.display = 'inline';
    } if (s2_two !== 'none') {
        s2_twoh.style.display = 'none';
        resth.style.display = 'inline'
        rests.innerHTML = s2_two;
        lunch_vali.style.display = 'none';

    }
    if (s2_two == 'Mc Donalds') {
        mclunch.style.display = 'inline';


        resth.style.display = 'inline';
        rests.innerHTML = s2_two;
        lunch_vali.style.display = 'none';

    }


}
function backmain_lunch() {
    let pagetwo = document.getElementById('two_lunch');
    let lunch_page = document.getElementById('lunch');
    lunch_page.selectedIndex = 0;
    pagetwo.style.display = 'none';
    mainpage.style.display = 'inline';
    headerpage.style.display = 'none';

}



function mydinner() {
    let s2_3 = document.getElementById('dinner').value;
    let s2_3h = document.getElementById('twodinner');

    if (s2_3 == 'none') {
        s2_3h.style.display = 'inline'
    } else {
        s2_3h.style.display = 'none'
    }



}

function validatetwo_dinner() {
    let s2_three = document.getElementById('dinner').value;
    let s2_threeh = document.getElementById('twodinner');

    let lunch_vali = document.getElementById('two_dinner');
    if (s2_three == 'none') {
        s2_threeh.style.display = 'inline';
    } if (s2_three !== 'none') {
        s2_threeh.style.display = 'none';
        resth.style.display = 'inline'
        rests.innerHTML = s2_three;
        lunch_vali.style.display = 'none';
    }



}
function backmain_dinner() {
    let pagethree = document.getElementById('two_dinner');
    let dinner_page = document.getElementById('dinner');
    dinner_page.selectedIndex = 0;
    pagethree.style.display = 'none';
    mainpage.style.display = 'inline';
    headerpage.style.display = 'none';
}

function finalsubmit() {
    console.log('final submit');
}



/////////////////////////////////////////////////////////////////////////////////////////////////////
// mclunch
var count_mylunch = 1;
var countEl_mylunch = document.getElementById('count_mc_lunch');
function plus_mclunch() {
    count_mylunch++;
    countEl_mylunch.value = count_mylunch;
}
function minus_mclunch() {
    if (count_mylunch > 1) {
        count_mylunch--;
        countEl_mylunch.value = count_oli;
    }
}





/////////////////////////////////////////////////////////////////////////////////////////////
// mc lunch main coding
//////////////////////////////
// chicken
function mychick() {
    let mychick = document.getElementById('chick_select').value;
    let mychick_h = document.getElementById('chick');

    if (mychick == 'none') {

        mychick_h.style.display = 'inline';
    } if (mychick !== 'none') {
        mychick_h.style.display = 'none';

    }

    console.log(mychick);
}
var count_mychick = 1;
var countEl_mychick = document.getElementById('count_chick');
function plus_chick() {
    count_mychick++;
    countEl_mychick.value = count_mychick;
}
function minus_chick() {
    if (count_mychick > 1) {
        count_mychick--;
        countEl_mychick.value = count_mychick;
    }
}
function mychickham() {
    let mychick_ham = document.getElementById('chick_ham_select').value;
    let mychick_ham_h = document.getElementById('chick_ham');

    if (mychick_ham == 'none') {

        mychick_ham_h.style.display = 'inline';
    } if (mychick_ham !== 'none') {
        mychick_ham_h.style.display = 'none';

    }

    console.log(mychick_ham);

}
var count_mychickham = 1;
var countEl_mychickham = document.getElementById('count_chick_ham');
function plus_chick_ham() {
    count_mychickham++;
    countEl_mychcikham.value = count_mychickham;
}
function minus_chick_ham() {
    if (count_mychickham > 1) {
        count_mychickham--;
        countEl_mychickham.value = count_mychickham;
    }
}




function mychickhamcheese() {
    let mychick_hamcheese = document.getElementById('chick_ham_cheese_select').value;
    let mychick_hamcheese_h = document.getElementById('chick_ham_cheese');

    if (mychick_hamcheese == 'none') {

        mychick_hamcheese_h.style.display = 'inline';
    } if (mychick_hamcheese !== 'none') {
        mychick_hamcheese_h.style.display = 'none';

    }

    console.log(mychick_hamcheese);

}





var count_mychickhamcheese = 1;
var countEl_mychickhamcheese = document.getElementById('count_chick_ham_cheese');
function plus_chick_ham_cheese() {
    count_mychickhamcheese++;
    countEl_mychcikhamcheese.value = count_mychickhamcheese;
}
function minus_chick_ham_cheese() {
    if (count_mychickhamcheese > 1) {
        count_mychickhamcheese--;
        countEl_mychickhamcheese.value = count_mychickhamcheese;
    }
}


function mychickhamfries() {
    let mychick_hamfries = document.getElementById('chick_ham_fries_select').value;
    let mychick_hamfries_h = document.getElementById('chick_ham_fries');

    if (mychick_hamfries == 'none') {

        mychick_hamfries_h.style.display = 'inline';
    } if (mychick_hamfries !== 'none') {
        mychick_hamfries_h.style.display = 'none';

    }

    console.log(mychick_hamfries);

}
var count_mychickhamfries = 1;
var countEl_mychickhamfries = document.getElementById('count_chick_ham_fries');
function plus_chick_ham_fries() {
    count_mychickhamfries++;
    countEl_mychcikhamfries.value = count_mychickhamfries;
}
function minus_chick_ham_fries() {
    if (count_mychickhamfries > 1) {
        count_mychickhamfries--;
        countEl_mychickhamfries.value = count_mychickhamfries;
    }
}
function mychickcheese() {
    let mychickcheeseham = document.getElementById('chick_cheese_ham_select').value;
    let mychickcheeseham_h = document.getElementById('chick_cheese_ham');

    if (mychickcheeseham == 'none') {

        mychickcheeseham_h.style.display = 'inline';
    } if (mychickcheeseham !== 'none') {
        mychickcheeseham_h.style.display = 'none';

    }

    console.log(mychickcheeseham);

}
var count_mychickcheeseham = 1;
var countEl_mychickcheeseham = document.getElementById('count_chick_cheese_ham');
function plus_chick_cheese_ham() {
    count_mychickcheeseham++;
    countEl_mychickcheeseham.value = count_mychickcheeseham;
}
function minus_chick_cheese_ham() {
    if (count_mychickcheeseham > 1) {
        count_mychickcheeseham--;
        countEl_mychickcheeseham.value = count_mychickcheeseham;
    }
}
function mychickcheesefries() {
    let mychickcheesefries = document.getElementById('chick_cheese_fries_select').value;
    let mychickcheesefries_h = document.getElementById('chick_cheese_fries');

    if (mychickcheesefries == 'none') {

        mychickcheesefries_h.style.display = 'inline';
    } if (mychickcheesefries !== 'none') {
        mychickcheesefries_h.style.display = 'none';

    }

    console.log(mychickcheesefries);

}
var count_mychickcheesefries = 1;
var countEl_mychickcheesefries = document.getElementById('count_chick_cheese_fries');
function plus_chick_cheese_fries() {
    count_mychickcheesefries++;
    countEl_mychickcheesefries.value = count_mychickcheesefries;
}
function minus_chick_cheese_fries() {
    if (count_mychickcheesefries > 1) {
        count_mychickcheesefries--;
        countEl_mychickcheesefries.value = count_mychickcheesefries;
    }
}
function mychickcheese() {
    let mychickcheese = document.getElementById('chick_cheese_select').value;
    let mychickcheese_h = document.getElementById('chick_cheese');

    if (mychickcheese == 'none') {

        mychickcheese_h.style.display = 'inline';
    } if (mychickcheese !== 'none') {
        mychickcheese_h.style.display = 'none';

    }

    console.log(mychickcheese);

}
var count_mychickcheese = 1;
var countEl_mychickcheese = document.getElementById('count_chick_cheese');
function plus_chick_cheese() {
    count_mychickcheese++;
    countEl_mychickcheese.value = count_mychickcheese;
}
function minus_chick_cheese() {
    if (count_mychickcheese > 1) {
        count_mychickcheese--;
        countEl_mychickcheese.value = count_mychickcheese;
    }
}

function mychickfries() {
    let mychickfries = document.getElementById('chick_fries_select').value;
    let mychickfries_h = document.getElementById('chick_fries');

    if (mychickfries == 'none') {

        mychickfries_h.style.display = 'inline';
    } if (mychickfries !== 'none') {
        mychickfries_h.style.display = 'none';

    }

    console.log(mychickfries);

}
var count_mychickfries = 1;
var countEl_mychickfries = document.getElementById('count_chick_fries');
function plus_chick_fries() {
    count_mychickfries++;
    countEl_mychickfries.value = count_mychickfries;
}
function minus_chick_fries() {
    if (count_mychickfries > 1) {
        count_mychickfries--;
        countEl_mychickfries.value = count_mychickfries;
    }
}
function mychickfriesham() {
    let mychickfriesham = document.getElementById('chick_fries_ham_select').value;
    let mychickfriesham_h = document.getElementById('chick_fries_ham');

    if (mychickfriesham == 'none') {

        mychickfriesham_h.style.display = 'inline';
    } if (mychickfriesham !== 'none') {
        mychickfriesham_h.style.display = 'none';

    }

    console.log(mychickfriesham);
}
var count_mychickfriesham = 1;
var countEl_mychickfriesham = document.getElementById('count_chick_fries_ham');
function plus_chick_fries_ham() {
    count_mychickfriesham++;
    countEl_mychchickfriesham.value = count_mychickfriesham;
}
function minus_chick_fries_ham() {
    if (count_mychickfriesham > 1) {
        count_mychickfriesham--;
        countEl_mychickfriesham.value = count_mychickfriesham;
    }
}


function mychickfriescheese() {
    let mychickfriescheese = document.getElementById('chick_fries_cheese_select').value;
    let mychickfriescheese_h = document.getElementById('chick_fries_cheese');

    if (mychickfriescheese == 'none') {

        mychickfriescheese_h.style.display = 'inline';
    } if (mychickfriescheese !== 'none') {
        mychickfriescheese_h.style.display = 'none';

    }

    console.log(mychickfriescheese);

}
var count_mychickfriescheese = 1;
var countEl_mychickfriescheese = document.getElementById('count_chick_fries_cheese');
function plus_chick_fries_cheese() {
    count_mychickfriescheese++;
    countEl_mychickfriescheese.value = count_mychickfriescheese;
}
function minus_chick_fries_cheese() {
    if (count_mychickfriescheese > 1) {
        count_mychickfriescheese--;
        countEl_mychickfriescheese.value = count_mychickfriescheese;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// Ham start


function myham() {
    let myham = document.getElementById('ham_select').value;
    let myham_h = document.getElementById('ham');

    if (myham == 'none') {

        myham_h.style.display = 'inline';
    } if (myham !== 'none') {
        myham_h.style.display = 'none';

    }

    console.log(myham);


}
var count_myham = 1;
var countEl_myham = document.getElementById('count_ham');
function plus_ham() {
    count_myham++;
    countEl_myham.value = count_myham;
}
function minus_ham() {
    if (count_myham > 1) {
        count_myham--;
        countEl_myham.value = count_myham;
    }
}
function myhamchick() {
    let myhamchick = document.getElementById('ham_chick_select').value;
    let myhamchick_h = document.getElementById('ham_chick');

    if (myhamchick == 'none') {

        myhamchick_h.style.display = 'inline';
    } if (myhamchick !== 'none') {
        myhamchick_h.style.display = 'none';

    }

    console.log(myhamchick);


}
var count_myhamchick = 1;
var countEl_myhamchick = document.getElementById('count_ham_chick');
function plus_ham_chick() {
    count_myhamchick++;
    countEl_myhamchick.value = count_myhamchick;
}
function minus_ham_chick() {
    if (count_myhamchick > 1) {
        count_myhamchick--;
        countEl_mychamchickvalue = count_myhamchick;
    }
}
function myhamchickcheese() {
    let myhamchickcheese = document.getElementById('ham_chick_cheese_select').value;
    let myhamchickcheese_h = document.getElementById('ham_chick_cheese');

    if (myhamchickcheese == 'none') {

        myhamchickcheese_h.style.display = 'inline';
    } if (myhamchickcheese !== 'none') {
        myhamchickcheese_h.style.display = 'none';

    }

    console.log(myhamchickcheese);


}
var count_myhamchickcheese = 1;
var countEl_myhamchickcheese = document.getElementById('count_ham_chick_cheese');
function plus_ham_chick_cheese() {
    count_myhamchickcheese++;
    countEl_myhamchickcheese.value = count_myhamchickcheese;
}
function minus_ham_chick_cheese() {
    if (count_myhamchickcheese > 1) {
        count_myhamchickcheese--;
        countEl_myhamchickcheese.value = count_myhamchickcheese;
    }
}
function myhamchickfries() {
    let myhamchickfries = document.getElementById('ham_chick_fries_select').value;
    let myhamchickfries_h = document.getElementById('ham_chick_fries');

    if (myhamchickfries == 'none') {

        myhamchickfries_h.style.display = 'inline';
    } if (myhamchickfries !== 'none') {
        myhamchickfries_h.style.display = 'none';

    }

    console.log(myhamchickfries);


}
var count_myhamchickfries = 1;
var countEl_myhamchickfries = document.getElementById('count_ham_chick_fries');
function plus_ham_chick_fries() {
    count_myhamchickfries++;
    countEl_myhamchickfries.value = count_myhamchickfries;
}
function minus_ham_chick_fries() {
    if (count_myhamchickfries > 1) {
        count_myhamchickfries--;
        countEl_myhamchickfries.value = count_myhamchickfries;
    }
}
function myhamcheese() {
    let myhamcheese = document.getElementById('ham_cheese_select').value;
    let myhamcheese_h = document.getElementById('ham_cheese');

    if (myhamcheese == 'none') {

        myhamcheese_h.style.display = 'inline';
    } if (myhamcheese !== 'none') {
        myhamcheese_h.style.display = 'none';

    }

    console.log(myhamcheese);


}
var count_myhamcheese = 1;
var countEl_myhamcheese = document.getElementById('count_ham_cheese');
function plus_ham_cheese() {
    count_myhamcheese++;
    countEl_myhamcheese.value = count_myhamcheese;
}
function minus_ham_cheese() {
    if (count_myhamcheese > 1) {
        count_myhamcheese--;
        countEl_myhamcheese.value = count_myhamcheese;
    }
}
function myhamcheesechick() {
    let myhamcheesechick = document.getElementById('ham_cheese_chick_select').value;
    let myhamcheesechick_h = document.getElementById('ham_cheese_chick');

    if (myhamcheesechick == 'none') {

        myhamcheesechick_h.style.display = 'inline';
    } if (myhamcheesechick !== 'none') {
        myhamcheesechick_h.style.display = 'none';

    }

    console.log(myhamcheesechick);


}
var count_myhamcheesechick = 1;
var countEl_myhamcheesechick = document.getElementById('count_ham_cheese_chick');
function plus_ham_cheese_chick() {
    count_myhamcheesechick++;
    countEl_myhamcheesechick.value = count_myhamcheesechick;
}
function minus_ham_cheese_chick() {
    if (count_myhamcheesechick > 1) {
        count_myhamcheesechick--;
        countEl_myhamcheesechick.value = count_myhamcheesechick;
    }
}
function myhamcheesefries() {
    let myhamcheesefries = document.getElementById('ham_cheese_fries_select').value;
    let myhamcheesefries_h = document.getElementById('ham_cheese_fries');

    if (myhamcheesefries == 'none') {

        myhamcheesefries_h.style.display = 'inline';
    } if (myhamcheesefries !== 'none') {
        myhamcheesefries_h.style.display = 'none';

    }

    console.log(myhamcheesefries);


}
var count_myhamcheesefries = 1;
var countEl_myhamcheesefries = document.getElementById('count_ham_cheese_fries');
function plus_ham_cheese_fries() {
    count_myhamcheesefries++;
    countEl_myhamcheesefries.value = count_myhamcheesefries;
}
function minus_ham_cheese_fries() {
    if (count_myhamcheesefries > 1) {
        count_myhamcheesefries--;
        countEl_myhamcheesefries.value = count_myhamcheesefries;
    }
}
function myhamfries() {
    let myhamfries = document.getElementById('ham_fries_select').value;
    let myhamfries_h = document.getElementById('ham_fries');

    if (myhamfries == 'none') {

        myhamfries_h.style.display = 'inline';
    } if (myhamfries !== 'none') {
        myhamfries_h.style.display = 'none';

    }

    console.log(myhamfries);


}
var count_myhamfries = 1;
var countEl_myhamfries = document.getElementById('count_ham_fries');
function plus_ham_fries() {
    count_myhamfries++;
    countEl_myhamfries.value = count_myhamfries;
}
function minus_ham_fries() {
    if (count_myhamfries > 1) {
        count_myhamfries--;
        countEl_myhamfries.value = count_myhamfries;
    }
}
function myhamfrieschick() {
    let myhamfrieschick = document.getElementById('ham_fries_chick_select').value;
    let myhamfrieschick_h = document.getElementById('ham_fries_chick');

    if (myhamfrieschick == 'none') {

        myhamfrieschick_h.style.display = 'inline';
    } if (myhamfrieschick !== 'none') {
        myhamfrieschick_h.style.display = 'none';

    }

    console.log(myhamfrieschick);


}
var count_myhamfrieschick = 1;
var countEl_myhamfrieschick = document.getElementById('count_ham_fries_chick');
function plus_ham_fries_chick() {
    count_myhamfrieschick++;
    countEl_myhamfrieschick.value = count_myhamfrieschick;
}
function minus_ham_fries_chick() {
    if (count_myhamfrieschick > 1) {
        count_myhamfrieschick--;
        countEl_myhamfrieschick.value = count_myhamfrieschick;
    }
}
function myhamfriescheese() {
    let myhamfriescheese = document.getElementById('ham_fries_cheese_select').value;
    let myhamfriescheese_h = document.getElementById('ham_fries_cheese');

    if (myhamfriescheese == 'none') {

        myhamfriescheese_h.style.display = 'inline';
    } if (myhamfriescheese !== 'none') {
        myhamfriescheese_h.style.display = 'none';

    }

    console.log(myhamfriescheese);


}
var count_myhamfriescheese = 1;
var countEl_myhamfriescheese = document.getElementById('count_ham_fries_cheese');
function plus_ham_fries_cheese() {
    count_myhamfriescheese++;
    countEl_myhamfriescheese.value = count_myhamfriescheese;
}
function minus_ham_fries_cheese() {
    if (count_myhamfriescheese > 1) {
        count_myhamfriescheese--;
        countEl_myhamfriescheese.value = count_myhamfriescheese;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
// cheese burger 

function mycheese() {
    let mycheese = document.getElementById('cheese_select').value;
    let mycheese_h = document.getElementById('cheese');

    if (mycheese == 'none') {

        mycheese_h.style.display = 'inline';
    } if (mycheese !== 'none') {
        mycheese_h.style.display = 'none';

    }

    console.log(mycheese);

}
var count_mycheese = 1;
var countEl_mycheese = document.getElementById('count_cheese');
function plus_cheese() {
    count_mycheese++;
    countEl_mylheese.value = count_mycheese;
}
function minus_cheese() {
    if (count_mycheese > 1) {
        count_mycheese--;
        countEl_mycheese.value = count_mycheese;
    }
}

function mycheesechick() {
    let mycheesechick = document.getElementById('cheese_chick_select').value;
    let mycheesechick_h = document.getElementById('cheese_chick');

    if (mycheesechick == 'none') {

        mycheesechick_h.style.display = 'inline';
    } if (mycheesechick !== 'none') {
        mycheesechick_h.style.display = 'none';

    }

    console.log(mycheesechick);

}
var count_mycheesechick = 1;
var countEl_mycheesechick = document.getElementById('count_cheese_chick');
function plus_cheese_chick() {
    count_mycheesechick++;
    countEl_mycheesechick.value = count_mycheesechick;
}
function minus_cheese_chick() {
    if (count_mycheesechick > 1) {
        count_mycheesechick--;
        countEl_mycheesechick.value = count_mycheesechick;
    }
}
function mycheesechickham() {
    let mycheesechickham = document.getElementById('cheese_chick_ham_select').value;
    let mycheesechickham_h = document.getElementById('cheese_chick_ham');

    if (mycheesechickham == 'none') {

        mycheesechickham_h.style.display = 'inline';
    } if (mycheesechickham !== 'none') {
        mycheesechickham_h.style.display = 'none';

    }

    console.log(mycheesechickham);

}
var count_mycheesechickham = 1;
var countEl_mycheesechickham = document.getElementById('count_cheese_chick_ham');
function plus_cheese_chick_ham() {
    count_mycheesechickham++;
    countEl_mycheesechickham.value = count_mycheesechickham;
}
function minus_cheese_chick_ham() {
    if (count_mycheesechickham > 1) {
        count_mycheesechickham--;
        countEl_mycheesechickham.value = count_mycheesechickham;
    }
}
function mycheesechickfries() {
    let mycheesechickfries = document.getElementById('cheese_chick_fries_select').value;
    let mycheesechickfries_h = document.getElementById('cheese_chick_fries');

    if (mycheesechickfries == 'none') {

        mycheesechickfries_h.style.display = 'inline';
    } if (mycheesechickfries !== 'none') {
        mycheesechickfries_h.style.display = 'none';

    }

    console.log(mycheesechickfries);

}
var count_mycheesechickfries = 1;
var countEl_mycheesechickfries = document.getElementById('count_cheese_chick_fries');
function plus_cheese_chick_fries() {
    count_mycheesechickfries++;
    countEl_mycheesechickfries.value = count_mycheesechickfries;
}
function minus_cheese_chick_fries() {
    if (count_mycheesechickfries > 1) {
        count_mycheesechickfries--;
        countEl_mycheesechickfries.value = count_mycheesechickfries;
    }
}



function mycheeseham() {
    let mycheeseham = document.getElementById('cheese_ham_select').value;
    let mycheeseham_h = document.getElementById('cheese_ham');

    if (mycheeseham == 'none') {

        mycheeseham_h.style.display = 'inline';
    } if (mycheeseham !== 'none') {
        mycheeseham_h.style.display = 'none';

    }

    console.log(mycheeseham);

}
var count_mycheeseham = 1;
var countEl_mycheeseham = document.getElementById('count_cheese_ham');
function plus_cheese_ham() {
    count_mycheeseham++;
    countEl_mycheeseham.value = count_mycheeseham;
}
function minus_cheese_ham() {
    if (count_mycheeseham > 1) {
        count_mycheeseham--;
        countEl_mycheeseham.value = count_mycheeseham;
    }
}

function mycheesehamchick() {
    let mycheesehamchick = document.getElementById('cheese_ham_chick_select').value;
    let mycheesehamchick_h = document.getElementById('cheese_ham_chick');

    if (mycheesehamchick == 'none') {

        mycheesehamchick_h.style.display = 'inline';
    } if (mycheesehamchick !== 'none') {
        mycheesehamchick_h.style.display = 'none';

    }

    console.log(mycheesehamchick);

}
var count_mycheesehamchick = 1;
var countEl_mycheesehamchick = document.getElementById('count_cheese_ham_chick');
function plus_cheese_ham_chick() {
    count_mycheesehamchick++;
    countEl_mycheesehamchick.value = count_mycheesehamchick;
}
function minus_cheese_ham_chick() {
    if (count_mycheesehamchick > 1) {
        count_mycheesehamchick--;
        countEl_mycheesehamchick.value = count_mycheesehamchick;
    }
}
function mycheesehamfries() {
    let mycheesehamfries = document.getElementById('cheese_ham_fries_select').value;
    let mycheesehamfries_h = document.getElementById('cheese_ham_fries');

    if (mycheesehamfries == 'none') {

        mycheesehamfries_h.style.display = 'inline';
    } if (mycheesehamfries !== 'none') {
        mycheesehamfries_h.style.display = 'none';

    }

    console.log(mycheesehamfries);

}
var count_mycheesehamfries = 1;
var countEl_mycheesehamfries = document.getElementById('count_cheese_ham_fries');
function plus_cheese_ham_fries() {
    count_mycheesehamfries++;
    countEl_mycheesehamfries.value = count_mycheesehamfries;
}
function minus_cheese_ham_fries() {
    if (count_mycheesehamfries > 1) {
        count_mycheesehamfries--;
        countEl_mycheesehamfries.value = count_mycheesehamfries;
    }
}


function mycheesefries() {
    let mycheesefries = document.getElementById('cheese_fries_select').value;
    let mycheesefries_h = document.getElementById('cheese_fries');

    if (mycheesefries == 'none') {

        mycheesefries_h.style.display = 'inline';
    } if (mycheesefries !== 'none') {
        mycheesefries_h.style.display = 'none';

    }

    console.log(mycheesefries);

}
var count_mycheesefries = 1;
var countEl_mycheesefries = document.getElementById('count_cheese_fries');
function plus_cheese_fries() {
    count_mycheesefries++;
    countEl_mycheesefries.value = count_mycheesefries;
}
function minus_cheese_fries() {
    if (count_mycheesefries > 1) {
        count_mycheesefries--;
        countEl_mycheesefries.value = count_mycheesefries;
    }
}

function mycheesefriesham() {
    let mycheesefriesham = document.getElementById('cheese_fries_ham_select').value;
    let mycheesefriesham_h = document.getElementById('cheese_fries_ham');

    if (mycheesefriesham == 'none') {

        mycheesefriesham_h.style.display = 'inline';
    } if (mycheesefriesham !== 'none') {
        mycheesefriesham_h.style.display = 'none';

    }

    console.log(mycheesefriesham);

}
var count_mycheesefriesham = 1;
var countEl_mycheesefriesham = document.getElementById('count_cheese_fries_ham');
function plus_cheese_fries_ham() {
    count_mycheesefriesham++;
    countEl_mycheesefriesham.value = count_mycheesefriesham;
}
function minus_cheese_fries_ham() {
    if (count_mycheesefriesham > 1) {
        count_mycheesefriesham--;
        countEl_mycheesefriesham.value = count_mycheesefriesham;
    }
}
function mycheesefrieschick() {
    let mycheesefrieschick = document.getElementById('cheese_fries_chick_select').value;
    let mycheesefrieschick_h = document.getElementById('cheese_fries_chick');

    if (mycheesefrieschick == 'none') {

        mycheesefrieschick_h.style.display = 'inline';
    } if (mycheesefrieschick !== 'none') {
        mycheesefrieschick_h.style.display = 'none';

    }

    console.log(mycheesefrieschick);

}
var count_mycheesefrieschick = 1;
var countEl_mycheesefrieschick = document.getElementById('count_cheese_fries_chick');
function plus_cheese_fries_chick() {
    count_mycheesefrieschick++;
    countEl_mycheesefrieschick.value = count_mycheesefrieschick;
}
function minus_cheese_fries_chick() {
    if (count_mycheesefrieschick > 1) {
        count_mycheesefrieschick--;
        countEl_mycheesefrieschick.value = count_mycheesefrieschick;
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
// french fries

function myfries() {
    let myfries = document.getElementById('fries_select').value;
    let myfries_h = document.getElementById('fries');

    if (myfries == 'none') {

        myfries_h.style.display = 'inline';
    } if (myfries !== 'none') {
        myfries_h.style.display = 'none';

    }

    console.log(myfries);

}
var count_myfries = 1;
var countEl_myfries = document.getElementById('count_fries');
function plus_fries() {
    count_myfries++;
    countEl_myfries.value = count_myfries;
}
function minus_fries() {
    if (count_myfries > 1) {
        count_myfries--;
        countEl_myfries.value = count_myfries;
    }
}
function myfrieschick() {
    let myfrieschick = document.getElementById('fries_chick_select').value;
    let myfrieschick_h = document.getElementById('fries_chick');

    if (myfrieschick == 'none') {

        myfrieschick_h.style.display = 'inline';
    } if (myfrieschick !== 'none') {
        myfrieschick_h.style.display = 'none';

    }

    console.log(myfrieschick);

}
var count_myfrieschick = 1;
var countEl_myfrieschick = document.getElementById('count_fries_chick');
function plus_fries_chick() {
    count_myfrieschick++;
    countEl_myfrieschick.value = count_myfrieschick;
}
function minus_fries_chick() {
    if (count_myfrieschick > 1) {
        count_myfrieschick--;
        countEl_myfrieschick.value = count_myfrieschick;
    }
}


function myfrieschickham() {
    let myfrieschickham = document.getElementById('fries_chick_ham_select').value;
    let myfrieschickham_h = document.getElementById('fries_chick_ham');

    if (myfrieschickham == 'none') {

        myfrieschickham_h.style.display = 'inline';
    } if (myfrieschickham !== 'none') {
        myfrieschickham_h.style.display = 'none';

    }

    console.log(myfrieschickham);

}
var count_myfrieschickham = 1;
var countEl_myfrieschickham = document.getElementById('count_fries_chick_ham');
function plus_fries_chick_ham() {
    count_myfrieschickham++;
    countEl_myfrieschickham.value = count_myfrieschickham;
}
function minus_fries_chick_ham() {
    if (count_myfrieschickham > 1) {
        count_myfrieschickham--;
        countEl_myfrieschickham.value = count_myfrieschickham;
    }
}

function myfrieschickcheese() {
    let myfrieschickcheese = document.getElementById('fries_chick_cheese_select').value;
    let myfrieschickcheese_h = document.getElementById('fries_chick_cheese');

    if (myfrieschickcheese == 'none') {

        myfrieschickcheese_h.style.display = 'inline';
    } if (myfrieschickcheese !== 'none') {
        myfrieschickcheese_h.style.display = 'none';

    }

    console.log(myfrieschickcheese);

}
var count_myfrieschickcheese = 1;
var countEl_myfrieschickcheese = document.getElementById('count_fries_chick_cheese');
function plus_fries_chick_cheese() {
    count_myfrieschickcheese++;
    countEl_myfrieschickcheese.value = count_myfrieschickcheese;
}
function minus_fries_chick_cheese() {
    if (count_myfrieschickcheese > 1) {
        count_myfrieschickcheese--;
        countEl_myfrieschickcheese.value = count_myfrieschickcheese;
    }
}



function myfriesham() {
    let myfriesham = document.getElementById('fries_ham_select').value;
    let myfriesham_h = document.getElementById('fries_ham');

    if (myfriesham == 'none') {

        myfriesham_h.style.display = 'inline';
    } if (myfriesham !== 'none') {
        myfriesham_h.style.display = 'none';

    }

    console.log(myfriesham);

}
var count_myfriesham = 1;
var countEl_myfriesham = document.getElementById('count_fries_ham');
function plus_fries_ham() {
    count_myfriesham++;
    countEl_myfriesham.value = count_myfriesham;
}
function minus_fries_ham() {
    if (count_myfriesham > 1) {
        count_myfriesham--;
        countEl_myfriesham.value = count_myfriesham;
    }
}


function myfrieshamchick() {
    let myfrieshamchick = document.getElementById('fries_ham_chick_select').value;
    let myfrieshamchick_h = document.getElementById('fries_ham_chick');

    if (myfrieshamchick == 'none') {

        myfrieshamchick_h.style.display = 'inline';
    } if (myfrieshamchick !== 'none') {
        myfrieshamchick_h.style.display = 'none';

    }

    console.log(myfrieshamchick);

}
var count_mychick = 1;
var countEl_mychick = document.getElementById('count_fries_ham_chick');
function plus_fries_ham_chick() {
    count_mychick++;
    countEl_mylunch.value = count_mychick;
}
function minus_fries_ham_chick() {
    if (count_mychick > 1) {
        count_mychick--;
        countEl_mychick.value = count_mychick;
    }
}


function myfrieshamcheese() {
    let myfrieshamcheese = document.getElementById('fries_ham_cheese_select').value;
    let myfrieshamcheese_h = document.getElementById('fries_ham_cheese');

    if (myfrieshamcheese == 'none') {

        myfrieshamcheese_h.style.display = 'inline';
    } if (myfrieshamcheese !== 'none') {
        myfrieshamcheese_h.style.display = 'none';

    }

    console.log(myfrieshamcheese);

}
var count_myfrieshamcheese = 1;
var countEl_myfrieshamcheese = document.getElementById('count_fries_ham_cheese');
function plus_fries_ham_cheese() {
    count_myfrieshamcheese++;
    countEl_myfrieshamcheese.value = count_myfrieshamcheese;
}
function minus_fries_ham_cheese() {
    if (count_myfrieshamcheese > 1) {
        count_myfrieshamcheese--;
        countEl_myfrieshamcheese.value = count_myfrieshamcheese;
    }
}



function myfriescheese() {
    let myfriescheese = document.getElementById('fries_cheese_select').value;
    let myfriescheese_h = document.getElementById('fries_cheese');

    if (myfriescheese == 'none') {

        myfriescheese_h.style.display = 'inline';
    } if (myfriescheese !== 'none') {
        myfriescheese_h.style.display = 'none';

    }

    console.log(myfriescheese);

}
var count_myfriescheese = 1;
var countEl_myfriescheese = document.getElementById('count_fries_cheese');
function plus_fries_cheese() {
    count_myfriescheese++;
    countEl_myfriescheese.value = count_myfriescheese;
}
function minus_fries_cheese() {
    if (count_myfriescheese > 1) {
        count_myfriescheese--;
        countEl_myfriescheese.value = count_myfriescheese;
    }
}
function myfriescheesechick() {
    let myfriescheesechick = document.getElementById('fries_cheese_chick_select').value;
    let myfriescheesechick_h = document.getElementById('fries_cheese_chick');

    if (myfriescheesechick == 'none') {

        myfriescheesechick_h.style.display = 'inline';
    } if (myfriescheesechick !== 'none') {
        myfriescheesechick_h.style.display = 'none';

    }

    console.log(myfriescheesechick);

}
var count_myfriescheesechick = 1;
var countEl_myfriescheesechick = document.getElementById('count_fries_cheese_chick');
function plus_fries_cheese_chick() {
    count_myfriescheesechick++;
    countEl_myfriescheesechick.value = count_myfriescheesechick;
}
function minus_fries_cheese_chick() {
    if (count_myfriescheesechick > 1) {
        count_myfriescheesechick--;
        countEl_myfriescheesechick.value = count_myfriescheesechick;
    }
}
function myfriescheeseham() {
    let myfriescheeseham = document.getElementById('fries_cheese_ham_select').value;
    let myfriescheeseham_h = document.getElementById('fries_cheese_ham');

    if (myfriescheeseham == 'none') {

        myfriescheeseham_h.style.display = 'inline';
    } if (myfriescheeseham !== 'none') {
        myfriescheeseham_h.style.display = 'none';

    }

    console.log(myfriescheeseham);

}
var count_myfriescheeseham = 1;
var countEl_myfriescheeseham = document.getElementById('count_fries_cheese_ham');
function plus_fries_cheese_ham() {
    count_myfriescheeseham++;
    countEl_myfriescheeseham.value = count_myfriescheeseham;
}
function minus_fries_cheese_ham() {
    if (count_myfriescheeseham > 1) {
        count_myfriescheeseham--;
        countEl_myfriescheeseham.value = count_myfriescheeseham;
    }
}
///////////////////////////////////////////////////////////////////////////
function mclunchvali() {
    let mclunchselect = document.getElementById('mc_lunch_select').value;
    let mclunchh = document.getElementById('mc_lunch_h');
    let headmclunch = document.getElementById('foodone');
    let headmclunch_span = document.getElementById('foodonespan_food');
    let headmclunch_count = document.getElementById('foodonespan_count');
    let mclunchdiv = document.getElementById('mc_lunch');
    let mcfinalbtn = document.getElementById('mclunchfinalbtn');
    let mainfinaldiv = document.getElementById('mainbtndiv');

    let countmclunch = document.getElementById('count_mc_lunch').value;

    // chciken
    let mclunchchickvali = document.getElementById('mc_lunch_chick');










    if (mclunchselect == 'none') {
        mclunchh.style.display = 'inline';
    }
    if (mclunchselect !== 'none') {
        mclunchh.style.display = 'none';



        headmclunch.style.display = 'inline';
        headmclunch_span.innerHTML = mclunchselect;
        headmclunch_count.innerHTML = countmclunch;
        mclunchdiv.style.display = 'none';
        mcfinalbtn.style.display = 'inline';
        mainfinaldiv.style.display = 'inline'

    }

}



function mclunchback() {

    let mch3 = document.getElementById('foodone');
    let mainfinal_btn = document.getElementById('mainbtndiv');
    let mcfinalback = document.getElementById('mclunchfinalbtn');
    let mc_lunch_div = document.getElementById('mc_lunch');
    let vege_final_btn = document.getElementById('vegeback');
    let mch32 = document.getElementById('foodtwo');
    mch32.style.display = 'none'

    mch3.style.display = 'none';
    mcfinalback.style.display = 'none';
    mainfinal_btn.style.display = 'none';

    mc_lunch_div.style.display = 'inline'



}

function mcLunch_back() {
    let lunch = document.getElementById('two_lunch');
    let mcluchbacktolunch = document.getElementById('mc_lunch');
    let rest_head = document.getElementById('rest_h');
    rest_head.style.display = 'none';
    lunch.style.display = 'inline';
    mcluchbacktolunch.style.display = 'none';

}


function mymc() {
    let mymc_lunch = document.getElementById('mc_lunch_select').value;
    let mymc_h = document.getElementById('mc_lunch_h');
    let addbtnformenu = document.getElementById('addbtnmclunch');

    // chicken
    let mclunchchick = document.getElementById('mc_lunch_chick');
    let mc_lunch_chick_ham = document.getElementById('mc_lunch_chick_ham');
    let mc_lunch_chick_cheese = document.getElementById('mc_lunch_chick_cheese');
    let mc_lunch_chick_fries = document.getElementById('mc_lunch_chick_fries');
    let mc_lunch_chick_ham_fries = document.getElementById('mc_lunch_chick_ham_fries');
    let mc_lunch_chick_ham_cheese = document.getElementById('mc_lunch_chick_ham_cheese');
    let mc_lunch_chick_cheese_ham = document.getElementById('mc_lunch_chick_cheese_ham');
    let mc_lunch_chick_cheese_fries = document.getElementById('mc_lunch_chick_cheese_fries');
    let mc_lunch_chick_fries_ham = document.getElementById('mc_lunch_chick_fries_ham');
    let mc_lunch_chick_fries_cheese = document.getElementById('mc_lunch_chick_fries_cheese');
    let chickselect = document.getElementById('chick_select').value;
    let chick_ham_select = document.getElementById('chick_ham_select').value;

    let chick_cheese_select = document.getElementById('chick_cheese_select').value;
    let chick_fries_select = document.getElementById('chick_fries_select').value;

    let chick_ham_fries_select = document.getElementById('chick_ham_fries_select').value;


    let chick_ham_cheese_select = document.getElementById('chick_ham_cheese_select').value;
    let chick_cheese_ham_select = document.getElementById('chick_cheese_ham_select').value;
    let chick_cheese_fries_select = document.getElementById('chick_cheese_fries_select').value;
    let chick_fries_ham_select = document.getElementById('chick_fries_ham_select').value;
    let chick_fries_cheese_select = document.getElementById('chick_fries_cheese_select').value;







    if (mymc_lunch == 'none') {
        console.log('jdfgdfgj');
        mymc_h.style.display = 'inline';
    } if (mymc_lunch !== 'none') {
        mymc_h.style.display = 'none';
        addbtnformenu.style.display = 'inline';

    }

    console.log(mymc_lunch);
    mclunchchick.style.display = 'none';
    mc_lunch_chick_ham.style.display = 'none';
    mc_lunch_chick_cheese.style.display = 'none';
    mc_lunch_chick_fries.style.display = 'none';
    mc_lunch_chick_ham_fries.style.display = 'none';
    mc_lunch_chick_ham_cheese.style.display = 'none';
    mc_lunch_chick_cheese_ham.style.display = 'none';
    mc_lunch_chick_cheese_fries.style.display = 'none';

    mc_lunch_chick_fries_ham.style.display = 'none';
    mc_lunch_chick_fries_cheese.style.display = 'none';
    chickselect.selectedIndex = 0;
    chick_ham_select.selectedIndex = 0;
    chick_cheese_select.selectedIndex = 0;
    chick_fries_select.selectedIndex = 0;
    chick_ham_fries_select.selectedIndex = 0;
    chick_ham_cheese_select.selectedIndex = 0;
    chick_cheese_ham_select.selectedIndex = 0;
    chick_cheese_fries_select.selectedIndex = 0;
    chick_fries_ham_select.selectedIndex = 0;
    chick_fries_cheese_select.selectedIndex = 0;


    mclunchham.style.display = 'none';
    mc_lunch_ham_chick.style.display = 'none';
    mc_lunch_ham_cheese.style.display = 'none';
    mc_lunch_ham_fries.style.display = 'none';
    mc_lunch_chick_ham_fries.style.display = 'none';
    mc_lunch_ham_chick_cheese.style.display = 'none';
    mc_lunch_ham_cheese_chick.style.display = 'none';
    mc_lunch_ham_cheese_fries.style.display = 'none';

    mc_lunch_ham_fries_chick.style.display = 'none';
    mc_lunch_ham_fries_cheese.style.display = 'none';
    hamselect.selectedIndex = 0;
    ham_chick_select.selectedIndex = 0;
    ham_cheese_select.selectedIndex = 0;
    ham_fries_select.selectedIndex = 0;
    ham_chick_fries_select.selectedIndex = 0;
    ham_fries_cheese_select.selectedIndex = 0;
    ham_cheese_chick_select.selectedIndex = 0;
    ham_cheese_fries_select.selectedIndex = 0;
    ham_fries_chick_select.selectedIndex = 0;
    ham_fries_chick_select.selectedIndex = 0;


}


function addbtnmclunch() {

    let mclunchselect = document.getElementById('mc_lunch_select').value;
    let addbtnmclunch = document.getElementById('addbtnmclunch');
    // chicken
    let mclunchchick = document.getElementById('mc_lunch_chick');
    let chickselect = document.getElementById('chick_select').value;

    let mc_lunch_chick_ham = document.getElementById('mc_lunch_chick_ham');
    let chick_ham_select = document.getElementById('chick_ham_select').value;

    let mc_lunch_chick_cheese = document.getElementById('mc_lunch_chick_cheese');
    let chick_cheese_select = document.getElementById('chick_cheese_select').value;

    let mc_lunch_chick_fries = document.getElementById('mc_lunch_chick_fries');
    let chick_fries_select = document.getElementById('chick_fries_select').value;

    let chick_ham_fries_select = document.getElementById('chick_ham_fries_select').value;
    let mc_lunch_chick_ham_fries = document.getElementById('mc_lunch_chick_ham_fries');

    let mc_lunch_chick_ham_cheese = document.getElementById('mc_lunch_chick_ham_cheese');
    let chick_ham_cheese_select = document.getElementById('chick_ham_cheese_select').value;

    let mc_lunch_chick_cheese_ham = document.getElementById('mc_lunch_chick_cheese_ham');
    let chick_cheese_ham_select = document.getElementById('chick_cheese_ham_select').value;

    let mc_lunch_chick_cheese_fries = document.getElementById('mc_lunch_chick_cheese_fries');
    let chick_cheese_fries_select = document.getElementById('chick_cheese_fries_select').value;

    let mc_lunch_chick_fries_ham = document.getElementById('mc_lunch_chick_fries_ham');
    let chick_fries_ham_select = document.getElementById('chick_fries_ham_select').value;


    let mc_lunch_chick_fries_cheese = document.getElementById('mc_lunch_chick_fries_cheese');
    let chick_fries_cheese_select = document.getElementById('chick_fries_cheese_select').value;
    // ham burger


    let mclunchham = document.getElementById('mc_lunch_ham');
    let mc_lunch_ham_chick = document.getElementById('mc_lunch_ham_chick');
    let mc_lunch_ham_cheese = document.getElementById('mc_lunch_ham_cheese');
    let mc_lunch_ham_fries = document.getElementById('mc_lunch_ham_fries');
    let mc_lunch_ham_chick_fries = document.getElementById('mc_lunch_ham_chick_fries');
    let mc_lunch_ham_chick_cheese = document.getElementById('mc_lunch_ham_chick_cheese');
    let mc_lunch_ham_cheese_chick = document.getElementById('mc_lunch_ham_cheese_chick');
    let mc_lunch_ham_cheese_fries = document.getElementById('mc_lunch_ham_cheese_fries');
    let mc_lunch_ham_fries_chick = document.getElementById('mc_lunch_ham_fries_chick');
    let mc_lunch_ham_fries_cheese = document.getElementById('mc_lunch_ham_fries_cheese');
    let hamselect = document.getElementById('ham_select').value;
    let ham_chick_select = document.getElementById('ham_chick_select').value;

    let ham_cheese_select = document.getElementById('ham_cheese_select').value;
    let ham_fries_select = document.getElementById('ham_fries_select').value;

    let ham_chick_fries_select = document.getElementById('ham_chick_fries_select').value;
    let ham_chick_cheese_select = document.getElementById('ham_chick_cheese_select').value;


    let ham_fries_cheese_select = document.getElementById('ham_fries_cheese_select').value;
    let ham_cheese_chick_select = document.getElementById('ham_cheese_chick_select').value;
    let ham_cheese_fries_select = document.getElementById('ham_cheese_fries_select').value;
    let ham_fries_chick_select = document.getElementById('ham_fries_chick_select').value;

















    // chicken


    if (mclunchselect == 'Chicken Burger') {
        mclunchchick.style.display = 'inline';

    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Ham Burger') {
        mc_lunch_chick_ham.style.display = 'inline'

    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Ham Burger' && chick_ham_select == 'Fries') {
        mc_lunch_chick_ham_fries.style.display = 'inline';
        ddbtnmclunch.style.display = 'none'



    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Ham Burger' && chick_ham_select == 'Cheese Burger') {
        mc_lunch_chick_ham_cheese.style.display = 'inline';
        addbtnmclunch.style.display = 'none'



    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Cheese Burger') {
        mc_lunch_chick_cheese.style.display = 'inline'

    }

    if (mclunchselect == 'Chicken Burger' && chickselect == 'Cheese Burger' && chick_cheese_select == 'Ham Burger') {
        mc_lunch_chick_cheese_ham.style.display = 'inline';
        ddbtnmclunch.style.display = 'none'

    }

    if (mclunchselect == 'Chicken Burger' && chickselect == 'Cheese Burger' && chick_cheese_select == 'Fries') {
        mc_lunch_chick_cheese_fries.style.display = 'inline';
        ddbtnmclunch.style.display = 'none'

    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Fries') {
        mc_lunch_chick_fries.style.display = 'inline'

    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Fries' && chick_fries_select == 'Ham Burger') {
        mc_lunch_chick_fries_ham.style.display = 'inline';
        ddbtnmclunch.style.display = 'none'

    }
    if (mclunchselect == 'Chicken Burger' && chickselect == 'Fries' && chick_fries_select == 'Cheese Burger') {
        mc_lunch_chick_fries_cheese.style.display = 'inline';
        ddbtnmclunch.style.display = 'none'

    }

    // Ham Burger

    if (mclunchselect == 'Ham Burger') {
        mclunchham.style.display = 'inline';

    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Chicken Burger') {
        mc_lunch_ham_chick.style.display = 'inline'

    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Chicken Burger' && ham_chick_select == 'Fries') {
        mc_lunch_ham_chick_fries.style.display = 'inline';
        ddbtnmclunch.style.display = 'none'



    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Chicken Burger' && ham_chick_select == 'Cheese Burger') {
        mc_lunch_ham_chick_cheese.style.display = 'inline';
        addbtnmclunch.style.display = 'none'



    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Cheese Burger') {
        mc_lunch_ham_cheese.style.display = 'inline'

    }

    if (mclunchselect == 'Ham Burger' && hamselect == 'Cheese Burger' && ham_cheese_select == 'Chicken Burger') {
        mc_lunch_ham_cheese_chick.style.display = 'inline';
        ddbtnmclunch.style.display = 'none'

    }

    if (mclunchselect == 'Ham Burger' && hamselect == 'Cheese Burger' && ham_cheese_select == 'Fries') {
        mc_lunch_ham_cheese_fries.style.display = 'inline';
        ddbtnmclunch.style.display = 'none'

    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Fries') {
        mc_lunch_ham_fries.style.display = 'inline'

    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Fries' && chick_fries_select == 'Chicken Burger') {
        mc_lunch_ham_fries_chick.style.display = 'inline';
        ddbtnmclunch.style.display = 'none'

    }
    if (mclunchselect == 'Ham Burger' && hamselect == 'Fries' && chick_fries_select == 'Cheese Burger') {
        mc_lunch_ham_fries_cheese.style.display = 'inline';
        ddbtnmclunch.style.display = 'none'

    }










}









































































































