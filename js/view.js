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
        result += "    <div><button id=\"up" + eigenschaft.name + "\" class=\"btn btn-primary btn-sm up\">&#8593;</button>";
        result += "<button id=\"down" + eigenschaft.name + "\" class=\"btn btn-primary btn-sm down\">&#8595;</button>";
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
    displayTalente: function () {

        // eslint-disable-next-line no-undef
        // var talentGruppenNamen = Object.keys(talente);
        // talentGruppenNamen.forEach(talenteView._displayTalentGruppe);

        talenteView._displayTalentGruppe("Körpertalente", "TalenteCol1"); 
        talenteView._displayTalentGruppe("Gesellschaftstalente", "TalenteCol1"); 
        talenteView._displayTalentGruppe("Naturtalente", "TalenteCol1"); 
        talenteView._displayTalentGruppe("Wissenstalente", "TalenteCol2"); 
        talenteView._displayTalentGruppe("Handwerkstalente", "TalenteCol2"); 
    },
    _displayTalentGruppe: function (gruppenname, col) {

        var result = "";
        result += "<div class=\"col\">" +
            "<table class=\"table table-sm\">" +
            "<thead>" +
            "<tr>" +
            "<th scope=\"col\">" + gruppenname + "</th>" +
            "<th scope=\"col\">Probe</th>" +
            "<th scope=\"col\">Kosten</th>" +
            "<th scope=\"col\">FW</th>" +
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
                "<td>" + 15 + "</td>" +
                "<td>" + 8 + "</td>" +
                "</tr>";
        }

        result += "</tbody>" +
            "</table>" +
            "</div>";
        $("#"+col).append(result);
    }
};

var abenteuerpunkteView = {
    updateValue: function () {
        // eslint-disable-next-line no-undef
        $("#AP").text(abenteuerpunkte.value);
        eigenschaftView.updateActions();
    }
};

// <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>

// <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
//   <div class="modal-dialog modal-sm">
//     <div class="modal-content">
//       ...
//     </div>
//   </div>
// </div>