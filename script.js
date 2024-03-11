document.querySelectorAll('.btn').forEach( x => {
    x.onclick = (e) => {
        const wynik = document.querySelector('.szeroki');
        
        if(e.target.innerHTML.trim() === "="){
            wynik.innerHTML = eval(wynik.innerHTML);
            return;
        } 

        if(e.target.innerHTML.trim() === "C"){
            wynik.innerHTML = '';
            return;
        }
        //document.querySelector('.szeroki').innerHTML //innerHTML odwołuje do wartości elementu zadeklatrowanego w HTML     if(!warunek) return;
        wynik.innerHTML += e.target.innerHTML;   
    };
});



