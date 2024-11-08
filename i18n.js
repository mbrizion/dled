import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Translation files
// i18n configuration
const resources = {
  en: {
    translation: {
      pottery: 'Ceramics',
      crochet: 'Crochet',
      contact: 'Contact',
      welcome: 'Handmade ceramics & crochet made in Normandy',
      subtitle: '',
      siteTitle: "De laine et d'argile",
      potteryPageTitle: "Delaine & D'argile - Ceramics",
      potteryDescription: 'Bring a special touch to your home.',
      potteryDescriptionP2:
        "I'm creating wheel thrown ceramics in my home studio (aka my parents' garage). Never making the same piece twice, each piece is entirely unique and one of a kind. Each collection is created in small batches throughout different periods of my life, ebbing and flowing along with me. My intention is to create pieces that can be cherished in your home.",
      categoryTitle: '{{title}}',
      ourStory: '',
      ourStoryDescription: '',
      ourMission: '',
      ourMissionDescription: '',
      contactMe: 'Contact me',
      inquiries: 'For all inquiries feel free to reach out at :',
      checkInstagram: 'My instagram',
      dmInsta: 'Or DM me on instagram :',
      process: 'The process',
      shop: 'Shop',
      step: 'Step',
      clayDescription:
        'The first step is to weigh the necessary amount depending on which piece I want to make. Then I work the clay to avoid air bubbles that can make the piece explode during cooking.',
      tournageDescription:
        'The two major sub-stages are to center the clay, then to shape and actually make the desired shape of our piece. I make all the pieces by hand, trying to bring a touch and an incomparable soul to each piece.',
      tournassageDescription:
        "Trimming removes excess clay from the base to create a foot for the piece. You can also round off the base and take over the edges. It's also at this stage that we can add handles for mugs, or make decorations. We work the piece on the lathe, once it has a good consistency, almost leather-like.",
      firstCuissonDescription:
        'After the piece has completely dried, it\'s sent to the kiln for a first firing, in order to be "bisque fired". Our electric kiln runs firing programs up to 1050°C in 16 hours to ensure the correct firing of the pieces.',
      emaillageDescription:
        "The glaze is a mixture of different elements, mainly silica and metal oxides for colors, to which water will be added. This preparation is applied on our piece which being very porous will suck water and leave our glaze on the surface. Glaze has an aesthetic function but also utilitarian: it decorates a piece, but also makes the object suitable for food consumption. Glazing is therefore a finishing step that makes a ceramic object non-porous, smooth and hygienic. It’s also the part I like least, because there's the chance factor, and a probability of making a piece unusable",
      secondCuissonDescription:
        "To reveal the piece's glaze, we will put our object in the kiln to fire it a second time. This second firing will melt our glaze to reveal the color and thus get our piece finished. After this second firing comes the long-awaited time of opening the kiln. Every time it's a bit of a rollercoaster of emotions because we finally discover the result of our work, and surprises are always there, sometimes good, sometimes bad, but we definitely always learn.",
      clayTitle: 'Clay',
      tournageTitle: 'Throwing',
      tournassageTitle: 'Trimming',
      firstCuissonTitle: '1st Cuisson',
      emaillageTitle: 'Glazing',
      secondCuissonTitle: '2nd Cuisson',
      aboutMe: 'About me',
    },
  },
  fr: {
    translation: {
      pottery: 'Poterie',
      crochet: 'Crochet',
      contact: 'Contact',
      welcome: 'Céramique artisanale & crochet made in Normandie',
      subtitle:
        'Découvrez notre passion pour l’artisanat à travers des créations uniques faites main. Que vous soyez amateur de poterie ou adepte du crochet, nous vous invitons à explorer nos collections de pièces artistiques et utilitaires, conçues avec soin et amour du détail.',
      siteTitle: "De laine et d'argile",
      potteryPageTitle: "Delaine & D'argile - Poterie",
      potteryDescription: 'Apportez une touche spéciale à votre intérieur.',
      potteryDescriptionP2:
        'Je crée des céramiques tournées à la main dans mon atelier à domicile. Ne créant jamais deux fois la même pièce, chaque création est entièrement unique. Chaque collection est produite en petites séries à différentes périodes de ma vie, évoluant au rythme de mon parcours. Mon intention est de créer des pièces qui pourront être chéries dans votre foyer.',
      categoryTitle: '{{title}}',
      ourStory: 'Notre histoire',
      ourStoryDescription:
        'Nous sommes une petite équipe d’artisans passionnés qui partagent une même vision : valoriser les techniques artisanales anciennes en les modernisant à travers des designs contemporains. Depuis plusieurs années, nous créons des objets de poterie et des pièces en crochet qui racontent une histoire, celle d’un savoir-faire minutieux et d’une créativité sans limite.',
      ourMission: 'Notre mission',
      ourMissionDescription:
        "Faire entrer l’art dans votre quotidien. Nous croyons en l’importance des objets faits main, en leur capacité à embellir la vie et à raconter des histoires. Chaque pièce est unique, façonnée avec attention pour apporter une touche d'authenticité à votre intérieur.",
      contactMe: 'Contactez-moi',
      inquiries:
        "Pour toute question ou projet, n'hésitez pas à me contacter par mail :",
      checkInstagram: 'Découvrez notre Instagram',
      dmInsta: 'ou sur instagram :',
      process: 'Le processus',
      shop: 'Boutique',
      step: 'Etape',
      clayDescription:
        "Je prépare la terre, après avoir pesé la quantité nécessaire. Ensuite, je travaille l'argile afin d'éviter les bulles d'air qui peuvent faire exploser la pièce lors de la cuisson.",
      tournageDescription:
        "Les deux grandes sous étapes sont de centrer la terre, puis de mettre en forme et réaliser la forme désirée de notre pièce. Je réalise toutes les pièces à la main, essayant ainsi d'apporter un toucher et une âme incomparable à chaque pièce",
      tournassageDescription:
        "Le tournassage permet d'enlever l'excès d'argile à la base pour créer le pied de la pièce. On peut aussi arrondir la base et reprendre les bords. C'est également à cette étape que l'on peut ajouter des anses pour les mugs, ou faire des décorations. On travaille la pièce sur le tour, une fois qu'il est a bonne consistance.",
      firstCuissonDescription:
        "Après séchage complet de la pièce, elle est envoyée dans le four pour une première cuisson, afin d'être \"biscuitée\". Notre four électrique exécute des programmes de cuisson allant jusqu'à 1050°C en 16 heures afin d'assurer la bonne cuisson des pièces.",
      emaillageDescription:
        "L'émail c'est un mélange de différents éléments, principalement de la silice et des oxydes de métaux pour les couleurs, auquel on va rajouter de l'eau. Cette préparation va être appliquée sur notre pièce qui étant très poreuse va aspirer l'eau et laisser notre émail en surface. L'émail a une fonction esthétique mais aussi utilitaire : il décore une pièce, mais permet aussi de rendre l'objet propre à la consommation alimentaire. La pose d’émaux est donc une étape de finition qui rend un objet en céramique non poreux, lisse et hygiénique. C'est également la partie que j'aime le moins, parce qu'il y a une part de hasard, et une probabilité de rendre une pièce inutilisable",
      secondCuissonDescription:
        "Pour révéler la couleur de notre pièce, on va remettre notre objet dans le four pour le faire cuire une seconde fois. Cette seconde cuisson va faire fondre notre émail pour en révéler la couleur et ainsi obtenir notre pièce terminée. Après cette seconde cuisson arrive le moment tant attendu de l'ouverture du four. Chaque ouverture de four d'émail est un peu un rollercoaster d'émotions car on va enfin découvrir le résultat de notre travail, et les surprises sont toujours au rendez-vous, parfois bonnes, parfois moins, mais on apprend toujours",
      clayTitle: 'Argile',
      tournageTitle: 'Tournage',
      tournassageTitle: 'Tournassage',
      firstCuissonTitle: '1e Cuisson',
      emaillageTitle: 'Emaillage',
      secondCuissonTitle: '2ème Cuisson',
      aboutMe: 'A propos de moi',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
