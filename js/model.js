/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
var heldendokument = {
    eigenschaftswerte: {},
    talentwerte: {},
    abenteuerpunkte: {
        value: 0,
        history: [],
        update: function(pValue, pAction, pDescription){
            this.value+=pValue; 
            this.history.push({
                action: pAction, 
                description: pDescription, 
                cost: pValue
            }); 
            
            abenteuerpunkteView.updateHistory();
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
            
            abenteuerpunkteView.updateHistory();
        }, 
        getPaySum: function() {
            var sum = 0; 
            for(var log in this.history){
                if(this.history[log].cost < 0){
                    sum+=this.history[log].cost; 
                }
            }
            return sum; 
        }, 
        getEarnSum: function() {
            var sum = 0; 
            for(var log in this.history){
                if(this.history[log].cost > 0){
                    sum+=this.history[log].cost; 
                }
            }
            return sum; 
        }
    }, 
    init: function(){
        // eslint-disable-next-line no-undef
        eigenschaften.forEach(function(eigenschaft){
            heldendokument.eigenschaftswerte[eigenschaft.name] = 8;
        });

        // eslint-disable-next-line no-undef
        talente.iterateAllTalente(function(talent){
            heldendokument.talentwerte[talent.id] = -1; 
        });
    }
};