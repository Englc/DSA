/* eslint-disable no-undef */
$(document).ready(function () {
    talente.init();
    heldendokument.init();

    applyErfahrung();
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
    applyErfahrung(); 

    abenteuerpunkteView.updateValue(); 
}; 

var applyErfahrung = function () {
    switch ($("input[name=erfahrung]:checked")[0].id) {
    case "2":
        heldendokument.abenteuerpunkte.update(1000, "start", "Durchschnitt");
        break;
    case "3":
        heldendokument.abenteuerpunkte.update(1100, "start", "Erfahren");
        break;
    case "4":
        heldendokument.abenteuerpunkte.update(1200, "start", "Kompetent");
        break;
    case "5":
        heldendokument.abenteuerpunkte.update(1400, "start", "Meister");
        break;
    case "6":
        heldendokument.abenteuerpunkte.update(1700, "start", "Brilliant");
        break;
    case "7":
        heldendokument.abenteuerpunkte.update(2100, "start", "Legendär");
        break;
    default:
        heldendokument.abenteuerpunkte.update(900, "start", "Unerfahren");
        break;
    }
};

var clickUpHandler = function (event) {
    var currentEigenschaft = event.target.id.substr(2, 2);
    heldendokument.eigenschaftswerte[currentEigenschaft]++;
    heldendokument.abenteuerpunkte.update(-1 * steigerung.E[heldendokument.eigenschaftswerte[currentEigenschaft]], currentEigenschaft, "=>" + heldendokument.eigenschaftswerte[currentEigenschaft]);

    eigenschaftView.updateValue(currentEigenschaft);
    abenteuerpunkteView.updateValue();
};

var clickDownHandler = function (event) {
    var currentEigenschaft = event.target.id.substr(4, 2);
    heldendokument.abenteuerpunkte.undo(currentEigenschaft);
    heldendokument.eigenschaftswerte[currentEigenschaft]--;

    eigenschaftView.updateValue(currentEigenschaft);
    abenteuerpunkteView.updateValue();
};

var clickUpTalentHandler = function (event) {
    var currentTalentId = event.target.id.substr(2, event.target.id.length - 2);
    var currentTalent = talente.getTalent(currentTalentId);

    heldendokument.talentwerte[currentTalentId]++;
    heldendokument.abenteuerpunkte.update(-1 * steigerung[currentTalent.Steigerungskosten][heldendokument.talentwerte[currentTalentId]], currentTalentId, "=>" + heldendokument.talentwerte[currentTalentId]);

    abenteuerpunkteView.updateValue();
    talenteView.updateValue(currentTalent);
};

var clickDownTalentHandler = function (event) {
    var currentTalentId = event.target.id.substr(4, event.target.id.length - 4);
    var currentTalent = talente.getTalent(currentTalentId);

    heldendokument.abenteuerpunkte.undo(currentTalentId);
    heldendokument.talentwerte[currentTalentId]--;

    abenteuerpunkteView.updateValue();
    talenteView.updateValue(currentTalent);
};