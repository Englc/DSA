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

var talente = 
    {
        Gesellschaftstalente = [
            {
                name: "Bekehren & Überzeugen", 
                Probe: "MU/KL/CH",
                Anwendungsgebiete: "Diskussionsführung, Einzelgespräch, öffentliche Rede",
                Belastung: "nein", 
                Qualität: "Mehr Menschen lassen sich von dem Helden bekehren, oder der Bekehrte folgt seiner neuen Überzeugung länger.",
                MisslungeneProbe: "Das Opfer glaubt dem Prediger nicht.",
                KritischerErfolg: "Das Opfer der Überzeugungsversuche ist vollends überzeugt.", 
                Patzer: "Das Opfer fühlt sich vom Prediger beleidigt oder für dumm verkauft.",
                Steigerungskosten: "B"
            },

            
            {
                name: "Betören",
                Probe: "MU/CH/CH",
                Anwendungsgebiete: "Anbändeln, Aufhübschen, Liebeskünste",
                Belastung: "nein, situationsabhängige Ausnahmen können vorkommen, z.B. Verführen in Gestechrüstung",
                Qualität: "Der Bezirzte ist bereit, mehr für den Helden zu tun.",
                MisslungeneProbe: "Dem Helden gelingt es vorerst nicht, Interesse beim Opfer zu wecken.",
                KritischerErfolg: "Das Verführungsopfer versucht, dem betörenden Helden alle Wünsche zu erfüllen.",
                Patzer: "Der Held kassiert eine schallende Ohrfeige für seinen plumpen Anmachversuch.",
                Steigerungskosten: "B"
            },  
            
            {
                name: "Einschüchtern",
                Probe: "MU/IN/CH",
                Anwendungsgebiete: "Drohung, Folter, Provokation, Verhör",
                Belastung: "nein",
                Qualität: "Das Opfer ist länger eingeschüchtert oder verrät dem Helden mehr als erwartet.",
                MisslungeneProbe: "Das Gegenüber ignoriert alle Schmähungen und Einschüchterungsversuche des Helden.",
                KritischerErfolg: "Das Gegenüber des Helden ist vollkommen eingeschüchtert und wird in absehbarer Zeit nichts mehr gegen den Helden unternehmen.",
                Patzer: "Anstatt eingeschüchtert oder beleidigt zu sein, geschieht das Gegenteil: Das Opfer ist wütend, völlig gelassen oder amüsiert. Oder der Held macht sich mit seinem Gehabe völlig zum Affen.",
                Steigerungskosten: "B",
            },  

            
            {
                name: "Etikette",
                Probe: "KL/IN/CH",
                Anwendungsgebiete: "Benehmen, Klatsch & Tratsch, leichte Unterhaltung, Mode",
                Belastung: "nein",
                Qualität: "Der Held hinterlässt einen guten Eindruck und bleibt positiv in Erinnerung.",
                MisslungeneProbe: "Der Held kann sich nicht an alle wichtigen Benimmregeln erinnern und fällt unangenehm auf.",
                KritischerErfolg: "Auf der Feier ist der Held aufgrund seines Benehmens, Wortwitzes und Charmes der Mittelpunkt.",
                Patzer: "Der Held beleidigt mit seinem Verhalten eine wichtige Persönlichkeit.",
                Steigerungskosten: "B"
            },
            
            {
                name: "Gassenwissen",
                Probe: "KL/IN/CH",
                Anwendungsgebiete: "Beschatten, Informationssuche, Ortseinschätzung",
                Belastung: "nein (eventuell ja bei bestimmten Situationen, zum Beispiel, wenn die Rüstung den Anschein eines Gardisten oder Adligen erweckt)",
                Qualität: "Der Held erhält mehr Informationen oder erlangt sie schneller als erwartet.",
                MisslungeneProbe: "Der Held erhält keine hilfreichen Informationen.",
                KritischerErfolg: "Der Held entdeckt ein besonders gutes, aber günstiges Gasthaus, erhält mehr Informationen, als er erwartet hat, oder es gelingt ihm, einen Kontaktmann zu finden, der ihm exzellente Konditionen anbietet.",
                Patzer: "Der Held gerät in den Hinterhalt einer Bande Schurken, die ihn ausplündern wollen.",
                Steigerungskosten: "C"
            },
            
            {
                name: "Menschenkenntnis",
                Probe: "KL/IN/CH",
                Anwendungsgebiete: "Lügen durchschauen, Motivation erkennen",
                Belastung: "nein",
                Qualität: "Der Held hat einen stärkeren Verdacht, was sein Gegenüber vorhat oder warum es lügt.",
                MisslungeneProbe: "Der Held ist sich nicht sicher.",
                KritischerErfolg: "Der Held durchschaut die Person komplett.",
                Patzer: "Der Held ist einer kompletten Fehleinschätzung aufgesessen. So könnte er beispielsweise einem Lügner wirklich alles glauben, ehrlichen Leuten hingegen kein Wort.",
                Steigerungskosten: "C"
            },
            
            {
                name: "Überreden",
                Probe: "MU/IN/CH",
                Anwendungsgebiete: "Aufschwatzen, Betteln, Herausreden, Manipulieren, Schmeicheln",
                Belastung: "nein",
                Qualität: "Das Gegenüber ist bereit, mehr für den Helden zu tun.",
                MisslungeneProbe: "Dem Held gelingt es nicht, sein Gegenüber zu überreden.",
                KritischerErfolg: "Die Person, die der Held überreden wollte, tut weit mehr als sie muss.",
                Patzer: "Die Person, die der Held überreden wollte, ist wütend auf den Helden und lässt sich in nächster Zeit nicht mehr überreden.",
                Steigerungskosten: "C"
            },
            
            {
                name: "Verkleiden",
                Probe: "IN/CH/GE",
                Anwendungsgebiete: "Bühnenschauspiel, Kostümierung, Personen imitieren",
                Belastung: "ja",
                Qualität: "Die Verkleidung ist schwerer zu durchschauen.",
                MisslungeneProbe: "Die Verkleidung ist nicht gut gewählt und hält einem prüfenden Blick nicht stand.",
                KritischerErfolg: "Die Verkleidung funktioniert tadellos.",
                Patzer: "Die Kleidung wird sofort durchschaut und der Held handelt sich in der Regel Ärger ein.",
                Steigerungskosten: "B"
            },
            
            {
                name: "Willenskraft",
                Probe: "MU/IN/CH",
                Anwendungsgebiete: "Bekehren & Überzeugen widerstehen, Bedrohungen standhalten, Betören widerstehen, Einschüchtern widerstehen, Überreden widerstehen",
                Belastung: "nein",
                Qualität: "Die Auswirkungen von Verführungs- oder Überredungsversuchen sind deutlich abgeschwächt oder es wird ihnen ganz widerstanden.",
                MisslungeneProbe: "Der Held kann nicht widerstehen.",
                KritischerErfolg: "Der Held widersteht und kann von dieser Person oder Sache in nächster Zeit nicht mehr beeinflusst werden.",
                Patzer: "Der Held ist der Person, die ihn beeinflussen will, vollkommen verfallen oder fällt bei Anblick eines scheußlichen Dämons in Ohnmacht.",
                Steigerungskosten: "D"
            },
        ]
    };