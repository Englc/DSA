/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
var heldendokument = {
    abenteuerpunkte: {
        value: 0,
        history: [],
        update: function(pValue, pAction, pDescription){
            this.value+=pValue; 
            this.history[this.history.length] = {
                action: pAction, 
                description: pDescription, 
                cost: pValue
            }; 
        }, 
        undo: function(pAction){
            var i; 
            for(i = this.history.length - 1; i >= 0; --i){
                if(this.history[i].action == pAction) {
                    break;
                } 
            }
            this.value-=this.history[i].cost; 
            this.history.splice(i, 1); 

        }
    }, 
    init: function(){
        heldendokument.eigenschaftswerte = {}; 
        // eslint-disable-next-line no-undef
        eigenschaften.forEach(function(eigenschaft){
            heldendokument.eigenschaftswerte[eigenschaft.name] = 8;
        });

        heldendokument.talentwerte = {};
        // eslint-disable-next-line no-undef
        talente.iterateAllTalente(function(talent){
            heldendokument.talentwerte[talent.id] = -1; 
        });
    }
};