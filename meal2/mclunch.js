const rr = JSON.parse(localStorage.getItem('task'));
console.log(rr);
console.log(rr[4].availableMeals[0]);

const mc = document.getElementById('mc_lunch_select');

mc.innerHTML = `<option value="none">Select Meal</option>
                    <option value="Chicken Burger">${rr[0].name}</option>
                    <option value="Ham Burger">${rr[1].name}</option>
                    <option value="Cheese Burger">${rr[2].name}</option>
                    <option value="Fries">${rr[3].name}</option>
                    
                   `;

////////////////////////////////////////////
const rr1 = JSON.parse(localStorage.getItem('task'));
console.log(rr1);
console.log(rr1[4].name);

const mc1 = document.getElementById('chick_select');

mc1.innerHTML = `<option value="none">Select Meal</option>

<option value="Ham Burger">${rr[1].name}</option>
<option value="Cheese Burger">${rr[2].name}</option>
<option value="Fries">${rr[3].name}</option>`;

/////////////////////////////////////////////////

const rr11 = JSON.parse(localStorage.getItem('task'));
console.log(rr11);
console.log(rr1[4].name);

const mc11 = document.getElementById('chick_ham_select');

mc11.innerHTML = `<option value="none">Select Meal</option>

<option value="Cheese Burger">${rr[2].name}</option>
<option value="Fries">${rr[3].name}</option>`;
////////////////////////////

const rr111 = JSON.parse(localStorage.getItem('task'));
console.log(rr111);
console.log(rr111[4].availableMeals[0]);

const mc111 = document.getElementById('chick_ham_select');

mc111.innerHTML = `<option value="none">Select Meal</option>

<option value="Cheese Burger">${rr111[2].name}</option>
<option value="Fries">${rr111[3].name}</option>

`;


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


    // mclunchham.style.display = 'none';
    // mc_lunch_ham_chick.style.display = 'none';
    // mc_lunch_ham_cheese.style.display = 'none';
    // mc_lunch_ham_fries.style.display = 'none';
    // mc_lunch_chick_ham_fries.style.display = 'none';
    // mc_lunch_ham_chick_cheese.style.display = 'none';
    // mc_lunch_ham_cheese_chick.style.display = 'none';
    // mc_lunch_ham_cheese_fries.style.display = 'none';

    // mc_lunch_ham_fries_chick.style.display = 'none';
    // mc_lunch_ham_fries_cheese.style.display = 'none';
    // hamselect.selectedIndex = 0;
    // ham_chick_select.selectedIndex = 0;
    // ham_cheese_select.selectedIndex = 0;
    // ham_fries_select.selectedIndex = 0;
    // ham_chick_fries_select.selectedIndex = 0;
    // ham_fries_cheese_select.selectedIndex = 0;
    // ham_cheese_chick_select.selectedIndex = 0;
    // ham_cheese_fries_select.selectedIndex = 0;
    // ham_fries_chick_select.selectedIndex = 0;
    // ham_fries_chick_select.selectedIndex = 0;


}
function mychicken() {
    let mychicken = document.getElementById('chick_select').value;
    let mychicken_h = document.getElementById('chick');

    if (mychicken == 'none') {

        mychicken_h.style.display = 'inline';
    } if (mychicken !== 'none') {
        mychicken_h.style.display = 'none';

    }

    console.log(mychicken);
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









////////////////////////////////////////////////////////////////////////////////////////////////////
function mcLunch_back() {
   window.location.href='lunch.html'

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













































