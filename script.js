const questions = [
  {
    question: "Layer of the epidermis:",
    options: ["vascular", "mesh", "spinous", "papillary"],
    answer: 2
  },
  {
    question: "Increasing the rows of cells in the granular layer is:",
    options: ["acanthosis", "spongiosis", "parakeratosis", "granulosis"],
    answer: 3
  },
  {
    question: "Skin appendages are:",
    options: ["mucous membranes", "derma", "epidermis", "hair"],
    answer: 3
  },
  {
    question: "The sebum-secreting holocrine gland is:",
    options: ["Cooper's gland", "sebaceous gland", "sweat gland", "Bartholin's gland"],
    answer: 1
  },
  {
    question: "Where are the sebaceous glands in the skin:",
    options: ["neck", "the scalp", "axillary", "palms"],
    answer: 1
  },
  {
    question: "An increase in the rows of cells of the spinous layer is:",
    options: ["acanthosis", "spongiosis", "parakeratosis", "granulosis"],
    answer: 0
  },
  {
    question: "Secondary morphological element:",
    options: ["flake", "blister", "bubble", "erythema"],
    answer: 0
  },
  {
    question: "The infiltrative morphological element is:",
    options: ["papule", "flake", "vesicle", "blister"],
    answer: 0
  },
  {
    question: "The exudative morphological element is:",
    options: ["papule", "tubercle", "vesicle", "crack"],
    answer: 2
  },
  {
    question: "Primary morphological element:",
    options: ["flake", "scar", "erosion", "erythema"],
    answer: 3
  },
  {
    question: "Choose one location that is most typical for psoriasis:",
    options: [
      "on the palms and soles",
      "on bending surfaces of limbs",
      "on the extensor surfaces of limbs",
      "on genitals"
    ],
    answer: 2
  },
  {
    question: "Papules are polygonal, the size from a pinhead to a penny and more, blue-red or purple incolor with a smooth shiny surface and an umbilical depression in the center, severe itching is troubling. Positive Wickham symptoms and isomorphic reaction. What disease do the following symptoms indicate:?",
    options: [
      "lichen planus",
      "secondary syphilis",
      "atopic dermatitis",
      "psoriasis"
    ],
    answer: 0
  },
  {
    question: "Lichen planus can be treated with:",
    options: [
      "azithromycin",
      "aciclovir",
      "hydroxychloroquine",
      "cytostatics"
    ],
    answer: 2
  },
  {
    question: "What do typical case of psoriasis and lichen planus have in common?",
    options: [
      "intolerable itching",
      "lesions of mucous membranes",
      "localization on anterior surface of limbs",
      "isomorphic reaction"
    ],
    answer: 3
  },
  {
    question: "The most typical localization of the rash in lichen planus:",
    options: [
      "scalp",
      "palms and soles",
      "anterior surface of extremities",
      "posterior surface of extremities"
    ],
    answer: 2
  },
  {
    question: "Psoriasis is characterized by:",
    options: [
      "superimposed silvery-white scales",
      "monomorphism",
      "peripheral growth and merging",
      "all of the above are true"
    ],
    answer: 3
  },
  {
    question: "Typical signs of papules in lichen planus:",
    options: [
      "polygonal outline",
      "waxy sheen",
      "umbilical depression",
      "all of the above are true"
    ],
    answer: 3
  },
  {
    question: "Primary morphological element for psoriasis:",
    options: [
      "papule",
      "spot",
      "blister",
      "microvesicle"
    ],
    answer: 0
  },
  {
    question: "In addition to the skin, it can also be affected with lichen planus:",
    options: [
      "joints",
      "mucous membranes",
      "hair",
      "teeth"
    ],
    answer: 1
  },
  {
    question: "What contribute to the development of psoriatic erythroderma?",
    options: [
      "use of antihistamines",
      "application of corticosteroid ointments",
      "irrational local treatment",
      "administration of cytostatics"
    ],
    answer: 2
  },
  {
    question: "Choose the diagnostic phenomena characteristic of psoriasis:",
    options: [
      "Benier-Meshchersky symptom",
      "Wickham's grid",
      "stearin spot symptom",
      "Yadasson's symptom"
    ],
    answer: 2
  },
  {
    question: "Psoriasis development factor:",
    options: [
      "infection through contact",
      "allergic dermatoses in parents",
      "genetic predisposition",
      "sexually transmitted infections"
    ],
    answer: 2
  },
  {
    question: "In addition to the skin, psoriasis can often affect:",
    options: [
      "mucous membranes",
      "joints",
      "subcutaneous fat",
      "hair"
    ],
    answer: 1
  },
  {
    question: "State the characteristic pathological processes for psoriasis:",
    options: [
      "acantholysis",
      "spongiosis",
      "parakeratosis",
      "granulosis"
    ],
    answer: 2
  },
  {
    question: "Specify the pathohistological process most characteristic of lichen planus:",
    options: [
      "papillomatosis",
      "vacuole degeneration",
      "granulosis",
      "acantholysis"
    ],
    answer: 2
  }, 
  {
    question: "List the form of psoriasis:",
    options: ["erosive and ulcerative", "hemorrhagic", "pustular", "atrophic"],
    answer: 2
  },
  {
    question: "State the stage of psoriasis:",
    options: ["abortive", "stationary", "widespread", "diffuse"],
    answer: 1
  },
  {
    question: "Atypical form of lichen planus:",
    options: ["scaly", "progressive", "centrifugal", "erosive-ulcerative"],
    answer: 3
  },
  {
    question: "Typical manifestation for atopic dermatitis:",
    options: ["node", "lichenification", "sclerosis", "atrophy"],
    answer: 1
  },
  {
    question: "Place of typical localization of limited atopic dermatitis:",
    options: ["posterior surface of extremities", "flexion surface of the limbs", "palms and soles", "scalp"],
    answer: 1
  },
  {
    question: "Classification of atopic dermatitis by time of development:",
    options: ["the elderly", "senile", "children", "at menopause"],
    answer: 2
  },
  {
    question: "Classification of atopic dermatitis by localization:",
    options: ["restricted-localized", "palar-plantar", "in folds", "nail"],
    answer: 0
  },
  {
    question: "Classification of atopic dermatitis by clinical forms:",
    options: ["bullous", "hypertrophic", "atrophic", "erythematous squamous"],
    answer: 3
  },
  {
    question: "At what age are first manifestations of atopic dermatitis noted?",
    options: ["50 years", "before 1 year of age", "30 years", "18-25 years old"],
    answer: 1
  },
  {
    question: "Clinical sign of atopic dermatitis:",
    options: ["melanoderma", "pustular rash", "Denier-Morgan's symptom", "positive Nikolsky’s symptom"],
    answer: 2
  },
  {
    question: "Main etiological factor in onset of atopic dermatitis:",
    options: ["overwork", "parental allergic dermatoses", "psoriasis in parents", "solar exposure"],
    answer: 1
  },
  {
    question: "Pathognomonic condition in children with atopic dermatitis:",
    options: ["thyrotoxicosis", "enzymopathies and intestinal dysbiosis", "helminthiasis", "diabetes"],
    answer: 1
  },
  {
    question: "Diagnosis of atopic dermatitis based on:",
    options: ["onset in elderly", "presence of red dermographism", "lichenization at elbow and knee bends", "increased IgM level"],
    answer: 2
  },
  {
    question: "Treatment of atopic dermatitis includes:",
    options: ["permethrin", "correction of xerosis", "antibiotics", "antimalarials"],
    answer: 1
  },
  {
    question: "Specify the type of warts:",
    options: ["vulgar", "atrophic", "vesicular", "scalp"],
    answer: 0
  },
  {
    question: "Specify drug effective for simple recurrent herpes:",
    options: ["azithromycin", "valacyclovir", "oratadine", "terbinafine"],
    answer: 1
  },
  {
    question: "What is typical for ano-genital warts:",
    options: [
      "ulcers, hemorrhagic crusts",
      "papules on a narrow base, uneven surface, bleed on injury",
      "pustules, purulent crusts",
      "bubbles, erosion, serous crusts"
    ],
    answer: 1
  },
  {
    question: "Sign characteristic of ano-genital warts:",
    options: ["itching", "wide", "hard on palpation", "like a cockscomb"],
    answer: 3
  },
  {
    question: "Ano-genital warts differentiated with:",
    options: ["bartholinitis", "pyoderma", "syphilitic condillomas", "genital herpes"],
    answer: 2
  },
  {
    question: "Treatment method for genital warts:",
    options: ["cryotherapy", "UV irradiation", "antibiotics", "antifungal"],
    answer: 0
  },
  {
    question: "Sign typical for herpes zoster:",
    options: ["no subjective feelings", "itching", "nodes", "grouped vesicles on edematous-hyperemic background"],
    answer: 3
  },
  {
    question: "Clinical variants of herpes zoster:",
    options: ["atrophic", "hemorrhagic", "erosive and ulcerative", "exudative"],
    answer: 1
  },
  {
    question: "Medications for treatment of herpes zoster:",
    options: ["tetracycline", "amoxicillin", "famacyclovir", "hydroxychloroquine"],
    answer: 2
  },
  {
    question: "The laboratory test to confirm the diagnosis of pemphigus vulgaris disease is:",
    options: [
      "smear examination for acantholytic cells",
      "clinical blood test",
      "examination for eosinophils",
      "bladder culture"
    ],
    answer: 0
  },
  {
    question: "What are the characteristics of Dühring's dermatosis herpetiformis?",
    options: ["primary element - pustule", "polymorphism of rash", "no objective feeling", "positive Nikolsky's symptom"],
    answer: 1
  },
  {
    question: "State the diagnostic symptom to confirm the diagnosis of pemphigus:",
    options: ["Kebner's phenomenon", "Balzer test", "Pincus symptom", "Asbo-Hansen's syndrome"],
    answer: 3
  },
  {
    question: "Treatment of Dühring's dermatosis herpetiformis includes:",
    options: ["2% salicylic paste", "penicillin", "hydroxychloroquine", "dapsone"],
    answer: 3
  },
  {
    question: "In a 53-year-old patient, for no apparent reason, large blisters with a flabby lining and bright red erosion appeared on the mucous membrane of the oral cavity, and then on the skin of the trunk. The process is accompanied by pain, which makes it difficult to eat. Nikolsky's symptom is positive. Diagnosis?",
    options: ["toxicoderma", "simple psoriasis", "syphilitic pemphigus", "pemphigus vulgaris"],
    answer: 3
  },
  {
    question: "The most typical location of rash in pemphigus vulgaris disease is:",
    options: ["face", "mucous membrane of mouth and trunk", "palms and soles", "genitals"],
    answer: 1
  },
  {
    question: "State the drug of choice for treatment of pemphigus vulgaris:",
    options: ["antibiotics", "vitamins", "fentivazide", "prednisolone"],
    answer: 3
  },
  {
    question: "Morphological element in Duhring's herpetiform dermatosis:",
    options: ["vesicles", "tubercle", "pustule", "node"],
    answer: 0
  },
  {
    question: "Therapeutic nutrition for patients with During's dermatitis include:",
    options: ["exclusion of cereals", "hypoallergenic diet", "limit alcohol", "limit fatty foods"],
    answer: 0
  },
  {
    question: "Specify the depth of the location of the bladder with pemphigus vulgaris:",
    options: ["under stratum corneum", "intraepidermal", "subepidermal", "subdermal"],
    answer: 1
  },
  {
    question: "Inguinal epidermophytosis should be differentiated from:",
    options: ["eczema", "herpes simplex", "erythrasma", "lichen planus"],
    answer: 2
  },
  {
    question: "What factors contribute to the occurrence of mycosis of the foot?",
    options: [
      "children's age",
      "contact with pets",
      "frequent shoe cleaning",
      "frequent sauna/pool visits and чужие shoes"
    ],
    answer: 3
  },
  {
    question: "Specify clinical form of foot mycosis?",
    options: ["progressive", "verrucous", "dyshidrotic", "atrophic"],
    answer: 2
  },
  {
    question: "What is characteristic of rubromycosis?",
    options: ["scar", "small pustules", "bubble", "skin and nail involvement of feet and hands"],
    answer: 3
  },
  {
    question: "What contribute to the development of candidiasis?",
    options: ["prolonged antifungal drugs use", "herpes simplex", "prolonged corticosteroid use", "atopic dermatitis"],
    answer: 2
  },
  {
    question: "Method for diagnosing microsporia:",
    options: ["bacteriological", "serological", "immunological", "Nikolsky's symptom"],
    answer: 0
  },
  {
    question: "Deep trichophytosis of the scalp should be differentiated from:",
    options: ["pediculosis", "lichen planus", "Rosa lichen Gibert", "discoid lupus erythematosus"],
    answer: 3
  },
  {
    question: "A patient after solar pingmentation, which appeared after the summer season, had multiple hypopigmented spots of various shapes and sizes on the trunk. There are single spots of yellowish-brown color with peeling. Balzser's test is positive. Diagnosis?",
    options: ["vitiligo", "candidiasis", "seborrheic eczema", "pityriasis versicolor"],
    answer: 3
  },
  {
    question: "Frequent localization of candidiasis:",
    options: ["skin folds", "hair", "extensor surfaces", "palms and soles"],
    answer: 0
  },
  {
    question: "Superficial form of streptoderma:",
    options: ["vulgar ecthyma", "ostiofolliculitis", "carbuncle", "bullous impetigo"],
    answer: 3
  },
  {
    question: "In what form of staphyloderma is clothing friction the main predisposing factor?",
    options: ["bubble impetigo", "vesiculopustulosis", "pemphigus of newborns", "furunculosis"],
    answer: 3
  },
  {
    question: "Staphylococcal pyoderma includes:",
    options: ["vulgar ecthyma", "furunculosis", "bubble impetigo", "lichen simplex"],
    answer: 1
  },
  {
    question: "Treatment of patients with furunculosis includes medications:",
    options: ["antifungal", "antibiotic", "hydroxychloroquine", "antiviral"],
    answer: 1
  },
  {
    question: "State which clinical feature is characteristic of streptoderma:",
    options: [
      "pustules on palms and soles",
      "pustules bounded by follicles",
      "soft, flabby pustule cover",
      "dense pustule cover"
    ],
    answer: 2
  },
  {
    question: "Specify among the following the superficial form of staphyloderma:",
    options: ["furuncle", "ostiofolliculitis", "hydradenitis", "none"],
    answer: 1
  },
  {
    question: "The appointment of a systemic antibiotic is necessary:",
    options: ["single folliculitis", "single ostiofolliculitis", "furuncle on face", "furuncle on back"],
    answer: 2
  },
  {
    question: "Deep form of streptoderma:",
    options: ["epidemic bubble of newborns", "bubble impetigo", "folliculitis", "ecthyma vulgaris"],
    answer: 3
  },
  {
    question: "Factor of natural skin resistance to pyococci:",
    options: [
      "dry skin",
      "mildly acidic environment of the skin surface",
      "oily skin",
      "increased skin moisture"
    ],
    answer: 1
  },
  {
    question: "Scabies infection route:",
    options: [
      "contact with animals",
      "sexual intercourse",
      "alimentary",
      "contact with the ground"
    ],
    answer: 1
  },
  {
    question: "Drug for treatment of head lice:",
    options: [
      "betamethasone ointment",
      "permethrin shampoo",
      "antihistamines",
      "antibiotic"
    ],
    answer: 1
  },
  {
    question: "Treatment of scabies:",
    options: [
      "zinc ointment",
      "UV rays",
      "Spregal aerosol",
      "corticosteroid ointment"
    ],
    answer: 2
  },
  {
    question: "Medication used for scabies:",
    options: [
      "10% KOH",
      "0.9% NaCl",
      "20% benzyl benzoate emulsion",
      "10% salicylic ointment"
    ],
    answer: 2
  },
  {
    question: "Typical location of scabies:",
    options: [
      "interdigital folds of fingers",
      "scalp",
      "extensor surfaces of limbs",
      "soles"
    ],
    answer: 0
  },
  {
    question: "Most characteristic feature of scabies:",
    options: [
      "polyadenitis",
      "eczema in lesions",
      "evening and night itching",
      "infiltration in lesions"
    ],
    answer: 2
  },
  {
    question: "Where do lice parasitize?",
    options: [
      "folds",
      "head",
      "palms and soles",
      "mucous membranes"
    ],
    answer: 1
  },
  {
    question: "Disease transmitted by Pediculus humanus corporis:",
    options: [
      "scabies",
      "typhus",
      "intestinal typhoid",
      "simple pox"
    ],
    answer: 1
  },
  {
    question: "Most common complication of scabies:",
    options: [
      "secondary pyoderma",
      "paralysis",
      "atrophy",
      "herpes simplex"
    ],
    answer: 0
  },
  {
    question: "Primary morphological element of scabies:",
    options: [
      "tubercle",
      "papule-vesicle",
      "erythema",
      "bubble"
    ],
    answer: 1
  },
  {
    question: "Atypical form of hard chancre:",
    options: [
      "chancre-amygdalitis",
      "phimosis",
      "phagedenism",
      "vulvovaginitis"
    ],
    answer: 0
  },
  {
    question: "Typical chancre should be differentiated with:",
    options: [
      "herpes simplex",
      "anogenital wart",
      "candidiasis",
      "lichen planus"
    ],
    answer: 0
  },
  {
    question: "Complication of hard chancre:",
    options: [
      "lymphangitis",
      "multiple ostiofolliculitis",
      "paraphimosis",
      "none"
    ],
    answer: 2
  },
  {
    question: "Sign of typical hard chancre:",
    options: [
      "soreness",
      "purulent discharge",
      "ripped edges",
      "regular rounded or oval outline"
    ],
    answer: 3
  },
  {
    question: "Average incubation period of syphilis:",
    options: [
      "1 week",
      "2 weeks",
      "5-12 hours",
      "3-4 weeks"
    ],
    answer: 3
  },
  {
    question: "Rare localization of hard chancre:",
    options: [
      "head of penis",
      "labia minora",
      "vaginal wall",
      "labia majora"
    ],
    answer: 2
  },
  {
    question: "Main way treponema spreads inside body:",
    options: [
      "lymphogenous",
      "intestinal tract",
      "genitourinary tract",
      "nerve trunks"
    ],
    answer: 0
  },
  {
    question: "Characteristic of secondary syphilis:",
    options: [
      "acute inflammation",
      "painful lesions",
      "spontaneous disappearance of rash",
      "subjective disorders"
    ],
    answer: 2
  },
  {
    question: "Sign of secondary period of syphilis:",
    options: [
      "hard chancre",
      "diffuse papular infiltration",
      "regional lymphadenitis only",
      "syphilitic roseola"
    ],
    answer: 3
  },
  {
    question: "Differential diagnosis with pustular syphilis:",
    options: [
      "rosacea",
      "vulgar ecthyma",
      "pemphigus vulgaris",
      "urticarial rash"
    ],
    answer: 1
  },
  {
    question: "Typical symptom of syphilitic sore throat:",
    options: [
      "sharp borders, pale mucosa",
      "soreness",
      "pain on swallowing",
      "purulent plugs"
    ],
    answer: 0
  },
  {
    question: "Most contagious manifestation of secondary syphilis:",
    options: [
      "roseola",
      "papule on trunk",
      "hypertrophied papule of genitals (wide condylomas)",
      "alopecia"
    ],
    answer: 2
  },
  {
    question: "Syphilitic alopecia differentiated with:",
    options: [
      "microsporia, trichophytosis",
      "psoriasis scalp",
      "seborrheic eczema",
      "scalp lice"
    ],
    answer: 0
  },
  {
    question: "Varieties of pigmented syphilis:",
    options: [
      "bubble",
      "in the form of spots",
      "flaky",
      "papular"
    ],
    answer: 1
  },
  {
  question: "With what do you need to differentiate gummous syphilis?",
  options: [
    "psoriasis of the scalp",
    "multiple ostiofoliculitis",
    "indurative erythema Bazin",
    "eczema"
  ],
  answer: 2
  },
  {
    question: "Clinical manifestations characteristic of tertiary syphilis:",
    options: [
      "papules of palms and soles",
      "pustules",
      "grouped tubercles",
      "bubble"
    ],
    answer: 2
  },
  {
    question: "What morphologically is syphilitic gumma?",
    options: [
      "a cluster of tubercles",
      "the accumulation of papules",
      "node",
      "bubble of large size with purulent contents"
    ],
    answer: 2
  },
  {
    question: "Which complication can occur during treatment with penicillin?",
    options: [
      "lung embolism",
      "polyneuritis",
      "necrosis at the injection site",
      "anaphylactic shock"
    ],
    answer: 3
  },
  {
    question: "A syphilitic tubercle should be differentiated from:",
    options: [
      "lichen planus",
      "psoriasis",
      "tuberculous lupus",
      "atopic dermatitis"
    ],
    answer: 2
  },
  {
    question: "Varieties of syphilitic tubercles:",
    options: [
      "serpiginous (creeping)",
      "giant",
      "exudative",
      "herpetiform"
    ],
    answer: 0
  },
  {
    question: "For epidermophytosis inguinal it is characteristic:",
    options: [
      "peripheral border of papules of vesicles",
      "infection from animals",
      "green glow with luminescence",
      "bubble"
    ],
    answer: 0
  },
  {
    question: "Methods for diagnosing pityriasis versicolor:",
    options: [
      "serological",
      "Balzer's iodine test",
      "apple jelly symptom",
      "Kebner's symptom"
    ],
    answer: 1
  },
  {
    question: "Tuberculous lupus is differentiated with:",
    options: [
      "discoid lupus erythematosus",
      "rosacea",
      "psoriasis",
      "vulgar acne"
    ],
    answer: 0
  },
  {
    question: "Diagnostic sign in vulgar lupus:",
    options: [
      "The Benier-Meshchersky symptom",
      "the symptom of apple jelly",
      "Nikolsky's symptom",
      "Pospelov's symptom"
    ],
    answer: 1
  },
  {
    question: "Clinical manifestations of scrofuloderma:",
    options: [
      "papules in the deep layers of the dermis",
      "pustules",
      "slightly painful ulcers with soft thin overhanging edges",
      "hyperpigmentation"
    ],
    answer: 2
  },
  {
    question: "Papulonecrotic tuberculosis is localized on:",
    options: [
      "face, torso",
      "scalp",
      "palms",
      "soles"
    ],
    answer: 0
  },
  {
    question: "Papulonecrotic tuberculosis is differentiated from:",
    options: [
      "psoriasis",
      "lichen planus",
      "common acne vulgaris",
      "syphilitic roseola"
    ],
    answer: 2
  },
  {
    question: "Clinical test for leprosy:",
    options: [
      "Balzer's test",
      "test with a Wood lamp",
      "Jadasson test",
      "test with Mitsuda reaction"
    ],
    answer: 3
  },
  {
    question: "Lepromatous type of leprosy differentiates with:",
    options: [
      "psoriasis",
      "lichen planus",
      "syphilitic tubercle",
      "pityriasis rose Gibert"
    ],
    answer: 2
  },
  {
    question: "Rash with lepromatous type of leprosy:",
    options: [
      "blister",
      "tubercle",
      "papule",
      "pustule"
    ],
    answer: 1
  },
  {
    question: "For the treatment of leprosy, use:",
    options: [
      "azithromycin",
      "acyclovir",
      "diaminodiphenylsulfone (dapsone)",
      "methotrexate"
    ],
    answer: 2
  },
  {
    question: "Clinical form of leprosy:",
    options: [
      "syphiloform",
      "indurative",
      "verrucous",
      "tuberculoid"
    ],
    answer: 3
  },
  {
  question: "Grouped vesicles are typical of:",
  options: [
    "pemphigus",
    "primary syphilis",
    "herpes zoster",
    "herpes simplex"
  ],
  answer: 3
  },
  {
    question: "Vesicles with pain along nerve trunks are typical of:",
    options: [
      "pemphigus",
      "primary syphilis",
      "herpes zoster",
      "herpes simplex"
    ],
    answer: 2
  },
  {
    question: "Erosion with dense painless infiltration at base is typical of:",
    options: [
      "pemphigus",
      "primary syphilis",
      "herpes zoster",
      "herpes simplex"
    ],
    answer: 1
  },
  {
    question: "Bubbles, erosion, positive Nikolsky sign are typical of:",
    options: [
      "pemphigus",
      "primary syphilis",
      "herpes zoster",
      "herpes simplex"
    ],
    answer: 0
  },
  {
  question: "Clothes louse lives in:",
  options: [
    "bristly hair",
    "long hair",
    "dress, shirt"
  ],
  answer: 2
  },
  {
    question: "Pubic louse lives in:",
    options: [
      "bristly hair",
      "long hair",
      "dress, shirt"
    ],
    answer: 0
  },
  {
    question: "Head louse lives in:",
    options: [
      "bristly hair",
      "long hair",
      "dress, shirt"
    ],
    answer: 1
  }
];

