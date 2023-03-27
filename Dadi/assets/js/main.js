function play(){
    let x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("my-result").innerHTML = x;

    let y = Math.floor((Math.random() * 6) + 1);
    document.getElementById("computer-result").innerHTML = y;

    if (x>y){
        document.getElementById("result").innerHTML = "Hai Vinto!";
    }
    else if(x<y){
        document.getElementById("result").innerHTML = "Hai Perso";
    }
    else{
        document.getElementById("result").innerHTML = "Pareggio";
    }
}