// vedi sito NiceSelect2
var options = { searchable: true };
NiceSelect.bind(document.getElementById("searchable-select"), options);

var elem = document.querySelector(".grid");

//creo il nuovo isotope, come parametri passo la classe delcontenitore di elementi
var iso = new Isotope(".grid", {
  //e come opzioni di configurazione: alla key itemSelector passo come valore la classe comune agli elementi
  itemSelector: ".grid-item",
  //e alla key layoutMode passo come valore l'opzione di layout che preferisco (vedi sito isotope)
  layoutMode: "fitRows",
});


//identifico il tag della select grazie al suo id
let selettore2 = document.getElementById("searchable-select");
//aggancio il selettore all'evento "onchange" (bottoni:onclick / select:onchange)
selettore2.onchange = function () {
//al cambiare del valore (quando l'utente clicca sulle diverse opzioni del select)..
  let valori = "";
//.. per ogni opzione presente nel selettore valuta se è stata selezionata oppure no
  for (var option of selettore2.options) {
//se l'opzione è stata selezionata, ne salva il valore concatenandolo agli altri
    if (option.selected) {
      valori += option.value;
    }
  }
  console.log(valori); //mia stampa di prova
  //ora che le selezioni sono state fatte e salvate dico a isotope di ordinare i risultati
  iso.arrange({
    //specificando che il filtro deve basarsi sulle selezioni salvate dentro 'valori'
    filter: valori
  });
};

