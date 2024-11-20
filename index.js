let arr = [0,0,0,0,0,0,0,0,0];
document.getElementById("0").addEventListener("click", clickzero);
document.getElementById("1").addEventListener("click", clickone);
document.getElementById("2").addEventListener("click", clicktwo);
document.getElementById("3").addEventListener("click", clickthree);
document.getElementById("4").addEventListener("click", clickfour);
document.getElementById("5").addEventListener("click", clickfive);
document.getElementById("6").addEventListener("click", clicksix);
document.getElementById("7").addEventListener("click", clickseven);
document.getElementById("8").addEventListener("click", clickeight);

let counter = 0;
let x = "X";
let o = "O";
let xWin= "X is Win";
let oWin = "O is Win";

function clickzero() {
    if (arr[0] === 0) { // תיקון
        if (counter % 2 === 0) {
            document.getElementById("0").innerHTML = x;
            arr[0] = 1;
        } else {
            document.getElementById("0").innerHTML = o;
            arr[0] = 2;
        }
        counter++;
        win();
    }
}

function clickone(){
    if (counter%2==0){
        document.getElementById("1").innerHTML=x;
    arr[1]=1;
} else {
    arr [1]=2;
    document.getElementById("1").innerHTML=o;
}
counter++;
win();
}

function clicktwo(){
    if (counter%2==0){
        document.getElementById("2").innerHTML=x;
    arr[2]=1;
} else {
    arr [2]=2;
    document.getElementById("2").innerHTML=o;
}
counter++;
win();
}

function clickthree(){
    if (counter%2==0){
        document.getElementById("3").innerHTML=x;
    arr[3]=1;
} else {
    arr [3]=2;
    document.getElementById("3").innerHTML=o;
}
counter++;
win();
}

function clickfour(){
    if (counter%2==0){
        document.getElementById("4").innerHTML=x;
    arr[4]=1;
} else {
    arr [4]=2;
    document.getElementById("4").innerHTML=o;
}
counter++;
win();
}

function clickfive(){
    if (counter%2==0){
        document.getElementById("5").innerHTML=x;
    arr[5]=1;
} else {
    arr [5]=2;
    document.getElementById("5").innerHTML=o;
}
counter++;
win();
}

function clicksix(){
    if (counter%2==0){
        document.getElementById("6").innerHTML=x;
    arr[6]=1;
} else {
    arr [6]=2;
    document.getElementById("6").innerHTML=o;
}
counter++;
win();
}

function clickseven(){
    if (counter%2==0){
        document.getElementById("7").innerHTML=x;
    arr[7]=1;
} else {
    arr [7]=2;
    document.getElementById("7").innerHTML=o;
}
counter++;
win();
}

function clickeight(){
    if (counter%2==0){
        document.getElementById("8").innerHTML=x;
    arr[8]=1;
} else {
    arr [8]=2;
    document.getElementById("8").innerHTML=o;
}
counter++;
win();
}

function isWin(){
    // בדיקת שורות
    if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== 0) {
        return arr[0];
    }
    if (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] !== 0) {
        return arr[3];
    }
    if (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== 0) {
        return arr[6];
    }

    // בדיקת עמודות
    if (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== 0) {
        return arr[0];
    }
    if (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== 0) {
        return arr[1];
    }
    if (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== 0) {
        return arr[2];
    }

    // בדיקת אלכסונים
    if (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== 0) {
        return arr[0];
    }
    if (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== 0) {
        return arr[2];
    }

    // אם אין מנצח
    return 0;
}

function win () {
    let winner = isWin();
    if (winner === 1) {
        document.getElementById("isWin").innerHTML = xWin;
        alert(xWin);
    } else if (winner === 2) {
        document.getElementById("isWin").innerHTML = oWin;
        alert(oWin);
    } else if (counter === 9) {
        alert("This is a draw");
    }
}