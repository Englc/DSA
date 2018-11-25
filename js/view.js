/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
var eigenschaftView = {
    updateValue: function (eigenschaft) {
        $("#value" + eigenschaft.name).text(eigenschaft.value);
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
        if (eigenschaft.value == 8) {
            $("#down" + eigenschaft.name).attr("disabled", "disabled").button("refresh");
        } else {
            $("#down" + eigenschaft.name).removeAttr("disabled").button("refresh");
        }
        // up
        // eslint-disable-next-line no-undef
        if (eigenschaft.value < 25 && abenteuerpunkte.value - steigerung.E[eigenschaft.value + 1] >= 0) {
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
        result += " <button type=\"button\" class=\"btn btn-outline-secondary btn-sm\" data-toggle=\"modal\" data-target=\"#info" + eigenschaft.name + "\">Info</button>";
        result += "</h5>";
        result += "  <div class=\"card-body\">";
        result += "    <h5 id=\"value" + eigenschaft.name + "\" class=\"card-title\">" + eigenschaft.value + "</h5>";
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
        talenteView._displayTalentGruppe("Körpertalente", "TalenteCol1");
        talenteView._displayTalentGruppe("Gesellschaftstalente", "TalenteCol1");
        talenteView._displayTalentGruppe("Naturtalente", "TalenteCol1");
        talenteView._displayTalentGruppe("Wissenstalente", "TalenteCol2");
        talenteView._displayTalentGruppe("Handwerkstalente", "TalenteCol2");
    },
    updateValue: function(talent){
        var talentText; 
        if (talent.value == -1) {
            talentText = "-"; 
        } else {
            talentText = talent.value; 
        }
        $("#value" + talent.id).text(talentText);
        // eslint-disable-next-line no-undef
        $("#steigerung" + talent.id).text(steigerung[talent.Steigerungskosten][talent.value+1]);
    }, 
    updateActions: function () {
        // eslint-disable-next-line no-undef
        talente.iterateAllTalente(talenteView._updateButton);
    },
    _updateButton: function (talent) {
        // down
        if (talent.value < 0) {
            $("#down" + talent.id).attr("disabled", "disabled").button("refresh");
        } else {
            $("#down" + talent.id).removeAttr("disabled").button("refresh");
        }
        // up
        // eslint-disable-next-line no-undef
        if (talent.value < 25 && abenteuerpunkte.value - steigerung[talent.Steigerungskosten][talent.value+1] >= 0) {
            $("#up" + talent.id).removeAttr("disabled").button("refresh");
        } else {
            $("#up" + talent.id).attr("disabled", "disabled").button("refresh");
        }
    },
    _displayTalentGruppe: function(gruppenname, col) {

        var result = "";
        result += "<div class=\"col-12\">" +
            "<table class=\"table table-sm\">" +
            "<thead>" +
            "<tr>" +
            "<th scope=\"col\">" + gruppenname + "</th>" +
            "<th scope=\"col\">Probe</th>" +
            "<th scope=\"col\">FW</th>" +
            "<th scope=\"col\">AP</th>" +
            "<th scope=\"col\">leveln</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";

        // eslint-disable-next-line no-undef
        var talentGruppe = talente[gruppenname];
        var i;
        for (i = 0; i < talentGruppe.length; i++) {
            var talent = talentGruppe[i];
            result += "<tr>" +
                // eslint-disable-next-line no-undef
                "<th scope=\"row\">" + talent.name + "</th>" +
                "<td>" + talent.Probe + "</td>" +
                "<td><strong id=\"value" + talent.id + "\">-</strong></td>" +
                // eslint-disable-next-line no-undef
                "<td id=\"steigerung" + talent.id + "\">" + steigerung[talent.Steigerungskosten][0] + "</td>" +
                "<td><button id=\"up" + talent.id + "\" class=\"btn btn-primary btn-sm upTalent\">&#8593;</button>" +
                "<button id=\"down" + talent.id + "\" class=\"btn btn-primary btn-sm downTalent\">&#8595;</button></td>" +
                "</tr>";
        }

        result += "</tbody>" +
            "</table>" +
            "</div>";
        $("#" + col).append(result);
    }
};

var abenteuerpunkteView = {
    updateValue: function() {
        // eslint-disable-next-line no-undef
        $("#AP").text(abenteuerpunkte.value);
        eigenschaftView.updateActions();
        talenteView.updateActions(); 
    }
};