// =====================
// RANDOMIZE FUNCTION
// =====================
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle questions before exam starts
shuffleArray(questions);

// =====================
// VARIABLES
// =====================
let current = 0;
let score = 0;
let answered = false;

// =====================
// DOM ELEMENTS
// =====================
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

// =====================
// LOAD QUESTION
// =====================
function loadQuestion() {
  answered = false;
  feedbackEl.textContent = "";
  optionsEl.innerHTML = "";

  const q = questions[current];

  // Dynamic numbering
  questionEl.textContent = `${current + 1}. ${q.question}`;

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index, btn);
    optionsEl.appendChild(btn);
  });

  scoreEl.textContent = `Score: ${score}/${questions.length}`;
}

// =====================
// CHECK ANSWER
// =====================
function checkAnswer(selected, btn) {
  if (answered) return;

  answered = true;

  const correct = questions[current].answer;
  const buttons = optionsEl.querySelectorAll("button");

  if (selected === correct) {
    btn.classList.add("correct");
    feedbackEl.textContent = "Correct!";
    score++;
  } else {
    btn.classList.add("wrong");
    buttons[correct].classList.add("correct");
    feedbackEl.textContent = "Wrong! Correct answer highlighted.";
  }

  scoreEl.textContent = `Score: ${score}/${questions.length}`;
}

// =====================
// NEXT BUTTON
// =====================
nextBtn.onclick = () => {

  if (!answered) {
    feedbackEl.textContent = "Please answer before moving to next.";
    return;
  }

  if (current < questions.length - 1) {
    current++;
    loadQuestion();
  } else {
    questionEl.textContent = "Exam Finished!";
    optionsEl.innerHTML = "";
    feedbackEl.textContent = `Final Score: ${score}/${questions.length}`;
    nextBtn.style.display = "none";
  }
};

// =====================
// START EXAM
// =====================
loadQuestion();
