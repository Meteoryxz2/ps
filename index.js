let done;
let trys = 3;
function off(){
    let jj = document.getElementById('poga2');
    jj.style.display = 'none'

    let sim = document.getElementById("pk");

    sim.addEventListener("input", function(event) {
    let inputValue = event.target.value;
    let regex = /^[0-9-]+$/;

    if (!regex.test(inputValue)) {
    event.target.value = "";
}
});


let vards = document.getElementById("vards");

vards.addEventListener("input", function(event) {
    let inputValue = event.target.value;
    let regex = /^[A-Za-z]+$/;

    if (!regex.test(inputValue)) {
        event.target.value = "";
    }
});


let uzvards = document.getElementById("uzvards");

uzvards.addEventListener("input", function(event) {
    let inputValue = event.target.value;
    let regex = /^[A-Za-z]+$/;

    if (!regex.test(inputValue)) {
        event.target.value = "";
    }
});

}

function gen(){
    const vards1 = document.getElementById('vards').value;
    const uzvards1 = document.getElementById('uzvards').value;
    const pk1 = document.getElementById('pk').value;
    let vardagarums = vards1.length;
    let uzvardagarums = uzvards1.length;
    let vards2 = vards1.slice(0, 2).toUpperCase()
    let uzvards2 = uzvards1.slice(-4)
    let pk2 = pk1.slice(-5)
    for(let i=0; i<=5; i++){
        let pk4 = Math.floor(Math.random() * (pk2 - 5+1))+5;
        done = vards2+uzvards2+pk4;
    }

     let pk3 = pk1.length;


    if(pk3==12 && vardagarums > 1 && uzvardagarums > 1){
        let div = document.getElementById('iznakums');
        let div6 = document.getElementById('trys');
        div6.style.display = 'block'
        div.style.display = 'block';
        document.getElementById('done').innerHTML = `Your password is: ${done}`;
        }
    else{
        let div2 = document.getElementById('iznakums');
        let div5 = document.getElementById('trys');
        let div7 = document.getElementById('poga2');
        div7.style.display = 'block'
        div5.style.display = 'none'
        div2.style.display = 'block'
        document.getElementById('poga').disabled=true;
        document.getElementById('poga2').disabled=false; 
        document.getElementById('done').innerHTML = `You have not entered your first and last name or enter the personal code again, because there are missing numbers or this sign "-"`;
        trys = trys-3;   
        }
    if(trys == 0){ 
        let hh = document.getElementById('poga2');
        hh.style.display = 'block'
        document.getElementById('poga').disabled=true;
        document.getElementById('poga2').disabled=false;
        let div3 = document.getElementById('trys');
        div3.style.display = 'none';
        }
    else{
            trys--;
            document.getElementById('trys').innerHTML = `You have ${trys+1} attempts left`;
        }

    
}
function del(){
    let div2 = document.getElementById('trys');
    div2.style.display = 'block'
    let div = document.getElementById('iznakums');
    div.style.display = 'none'
    document.getElementById('poga').disabled=false;
    let gg = document.getElementById('poga2');
    gg.style.display = 'none'
    document.getElementById('poga2').disabled = true;
    document.getElementById('vards').value = "";
    document.getElementById('uzvards').value = "";
    document.getElementById('pk').value = "";
    trys = trys+3;
}