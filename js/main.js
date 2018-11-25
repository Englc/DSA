$(document).ready(function () {
    // eslint-disable-next-line no-undef
    eigenschaften.forEach(function (eigenschaft, index) {
        var target; 
        if(index < 4) {
            target = "#EigenschaftenCol1"; 
        } else {
            target = "#EigenschaftenCol2"; 
        }
        $(target).append(displayEigenschaft(eigenschaft));
    });
});

function displayEigenschaft(eigenschaft){
    return eigenschaftCol(eigenschaftCard(eigenschaft.name, eigenschaft.value));
}


function eigenschaftCol(content) {
    return "<div class=\"col-3 eigenschaftcard\">" + content + "</div>";
}

function eigenschaftCard(name, value) {
    var result = "";
    result += "<div class=\"card\">";
    result += "  <h5 class=\"card-header\">"+name+"</h5>";
    result += "  <div class=\"card-body\">";
    result += "    <h5 class=\"card-title\">"+value+"</h5>";
    result += "    <a href=\"#\" class=\"btn btn-primary\">Go</a>";
    result += "  </div>";
    result += "</div>";

    return result;
}