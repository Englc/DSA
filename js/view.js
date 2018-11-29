/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
var eigenschaftView = {
    updateValue: function (eigenschaftName) {
        // eslint-disable-next-line no-undef
        $("#value" + eigenschaftName).text(heldendokument.eigenschaftswerte[eigenschaftName]);
    },
    displayEigenschaften: function () {
        // eslint-disable-next-line no-undef
        eigenschaften.forEach(function (eigenschaft, index) {
            var target;
            if (index < 4) {
                target = "#EigenschaftenCol1";
            } else {
                target = "#EigenschaftenCol2";
            }
            $(target).append(eigenschaftView._display(eigenschaft));
        });
    },
    updateActions: function () {
        // eslint-disable-next-line no-undef
        eigenschaften.forEach(function (eigenschaft) {
            eigenschaftView._updateButton(eigenschaft);
        });
    },
    _updateButton: function (eigenschaft) {
        // down
        // eslint-disable-next-line no-undef
        if (heldendokument.eigenschaftswerte[eigenschaft.name] == 8) {
            $("#down" + eigenschaft.name).attr("disabled", "disabled").button("refresh");
        } else {
            $("#down" + eigenschaft.name).removeAttr("disabled").button("refresh");
        }
        // up
        // eslint-disable-next-line no-undef
        if (eigenschaftenProp.isIncreasable(eigenschaft)) {
            $("#up" + eigenschaft.name).removeAttr("disabled").button("refresh");
        } else {
            $("#up" + eigenschaft.name).attr("disabled", "disabled").button("refresh");
        }
    },
    _display: function (eigenschaft) {
        return this._displayCol(this._displayAsCard(eigenschaft));
    },
    _displayCol: function (content) {
        return "<div class=\"col-3 eigenschaftcard\">" + content + "</div>";
    },
    _displayAsCard: function (eigenschaft) {
        var result = "";
        result += "<div class=\"card\">";
        result += "  <h5 class=\"card-header\">" + eigenschaft.name;
        result += " <button type=\"button\" class=\"btn btn-outline-info btn-sm\" data-toggle=\"modal\" data-target=\"#info" + eigenschaft.name + "\">Info</button>";
        result += "</h5>";
        result += "  <div class=\"card-body\">";
        // eslint-disable-next-line no-undef
        result += "    <h5 id=\"value" + eigenschaft.name + "\" class=\"card-title\">" + heldendokument.eigenschaftswerte[eigenschaft.name] + "</h5>";
        result += "    <div><button id=\"up" + eigenschaft.name + "\" class=\"btn btn-primary btn-sm upEigenschaft\">&#8593;</button>";
        result += "<button id=\"down" + eigenschaft.name + "\" class=\"btn btn-primary btn-sm downEigenschaft\">&#8595;</button>";
        result += this._displayDialog(eigenschaft) + "</div>";
        result += "  </div>";
        result += "</div>";

        return result;
    },
    _displayDialog: function (eigenschaft) {
        var result = "";

        result += "<div class=\"modal fade\" id=\"info" + eigenschaft.name + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"info" + eigenschaft.name + "\" aria-hidden=\"true\">";
        result += "<div class=\"modal-dialog\" role=\"document\">";
        result += "<div class=\"modal-content\">";
        result += "<div class=\"modal-header\">";
        result += "<h5 class=\"modal-title\">" + eigenschaft.name + "</h5>";
        result += "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">";
        result += "<span aria-hidden=\"true\">&times;</span>";
        result += "</button>";
        result += "</div>";
        result += "<div class=\"modal-body\">";
        result += "<div><strong>Bezeichnung: </strong>" + eigenschaft.bezeichnung + "</div>";
        result += "<div><strong>Beschreibung: </strong>" + eigenschaft.beschreibung + "</div>";
        result += "</div>";
        result += "</div>";
        result += "</div>";
        result += "</div>";

        return result;
    }
};

