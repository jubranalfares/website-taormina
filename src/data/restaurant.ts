// src/data/restaurant.ts

import type { RestaurantData } from "@/types/restaurant";

export const restaurantData: RestaurantData = {
    name: "Eiscafé Taormina",
    tagline: "Hausgemachtes Eis, italienischer Genuss & Sommermomente in Mettlach",

    contact: {

        phone: "+49 6864 890985",
        address: "Freiherr-vom-Stein-Straße 32, 66693 Mettlach",
        mapsLink: "https://maps.google.com",
        mapsEmbedUrl:
            "https://www.google.com/maps?q=Eiscaf%C3%A9%20Taormina%20Mettlach&output=embed",
    },

    openingHours: [
        { day: "Montag", hours: "09:00 - 20:00" },
        { day: "Dienstag", hours: "09:00 - 20:00" },
        { day: "Mittwoch", hours: "09:00 - 20:00" },
        { day: "Donnerstag", hours: "09:00 - 20:00" },
        { day: "Freitag", hours: "09:00 - 20:00" },
        { day: "Samstag", hours: "09:00 - 20:00" },
        { day: "Sonntag", hours: "09:00 - 20:00" },
    ],

    gallery: [
        { src: "/images/gallery-1.jpg", alt: "Hausgemachtes Eis im Eiscafé Taormina" },
        { src: "/images/gallery-2.jpg", alt: "Fruchtiger Eisbecher mit frischen Früchten" },
        { src: "/images/gallery-3.jpg", alt: "Eiskaffee und Eisschokolade Spezialitäten" },
        { src: "/images/gallery-4.jpg", alt: "Sommerliche Aperitifs und Eisgetränke" },
    ],

    menu: {
        categories: [
            
            {
                name: "Kinder Eis",
                items: [
                    {
                        name: "Kinder Spaghetti",
                        description: "Kindgerechtes Spaghetti-Eis mit bunter Dekoration.",
                        price: "6,50€",
                        image: "/images/kinder-spagetti.png",
                    },
                    {
                        name: "Schwein",
                        description: "Verspielter Eisbecher für kleine Gäste.",
                        price: "6,50€",
                        image: "/images/schwein.png",
                    },
                    {
                        name: "Snoopy",
                        description: "Liebevoll dekorierter Kinder-Eisbecher.",
                        price: "6,50€",
                        image: "/images/snoopy.png",
                    },
                    {
                        name: "Biene Maja",
                        description: "Bunter Kinderbecher mit Eis und süßen Details.",
                        price: "6,50€",
                        image: "/images/bine-maja.png",
                    },
                    {
                        name: "Pinocchio",
                        description: "Kindereis mit kreativer Dekoration.",
                        price: "6,50€",
                        image: "/images/pinoccio.png",
                    },
                    {
                        name: "Kinder Überraschung",
                        description: "Eisbecher mit Überraschungs-Feeling für Kinder.",
                        price: "6,50€",
                        image: "/images/kinder-ueberraschung.png",
                    },
                ],
            },
            {
                name: "Fruchtbecher",
                items: [
                    {
                        name: "Kiwi Becher",
                        description: "Speiseeis, Sahne, Kiwischeiben und Kiwisoße.",
                        price: "9,00€",
                        image: "/images/kiwi-becher.png",
                    },
                    {
                        name: "Heidelbeer Becher",
                        description: "Speiseeis, Sahne und Heidelbeeren.",
                        price: "9,00€",
                        image: "/images/heidelbeer-becher.png",
                    },
                    {
                        name: "Smeralda",
                        description: "Ananas, reichlich gefüllt.",
                        price: "10,00€",
                        image: "/images/smeralda.jpg",
                    },
                    {
                        name: "Melonen Becher",
                        description: "Speiseeis, Sahne, Melonenstücke und Melonensoße.",
                        price: "9,00€",
                        image: "/images/melonen-becher.png",
                    },
                    {
                        name: "Frucht Becher",
                        description: "Speiseeis, Sahne, frische Früchte und Erdbeersoße.",
                        price: "9,50€",
                        image: "/images/frucht-becher.png",
                    },
                    {
                        name: "Hawaii Becher",
                        description: "Speiseeis, Sahne, Ananasstückchen und Sirup.",
                        price: "9,00€",
                        image: "/images/hawaii-becher.jpg",
                    },
                    {
                        name: "Coppa Italia",
                        description: "Speiseeis, Sahne, Erdbeeren, Bananen, Kiwi und Sirup.",
                        price: "9,00€",
                        image: "/images/coppa-italia.png",
                    },
                    {
                        name: "Sportler Becher",
                        description: "Speiseeis, frische Früchte, Likör und Sirup.",
                        price: "9,50€",
                        image: "/images/sportler-becher.jpg",
                    },
                    {
                        name: "Pizza Teller",
                        description: "Frische Früchte dekorativ angerichtet.",
                        price: "9,00€",
                        image: "/images/pizza-teller.jpg",
                    },
                    {
                        name: "Taormina Becher",
                        description: "Lassen Sie sich überraschen!",
                        price: "11,00€",
                        image: "/images/taormina-becher.jpg",
                    },
                    {
                        name: "Obstsalat",
                        description: "Frischer Obstsalat ohne Eis.",
                        price: "9,00€",
                        image: "/images/obstsalat.jpg",
                    },
                    {
                        name: "Banana Cup",
                        description: "Speiseeis, Sahne, Bananenscheiben und Schokosoße.",
                        price: "9,00€",
                        image: "/images/banana-cup.jpg",
                    },
                    {
                        name: "Bananen Split",
                        description: "Banane, Sahne, Speiseeis und Amarenakirschen.",
                        price: "8,50€",
                        image: "/images/bananen-split.jpg",
                    },
                ],
            },
            {
                name: "Joghurt Becher",
                items: [
                    {
                        name: "Joghurt Frucht",
                        description: "Joghurteis, Naturjoghurt, frische Früchte und Erdbeersoße.",
                        price: "9,50€",
                        image: "/images/joghurt-frucht.png",
                    },
                    {
                        name: "Joghurt Müsli",
                        description: "Joghurteis, Naturjoghurt, verschiedene Nüsse, Müsli und Honig.",
                        price: "9,50€",
                        image: "/images/joghurt-muesli.png",
                    },
                    {
                        name: "Joghurt Himbeer",
                        description: "Joghurteis, Naturjoghurt, Himbeeren und Himbeersoße.",
                        price: "9,50€",
                        image: "/images/joghurt-himbeer.png",
                    },
                    {
                        name: "Joghurt Tropical",
                        description: "Joghurteis, Naturjoghurt, tropische Früchte und Kiwisoße.",
                        price: "9,50€",
                        image: "/images/joghurt-tropical.png",
                    },
                    {
                        name: "Joghurt Bonito",
                        description: "Joghurteis, Naturjoghurt, Bananen und Schokosoße.",
                        price: "9,50€",
                        image: "/images/joghurt-bonito.png",
                    },
                    {
                        name: "Joghurt Amarena",
                        description: "Joghurteis, Naturjoghurt, Amarenasoße und Amarenakirschen.",
                        price: "9,50€",
                        image: "/images/joghurt-amarena.png",
                    },
                    {
                        name: "Joghurt Erdbeer",
                        description: "Joghurteis, Naturjoghurt, Erdbeeren und Erdbeersoße.",
                        price: "9,50€",
                        image: "/images/joghurt-erdbeer.png",
                    },
                    {
                        name: "Joghurt Kiwi",
                        description: "Joghurteis, Naturjoghurt, Kiwischeiben und Kiwisoße.",
                        price: "9,50€",
                        image: "/images/joghurt-kiwi.png",
                    },
                ],
            },
            {
                name: "Klassiker Becher",
                items: [
                    {
                        name: "Krokant Becher",
                        description: "Speiseeis, Sahne, Eierlikör und Krokant.",
                        price: "9,50€",
                        image: "/images/krokant-becher.png",
                    },
                    {
                        name: "Schoko Becher",
                        description: "Speiseeis, Sahne, Schokosoße und Schokoraspeln.",
                        price: "9,00€",
                        image: "/images/schoko-becher.png",
                    },
                    {
                        name: "Eierlikör Becher",
                        description: "Speiseeis, Sahne, Eierlikör und Streusel.",
                        price: "9,50€",
                        image: "/images/eierlikoer-becher.png",
                    },
                    {
                        name: "Amaretto Becher",
                        description: "Speiseeis, Sahne, Makronen und Amarettolikör.",
                        price: "9,50€",
                        image: "/images/amaretto-becher.png",
                    },
                    {
                        name: "Amarena Becher",
                        description: "Speiseeis, Sahne, Amarenakirschen und Amarenasoße.",
                        price: "9,00€",
                        image: "/images/amarena-becher.png",
                    },
                    {
                        name: "Schwarzwald Becher",
                        description: "Speiseeis, Sahne, Schattenmorellen, Kirschlikör und Streusel.",
                        price: "9,50€",
                        image: "/images/schwarzwald-becher.png",
                    },
                    {
                        name: "Tiramisù Becher",
                        description: "Speiseeis, Sahne, Löffelbiskuit, Kaffeelikör und Kakaopulver.",
                        price: "9,50€",
                        image: "/images/tiramisu-becher.png",
                    },
                    {
                        name: "Malaga Becher",
                        description: "Speiseeis, Sahne, Malagawein und Rosinen.",
                        price: "9,50€",
                        image: "/images/malaga-becher.png",
                    },
                    {
                        name: "Mokka Becher",
                        description: "Speiseeis, Sahne, Mokkasoße und Kaffeebohnen.",
                        price: "9,00€",
                        image: "/images/mokka-becher.png",
                    },
                    {
                        name: "Walnuss Becher",
                        description: "Speiseeis, Sahne, Walnüsse und Walnusslikör.",
                        price: "9,50€",
                        image: "/images/walnuss-becher.png",
                    },
                    {
                        name: "Nuss Becher",
                        description: "Speiseeis, Sahne, Haselnüsse und Nusslikör.",
                        price: "9,50€",
                        image: "/images/nuss-becher.png",
                    },
                    {
                        name: "Coppa Tramonto",
                        description: "Speiseeis, Sahne, Minzsoße und After Eight.",
                        price: "9,00€",
                        image: "/images/coppa-tramonto.png",
                    },
                    {
                        name: "Pfirsich Melba",
                        description: "Speiseeis, Sahne, Pfirsich und Amarenakirsche.",
                        price: "9,00€",
                        image: "/images/pfirsisch-melba.png",
                    },
                    {
                        name: "Zitronen Becher",
                        description: "Zitroneneis mit Bitter Lemon und Sahne.",
                        price: "9,00€",
                        image: "/images/zitronen-becher.png",
                    },
                    {
                        name: "Orangen Becher",
                        description: "Speiseeis, Orangenscheiben, Orangensaft und Walnüsse.",
                        price: "9,00€",
                        image: "/images/orangen-becher.png",
                    },
                    {
                        name: "Tartufo Becher",
                        description: "Gefüllte Kugel Eis mit Sahne und Amarenasoße.",
                        price: "8,50€",
                        image: "/images/tartufo.png",
                    },
                    {
                        name: "Karamel Becher",
                        description: "Speiseeis, Sahne und Karamellsoße.",
                        price: "9,00€",
                        image: "/images/karamel-becher.png",
                    },
                ],
            },
            {
                name: "Erdbeer Spezialitäten",
                items: [
                    {
                        name: "Erdbeer Becher",
                        description: "Speiseeis, Sahne, frische Erdbeeren und Erdbeersoße.",
                        price: "9,00€",
                        image: "/images/erdbeer-becher.png",
                    },
                    {
                        name: "Erdbeer Tris",
                        description: "Speiseeis, Sahne, frische Erdbeeren, Streusel und verschiedene Soßen.",
                        price: "9,50€",
                        image: "/images/erdbeer-tris.jpg",
                    },
                    {
                        name: "Erdbeer Vanille",
                        description: "Speiseeis, Sahne, frische Erdbeeren und Vanillesoße.",
                        price: "9,00€",
                        image: "/images/erdbeer-vanille.jpg",
                    },
                    {
                        name: "Erdbeer Prosecco",
                        description: "Zitroneneis, frische Erdbeeren und Prosecco.",
                        price: "8,50€",
                        image: "/images/erdbeer-prosecco.png",
                    },
                    {
                        name: "Erdbeer Orangensaft",
                        description: "Speiseeis, Sahne, frische Erdbeeren und Orangensaft.",
                        price: "9,00€",
                        image: "/images/erdbeer-orangensaft.png",
                    },
                    {
                        name: "Erdbeer Baileys",
                        description: "Speiseeis, Sahne, frische Erdbeeren, Baileys und Schokosoße.",
                        price: "9,50€",
                        image: "/images/erdbeer-baileys.png",
                    },
                    {
                        name: "Erdbeer Schoko",
                        description: "Speiseeis, Sahne, frische Erdbeeren und Schokosoße.",
                        price: "9,00€",
                        image: "/images/erdbeer-schoko.png",
                    },
                    {
                        name: "Erdbeer Eierlikör",
                        description: "Speiseeis, Sahne, frische Erdbeeren und Eierlikör.",
                        price: "9,50€",
                        image: "/images/erdbeer-eierlikoer.png",
                    },
                ],
            },
            {
                name: "Spaghetti Eis",
                items: [
                    {
                        name: "Spaghetti Eis",
                        description: "Vanilleeis, Sahne, Erdbeersoße und weiße Schokoraspeln.",
                        price: "8,00€",
                        image: "/images/spagetti-eis.png",
                    },
                    {
                        name: "Spaghetti Bonito",
                        description: "Vanilleeis, Sahne, Bananenscheiben, Schokosoße und weiße Schokoraspeln.",
                        price: "9,00€",
                        image: "/images/spagetti-bonito.png",
                    },
                    {
                        name: "Spaghetti Erdbeer",
                        description: "Vanilleeis, Sahne, frische Erdbeeren und Erdbeersoße.",
                        price: "9,00€",
                        image: "/images/spagetti-erdbeer.png",
                    },
                    {
                        name: "Spaghetti Neri",
                        description: "Schokoeis, Sahne, Schokosoße und Schokoraspeln.",
                        price: "9,00€",
                        image: "/images/spagetti-neri.png",
                    },
                    {
                        name: "Spaghetti Carbonara",
                        description: "Vanilleeis, Sahne, verschiedene Nüsse und Eierlikör.",
                        price: "10,00€",
                        image: "/images/spagetti-carbonara.png",
                    },
                    {
                        name: "Spaghetti Joghurt",
                        description: "Joghurteis, Sahne, Erdbeersoße, Naturjoghurt und weiße Schokoraspeln.",
                        price: "9,00€",
                        image: "/images/spagetti-joghurt.png",
                    },
                    {
                        name: "Spaghetti Italia",
                        description: "Vanilleeis, Sahne, Erdbeer- und Kiwisoße sowie weiße Schokoraspeln.",
                        price: "8,00€",
                        image: "/images/spagetti-italia.png",
                    },
                    {
                        name: "Spaghetti Germania",
                        description: "Vanilleeis, Sahne, Erdbeer- und Schokosoße sowie Schokoraspeln.",
                        price: "8,00€",
                        image: "/images/spagetti-germania.png",
                    },
                    {
                        name: "Spaghetti Tris",
                        description: "Schoko-, Vanille- und Erdbeereis mit Sahne, Erdbeer- und Schokosoße sowie Schokoraspeln.",
                        price: "10,00€",
                        image: "/images/spagetti-tris.png",
                    },
                ],
            },
            {
                name: "Eiskaffee & Schokolade",
                items: [
                    {
                        name: "Eiskaffee",
                        description: "Klassischer Eiskaffee mit Eis und Sahne.",
                        price: "7,00€",
                        image: "/images/eiskaffee.png",
                    },
                    {
                        name: "Eiskaffee groß",
                        description: "Großer Eiskaffee mit Eis und Sahne.",
                        price: "8,50€",
                        image: "/images/eiskaffee.png",
                    },
                    {
                        name: "Eiskaffee Karamel",
                        description: "Eiskaffee Spezial mit Karamellsoße.",
                        price: "8,00€",
                        image: "/images/eiskaffee-karamel.png",
                    },
                    {
                        name: "Eiskaffee Schoko",
                        description: "Eiskaffee Spezial mit Schokosoße.",
                        price: "8,00€",
                        image: "/images/eiskaffee-schoko.png",
                    },
                    {
                        name: "Eiskaffee Cognac",
                        description: "Eiskaffee Spezial mit Cognac.",
                        price: "8,00€",
                        image: "/images/eiskaffee-cognac.png",
                    },
                    {
                        name: "Eiskaffee Amaretto",
                        description: "Eiskaffee Spezial mit Amarettolikör.",
                        price: "8,00€",
                        image: "/images/eiskaffee-amaretto.jpg",
                    },
                    {
                        name: "Eiskaffee Vanille",
                        description: "Eiskaffee Spezial mit Vanillesoße.",
                        price: "8,00€",
                        image: "/images/eiskaffee-vanille.jpg",
                    },
                    {
                        name: "Eiskaffee Nuss",
                        description: "Eiskaffee Spezial mit Karamellsoße.",
                        price: "8,00€",
                        image: "/images/eiskaffee-nuss.jpg",
                    },
                    {
                        name: "Eisschokolade",
                        description: "Klassische Eisschokolade mit Eis und Sahne.",
                        price: "7,00€",
                        image: "/images/eisschokolade.jpg",
                    },
                    {
                        name: "Eisschokolade groß",
                        description: "Große Eisschokolade mit Eis und Sahne.",
                        price: "8,50€",
                        image: "/images/eisschokolade-gross.jpg",
                    },
                    {
                        name: "Eisschokolade Rum",
                        description: "Eisschokolade Spezial mit Rum.",
                        price: "8,00€",
                        image: "/images/eisschokolade-rum.jpg",
                    },
                    {
                        name: "Eisschokolade Eierlikör",
                        description: "Eisschokolade Spezial mit Eierlikör.",
                        price: "8,00€",
                        image: "/images/eisschokolade-eierlikoer.jpg",
                    },
                    {
                        name: "Eisschokolade Praline",
                        description: "Eisschokolade Spezial mit verschiedenen Pralinen.",
                        price: "8,00€",
                        image: "/images/eisschokolade-praline.jpg",
                    },
                ],
            },
            {
                name: "Eissorten",
                items: [
                    {
                        name: "Vanille",
                        description: "Klassisches Speiseeis, cremig und fein.",
                        price: "2,00€",
                    },
                    {
                        name: "Schoko",
                        description: "Cremiges Schokoladeneis mit vollmundigem Geschmack.",
                        price: "2,00€",
                    },
                    {
                        name: "Nuss",
                        description: "Aromatisches Nusseis mit feiner Note.",
                        price: "2,00€",
                    },
                    {
                        name: "Pistazie",
                        description: "Feines Pistazieneis, aromatisch und cremig.",
                        price: "2,00€",
                    },
                    {
                        name: "Erdbeer",
                        description: "Fruchtiges Erdbeereis aus der Fruchtspeiseeis-Auswahl.",
                        price: "2,00€",
                    },
                    {
                        name: "Zitrone",
                        description: "Erfrischendes Zitroneneis für heiße Tage.",
                        price: "2,00€",
                    },
                    {
                        name: "Himbeer",
                        description: "Fruchtig, frisch und sommerlich.",
                        price: "2,00€",
                    },
                    {
                        name: "Tiramisù",
                        description: "Dessertklassiker als cremige Eissorte.",
                        price: "2,00€",
                    },
                ],
            },
            {
                name: "Eisportionen",
                items: [
                    {
                        name: "Kleine Portion",
                        description: "3 Kugeln Eis nach Wahl.",
                        price: "5,50€",
                    },
                    {
                        name: "Mittlere Portion",
                        description: "4 Kugeln Eis nach Wahl.",
                        price: "6,50€",
                    },
                    {
                        name: "Große Portion",
                        description: "5 Kugeln Eis nach Wahl.",
                        price: "7,50€",
                    },
                    {
                        name: "Extra Sahne",
                        description: "Cremige Sahne als Extra.",
                        price: "2,00€",
                    },
                    {
                        name: "Extra Soße",
                        description: "Feine Soße nach Wahl.",
                        price: "1,50€",
                    },
                    {
                        name: "Extra frische Früchte",
                        description: "Fruchtiges Extra für deinen Eisbecher.",
                        price: "2,50€",
                    },
                ],
            },
            {
                name: "Eis Getränke",
                items: [
                    {
                        name: "Al Capone",
                        description: "Bitter Lemon, Gin, Minze und Zitroneneis.",
                        price: "7,50€",
                        image: "/images/al-capone.jpg",
                    },
                    {
                        name: "Sekt Becher",
                        description: "Zitroneneis und Sekt.",
                        price: "7,00€",
                        image: "/images/sekt-becher.jpg",
                    },
                    {
                        name: "Bellini",
                        description: "Pfirsichsaft, Sekt und Zitroneneis.",
                        price: "7,00€",
                        image: "/images/bellini.jpg",
                    },
                    {
                        name: "Rossini",
                        description: "Erdbeersaft, Sekt und Zitroneneis.",
                        price: "7,00€",
                        image: "/images/rossini.jpg",
                    },
                    {
                        name: "Don Giovanni",
                        description: "Orangensaft, Sekt, Campari und Zitroneneis.",
                        price: "7,50€",
                        image: "/images/don-giovanni.jpg",
                    },
                    {
                        name: "Milch Mix Klein",
                        description: "Milchmix, 0,3 l.",
                        price: "5,50€",
                        image: "/images/milch-mix-klein.jpg",
                    },
                    {
                        name: "Milch Mix Groß",
                        description: "Milchmix, 0,5 l.",
                        price: "6,50€",
                        image: "/images/milch-mix-gross.jpg",
                    },
                ],
            },
            {
                name: "Aperitifs",
                items: [
                    {
                        name: "Sgroppino",
                        description: "Zitroneneis, Sekt und Wodka.",
                        price: "6,50€",
                        image: "/images/sgroppino.jpg",
                    },
                    {
                        name: "Spritz Aperol",
                        description: "Sommerlicher Aperitif mit Aperol und spritziger Note.",
                        price: "6,50€",
                        image: "/images/spritz-aperol.jpg",
                    },
                    {
                        name: "Testarossa",
                        description: "Prosecco und frische Erdbeeren.",
                        price: "6,50€",
                        image: "/images/testarossa.jpg",
                    },
                    {
                        name: "Hugo",
                        description: "Erfrischender Aperitif mit Limette und Minze.",
                        price: "6,50€",
                        image: "/images/hugo.jpg",
                    },
                ],
            },
            {
                name: "Warme Getränke",
                items: [
                    { name: "Milchkaffee", description: "Warmer Kaffee-Klassiker.", price: "3,80€" },
                    { name: "Kaffee", description: "Frisch gebrühter Kaffee.", price: "2,50€" },
                    { name: "Espresso", description: "Kräftiger italienischer Espresso.", price: "2,50€" },
                    { name: "Doppio Espresso", description: "Doppelter Espresso.", price: "5,00€" },
                    { name: "Latte Macchiato", description: "Milchkaffee mit feiner Schichtung.", price: "3,50€" },
                    { name: "Cappuccino", description: "Klassischer Cappuccino mit Milchschaum.", price: "3,00€" },
                    { name: "Kakao", description: "Warmer Kakao.", price: "2,50€" },
                    { name: "Kakao mit Sahne", description: "Warmer Kakao mit Sahne.", price: "3,20€" },
                    { name: "Heiße Zitrone", description: "Warme Zitrone, angenehm frisch.", price: "2,60€" },
                    { name: "Tee", description: "Tee nach Auswahl.", price: "2,50€" },
                    { name: "Irish Coffee", description: "Kaffee-Spezialität mit Alkohol.", price: "5,50€" },
                    { name: "Latte Macchiato Vanille", description: "Spezial Latte Macchiato mit Vanillesoße.", price: "5,00€" },
                    { name: "Latte Macchiato Karamell", description: "Spezial Latte Macchiato mit Karamellsoße.", price: "5,00€" },
                    { name: "Latte Macchiato Schoko", description: "Spezial Latte Macchiato mit Schokosoße.", price: "5,00€" },
                    { name: "Latte Macchiato Baileys", description: "Spezial Latte Macchiato mit Baileys.", price: "6,00€" },
                ],
            },
            {
                name: "Kalte Getränke",
                items: [
                    { name: "Eis-Tee", description: "Erfrischender Eistee, 0,3 l.", price: "3,00€" },
                    { name: "Coca Cola", description: "Erfrischungsgetränk, 0,2 l.", price: "2,50€" },
                    { name: "Cola Zero", description: "Zuckerfreie Cola, 0,2 l.", price: "2,50€" },
                    { name: "Fanta", description: "Orangenlimonade, 0,2 l.", price: "2,50€" },
                    { name: "Mezzo Mix", description: "Cola-Orangen-Mix, 0,2 l.", price: "2,50€" },
                    { name: "Apfelschorle", description: "Apfelschorle, 0,2 l.", price: "2,50€" },
                    { name: "Mineralwasser", description: "Mineralwasser, 0,2 l.", price: "2,50€" },
                    { name: "Still Wasser", description: "Stilles Wasser, 0,2 l.", price: "2,50€" },
                    { name: "Sprite", description: "Zitronenlimonade, 0,2 l.", price: "2,50€" },
                    { name: "Apfelsaft", description: "Apfelsaft, 0,2 l.", price: "2,50€" },
                    { name: "Orangensaft", description: "Orangensaft, 0,2 l.", price: "2,50€" },
                ],
            },
            {
                name: "Alkoholische Getränke",
                items: [
                    { name: "Pils Groß", description: "Pils, 0,5 l.", price: "4,00€" },
                    { name: "Pils", description: "Pils, 0,33 l.", price: "3,00€" },
                    { name: "Weizenbier", description: "Weizenbier, 0,5 l.", price: "4,00€" },
                    { name: "Radler", description: "Radler, 0,33 l.", price: "3,00€" },
                    { name: "Weißwein", description: "Weißwein, 0,2 l.", price: "4,00€" },
                    { name: "Roséwein", description: "Roséwein, 0,2 l.", price: "4,00€" },
                    { name: "Sekt", description: "Sekt, 0,1 l.", price: "4,00€" },
                    { name: "Prosecco", description: "Prosecco, 0,1 l.", price: "4,00€" },
                    { name: "Alkoholfrei Bier", description: "Alkoholfreies Bier, 0,33 l.", price: "3,00€" },
                ],
            },
            {
                name: "Kleine Snacks",
                items: [
                    {
                        name: "Toast",
                        description: "Toast mit Schinken und Käse.",
                        price: "3,50€",
                        image: "/images/toast.jpg",
                    },
                    {
                        name: "Pfannkuchen",
                        description: "Pfannkuchen, optional mit extra Beilage.",
                        price: "3,50€",
                        image: "/images/pfannkuchen.jpg",
                    },
                    {
                        name: "Apfelstrudel",
                        description: "Apfelstrudel, optional mit Kaffee, Sahne oder Eis.",
                        price: "4,00€",
                        image: "/images/apfelstrudel.jpg",
                    },
                ],
            },
            {
                name: "Heiße Spezialitäten",
                items: [
                    {
                        name: "Eis mit heißen Himbeeren",
                        description: "Eis serviert mit heißen Himbeeren oder Kirschen.",
                        price: "8,50€",
                        image: "/images/heisse-himbeeren.jpg",
                    },
                    {
                        name: "Donna Bianca",
                        description: "Vanilleeis mit heißer Schokolade.",
                        price: "8,50€",
                        image: "/images/donna-bianca.jpg",
                    },
                ],
            },
        ],
    },
};