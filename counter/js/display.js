/***************************************************************
**  Fichier : display.js (main)
**  Projet  : web - count
**
**  Dev.    : Cyril ESCLASSAN
**  Version : 0.2.06-12-17
***************************************************************/

// obj (declaration dans counter.js)
var counter = new Counter(0, -99, 999);

// vars (simplification de l'acces aux elements du DOM)
var counter_span = document.getElementById('counter_span');
var setcount_form = document.getElementById('setcount_form');
var setcount_zone = document.getElementById('setcount_zone');
var count_btn = document.getElementById('count_btn');
var decount_btn = document.getElementById('decount_btn');

// fonctions
function is_int(value){
/*
**  fonction is_int(value : all) : boolean
**  retourne 'true' si 'value' est un nombre
**  retourne 'false' si 'value' n'est pas un nombre
*/
    if((parseFloat(value) == parseInt(value)) && !isNaN(value)){ 
        return true;
    } else {
        return false;
    }
}


function count()
{
/*
**  fonction count(null) : null
**  incremente le compteur
**  affiche le compteur
*/
    counter.count();
    display();
}

function decount()
{
/*
**  fonction decount(null) : null
**  decremente le compteur
**  affiche le compteur
*/
    counter.decount();
    display();
}

function setcount()
{
/*  
**  fonction setcount(null) : null
**  Si la vue est normale
**      change la vue
**  Sinon
**      Si valeur saisie est un nombre inclus entre min et max
**          changer la valeur du compteur
**      Sinon
**          mettre le compteur a zero
**      changer la vue
**      afficher le compteur
*/
    if( setcount_form.hidden) {
        changeView();
    } else {
        if(is_int(Number(setcount_zone.value)) && (
          Number(setcount_zone.value > counter.min) ||
          Number(setcount_zone.value < max) ) ) {
            counter.setcount(Number(setcount_zone.value));
        } else {
            counter.setcount(0);
        }
        changeView();
        display();
    }
}

function changeView()
{
/*
**  fonction changeView(null) : null
**  Inverse l'etat hidden de certains elements 
**      (elt.hidden = !elt.hidden)
*/
    setcount_form.hidden = !setcount_form.hidden;
    count_btn.hidden = !count_btn.hidden;
    decount_btn.hidden = !decount_btn.hidden;
}

function display()
{
/*
**  fonction display(null) : null
**  Affiche le compteur
*/
    counter_span.innerHTML = counter.countvalue;
}

// start
document.onload = display();