var talenteView = {
    displayTalente: function() {
        talenteView._displayTalentGruppe("Körpertalente");
        talenteView._displayTalentGruppe("Gesellschaftstalente");
        talenteView._displayTalentGruppe("Naturtalente");
        talenteView._displayTalentGruppe("Wissenstalente");
        talenteView._displayTalentGruppe("Handwerkstalente");
    },
    updateValue: function(talent){
        $("#value" + talent.id).text(talenteView.getTalentValueText(talent.id));
        // eslint-disable-next-line no-undef
        $("#steigerung" + talent.id).text(steigerung[talent.Steigerungskosten][heldendokument.talentwerte[talent.id]+1]);
        $("#prob" + talent.id).text(talenteView._getProbText(calculator.calcTalentProb(talent)));
    }, 
    updateProbs: function(eigenschaft){
        // eslint-disable-next-line no-undef
        var updatedTalente = talente.getTalentByProbe(eigenschaft);
        updatedTalente.forEach(function(talent){
            $("#prob" + talent.id).text(talenteView._getProbText(calculator.calcTalentProb(talent)));
        });
    },
    getTalentValueText: function(talentId) {
        // eslint-disable-next-line no-undef
        if (heldendokument.talentwerte[talentId] == -1) {
            return "-";
        } else {
            // eslint-disable-next-line no-undef
            return heldendokument.talentwerte[talentId];
        }
    },
    updateActions: function () {
        // eslint-disable-next-line no-undef
        talente.iterateAllTalente(talenteView._updateButton);
    },
    _updateButton: function (talent) {
        // down
        // eslint-disable-next-line no-undef
        if (heldendokument.talentwerte[talent.id] < 0) {
            $("#down" + talent.id).attr("disabled", "disabled").button("refresh");
        } else {
            $("#down" + talent.id).removeAttr("disabled").button("refresh");
        }
        // up
        // eslint-disable-next-line no-undef
        if (talente.isIncreasable(talent)) {
            $("#up" + talent.id).removeAttr("disabled").button("refresh");
        } else {
            $("#up" + talent.id).attr("disabled", "disabled").button("refresh");
        }
    },
    _displayTalentGruppe: function(gruppenname) {

        var result = "";

        // eslint-disable-next-line no-undef
        var talentGruppe = talente[gruppenname];
        var i;
        for (i = 0; i < talentGruppe.length; i++) {
            var talent = talentGruppe[i];
            result += "<tr>" +
                // eslint-disable-next-line no-undef
                "<th scope=\"row\">" + talent.name + "</th>" +
                "<td>" + talent.Probe + " <span id=\"prob" + talent.id + "\">" + talenteView._getProbText(calculator.calcTalentProb(talent)) + "<span></td>" +
                "<td><strong id=\"value" + talent.id + "\">" + talenteView.getTalentValueText(talent.id) + "</strong></td>" +
                // eslint-disable-next-line no-undef
                "<td id=\"steigerung" + talent.id + "\">" + steigerung[talent.Steigerungskosten][0] + "</td>" +
                "<td><button id=\"up" + talent.id + "\" class=\"btn btn-primary btn-sm upTalent\">&#8593;</button>" +
                "<button id=\"down" + talent.id + "\" class=\"btn btn-primary btn-sm downTalent\">&#8595;</button></td>" +
                "</tr>";
        }
        $("#" + gruppenname).append(result);
    }, 
    _getProbText: function(prob) {
        return "(" + prob + "%)";
    }
};

var calculator = {
    calcTalentProb: function(talent) {
        var sumProb = 0; 
        talent.Probe.forEach(function(eigenschaft){
            // eslint-disable-next-line no-undef
            sumProb+= (heldendokument.eigenschaftswerte[eigenschaft] / 60); 
        });
        // eslint-disable-next-line no-undef
        if(heldendokument.talentwerte[talent.id] > 0){
            // eslint-disable-next-line no-undef
            sumProb+= (heldendokument.talentwerte[talent.id] / 60); 
        }
        sumProb*=100; 
        sumProb = Math.round(sumProb);
        return ((sumProb >= 85) ? 85 : sumProb); 
    }
};

var abenteuerpunkteView = {
    updateValue: function() {
        // eslint-disable-next-line no-undef
        $("#AP").text(heldendokument.abenteuerpunkte.value);
        eigenschaftView.updateActions();
        talenteView.updateActions(); 
    }, 
    updateHistory: function() {
        var result = "";
        // eslint-disable-next-line no-undef
        heldendokument.abenteuerpunkte.history.forEach(function(log){
            if(log.action == "start" || log.action == "abenteuer") {
                result+= "<p>" + log.description + ": " + log.cost + " AP</p>";
            } else {
                result+= "<p>" + log.action + " " + log.description + ": " + log.cost + " AP</p>";
            }
        }, this);
        result+="<hr>";
        // eslint-disable-next-line no-undef
        result+= "<p><strong>AP Gesamt: </strong>" + heldendokument.abenteuerpunkte.getEarnSum() + " AP</p>";
        // eslint-disable-next-line no-undef
        result+= "<p><strong>Ausgegeben: </strong>" + heldendokument.abenteuerpunkte.getPaySum() + " AP</p>";
        // eslint-disable-next-line no-undef
        result+= "<p><strong>Aktuell: </strong>" + heldendokument.abenteuerpunkte.value + " AP</p>";
        $("#verlaufContent").html(result);
    }
};

var statsView = {
    updateValues: function() {
        for(var stat in heldendokument.stats){
            $("#Max"+stat).text(heldendokument.stats[stat]);
        }
    }
};