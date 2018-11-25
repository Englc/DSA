var eigenschaften = [
    {
        name: "MU",
        namelong: "Mut", 
        value: 0
    },
    {
        name: "KL",
        namelong: "Klugheit", 
        value: 0
    },
    {
        name: "IN",
        namelong: "Intelligenz", 
        value: 0
    },
    {
        name: "CH",
        namelong: "Charisma", 
        value: 0
    },
    {
        name: "FF",
        namelong: "Fingerfertigkeit", 
        value: 0
    },
    {
        name: "GE",
        namelong: "Geschick", 
        value: 0
    },
    {
        name: "KO",
        namelong: "Konstitution", 
        value: 0
    },
    {
        name: "KK",
        namelong: "Körperkraft", 
        value: 0
    },

];

$( document ).ready(function() {

    $("#tableEigenschaften").append("<thead><tr>"); 

    eigenschaften.forEach(function(eigenschaft){
        $("#tableEigenschaften").append("<th scope=\"col\"><label>"+eigenschaft.name+"</label></th>");
    });

    $("#tableEigenschaften").append("</tr></thead>"); 
    
    $("#tableEigenschaften").append("<tbody><tr>"); 

    eigenschaften.forEach(function(eigenschaft){
        $("#tableEigenschaften").append("<td><input type=\"number\" class=\"form-control\" id=\"input"+eigenschaft.name+"\" placeholder="+eigenschaft.name+" value=\""+eigenschaft.value+"\"></td>");
    });

    $("#tableEigenschaften").append("</tr></tbody>"); 
    
});

            
        //         <th scope="col"><label>KL</label></th>
        //         <th scope="col"><label>IN</label></th>
        //         <th scope="col"><label>CH</label></th>
        //         <th scope="col"><label>FF</label></th>
        //         <th scope="col"><label>GE</label></th>
        //         <th scope="col"><label>KO</label></th>
        //         <th scope="col"><label>KK</label></th>
        //     </tr>
        // </thead>
        // <tbody>
        //     <tr>
        //         <td><input type="number" class="form-control" id="inputMU" placeholder="MU"></td>
        //         <td><input type="number" class="form-control" id="inputKL" placeholder="KL"></td>
        //         <td><input type="number" class="form-control" id="inputMU" placeholder="MU"></td>
        //         <td><input type="number" class="form-control" id="inputMU" placeholder="MU"></td>
        //         <td><input type="number" class="form-control" id="inputMU" placeholder="MU"></td>
        //         <td><input type="number" class="form-control" id="inputMU" placeholder="MU"></td>
        //         <td><input type="number" class="form-control" id="inputMU" placeholder="MU"></td>
        //         <td><input type="number" class="form-control" id="inputMU" placeholder="MU"></td>
        //     </tr>
        // </tbody>