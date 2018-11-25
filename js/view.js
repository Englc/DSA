/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
var eigenschaftView = {
    updateValue: function (eigenschaft) {
        $("#value" + eigenschaft.name).text(eigenschaft.value);
    },
    displayEigenschaft: function (eigenschaft) {
        return this._eigenschaftCol(this._eigenschaftCard(eigenschaft.name, eigenschaft.value));
    },
    _eigenschaftCol: function (content) {
        return "<div class=\"col-3 eigenschaftcard\">" + content + "</div>";
    },
    _eigenschaftCard: function (name, value) {
        var result = "";
        result += "<div class=\"card\">";
        result += "  <h5 class=\"card-header\">" + name + "</h5>";
        result += "  <div class=\"card-body\">";
        result += "    <h5 id=\"value" + name + "\" class=\"card-title\">" + value + "</h5>";
        result += "    <div><span id=\"up" + name + "\" class=\"btn btn-primary up\">up</span><span id=\"up" + name + "\" class=\"btn btn-primary down\">down</span></div>";
        result += "  </div>";
        result += "</div>";

        return result;
    }
};

var abenteuerpunkteView = {
    updateValue: function(){
        // eslint-disable-next-line no-undef
        $("#AP").text(abenteuerpunkte.value); 
    }
};