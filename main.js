
crvena = document.getElementsByClassName('boje')[0];
zuta = document.getElementsByClassName('boje')[1];
zelena = document.getElementsByClassName('boje')[2];



function semafor() {

    crvena.style.backgroundColor = 'gray';
    zuta.style.backgroundColor = 'gray';
    zelena.style.backgroundColor = 'gray';

    function uCrveno() {
        crvena.style.backgroundColor = 'red';
        zuta.style.backgroundColor = 'gray';
        zelena.style.backgroundColor = 'gray';
        
    }

    function uZutoCrveno() {
        crvena.style.backgroundColor = 'red';
        zuta.style.backgroundColor = 'yellow';
        zelena.style.backgroundColor = 'gray';
    }

    function uZeleno() {
        crvena.style.backgroundColor = 'gray';
        zuta.style.backgroundColor = 'gray';
        zelena.style.backgroundColor = 'green';
    }

    function uZuto() {
        crvena.style.backgroundColor = 'gray';
        zuta.style.backgroundColor = 'yellow';
        zelena.style.backgroundColor = 'gray';
    }

    setTimeout(uCrveno, 0);
    setTimeout(uZutoCrveno, 4000);
    setTimeout(uZeleno, 6500);
    setTimeout(uZuto, 11500);

    setInterval(semafor, 15000);
}

semafor();





