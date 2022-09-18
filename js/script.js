document.addEventListener("DOMContentLoaded", function(event) {

    const ko_div = document.getElementById('ko');
    const papir_div = document.getElementById('papir');
    const ollo_div = document.getElementById('ollo');
    const eredmeny_div = document.querySelector('.eredmeny');
    const felhasznalo_pont = document.getElementById('felhasznalo-pont');
    const szamitogep_pont = document.getElementById('szamitogep-pont');
    const ujrainditas_div = document.getElementById('ujrainditas-div');
    const ujrainditas_gomb = document.getElementById('ujrainditas');
    let felhasznalo_score = 0;
    let szamitogep_score = 0;

    function ertekeles(felhasznalo) {
        var szamitogep = szamitogepvalaszt();
        switch(felhasznalo + szamitogep) {
            case 'koollo':
            case 'papirko':
            case 'ollopapir':
                nyert(felhasznalo, szamitogep);
                break;
            case 'koko':
            case 'papirpapir':
            case 'olloollo':
                dontetlen(felhasznalo, szamitogep);
                break;
            case 'olloko':
            case 'kopapir':
            case 'papirollo':
                vesztett(felhasznalo, szamitogep);
                break;
        }
    }


    function valasztas(ertek) {
        if (ertek === "ko") {
            ertekeles('ko');
        }
        else if (ertek === "papir") {
            ertekeles('papir');
        }
        else if (ertek === "ollo") {
            ertekeles('ollo');
        }
    }

    function nyert(felhasznalo, szamitogep) {
        felhasznalo_score++;
        eredmeny_div.innerHTML = nevKonvert(felhasznalo)+ " nagyobb, mint "+nevKonvert(szamitogep)+"!"
        felhasznalo_pont.innerHTML = felhasznalo_score;


    }

    function dontetlen(felhasznalo, szamitogep) {
        eredmeny_div.innerHTML = nevKonvert(felhasznalo)+ " ugyanaz, mint "+nevKonvert(szamitogep)+", döntetlen!"
   
    }

    function vesztett(felhasznalo, szamitogep) {
        szamitogep_score++;
        eredmeny_div.innerHTML = nevKonvert(felhasznalo)+ " kisebb, mint "+nevKonvert(szamitogep)+"!"
        szamitogep_pont.innerHTML = szamitogep_score;

    }

    function nevKonvert(ertek) {
        if (ertek === 'ko') {
            return "Kő";
        }
        else if (ertek === 'papir') {
            return "Papír";
        }
        else {
            return "Olló";
        }
    }



    function szamitogepvalaszt() {
        let szam = Math.floor(Math.random() * 3);
        var valaszok = ["ko", "papir", "ollo"]
        return valaszok[szam];
    }

    function load() {
        ko_div.addEventListener('click', () => valasztas('ko'));
        papir_div.addEventListener('click', () => valasztas('papir'));
        ollo_div.addEventListener('click', () => valasztas('ollo'));
    }
    load();
});