/* eslint-disable no-undef */
$(document).ready(function () {

    eigenschaftView.displayEigenschaften(); 
    abenteuerpunkteView.updateValue(); 

    $(".up").on("click", clickUpHandler);
    $(".down").on("click", clickDownHandler);
});

var clickUpHandler = function(event){
    var currentEigenschaft = eigenschaften.find(function(element){return element.name == event.target.id.substr(2,2);});
    currentEigenschaft.value++; 
    abenteuerpunkte.value -= steigerung.E[currentEigenschaft.value];

    eigenschaftView.updateValue(currentEigenschaft);
    abenteuerpunkteView.updateValue(); 
};

var clickDownHandler = function(event){
    var currentEigenschaft = eigenschaften.find(function(element){return element.name == event.target.id.substr(4,2);});
    abenteuerpunkte.value += steigerung.E[currentEigenschaft.value];
    currentEigenschaft.value--; 

    eigenschaftView.updateValue(currentEigenschaft);
    abenteuerpunkteView.updateValue(); 
};