/***************************************************************
**  Fichier : counter.js (object declaration)
**  Projet  : web - counter
**  
**  Dev.    : Cyril ESCLASSAN
**  Version : 0.2.06-12-17 
***************************************************************/

/* 
**  Objet Counter
**
**  Constructeur
**  Counter(n : Number, min : Number, max : Number) : Counter Object
**
**  Methodes
**  Counter.count(null) : null
**  Counter.decount(null) : null
**  Counter.setcount(x : Number) : null
**
**  Attributs
**  Counter.countervalue : Number (Main value)
**  Counter.min : Number
**  Counter.max : Number
*/

function Counter(n, min, max)
{
    this.countvalue = n; // main value
    this.min = min; // valeur min pour countvalue   
    this.max = max; // valeur max pour countvalue

    this.count = function() 
    {
    /*
    **  methode count(null) : null
    **  Si compteur est egal a valeur max
    **      compteur prend la valeur min
    **  Sinon
    **      incremente compteur
    */
        if(this.countvalue === max) {
            this.countvalue = min;
        } else {
            this.countvalue += 1;
        }
    }

    this.decount = function()
    {
    /*
    **  methode decount(null) : null
    **  Si compteur est egal a valeur min
    **      compteur prend la valeur max
    **  Sinon
    **      decremente compteur
    */
        if(this.countvalue === min) {
            this.countvalue = max;
        } else {
            this.countvalue -= 1;
        }
    }

    this.setcount = function(x)
    {
    /*
    **  methode setcount(x : Number) : null
    **  compteur prend la valeur de x
    */
        this.countvalue = x;
    }
}