/* eslint-disable no-undef */
$(document).ready(function () {
    eigenschaften.forEach(function (eigenschaft, index) {
        var target; 
        if(index < 4) {
            target = "#EigenschaftenCol1"; 
        } else {
            target = "#EigenschaftenCol2"; 
        }
        $(target).append(eigenschaftView.displayEigenschaft(eigenschaft));
    });

    abenteuerpunkteView.updateValue(); 

    $(".up").on("click", clickUpHandler);
});

var clickUpHandler = function(event){
    var currentEigenschaft = eigenschaften.find(function(element){return element.name == event.target.id.substr(2,2);});
    currentEigenschaft.value++; 
    abenteuerpunkte.value -= 15; 

    eigenschaftView.updateValue(currentEigenschaft);
    abenteuerpunkteView.updateValue(); 
};