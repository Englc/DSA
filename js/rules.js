/* eslint-disable no-unused-vars */
var steigerung = {
    A: [1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    B: [2,2,2,2,2,2,2,2,2,2,2,2,2,4,6,8,10,12,14,16,18,20,22,24,26,28],
    C: [3,3,3,3,3,3,3,3,3,3,3,3,3,6,9,12,15,18,21,24,27,30,33,36,39,42],
    D: [4,4,4,4,4,4,4,4,4,4,4,4,4,8,12,16,20,24,28,32,36,40,44,48,52,56],
    E: [0,15,15,15,15,15,15,15,15,15,15,15,15,15,15,30,45,60,75,90,105,120,135,150,165,180],
};

var erfahrungsgrad = {
    Unerfahren: {
        AP: 900, 
        MaxEigenschaft: 12,
        MaxEigenschaftGesamt: 95,
        MaxTalent: 10, 
        MaxKampftechnik: 8, 
        MaxZauber: 8, 
        MaxFremdzauber: 0
    },
    Durchschnitt: {
        AP: 1000, 
        MaxEigenschaft: 13,
        MaxEigenschaftGesamt: 98,
        MaxTalent: 10, 
        MaxKampftechnik: 10, 
        MaxZauber: 10, 
        MaxFremdzauber: 1
    },
    Erfahren: {
        AP: 1100, 
        MaxEigenschaft: 14,
        MaxEigenschaftGesamt: 100,
        MaxTalent: 10, 
        MaxKampftechnik: 12, 
        MaxZauber: 12, 
        MaxFremdzauber: 2
    },
    Kompetent: {
        AP: 1200, 
        MaxEigenschaft: 15,
        MaxEigenschaftGesamt: 102,
        MaxTalent: 13, 
        MaxKampftechnik: 14, 
        MaxZauber: 14, 
        MaxFremdzauber: 3
    },
    Meister: {
        AP: 1400, 
        MaxEigenschaft: 16,
        MaxEigenschaftGesamt: 105,
        MaxTalent: 16, 
        MaxKampftechnik: 16, 
        MaxZauber: 16, 
        MaxFremdzauber: 4
    },
    Brilliant: {
        AP: 1700, 
        MaxEigenschaft: 17,
        MaxEigenschaftGesamt: 109,
        MaxTalent: 19, 
        MaxKampftechnik: 18, 
        MaxZauber: 18, 
        MaxFremdzauber: 5
    },
    Legendaer: {
        AP: 2100, 
        MaxEigenschaft: 18,
        MaxEigenschaftGesamt: 114,
        MaxTalent: 20, 
        MaxKampftechnik: 20, 
        MaxZauber: 20, 
        MaxFremdzauber: 6
    }
};

var eigenschaften = [
    {
        name: "MU",
        bezeichnung: "Mut",
        beschreibung: "Der Mutwert steht für Furchtlosigkeit und entschlossenes Handeln. Ein hoher Wert beeinflusst die Abwehrkraft gegen Zaubersprüche und Liturgien und lässt einen Helden auch angesichts großer Gefahren nicht verzagen."         
    },
    {
        name: "KL",
        bezeichnung: "Klugheit",
        beschreibung: "Klugheit steht einerseits für eine gute Analysefähigkeit und ausgeprägte Logikkenntnisse, andererseits für Allgemeinwissen. Auch ein gutes Gedächtnis und Erinnerungsvermögen werden damit abgebildet."         
    },
    {
        name: "IN",
        bezeichnung: "Intuition",
        beschreibung: "Vorahnung, Einfühlungsvermögen und Bauchgefühl sind die wesentlichen Bestandteile einer hohen Intuition. Sie steht außerdem dafür, unter Stress die richtige Entscheidung zu treffen."         
    },
    {
        name: "CH",
        bezeichnung: "Charisma",
        beschreibung: "Persönliche Ausstrahlung, Überzeugungskraft und eine güldene Zunge – für all diese Attribute steht das Charisma. Attraktivität kann ebenfalls über diese Eigenschaft hergeleitet werden, Charisma ist aber nicht gleichbedeutend mit gutem Aussehen."         
    },
    {
        name: "FF",
        bezeichnung: "Fingerfertigkeit",
        beschreibung: "Fingerfertigkeit umfasst die Geschicklichkeit der Finger und die Koordination zwischen Auge und Hand. Sie gibt an, wie gut ein Held den Einsatz von Dietrichen, handwerkliche Tätigkeiten oder das Bogenschießen beherrscht."         
    },
    {
        name: "GE",
        bezeichnung: "Gewandtheit",
        beschreibung: "Im Unterschied zur Fingerfertigkeit steht die Gewandtheit für die Geschicklichkeit des ganzen Körpers. Reflexe, Reaktionsvermögen, aber auch Beweglichkeit spielen in die Gewandtheit mit hinein."         
    },
    {
        name: "KO",
        bezeichnung: "Konstitution",
        beschreibung: "Der Konstitutionswert ist ein Maß für die Ausdauer eines Helden. Eine hohe Konstitution sorgt nicht nur für mehr Lebenspunkte, sondern ebenso für eine größere Resistenz gegenüber Giften und Krankheiten."         
    },
    {
        name: "KK",
        bezeichnung: "Körperkraft",
        beschreibung: "Stärke und Muskelkontrolle fließen maßgeblich in die Körperkraft des Helden ein. Sie steht jedoch nicht nur für schiere Muskelkraft, sondern ebenfalls für die richtige Technik, um diese einzusetzen."         
    },

];

var eigenschaftenProp = {
    isIncreasable: function(eigenschaft) {
        // max is 25
        return (heldendokument.eigenschaftswerte[eigenschaft.name] < 25 
            // Kann ich mir die steigerung leisten
            && heldendokument.abenteuerpunkte.value - steigerung.E[heldendokument.eigenschaftswerte[eigenschaft.name] + 1] >= 0
            && heldendokument.eigenschaftswerte[eigenschaft.name] < heldendokument.maxValues.MaxEigenschaft
            && heldendokument.getEigenschaftswerteSum()+1 <= heldendokument.maxValues.MaxEigenschaftGesamt);
    }
};

var talente =
{
    Gesellschaftstalente: [
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
            Steigerungskosten: "B"
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
    ],
    Handwerkstalente: [

        {
            name: "Alchimie",
            Probe: "MU/KL/FF",
            Anwendungsgebiete: "alchimistische Gifte, Elixiere, profane Alchimie",
            Belastung: "ja",
            Werkzeuge: "alchimistisches Labor",
            Qualität: "Der Trank weist eine bessere Qualität auf.",
            MisslungeneProbe: "Das Elixier ist misslungen oder eine Analyse hat kein Ergebnis gebracht.",
            KritischerErfolg: "Der Held weiß exakt, welches Elixier er vor sich hat, welche Stufe es besitzt und wie lange haltbar es ist.",
            Patzer: "Das Elixier sorgt für einen unangenehmen Nebeneffekt.",
            Steigerungskosten: "C"
        },

        {
            name: "Boote & Schiffe",
            Probe: "FF/GE/KK",
            Anwendungsgebiete: "Kampfmanöver, Langstrecke, Verfolgungsjagden, Wettfahren",
            Belastung: "ja",
            Werkzeuge: "Schiff oder Boot",
            Qualität: "Die Distanz bis zum Ziel kann schneller überwunden werden.",
            MisslungeneProbe: "Der Held kommt mit dem Boot oder Schiff kaum voran.",
            KritischerErfolg: "Der Held nutzt günstige Strömungen und Winde, um doppelt so schnell voranzukommen wie üblich.",
            Patzer: "Der Held fällt von Bord oder ein wichtiger Teil des Wasserfahrzeugs wurde beschädigt.",
            Steigerungskosten: "B"
        },

        {
            name: "Fahrzeuge",
            Probe: "CH/FF/KO",
            Anwendungsgebiete: "Kampfmanöver, Langstrecke, Verfolgungsjagden, Wettrennen",
            Belastung: "ja",
            Werkzeuge: "Fahrzeug",
            Qualität: "Die Distanz bis zum Ziel kann schneller überwunden werden.",
            MisslungeneProbe: "Das Fahrzeug bewegt sich schwerfällig oder dem Helden gelingt es nicht, es in Bewegung zu setzen.",
            KritischerErfolg: "Das Fahrzeug kommt gut voran und schafft die Strecke in Rekordzeit.",
            Patzer: "Das Fahrzeug erleidet einen Achsenbruch oder fällt während der Fahrt mitsamt dem Fahrer um, und der Held erleidet Fallschaden.",
            Steigerungskosten: "A"
        },

        {
            name: "Handel",
            Probe: "KL/IN/CH",
            Anwendungsgebiete: "Buchhaltung, Feilschen, Geldwechsel",
            Belastung: "nein",
            Qualität: "Der Held kann präziser den Preis bestimmen.",
            MisslungeneProbe: "Der Held bekommt nicht so viel wie erhofft.",
            KritischerErfolg: "Der Held bekommt die Ware zu einem Spottpreis bzw. kann sie zu Wucherpreisen loswerden – ohne dass sein Handelspartner es ihm übel nimmt. Die Preiserhöhung oder der Nachlass sollte mindestens 50 % betragen.",
            Patzer: "Der Held wird über den Tisch gezogen oder der Handelspartner weigert sich, Geschäfte mit dem Helden zu machen. Die Preiserhöhung oder der Nachlass sollte mindestens 50 % betragen.",
            Steigerungskosten: "B"
        },

        {
            name: "Heilkunde Gift",
            Probe: "MU/KL/IN",
            Anwendungsgebiete: "alchimistisches Gift, mineralisches Gift, pflanzliches Gift, tierisches Gift",
            Belastung: "ja",
            Werkzeuge: "Gegenmittel",
            Qualität: "Der Held kann das Gift schneller bestimmen.",
            MisslungeneProbe: "Der Held hat keine Ahnung und kennt keine Möglichkeit der Heilung.",
            KritischerErfolg: "Der Patient kann vollständig entgiftet werden, ohne dass der Held das passende Gegenmittel verwenden musste.",
            Patzer: "Der Held ordnet einen (schädlichen) Aderlass an oder hat den Patienten bei der Behandlung verletzt oder gar zusätzlich vergiftet (1W6 SP).",
            Steigerungskosten: "B"
        },

        {
            name: "Heilkunde Krankheiten",
            Probe: "MU/IN/KO",
            Anwendungsgebiete: "jeweilige Krankheit (z. B. Sumpffieber)",
            Belastung: "ja",
            Werkzeuge: "Heilmittel",
            Qualität: "Der Held kann die Krankheit schneller bestimmen.",
            MisslungeneProbe: "Der Held hat keine Ahnung und kennt weder Heilmittel noch die passende Behandlung.",
            KritischerErfolg: "Der Patient ist geheilt, ohne dass der Held ein Heilmittel verwenden musste. Zudem steckt er sich nicht beim Erkrankten an.",
            Patzer: "Der Held hat dem Patienten bei der Behandlung geschadet (1W6 SP) oder der Krankheitsverlauf verschlimmert sich. Zudem besteht für den Helden bei ansteckenden Krankheiten eine 25 % höhere Chance, sich bei dem Patienten anzustecken.",
            Steigerungskosten: "B"
        },

        {
            name: "Heilkunde Seele",
            Probe: "IN/CH/KO",
            Anwendungsgebiete: "Unterdrückung von Ängsten, Unterdrückung von Persönlichkeitsschwächen, Unterdrückung von Schlechten Eigenschaften",
            Belastung: "nein",
            Qualität: "Die Unterdrückung des Nachteils hält länger an.",
            MisslungeneProbe: "Der Held hat keine Ahnung, wie er dem Patienten helfen kann.",
            KritischerErfolg: "Der Patient kann einen Nachteil (Angst, Persönlichkeitsschwäche oder Schlechte Eigenschaft) für einen ganzen Tag unterdrücken.",
            Patzer: "Der Held hat den Patienten bei der Behandlung verstört oder seinem Geist anderweitig geschadet. Der Patient erhält für einen Tag eine Stufe des Zustands Furcht oder Verwirrung.",
            Steigerungskosten: "B"
        },

        {
            name: "Heilkunde Wunden",
            Probe: "KL/FF/FF",
            Anwendungsgebiete: "Heilung fördern, Schmerzen nehmen, Stabilisieren",
            Belastung: "ja",
            Werkzeuge: "eventuell Bandagen, chirurgisches Gerät, Kräuter, Nadel und Faden",
            Qualität: "Der Held verbraucht weniger Heilkräuter oder kann die Verletzung schneller versorgen.",
            MisslungeneProbe: "Der Held kann dem Patienten nicht helfen.",
            KritischerErfolg: "Die vollen Fertigkeitspunkte werden bei der nächsten Regenerationsphase zusätzlich zur normalen Regeneration zu den Lebenspunkten des Patienten hinzuaddiert.",
            Patzer: "Der Held hat den Patienten bei der Behandlung verletzt (1W6 SP).",
            Steigerungskosten: "D"
        },

        {
            name: "Holzbearbeitung",
            Probe: "FF/GE/KK",
            Anwendungsgebiete: "Schlagen & Schneiden, Tischlerarbeiten, Zimmermannsarbeiten",
            Belastung: "ja",
            Werkzeuge: "je nach zu bearbeitendem Material z. B. Axt, Hobel, Messer, Säge",
            Qualität: "Das Werkstück ist schneller fertig oder es wird eine bessere Qualität erzielt.",
            MisslungeneProbe: "Der Held kommt mit der Arbeit an dem Werkstück nicht voran.",
            KritischerErfolg: "Die Zahl der FP bei dieser Probe verdoppelt sich, der Held erhält aber mindestens 5 FP. Erschwernisse, die durch misslungene Sammelproben aufgebaut wurden, werden komplett abgebaut.",
            Patzer: "Ein Patzer sorgt dafür, dass die angesammelten QS auf 0 sinken und keine weitere Probe für dieses Vorhaben angewandt werden kann.",
            Steigerungskosten: "B"
        },

        {
            name: "Lebensmittelbearbeitung",
            Probe: "IN/FF/FF",
            Anwendungsgebiete: "Ausnehmen, Backen, Braten & Sieden, Brauen, Haltbarmachung",
            Belastung: "ja",
            Werkzeuge: "entsprechende Zutaten, Feldküche, Kochutensilien",
            Qualität: "Der Geschmack des Essens ist besser als üblich.",
            MisslungeneProbe: "Das Essen ist angebrannt oder ungenießbar.",
            KritischerErfolg: "Die Mahlzeit ist ein echter Gaumenschmaus, ein gekelterter Wein ein wirklich edler Tropfen.",
            Patzer: "Das Essen schmeckt nicht nur miserabel, der Konsum hat auch eine schwere Magenverstimmung, Durchfall oder Brechreiz (1W6 SP) zur Folge.",
            Steigerungskosten: "A"
        },

        {
            name: "Lederbearbeitung",
            Probe: "FF/GE/KO",
            Anwendungsgebiete: "Gerben, Kürschnern, Lederwaren herstellen",
            Belastung: "ja",
            Werkzeuge: "Ahle, Falzbein, Lochzange, Messer, Punziereisen, Zange",
            Qualität: "Das Werkstück ist schneller fertig oder es wird eine bessere Qualität erzielt.",
            MisslungeneProbe: "Der Held kommt mit der Arbeit an dem Werkstück nicht voran.",
            KritischerErfolg: "Die Zahl der FP bei dieser Probe verdoppelt sich, der Held erhält aber mindestens 5 FP. Erschwernisse, die durch misslungene Sammelproben aufgebaut wurden, werden komplett abgebaut.",
            Patzer: "Ein Patzer sorgt dafür, dass die angesammelten QS auf 0 sinken und keine weitere Probe für dieses Vorhaben angewandt werden kann.",
            Steigerungskosten: "B"
        },

        {
            name: "Malen & Zeichnen",
            Probe: "IN/FF/FF",
            Anwendungsgebiete: "Malen, Ritzen, Zeichnen",
            Belastung: "ja",
            Werkzeuge: "Farbe, Kreide, Stifte",
            Qualität: "Die Qualität der Zeichnung ist besser als üblich.",
            MisslungeneProbe: "Dem Held gelingt eine mit Phantasie erkennbare, aber wenig schöne Zeichnung.",
            KritischerErfolg: "Das Bild ist so gut, dass der Held für einen berühmten Maler gehalten wird.",
            Patzer: "schreckliches, unmöglich erkennbares Gekrakel",
            Steigerungskosten: "A"
        },

        {
            name: "Metallbearbeitung",
            Probe: "FF/KO/KK",
            Anwendungsgebiete: "Feinschmiedearbeiten, Grobschmiedearbeiten, Metallguss, Verhütten",
            Belastung: "ja",
            Werkzeuge: "Hammer, Amboss, Schmiedefeuer",
            Qualität: "Das Werkstück ist schneller fertig oder es wird eine bessere Qualität erzielt.",
            MisslungeneProbe: "Der Held kommt mit der Arbeit an dem Werkstück nicht voran.",
            KritischerErfolg: "Die Zahl der FP bei dieser Probe verdoppelt sich, der Held erhält aber mindestens 5 FP. Erschwernisse, die durch misslungene Sammelproben aufgebaut wurden, werden komplett abgebaut.",
            Patzer: "Ein Patzer sorgt dafür, dass die angesammelten QS auf 0 sinken und keine weitere Probe für dieses Vorhaben angewandt werden kann.",
            Steigerungskosten: "C"
        },

        {
            name: "Musizieren",
            Probe: "CH/FF/KO",
            Anwendungsgebiete: "Blasinstrumente, Saiteninstrumente, Trommeln",
            Belastung: "ja",
            Werkzeuge: "Musikinstrument",
            Qualität: "Das Publikum zeigt sich begeisterter von der Vorstellung.",
            MisslungeneProbe: "Die Melodie klingt schief.",
            KritischerErfolg: "Der Held spielt eine Melodie, der keiner widerstehen kann und die alle Zuhörer in ihren Bann zieht.",
            Patzer: "Schreckliche, unheilvolle Töne werden dem Musikinstrument entlockt. Möglicherweise wird das Instrument dabei beschädigt. Menschen suchen das Weite oder wollen dem Musikanten das Instrument entreißen.",
            Steigerungskosten: "A"
        },

        {
            name: "Schlösserknacken",
            Probe: "IN/FF/FF",
            Anwendungsgebiete: "Bartschlösser, Kombinationsschlösser",
            Belastung: "ja",
            Werkzeuge: "Dietrich, Haarnadel, Haken",
            Qualität: "Das Schloss lässt sich schneller öffnen.",
            MisslungeneProbe: "Das Schloss geht nicht auf.",
            KritischerErfolg: "Das Schloss springt in Rekordzeit auf. Der Held benötigt nur die Hälfte des üblichen Zeitaufwandes.",
            Patzer: "Der Dietrich bricht ab, die Falle wird ausgelöst oder das Schloss verklemmt sich.",
            Steigerungskosten: "C"
        },

        {
            name: "Steinbearbeitung",
            Probe: "FF/FF/KK",
            Anwendungsgebiete: "Maurerarbeiten, Steine brechen, Steinmetzarbeiten",
            Belastung: "ja",
            Werkzeuge: "entsprechendes Rohmaterial (Stein, Ton), Hammer, Meißel",
            Qualität: "Das Werkstück ist schneller fertig oder es wird eine bessere Qualität erzielt.",
            MisslungeneProbe: "Der Held kommt mit der Arbeit an dem Werkstück nicht voran.",
            KritischerErfolg: "Die Zahl der FP bei dieser Probe verdoppelt sich, der Held erhält aber mindestens 5 FP. Erschwernisse, die durch misslungene Sammelproben aufgebaut wurden, werden komplett abgebaut.",
            Patzer: "Ein Patzer sorgt dafür, dass die angesammelten QS auf 0 sinken und keine weitere Probe für dieses Vorhaben angewandt werden kann.",
            Steigerungskosten: "A"
        },

        {
            name: "Stoffbearbeitung",
            Probe: "KL/FF/FF",
            Anwendungsgebiete: "Färben, Filzen, Schneidern, Spinnen, Weben",
            Belastung: "ja",
            Werkzeuge: "Messer, Nähzeug, Schere, Webstuhl",
            Qualität: "Das Werkstück ist schneller fertig oder es wird eine bessere Qualität erzielt.",
            MisslungeneProbe: "Der Held kommt mit der Arbeit an dem Werkstück nicht voran.",
            KritischerErfolg: "Die Zahl der FP bei dieser Probe verdoppelt sich, der Held erhält aber mindestens 5 FP. Erschwernisse, die durch misslungene Sammelproben aufgebaut wurden, werden komplett abgebaut.",
            Patzer: "Ein Patzer sorgt dafür, dass die angesammelten QS auf 0 sinken und keine weitere Probe für dieses Vorhaben angewandt werden kann.",
            Steigerungskosten: "A"
        },
    ],
    Körpertalente: [

        {
            name: "Fliegen",
            Probe: "MU/IN/GE",
            Anwendungsgebiete: "Kampfmanöver, Langstreckenflug, Verfolgungsjagden",
            Belastung: "ja",
            Werkzeuge: "das entsprechende Fluggerät",
            Qualität: "Distanzen können schneller überwunden werden.",
            MisslungeneProbe: "Das Flugmanöver ist misslungen und muss abgebrochen werden.",
            KritischerErfolg: "Dem Held ist nicht nur das Manöver gelungen, sondern er hat eine zusätzliche Aktion in dieser Runde.",
            Patzer: "Der Held stürzt ab.",
            Steigerungskosten: "B"
        },

        {
            name: "Gaukeleien",
            Probe: "MU/CH/FF",
            Anwendungsgebiete: "Jonglieren, Possenreißen, Verstecktricks",
            Belastung: "ja",
            Werkzeuge: "je nach Trick z.B. Bälle, Fackel, Schlangen, Spielkarten",
            Qualität: "Der Trick ist besonders gut gelungen und die Zuschauer applaudieren mehr.",
            MisslungeneProbe: "Der Trick funktioniert nicht richtig, kleine Fehler schleichen sich bei dem Versuch ein. Das Publikum ist enttäuscht.",
            KritischerErfolg: "Die Zuschauer sind fasziniert, halten den Trick gar für echte Magie, und potenzielle Geldeinnahmen des Gauklers verdoppeln sich.",
            Patzer: "Der Held wird bei der Präsentation ausgebuht, da ihm ein Missgeschick passiert (mit Jonglierkeule einen Zuschauer getroffen, mit Pyrotechnik den Bürgermeister verletzt etc.).",
            Steigerungskosten: "A"
        },

        {
            name: "Klettern",
            Probe: "MU/GE/KK",
            Anwendungsgebiete: "Baumklettern, Bergsteigen, Eisklettern, Fassadenklettern",
            Belastung: "ja",
            Werkzeuge: "eventuell Kletterausrüstung",
            Qualität: "Der Held kommt schneller an seinem Ziel an.",
            MisslungeneProbe: "Der Held braucht viel länger als üblich, verletzt sich leicht (1W3 SP), traut sich nicht, zu klettern, oder hängt fest.",
            KritischerErfolg: "Ohne Schwierigkeiten und viel schneller als gewöhnlich hat der Held den Aufstieg geschafft. Zuschauer halten ihn für den besten Kletterer Deres. Für Qualitätsstufen, Vergleichs- und Sammelproben gilt: FP = doppelter FW.",
            Patzer: "Der Held rutscht ab und fällt (siehe Seite 340, Sturzschaden).",
            Steigerungskosten: "B"
        },

        {
            name: "Körperbeherrschung",
            Probe: "GE/GE/KO",
            Anwendungsgebiete: "Akrobatik, Balance, Entwinden, Kampfmanöver, Laufen, Springen",
            Belastung: "ja",
            Qualität: "Der Abenteurer kann sich schneller aus einer Fesselung befreien.",
            MisslungeneProbe: "Die Handlung des Helden geht teilweise schief, er braucht länger und macht Fehler oder muss die Handlung abbrechen.",
            KritischerErfolg: "Dem Held gelingt seine Handlung und er hat noch eine zusätzliche Aktion zur Verfügung. Und was immer der Held getan hat: Es sah elegant aus.",
            Patzer: "Der Held stürzt und erleidet Schaden (1W6 SP).",
            Steigerungskosten: "D"
        },

        {
            name: "Kraftakt",
            Probe: "KO/KK/KK",
            Anwendungsgebiete: "Drücken & Verbiegen, Eintreten & Zertrümmern, Stemmen & Heben, Ziehen & Zerren",
            Belastung: "ja",
            Werkzeuge: "eventuell Brecheisen oder Seil",
            Qualität: "Für einen kurzen Zeitraum kann der Held mehr Gewicht stemmen oder eine schwere Last länger halten.",
            MisslungeneProbe: "Die Handlung des Helden misslingt.",
            KritischerErfolg: "Der Held beeindruckt durch seine Muskelkraft alle Zuschauer und gilt fortan als einer der stärksten Aventurier. Für Qualitätsstufen, Vergleichs- und Sammelproben gilt: FP = doppelter FW.",
            Patzer: "Die Handlung des Helden misslingt völlig. Er stürzt, verhebt sich o.Ä. und verletzt sich dabei (1W6 SP).",
            Steigerungskosten: "B"
        },

        {
            name: "Reiten",
            Probe: "CH/GE/KK",
            Anwendungsgebiete: "Kampfmanöver, Langstreckenreiten, Springreiten, Verfolgungsjagden",
            Belastung: "ja",
            Werkzeuge: "Reittier",
            Qualität: "Der Held ist schneller an seinem Ziel.",
            MisslungeneProbe: "Das Tier bewegt sich nicht oder nicht so, wie es soll.",
            KritischerErfolg: "Das Tier macht seine Sache ausgezeichnet und wie gewünscht, der Reiter hat eine weitere Aktion zur Verfügung.",
            Patzer: "Das Tier wirft den Reiter ab und er stürzt zu Boden (siehe Seite 340, Sturzschaden).",
            Steigerungskosten: "B"
        },

        {
            name: "Schwimmen",
            Probe: "GE/KO/KK",
            Anwendungsgebiete: "Kampfmanöver, Langstreckenschwimmen, Tauchen, Verfolgungsjagden, Wassertreten",
            Belastung: "ja",
            Qualität: "Der Held ist schneller an seinem Ziel.",
            MisslungeneProbe: "Der Held traut sich nicht zu schwimmen oder kommt nicht sonderlich weit – auf jeden Fall nicht bis dahin, wohin er wollte.",
            KritischerErfolg: "Der Held schwimmt die Strecke in Bestzeit. Für Qualitätsstufen, Vergleichs- und Sammelproben gilt: FP = doppelter FW.",
            Patzer: "Der Held geht unter (siehe Seite 340ff., Erstickungsschaden). Grund dafür könnte ein Wadenkrampf sein.",
            Steigerungskosten: "B"
        },

        {
            name: "Selbstbeherrschung",
            Probe: "MU/MU/KO",
            Anwendungsgebiete: "Folter widerstehen, Handlungsfähigkeit bewahren, Störungen ignorieren",
            Belastung: "nein",
            Qualität: "Die Selbstbeherrschung hält für einen längeren Zeitraum.",
            MisslungeneProbe: "Dem Helden gelingt es nicht, den Schmerz zu unterdrücken oder die Ablenkung zu ignorieren.",
            KritischerErfolg: "Es gelingt dem Helden, Schmerzen (bis Stufe III) und Ablenkungen einen ganzen Tag lang zu ignorieren.",
            Patzer: "Der Held erhält für die nächste Stunde 2 Stufen des Zustands Schmerz oder ist durch die Ablenkung Überrascht.",
            Steigerungskosten: "D"
        },

        {
            name: "Singen",
            Probe: "KL/CH/KO",
            Anwendungsgebiete: "Bardenballade, Choral, Chorgesang, Sprechgesang",
            Belastung: "nein (eventuell ja bei Helmen)",
            Qualität: "Der Gesang ist so gut, dass der Held mehr Applaus durch die Zuhörer erhält.",
            MisslungeneProbe: "Der Held vergisst den Text oder sein Auftritt gerät eher schlecht als recht.",
            KritischerErfolg: "Der Gesang des Helden ist noch in vielen Wochen Thema seiner Zuhörer. Hat der Held sich um Geld bemüht, dann nimmt er mindestens das Doppelte ein als üblich. Für Qualitätsstufen, Vergleichs- und Sammelproben gilt: FP = doppelter FW.",
            Patzer: "Der Held liegt mehrere Halbtöne daneben oder vergeigt den Rhythmus. Das Lied ist eine Qual für jeden Zuhörer, der Held wird ausgebuht.",
            Steigerungskosten: "A"
        },

        {
            name: "Sinnesschärfe",
            Probe: "KL/IN/IN",
            Anwendungsgebiete: "Hinterhalt entdecken, Suchen, Wahrnehmen",
            Belastung: "nein (eventuell ja bei Helmen, Panzerhandschuhen o.Ä.)",
            Qualität: "Der Held bemerkt weitere Details.",
            MisslungeneProbe: "Der Held bemerkt nichts.",
            KritischerErfolg: "Der Held nimmt sogar kaum bemerkbare Details wahr. Für Qualitätsstufen, Vergleichs- und Sammelproben gilt: FP = doppelter FW.",
            Patzer: "Der Held nimmt etwas anderes wahr, als das, was wirklich wichtig wäre. Er könnte zum Beispiel die in der Nähe befindlichen Blumen riechen, dafür aber nicht den auffällig stinkenden Oger, der an ihn heranschleicht.",
            Steigerungskosten: "D"
        },

        {
            name: "Tanzen",
            Probe: "KL/CH/GE",
            Anwendungsgebiete: "Dorftanz, exotischer Tanz, Hoftanz, Kulttanz",
            Belastung: "ja",
            Qualität: "Der Tanz ist so gut, dass der Held mehr Applaus erhält.",
            MisslungeneProbe: "Der Held bringt die Tanzschritte durcheinander.",
            KritischerErfolg: "Die Aufmerksamkeit der Zuschauer fällt wegen des perfekten Tanzes auf den Helden. Für Qualitätsstufen, Vergleichs- und Sammelproben gilt: FP = doppelter FW.",
            Patzer: "Der Held tritt seiner Tanzpartnerin auf die Füße und verletzt sie dabei oder er stürzt und blamiert sich.",
            Steigerungskosten: "A"
        },

        {
            name: "Taschendiebstahl",
            Probe: "MU/FF/GE",
            Anwendungsgebiete: "Ablenkungen, Person bestehlen, Gegenstand entwenden, Zustecken",
            Belastung: "ja",
            Werkzeuge: "eventuell Messer oder Dolch",
            Qualität: "Der Taschendiebstahl wird später bemerkt.",
            MisslungeneProbe: "Der Versuch misslingt oder das Opfer bemerkt den Diebstahl.",
            KritischerErfolg: "Das Opfer hat den Diebstahlversuch nicht bemerkt und der Held hat besonders wertvolle Beute gemacht oder gleich mehrere Ziele bestohlen. Für Qualitätsstufen, Vergleichs- und Sammelproben gilt: FP = doppelter FW.",
            Patzer: "Der Held wird von umstehenden Personen oder dem Opfer beobachtet, ohne es zu bemerken, und der Diebstahlversuch misslingt. Außerdem ist er Überrascht.",
            Steigerungskosten: "B"
        },

        {
            name: "Verbergen",
            Probe: "MU/IN/GE",
            Anwendungsgebiete: "Gegenstände verbergen, Schleichen, sich Verstecken",
            Belastung: "ja",
            Qualität: "Der Held kann schwieriger entdeckt werden oder findet schneller ein Versteck.",
            MisslungeneProbe: "Der Held hat sich nur dürftig versteckt oder Geräusche beim Schleichen verursacht.",
            KritischerErfolg: "Der Held hat ein perfektes Versteck gefunden oder ist lautlos wie eine Katze. Für Qualitätsstufen, Vergleichs- und Sammelproben gilt: FP = doppelter FW.",
            Patzer: "Irgendetwas (Teller, ein Möbelstück) ist umgefallen.",
            Steigerungskosten: "C"
        },

        {
            name: "Zechen",
            Probe: "KL/KO/KK",
            Anwendungsgebiete: "Vermeidung von Betäubung durch Rauschmittel, Vermeidung von Schmerz durch Rauschmittel, Vermeidung von Verwirrung durch Rauschmittel",
            Belastung: "nein",
            Qualität: "Der Held verträgt viel mehr als üblich.",
            MisslungeneProbe: "Der Held erhält eine Stufe des Zustands Betäubung und erwacht am nächsten Tag mit Kopfschmerzen oder anderen unliebsamen Auswirkungen seines Gelages.",
            KritischerErfolg: "Dem Helden gelingt es, bis zum bitteren Ende durchzuhalten, und trotzdem geht es ihm am nächsten Morgen blendend.",
            Patzer: "Der Held begeht in seinem Zustand jedwede Peinlichkeit. Er zerlegt die halbe Taverne, wacht morgens nackt auf dem Markt oder in einem fremden Bett auf, plaudert Geheimnisse an den Feind aus und kann sich danach an nichts mehr erinnern.",
            Steigerungskosten: "A"
        },
    ],
    Naturtalente: [
        {
            name: "Fährtensuchen",
            Probe: "MU/IN/GE",
            Anwendungsgebiete: "Verwischen eigener Fährte, humanoide Spuren, tierische Spuren",
            Belastung: "ja",
            Qualität: "Über die Qualitätsstufe kann der Held mehr Details in der Fährte erkennen.",
            MisslungeneProbe: "Der Held findet keine Spur oder kann keine neuen Erkenntnisse gewinnen.",
            KritischerErfolg: "Sofern die Spur nicht komplett zerstört wurde, kann der Held ihr zielsicher bis zum Ende folgen. Er erhält mehr Informationen als üblich. Täuschungsmanöver wie das Verwischen der Spuren durchschaut er sofort.",
            Patzer: "Der Held verwechselt die Spur und folgt einer falschen Fährte. So trifft er vielleicht auf eine gefährliche Kreatur oder jagt den falschen Leuten hinterher.",
            Steigerungskosten: "C"
        },

        {
            name: "Fesseln",
            Probe: "KL/FF/KK",
            Anwendungsgebiete: "Fesselungen, Knotenkunde, Netze knüpfen",
            Belastung: "nein (eventuell ja bei Helmen, Panzerhandschuhen, etc.)",
            Werkzeuge: "Fessel",
            Qualität: "Die Fessel hält länger und kann gegebenenfalls schwerer geöffnet werden.",
            MisslungeneProbe: "Dem Held gelingt nur ein Knoten von schlechter Qualität. Das Befreien daraus ist leichter als üblich.",
            KritischerErfolg: "Der Held hat einen stabilen Knoten gemacht. Für Qualitätsstufen, Vergleichs- und Sammelproben gilt: FP = doppelter FW.",
            Patzer: "Der Held hat einen Knoten gemacht, der sich in jeder Lage löst – oder der denkbar ungünstigsten.",
            Steigerungskosten: "A"
        },

        {
            name: "Fischen & Angeln",
            Probe: "FF/GE/KO",
            Anwendungsgebiete: "Salzwassertiere, Süßwassertiere, Wasserungeheuer",
            Belastung: "ja (beim Speerfischen) oder nein (beim Reusenfang oder dem Fischen mit Netzen)",
            Werkzeuge: "Angel mit Schnur, Netz oder Reuse, Speer",
            Qualität: "Die Fische sind wohlschmeckender als bei einem durchschnittlichen Fang.",
            MisslungeneProbe: "Kein Fisch beißt an oder geht ins Netz.",
            KritischerErfolg: "Die Zahl der Rationen ist sehr hoch. Für Qualitätsstufen, Vergleichs- und Sammelproben gilt: FP = doppelter FW.",
            Patzer: "Der Angler fällt ins Wasser und die Angel geht verloren.",
            Steigerungskosten: "A"
        },

        {
            name: "Orientierung",
            Probe: "KL/IN/IN",
            Anwendungsgebiete: "Sonnenstand, Sternenhimmel, unter Tage",
            Belastung: "nein",
            Qualität: "Der Held findet schneller heraus, in welche Richtung er sich bewegt.",
            MisslungeneProbe: "Der Held weiß nicht sicher, wo es langgeht.",
            KritischerErfolg: "Der Held findet den Weg ohne Schwierigkeiten selbst unter schlechtesten Bedingungen.",
            Patzer: "Der Held hat sich komplett verlaufen und bewegt sich in die falsche Richtung, was ihm jedoch nicht bewusst ist.",
            Steigerungskosten: "B"
        },

        {
            name: "Pflanzenkunde",
            Probe: "KL/FF/KO",
            Anwendungsgebiete: "Giftpflanzen, Heilpflanzen, Nutzpflanzen",
            Belastung: "ja (beim Ackerbau und Nahrung sammeln) oder nein (bei der Bestimmung von Pflanzen)",
            Qualität: "genauere Informationen zu einer Pflanze",
            MisslungeneProbe: "Der Held hat keine Ahnung.",
            KritischerErfolg: "Der Held weiß alles über die Pflanze, auch besondere Wirkungen, und kann sie doppelt so lange haltbar machen wie üblich.",
            Patzer: "Der Held verwechselt die Pflanze mit einer anderen.",
            Steigerungskosten: "C"
        },

        {
            name: "Tierkunde",
            Probe: "MU/MU/CH",
            Anwendungsgebiete: "domestizierte Tiere, Ungeheuer, Wildtiere",
            Belastung: "ja",
            Qualität: "genauere Informationen zu einem Tier",
            MisslungeneProbe: "Der Held hat keine Ahnung.",
            KritischerErfolg: "Der Held weiß alles über das Tier.",
            Patzer: "Der Held glaubt, etwas über das Tier zu wissen, liegt aber gefährlich falsch (schätzt es ungiftig ein, obwohl es sehr giftig ist, oder als Pflanzenfresser, obwohl es Fleischfresser ist).",
            Steigerungskosten: "C"
        },

        {
            name: "Wildnisleben",
            Probe: "MU/GE/KO",
            Anwendungsgebiete: "Feuermachen, Lageraufbau, Lagersuche",
            Belastung: "ja",
            Werkzeuge: "eventuell Zelt, Wildnisausrüstung",
            Qualität: "Der Held benötigt nicht so lange, um ein Lager zu finden oder aufzubauen.",
            MisslungeneProbe: "Der Lagerplatz ist schlecht gewählt. Die Regeneration ist um 1 gesenkt.",
            KritischerErfolg: "Ein phantastischer Schlafplatz! Die Regeneration ist um 1 Punkt erhöht.",
            Patzer: "Das Lager wird überschwemmt oder von Ungeziefer heimgesucht.",
            Steigerungskosten: "C"
        },
    ],
    Wissenstalente: [

        {
            name: "Brett- & Glücksspiel",
            Probe: "KL/KL/IN",
            Anwendungsgebiete: "Würfelspiele, Brettspiele, Kartenspiele, Wettspiele",
            Belastung: "nein",
            Werkzeuge: "Spiel",
            Qualität: "Der Held hat einen guten Spielzug gemacht.",
            MisslungeneProbe: "Der Held verliert.",
            KritischerErfolg: "Der Held gewinnt auf spektakuläre Art und Weise. Wurde um Geld gespielt, verdoppelt sich sein Gewinn.",
            Patzer: "Der Held wird fälschlicherweise des Falschspiels verdächtigt oder hat eine Pechsträhne. Wird um Geld gespielt, verliert er mindestens den kompletten Einsatz (oder mehr).",
            Steigerungskosten: "A"
        },

        {
            name: "Geographie",
            Probe: "KL/KL/IN",
            Anwendungsgebiete: "einzelne Provinzen des Mittelreiches (Albernia, Almada, Garetien, Kosch, Nordmarken, Rommilyser Mark, Tobrien, Weiden, Windhag), AlʼAnfanisches Imperium, Andergast,Aranien, Bergkönigreiche der Zwerge, Bornland, Gjalskerland, Hoher Norden, Horasreich, Kalifat, Maraskan, Nostria, Orkland, Salamandersteine & umliegende Gebiete der Elfen, Schattenlande, Südmeer & Waldinseln, Svellttal, Thorwal, Tiefer Süden, Tulamidenlande, Zyklopeninseln",
            Belastung: "nein",
            Qualität: "mehr Detailinformationen zur Bevölkerung, Örtlichkeiten und Flussübergängen",
            MisslungeneProbe: "Der Held hat keine Ahnung.",
            KritischerErfolg: "Der Held kennt viele Details der Region: Herrscher, Bevölkerungszahlen, Bräuche, Flussverläufe und Brücken.",
            Patzer: "Der Held erinnert sich an völlig falsche geographische Details: Einwohnerzahlen von Städten stimmen nicht, Brücken befinden sich an anderer Stelle als gedacht.",
            Steigerungskosten: "B"
        },

        {
            name: "Geschichtswissen",
            Probe: "KL/KL/IN",
            Anwendungsgebiete: "einzelne Provinzen des Mittelreiches (Albernia, Almada, Garetien, Kosch, Nordmarken, Rommilyser Mark, Tobrien, Weiden, Windhag), AlʼAnfanisches Imperium, Andergast,Aranien, Bergkönigreiche der Zwerge, Bornland, Gjalskerland, Hoher Norden, Horasreich, Kalifat, Maraskan, Nostria, Orkland, Salamandersteine & umliegende Gebiete der Elfen, Schattenlande, Südmeer & Waldinseln, Svellttal, Thorwal, Tiefer Süden, Tulamidenlande, Zyklopeninseln",
            Belastung: "nein",
            Qualität: "mehr Details zu historischen Persönlichkeiten und Epochen",
            MisslungeneProbe: "Der Held hat keine Ahnung.",
            KritischerErfolg: "Der Held kennt besonders viele Details über ein bestimmtes Ereignis oder eine historische Person.",
            Patzer: "Der Held kann zu diesem Thema nur falsche Informationen beitragen: er irrt sich in Daten und Ereignissen.",
            Steigerungskosten: "B"
        },

        {
            name: "Götter & Kulte",
            Probe: "KL/KL/IN",
            Anwendungsgebiete: "je nach Gottheit oder Philosophie, z. B. Praios, Rondra, Swafnir, Namenloser, Rastullah,",
            Belastung: "nein",
            Qualität: "mehr Details zu Kulten, Göttern und Priestern",
            MisslungeneProbe: "Der Held hat keine Ahnung.",
            KritischerErfolg: "Der Held hat detaillierte Einsichten in das Thema und kennt selbst spezielle Rituale, Gebetstexte oder philosophische Grundlagen.",
            Patzer: "Der Held verwechselt kultische Handlungen und Ansichten dieser Kirche mit einer anderen.",
            Steigerungskosten: "B"
        },

        {
            name: "Kriegskunst",
            Probe: "MU/KL/IN",
            Anwendungsgebiete: "Belagerung, Feldschlacht, Partisanenkampf, Seegefechte, Tunnelkampf",
            Belastung: "nein",
            Qualität: "bessere Vorteile während des Gefechts",
            MisslungeneProbe: "Der Held unterliegt einer Fehleinschätzung.",
            KritischerErfolg: "Der Held hat einen vortrefflichen Plan, der ihm zusätzliche Vorteile im Kampf einbringt.",
            Patzer: "Der Held begeht einen kapitalen Planungsfehler, der den Kampf zu seinen Ungunsten beeinflusst oder ihm zumindest extreme Nachteile beschert.",
            Steigerungskosten: "B"
        },

        {
            name: "Magiekunde",
            Probe: "KL/KL/IN",
            Anwendungsgebiete: "Artefakte, Magische Wesen, Rituale, Zaubersprüche",
            Belastung: "nein",
            Qualität: "mehr Details zu Zaubern, magischen Wesen oder exotischer Magieanwendung",
            MisslungeneProbe: "Der Held hat keine Ahnung.",
            KritischerErfolg: "Der Held kennt Herkunft, wirkenden Zauber und Auslöser eines alten Artefaktes.",
            Patzer: "Der Held hat falsche Vorstellungen und irrt sich, sodass es zu einem gravierenden Fehlurteil kommt.",
            Steigerungskosten: "C"
        },

        {
            name: "Mechanik",
            Probe: "KL/KL/FF",
            Anwendungsgebiete: "Hebel, Hydraulik, komplexe Systeme",
            Belastung: "nein",
            Qualität: "schnellere Planung",
            MisslungeneProbe: "Die geplante Mechanik funktioniert nicht.",
            KritischerErfolg: "Der doppelte FW zählt als FP.",
            Patzer: "Was immer der Held konstruieren wollte: Das Objekt ist gefährlich oder die Konstruktion fällt in sich zusammen. Eine Falle wird mit größtmöglichem Erfolg ausgelöst.",
            Steigerungskosten: "B"
        },

        {
            name: "Rechnen",
            Probe: "KL/KL/IN",
            Anwendungsgebiete: "Bruchrechnung, Punktrechnung, Strichrechnung",
            Belastung: "nein",
            Qualität: "schnelleres Ergebnis",
            MisslungeneProbe: "Das Ergebnis ist falsch.",
            KritischerErfolg: "Schnelle und exakte Bestimmung der Lösung",
            Patzer: "Das Ergebnis ist komplett falsch, der Held aber von der Richtigkeit absolut überzeugt.",
            Steigerungskosten: "A"
        },

        {
            name: "Rechtskunde",
            Probe: "KL/KL/IN",
            Anwendungsgebiete: "einzelne Provinzen des Mittelreiches (Albernia, Almada, Garetien, Kosch, Nordmarken, Rommilyser Mark, Tobrien, Weiden, Windhag), AlʼAnfanisches Imperium, Andergast,Aranien, Bergkönigreiche der Zwerge, Bornland, Gjalskerland, Hoher Norden, Horasreich, Kalifat, Maraskan, Nostria, Orkland, Salamandersteine & umliegende Gebiete der Elfen, Schattenlande, Südmeer & Waldinseln, Svellttal, Thorwal, Tiefer Süden, Tulamidenlande, Zyklopeninseln",
            Belastung: "nein",
            Qualität: "mehr Optionen zur Lösung eines Falls",
            MisslungeneProbe: "Der Held hat keine Ahnung.",
            KritischerErfolg: "Der Held kennt sich mit Besonderheiten des Gesetzes aus und kann einen Plan entwickeln, es zu seinem Vorteil auszulegen.",
            Patzer: "Die Auslegung des Gesetzes ist falsch oder der Held übersieht einen wichtigen Passus.",
            Steigerungskosten: "A"
        },

        {
            name: "Sagen & Legenden",
            Probe: "KL/KL/IN",
            Anwendungsgebiete: "einzelne Provinzen des Mittelreiches (Albernia, Almada, Garetien, Kosch, Nordmarken, Rommilyser Mark, Tobrien, Weiden, Windhag), AlʼAnfanisches Imperium, Andergast,Aranien, Bergkönigreiche der Zwerge, Bornland, Gjalskerland, Hoher Norden, Horasreich, Kalifat, Maraskan, Nostria, Orkland, Salamandersteine & umliegende Gebiete der Elfen, Schattenlande, Südmeer & Waldinseln, Svellttal, Thorwal, Tiefer Süden, Tulamidenlande, Zyklopeninseln",
            Belastung: "nein",
            Qualität: "mehr Details oder verschiedene Versioneneiner Geschichte",
            MisslungeneProbe: "Der Held kennt die Legende nicht.",
            KritischerErfolg: "Der Held kann sich an viele Details der Geschichte erinnern und kennt mehrere Varianten.",
            Patzer: "Der Held verwechselt die Geschichte mit einer anderen oder meint sich an völlig andere Details zu erinnern.",
            Steigerungskosten: "B"
        },

        {
            name: "Sphärenkunde",
            Probe: "KL/KL/IN",
            Anwendungsgebiete: "Limbus, nach Sphäre, Sphärenwesen",
            Belastung: "nein",
            Qualität: "mehr Details zu Sphären oder dem Limbus",
            MisslungeneProbe: "Der Held weiß nichts über das spezielle Thema.",
            KritischerErfolg: "Der Held erinnert sich an bemerkenswerte Details über einen einzelnen Dämon oder den Weg in eine verborgene Globule.",
            Patzer: "Der Held unterliegt einer gefährlichen Fehleinschätzung.",
            Steigerungskosten: "B"
        },

        {
            name: "Sternkunde",
            Probe: "KL/KL/IN",
            Anwendungsgebiete: "Astrologie, Himmelskartographie, Kalendarium",
            Belastung: "nein",
            Qualität: "schnellere Horoskoperstellung",
            MisslungeneProbe: "Der Held hat keine Ahnung.",
            KritischerErfolg: "Der Held kann sehr genau die Bewegungen der Himmelskörper berechnen.",
            Patzer: "Eine Fehleinschätzung bei einem Horoskop, einer Mondfinsternis etc.",
            Steigerungskosten: "A"
        },
    ], 
    init: function() {
        for(var talentGruppe in talente) {
            for(var talentIndex in talente[talentGruppe]) { 
                talente[talentGruppe][talentIndex].id = talente[talentGruppe][talentIndex].name.replace(/\s/g, "").replace(/[^\w\s]/gi, "");
                talente[talentGruppe][talentIndex].Probe = talente[talentGruppe][talentIndex].Probe.split("/"); 
                talente[talentGruppe][talentIndex].Probe.__proto__.toString = function() {
                    return this.join("/");
                }; 
            }
        }
    },
    iterateAllTalente: function(func) {
        for(var talentGruppe in talente) {
            for(var talentIndex in talente[talentGruppe]) { 
                func(talente[talentGruppe][talentIndex]);
            }
        }
    },
    isIncreasable: function(talent) {
        // max is 25
        return (heldendokument.talentwerte[talent.id] < 25 
                // maximale punkte / talent abhaengig vom Erfahrungsgrad
                && heldendokument.talentwerte[talent.id] < heldendokument.maxValues.MaxTalent
                // habe ich noch genug AP um die naechste Steigerung zu bezahlen
                && heldendokument.abenteuerpunkte.value - steigerung[talent.Steigerungskosten][heldendokument.talentwerte[talent.id]+1] >= 0
                // Talent darf maximal +2 der hoechsten benoetigten Probe sein
                && (heldendokument.talentwerte[talent.id] < heldendokument.eigenschaftswerte[talent.Probe[0]]+2
                || heldendokument.talentwerte[talent.id] < heldendokument.eigenschaftswerte[talent.Probe[1]]+2
                || heldendokument.talentwerte[talent.id] < heldendokument.eigenschaftswerte[talent.Probe[2]]+2));
    },
    getTalentById: function(searchId){
        var resultTalent;
        resultTalent = talente.Gesellschaftstalente.find(function(element){return element.id == searchId;});
        if(resultTalent){return resultTalent;}
        resultTalent = talente.Handwerkstalente.find(function(element){return element.id == searchId;});
        if(resultTalent){return resultTalent;}
        resultTalent = talente.Körpertalente.find(function(element){return element.id == searchId;});
        if(resultTalent){return resultTalent;}
        resultTalent = talente.Naturtalente.find(function(element){return element.id == searchId;});
        if(resultTalent){return resultTalent;}
        resultTalent = talente.Wissenstalente.find(function(element){return element.id == searchId;});
        if(resultTalent){return resultTalent;}
    }, 
    getTalentByProbe: function(probe){
        var result = []; 
        talente.iterateAllTalente(function(talent){
            if(talent.Probe.includes(probe)){
                result.push(talent);
            }
        });
        return result; 
    }
};