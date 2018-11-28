/* eslint-disable no-undef */
$(document).ready(function () {
    talente.init();
    heldendokument.init();

    heldendokument.applyErfahrung($("input[name=erfahrung]:checked")[0].id); 
    eigenschaftView.displayEigenschaften();
    talenteView.displayTalente();
    abenteuerpunkteView.updateValue();

    $(".upEigenschaft").on("click", clickUpHandler);
    $(".downEigenschaft").on("click", clickDownHandler);
    $(".upTalent").on("click", clickUpTalentHandler);
    $(".downTalent").on("click", clickDownTalentHandler);
    $(".btnErfahrung").on("change", toggleErfahrungHandler);

});

var toggleErfahrungHandler = function (){
    heldendokument.abenteuerpunkte.undo("start"); 
    heldendokument.applyErfahrung($("input[name=erfahrung]:checked")[0].id); 

    abenteuerpunkteView.updateValue(); 
}; 

var clickUpHandler = function (event) {
    var currentEigenschaft = event.target.id.substr(2, 2);
    heldendokument.eigenschaftswerte[currentEigenschaft]++;
    heldendokument.abenteuerpunkte.update(-1 * steigerung.E[heldendokument.eigenschaftswerte[currentEigenschaft]], currentEigenschaft, "=>" + heldendokument.eigenschaftswerte[currentEigenschaft]);

    eigenschaftView.updateValue(currentEigenschaft);
    abenteuerpunkteView.updateValue();
    talenteView.updateProbs(currentEigenschaft);
};

var clickDownHandler = function (event) {
    var currentEigenschaft = event.target.id.substr(4, 2);
    heldendokument.abenteuerpunkte.undo(currentEigenschaft);
    heldendokument.eigenschaftswerte[currentEigenschaft]--;

    eigenschaftView.updateValue(currentEigenschaft);
    abenteuerpunkteView.updateValue();
    talenteView.updateProbs(currentEigenschaft);
};

var clickUpTalentHandler = function (event) {
    var currentTalentId = event.target.id.substr(2, event.target.id.length - 2);
    var currentTalent = talente.getTalentById(currentTalentId);

    heldendokument.talentwerte[currentTalentId]++;
    heldendokument.abenteuerpunkte.update(-1 * steigerung[currentTalent.Steigerungskosten][heldendokument.talentwerte[currentTalentId]], currentTalentId, "=>" + heldendokument.talentwerte[currentTalentId]);

    abenteuerpunkteView.updateValue();
    talenteView.updateValue(currentTalent);
};

var clickDownTalentHandler = function (event) {
    var currentTalentId = event.target.id.substr(4, event.target.id.length - 4);
    var currentTalent = talente.getTalentById(currentTalentId);

    heldendokument.abenteuerpunkte.undo(currentTalentId);
    heldendokument.talentwerte[currentTalentId]--;

    abenteuerpunkteView.updateValue();
    talenteView.updateValue(currentTalent);
};