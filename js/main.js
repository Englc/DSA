/* eslint-disable no-undef */
$(document).ready(function () {
    talente.init();

    eigenschaftView.displayEigenschaften();
    talenteView.displayTalente();
    abenteuerpunkteView.updateValue();

    $(".upEigenschaft").on("click", clickUpHandler);
    $(".downEigenschaft").on("click", clickDownHandler);
    $(".upTalent").on("click", clickUpTalentHandler);
    $(".downTalent").on("click", clickDownTalentHandler);

});

var clickUpHandler = function (event) {
    var currentEigenschaft = eigenschaften.find(function (element) { return element.name == event.target.id.substr(2, 2); });
    currentEigenschaft.value++;
    abenteuerpunkte.value -= steigerung.E[currentEigenschaft.value];

    eigenschaftView.updateValue(currentEigenschaft);
    abenteuerpunkteView.updateValue();
};

var clickDownHandler = function (event) {
    var currentEigenschaft = eigenschaften.find(function (element) { return element.name == event.target.id.substr(4, 2); });
    abenteuerpunkte.value += steigerung.E[currentEigenschaft.value];
    currentEigenschaft.value--;

    eigenschaftView.updateValue(currentEigenschaft);
    abenteuerpunkteView.updateValue();
};

var clickUpTalentHandler = function (event) {
    var currentTalentId = event.target.id.substr(2, event.target.id.length - 2);
    var currentTalent = talente.getTalent(currentTalentId);

    currentTalent.value++;
    abenteuerpunkte.value -= steigerung[currentTalent.Steigerungskosten][currentTalent.value];

    abenteuerpunkteView.updateValue();
    talenteView.updateValue(currentTalent);
};

var clickDownTalentHandler = function (event) {
    var currentTalentId = event.target.id.substr(4, event.target.id.length - 4);
    var currentTalent = talente.getTalent(currentTalentId);

    abenteuerpunkte.value += steigerung[currentTalent.Steigerungskosten][currentTalent.value];
    currentTalent.value--;

    abenteuerpunkteView.updateValue();
    talenteView.updateValue(currentTalent);
};