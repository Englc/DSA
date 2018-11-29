/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
var heldendokument = {
    eigenschaftswerte: {},
    talentwerte: {},
    maxValues: {},
    stats: {
        Lebensenergie: 0,
        Astralenergie: 0,
        Karmaenergie: 0,
        Seelenkraft: 0,
        Zähigkeit: 0,
        Ausweichen: 0,
        Geschwindigkeit: 0,
        Initiative: 0
    },
    startStats: {},
    abenteuerpunkte: {
        value: 0,
        history: [],
        update: function (pValue, pAction, pDescription) {
            this.value += pValue;
            this.history.push({
                action: pAction,
                description: pDescription,
                cost: pValue
            });

            abenteuerpunkteView.updateHistory();
        },
        undo: function (pAction) {
            var i;
            for (i = this.history.length - 1; i >= 0; --i) {
                if (this.history[i].action == pAction) {
                    break;
                }
            }
            this.value -= this.history[i].cost;
            this.history.splice(i, 1);

            abenteuerpunkteView.updateHistory();
        },
        getPaySum: function () {
            var sum = 0;
            for (var log in this.history) {
                if (this.history[log].cost < 0) {
                    sum += this.history[log].cost;
                }
            }
            return sum;
        },
        getEarnSum: function () {
            var sum = 0;
            for (var log in this.history) {
                if (this.history[log].cost > 0) {
                    sum += this.history[log].cost;
                }
            }
            return sum;
        }
    },
    getEigenschaftswerteSum: function () {
        var sum = 0;
        for (var eigenschaftswert in this.eigenschaftswerte) {
            sum += this.eigenschaftswerte[eigenschaftswert];
        }
        return sum;
    },
    applyErfahrung: function (erfahrung) {
        heldendokument.maxValues = erfahrungsgrad[erfahrung];
        heldendokument.abenteuerpunkte.update(heldendokument.maxValues.AP, "start", erfahrung);
    },
    applySpezies: function (speziesname) {
        heldendokument.startStats = spezies[speziesname];
        heldendokument.abenteuerpunkte.update(heldendokument.startStats.AP * -1, "Spezies", speziesname);

        heldendokument.stats.Lebensenergie = heldendokument.startStats.Lebensenergie + (2 * heldendokument.eigenschaftswerte["KO"]);
        heldendokument.stats.Seelenkraft = Math.round(heldendokument.startStats.Seelenkraft + ((heldendokument.eigenschaftswerte["MU"] + heldendokument.eigenschaftswerte["KL"] + heldendokument.eigenschaftswerte["IN"]) / 6));
        heldendokument.stats.Zähigkeit = Math.round(heldendokument.startStats.Zähigkeit + ((heldendokument.eigenschaftswerte["KO"] + heldendokument.eigenschaftswerte["KO"] + heldendokument.eigenschaftswerte["KK"]) / 6));
        heldendokument.stats.Ausweichen = Math.round(heldendokument.eigenschaftswerte["GE"] / 2);
        heldendokument.stats.Geschwindigkeit = heldendokument.startStats.Geschwindigkeit; 
        heldendokument.stats.Initiative = Math.round((heldendokument.eigenschaftswerte["MU"] + heldendokument.eigenschaftswerte["GE"]) / 2); 

        statsView.updateValues(); 
        // Astralenergie: 0, 
        // Karmaenergie: 0, 
    },
    init: function () {
        // eslint-disable-next-line no-undef
        eigenschaften.forEach(function (eigenschaft) {
            heldendokument.eigenschaftswerte[eigenschaft.name] = 8;
        });

        // eslint-disable-next-line no-undef
        talente.iterateAllTalente(function (talent) {
            heldendokument.talentwerte[talent.id] = -1;
        });
    }
};