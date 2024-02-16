const select = document.querySelector("#point");
let maxPoint = 0;
select.addEventListener('change', () => {
    maxPoint = parseInt(select.value);
})
const scr1 = document.querySelector("#s1");
const scr2 = document.querySelector("#s2");
let s1 = 0;
let s2 = 0;
const p1 = document.querySelectorAll('button')[0];
const p2 = document.querySelectorAll('button')[1];
const reset = document.querySelectorAll('button')[2];
const duePoint = document.querySelector("#due");
let duesback = false;
let con2 = 0;
let ref = false;
function again() {
    s1 = 0;
    s2 = 0;
    scr1.innerText = `${s1} `;
    scr2.innerText = `${s2} `;
    scr2.style.color = "black"
    scr1.style.color = "black"
    select.disabled = false;
    duePoint.innerText = ""
    duesback = false;
    ref = false;
    con2 = 0;
};

function check() {

    if ((s1 === maxPoint - 1) && s1 == s2) {
        duePoint.innerText = "Dues back"
        duesback = true;
    }

    if (duesback) {


        if (con2 == 3) {
            scr2.style.color = "rgb(232, 28, 28)"
            scr1.style.color = "rgb(35, 149, 35)"
            select.disabled = true;
            ref = true;
        }

        else if (con2 == -3) {
            scr2.style.color = "rgb(35, 149, 35)"
            scr1.style.color = "rgb(232, 28, 28)"
            select.disabled = true;
            ref = true;
        }
    }

    else {
        if ((maxPoint == s1 || maxPoint == s2) && maxPoint != 0) {
            if (s1 < s2) {
                scr2.style.color = "rgb(35, 149, 35)"
                scr1.style.color = "rgb(232, 28, 28)"
            }
            else {
                scr2.style.color = "rgb(232, 28, 28)"
                scr1.style.color = "rgb(35, 149, 35)"
            }
            select.disabled = true;
        }
    }


}

p1.addEventListener('click', () => {
    if (duesback && !ref) {
        s1 = s1 + 1;
        scr1.innerText = `${s1} `;
        if (con2 <= 0) {
            con2 = 1;
        }
        con2 = con2 + 1;
    }
    else if ((maxPoint > s1 && maxPoint > s2)) {

        s1 = s1 + 1;
        scr1.innerText = `${s1} `;


    }
    check();
})

p2.addEventListener('click', () => {
    if (duesback && !ref) {
        s2 = s2 + 1;
        scr2.innerText = `${s2} `;
        if (con2 >= 0) {
            con2 = -1;
        }
        con2 = con2 - 1;
    }
    else if (maxPoint > s1 && maxPoint > s2) {
        s2 = s2 + 1;
        scr2.innerText = `${s2} `;
    }
    check();
})


reset.addEventListener('click', again);








