const questions = [
  {
    question: "1. Layer of the epidermis:",
    options: ["vascular", "mesh", "spinous", "papillary"],
    answer: 2
  },
  {
    question: "2. Increasing the rows of cells in the granular layer is:",
    options: ["acanthosis", "spongiosis", "parakeratosis", "granulosis"],
    answer: 3
  },
  {
    question: "3. Skin appendages are:",
    options: ["mucous membranes", "derma", "epidermis", "hair"],
    answer: 3
  },
  {
    question: "4. The sebum-secreting holocrine gland is:",
    options: ["Cooper's gland", "sebaceous gland", "sweat gland", "Bartholin's gland"],
    answer: 1
  },
  {
    question: "5. Where are the sebaceous glands in the skin:",
    options: ["neck", "the scalp", "axillary", "palms"],
    answer: 1
  },
  {
    question: "6. An increase in the rows of cells of the spinous layer is:",
    options: ["acanthosis", "spongiosis", "parakeratosis", "granulosis"],
    answer: 0
  },
  {
    question: "7. Secondary morphological element:",
    options: ["flake", "blister", "bubble", "erythema"],
    answer: 0
  },
  {
    question: "8. The infiltrative morphological element is:",
    options: ["papule", "flake", "vesicle", "blister"],
    answer: 0
  },
  {
    question: "9. The exudative morphological element is:",
    options: ["papule", "tubercle", "vesicle", "crack"],
    answer: 2
  },
  {
    question: "10. Primary morphological element:",
    options: ["flake", "scar", "erosion", "erythema"],
    answer: 3
  },
  {
    question: "11. Choose one location that is most typical for psoriasis:",
    options: [
      "on the palms and soles",
      "on bending surfaces of limbs",
      "on the extensor surfaces of limbs",
      "on genitals"
    ],
    answer: 2
  },
  {
    question: "12. Papules are polygonal, blue-red or purple with umbilical depression and Wickham symptoms indicate:",
    options: [
      "lichen planus",
      "secondary syphilis",
      "atopic dermatitis",
      "psoriasis"
    ],
    answer: 0
  },
  {
    question: "13. Lichen planus can be treated with:",
    options: [
      "azithromycin",
      "aciclovir",
      "hydroxychloroquine",
      "cytostatics"
    ],
    answer: 2
  },
  {
    question: "14. What do psoriasis and lichen planus have in common?",
    options: [
      "intolerable itching",
      "lesions of mucous membranes",
      "localization on anterior surface of limbs",
      "isomorphic reaction"
    ],
    answer: 3
  },
  {
    question: "15. Most typical localization of rash in lichen planus:",
    options: [
      "scalp",
      "palms and soles",
      "anterior surface of extremities",
      "posterior surface of extremities"
    ],
    answer: 2
  },
  {
    question: "16. Psoriasis is characterized by:",
    options: [
      "superimposed silvery-white scales",
      "monomorphism",
      "peripheral growth and merging",
      "all of the above are true"
    ],
    answer: 3
  },
  {
    question: "17. Typical signs of papules in lichen planus:",
    options: [
      "polygonal outline",
      "waxy sheen",
      "umbilical depression",
      "all of the above are true"
    ],
    answer: 3
  },
  {
    question: "18. Primary morphological element for psoriasis:",
    options: [
      "papule",
      "spot",
      "blister",
      "microvesicle"
    ],
    answer: 0
  },
  {
    question: "19. In addition to skin, lichen planus affects:",
    options: [
      "joints",
      "mucous membranes",
      "hair",
      "teeth"
    ],
    answer: 1
  },
  {
    question: "20. What contributes to psoriatic erythroderma?",
    options: [
      "use of antihistamines",
      "application of corticosteroid ointments",
      "irrational local treatment",
      "administration of cytostatics"
    ],
    answer: 2
  },
  {
    question: "21. Diagnostic phenomena characteristic of psoriasis:",
    options: [
      "Benier-Meshchersky symptom",
      "Wickham's grid",
      "stearin spot symptom",
      "Yadasson's symptom"
    ],
    answer: 2
  },
  {
    question: "22. Psoriasis development factor:",
    options: [
      "infection through contact",
      "allergic dermatoses in parents",
      "genetic predisposition",
      "sexually transmitted infections"
    ],
    answer: 2
  },
  {
    question: "23. In addition to skin, psoriasis affects:",
    options: [
      "mucous membranes",
      "joints",
      "subcutaneous fat",
      "hair"
    ],
    answer: 1
  },
  {
    question: "24. Pathological process characteristic for psoriasis:",
    options: [
      "acantholysis",
      "spongiosis",
      "parakeratosis",
      "granulosis"
    ],
    answer: 2
  },
  {
    question: "25. Pathohistological process in lichen planus:",
    options: [
      "papillomatosis",
      "vacuole degeneration",
      "granulosis",
      "acantholysis"
    ],
    answer: 2
  }, 
  {
    question: "26. List the form of psoriasis:",
    options: ["erosive and ulcerative", "hemorrhagic", "pustular", "atrophic"],
    answer: 2
  },
  {
    question: "27. State the stage of psoriasis:",
    options: ["abortive", "stationary", "widespread", "diffuse"],
    answer: 1
  },
  {
    question: "28. Atypical form of lichen planus:",
    options: ["scaly", "progressive", "centrifugal", "erosive-ulcerative"],
    answer: 3
  },
  {
    question: "29. Typical manifestation for atopic dermatitis:",
    options: ["node", "lichenification", "sclerosis", "atrophy"],
    answer: 1
  },
  {
    question: "30. Place of typical localization of limited atopic dermatitis:",
    options: ["posterior surface of extremities", "flexion surface of the limbs", "palms and soles", "scalp"],
    answer: 1
  },
  {
    question: "31. Classification of atopic dermatitis by time of development:",
    options: ["the elderly", "senile", "children", "at menopause"],
    answer: 2
  },
  {
    question: "32. Classification of atopic dermatitis by localization:",
    options: ["restricted-localized", "palar-plantar", "in folds", "nail"],
    answer: 0
  },
  {
    question: "33. Classification of atopic dermatitis by clinical forms:",
    options: ["bullous", "hypertrophic", "atrophic", "erythematous squamous"],
    answer: 3
  },
  {
    question: "34. At what age are first manifestations of atopic dermatitis noted?",
    options: ["50 years", "before 1 year of age", "30 years", "18-25 years old"],
    answer: 1
  },
  {
    question: "35. Clinical sign of atopic dermatitis:",
    options: ["melanoderma", "pustular rash", "Denier-Morgan's symptom", "positive Nikolsky’s symptom"],
    answer: 2
  },
  {
    question: "36. Main etiological factor in onset of atopic dermatitis:",
    options: ["overwork", "parental allergic dermatoses", "psoriasis in parents", "solar exposure"],
    answer: 1
  },
  {
    question: "37. Pathognomonic condition in children with atopic dermatitis:",
    options: ["thyrotoxicosis", "enzymopathies and intestinal dysbiosis", "helminthiasis", "diabetes"],
    answer: 1
  },
  {
    question: "38. Diagnosis of atopic dermatitis based on:",
    options: ["onset in elderly", "presence of red dermographism", "lichenization at elbow and knee bends", "increased IgM level"],
    answer: 2
  },
  {
    question: "39. Treatment of atopic dermatitis includes:",
    options: ["permethrin", "correction of xerosis", "antibiotics", "antimalarials"],
    answer: 1
  },
  {
    question: "40. Specify the type of warts:",
    options: ["vulgar", "atrophic", "vesicular", "scalp"],
    answer: 0
  },
  {
    question: "41. Specify drug effective for simple recurrent herpes:",
    options: ["azithromycin", "valacyclovir", "oratadine", "terbinafine"],
    answer: 1
  },
  {
    question: "42. What is typical for ano-genital warts:",
    options: [
      "ulcers, hemorrhagic crusts",
      "papules on a narrow base, uneven surface, bleed on injury",
      "pustules, purulent crusts",
      "bubbles, erosion, serous crusts"
    ],
    answer: 1
  },
  {
    question: "43. Sign characteristic of ano-genital warts:",
    options: ["itching", "wide", "hard on palpation", "like a cockscomb"],
    answer: 3
  },
  {
    question: "44. Ano-genital warts differentiated with:",
    options: ["bartholinitis", "pyoderma", "syphilitic condillomas", "genital herpes"],
    answer: 2
  },
  {
    question: "45. Treatment method for genital warts:",
    options: ["cryotherapy", "UV irradiation", "antibiotics", "antifungal"],
    answer: 0
  },
  {
    question: "46. Sign typical for herpes zoster:",
    options: ["no subjective feelings", "itching", "nodes", "grouped vesicles on edematous-hyperemic background"],
    answer: 3
  },
  {
    question: "47. Clinical variants of herpes zoster:",
    options: ["atrophic", "hemorrhagic", "erosive and ulcerative", "exudative"],
    answer: 1
  },
  {
    question: "48. Medications for treatment of herpes zoster:",
    options: ["tetracycline", "amoxicillin", "famacyclovir", "hydroxychloroquine"],
    answer: 2
  },
  {
    question: "49. Lab test to confirm pemphigus vulgaris:",
    options: [
      "smear examination for acantholytic cells",
      "clinical blood test",
      "examination for eosinophils",
      "bladder culture"
    ],
    answer: 0
  },
  {
    question: "50. Characteristics of Dühring's dermatosis herpetiformis:",
    options: ["primary element - pustule", "polymorphism of rash", "no objective feeling", "positive Nikolsky's symptom"],
    answer: 1
  },
  {
    question: "51. Diagnostic symptom to confirm pemphigus:",
    options: ["Kebner's phenomenon", "Balzer test", "Pincus symptom", "Asbo-Hansen's syndrome"],
    answer: 3
  },
  {
    question: "52. Treatment of Dühring's dermatosis herpetiformis includes:",
    options: ["2% salicylic paste", "penicillin", "hydroxychloroquine", "dapsone"],
    answer: 3
  },
  {
    question: "53. Large flabby blisters, oral mucosa involvement, positive Nikolsky symptom. Diagnosis?",
    options: ["toxicoderma", "simple psoriasis", "syphilitic pemphigus", "pemphigus vulgaris"],
    answer: 3
  },
  {
    question: "54. Most typical location of rash in pemphigus vulgaris:",
    options: ["face", "mucous membrane of mouth and trunk", "palms and soles", "genitals"],
    answer: 1
  },
  {
    question: "55. Drug of choice for pemphigus vulgaris:",
    options: ["antibiotics", "vitamins", "fentivazide", "prednisolone"],
    answer: 3
  },
  {
    question: "56. Morphological element in Dühring's dermatosis:",
    options: ["vesicles", "tubercle", "pustule", "node"],
    answer: 0
  },
  {
    question: "57. Therapeutic nutrition in Dühring's dermatitis:",
    options: ["exclusion of cereals", "hypoallergenic diet", "limit alcohol", "limit fatty foods"],
    answer: 0
  },
  {
    question: "58. Depth of blister in pemphigus vulgaris:",
    options: ["under stratum corneum", "intraepidermal", "subepidermal", "subdermal"],
    answer: 1
  },
  {
    question: "59. Inguinal epidermophytosis differentiated from:",
    options: ["eczema", "herpes simplex", "erythrasma", "lichen planus"],
    answer: 2
  },
  {
    question: "60. Factors contributing to foot mycosis:",
    options: [
      "children's age",
      "contact with pets",
      "frequent shoe cleaning",
      "frequent sauna/pool visits and чужие shoes"
    ],
    answer: 3
  },
  {
    question: "61. Clinical form of foot mycosis:",
    options: ["progressive", "verrucous", "dyshidrotic", "atrophic"],
    answer: 2
  },
  {
    question: "62. Characteristic of rubromycosis:",
    options: ["scar", "small pustules", "bubble", "skin and nail involvement of feet and hands"],
    answer: 3
  },
  {
    question: "63. Contributes to candidiasis:",
    options: ["prolonged antifungal use", "herpes simplex", "prolonged corticosteroid use", "atopic dermatitis"],
    answer: 2
  },
  {
    question: "64. Method for diagnosing microsporia:",
    options: ["bacteriological", "serological", "immunological", "Nikolsky's symptom"],
    answer: 0
  },
  {
    question: "65. Deep trichophytosis differentiated from:",
    options: ["pediculosis", "lichen planus", "Rosa lichen Gibert", "discoid lupus erythematosus"],
    answer: 3
  },
  {
    question: "66. Hypopigmented spots, positive Balzer test. Diagnosis?",
    options: ["vitiligo", "candidiasis", "seborrheic eczema", "pityriasis versicolor"],
    answer: 3
  },
  {
    question: "67. Frequent localization of candidiasis:",
    options: ["skin folds", "hair", "extensor surfaces", "palms and soles"],
    answer: 0
  },
  {
    question: "68. Superficial form of streptoderma:",
    options: ["vulgar ecthyma", "ostiofolliculitis", "carbuncle", "bullous impetigo"],
    answer: 3
  },
  {
    question: "69. Clothing friction predisposes to:",
    options: ["bubble impetigo", "vesiculopustulosis", "pemphigus of newborns", "furunculosis"],
    answer: 3
  },
  {
    question: "70. Staphylococcal pyoderma includes:",
    options: ["vulgar ecthyma", "furunculosis", "bubble impetigo", "lichen simplex"],
    answer: 1
  },
  {
    question: "71. Treatment of furunculosis includes:",
    options: ["antifungal", "antibiotic", "hydroxychloroquine", "antiviral"],
    answer: 1
  },
  {
    question: "72. Characteristic of streptoderma:",
    options: [
      "pustules on palms and soles",
      "pustules bounded by follicles",
      "soft, flabby pustule cover",
      "dense pustule cover"
    ],
    answer: 2
  },
  {
    question: "73. Superficial form of staphyloderma:",
    options: ["furuncle", "ostiofolliculitis", "hydradenitis", "none"],
    answer: 1
  },
  {
    question: "74. Systemic antibiotic necessary for:",
    options: ["single folliculitis", "single ostiofolliculitis", "furuncle on face", "furuncle on back"],
    answer: 2
  },
  {
    question: "75. Deep form of streptoderma:",
    options: ["epidemic bubble of newborns", "bubble impetigo", "folliculitis", "ecthyma vulgaris"],
    answer: 3
  },
  {
    question: "76. Factor of natural skin resistance to pyococci:",
    options: [
      "dry skin",
      "mildly acidic environment of the skin surface",
      "oily skin",
      "increased skin moisture"
    ],
    answer: 1
  },
  {
    question: "77. Scabies infection route:",
    options: [
      "contact with animals",
      "sexual intercourse",
      "alimentary",
      "contact with the ground"
    ],
    answer: 1
  },
  {
    question: "78. Drug for treatment of head lice:",
    options: [
      "betamethasone ointment",
      "permethrin shampoo",
      "antihistamines",
      "antibiotic"
    ],
    answer: 1
  },
  {
    question: "79. Treatment of scabies:",
    options: [
      "zinc ointment",
      "UV rays",
      "Spregal aerosol",
      "corticosteroid ointment"
    ],
    answer: 2
  },
  {
    question: "80. Medication used for scabies:",
    options: [
      "10% KOH",
      "0.9% NaCl",
      "20% benzyl benzoate emulsion",
      "10% salicylic ointment"
    ],
    answer: 2
  },
  {
    question: "81. Typical location of scabies:",
    options: [
      "interdigital folds of fingers",
      "scalp",
      "extensor surfaces of limbs",
      "soles"
    ],
    answer: 0
  },
  {
    question: "82. Most characteristic feature of scabies:",
    options: [
      "polyadenitis",
      "eczema in lesions",
      "evening and night itching",
      "infiltration in lesions"
    ],
    answer: 2
  },
  {
    question: "83. Where do lice parasitize?",
    options: [
      "folds",
      "head",
      "palms and soles",
      "mucous membranes"
    ],
    answer: 1
  },
  {
    question: "84. Disease transmitted by Pediculus humanus corporis:",
    options: [
      "scabies",
      "typhus",
      "intestinal typhoid",
      "simple pox"
    ],
    answer: 1
  },
  {
    question: "85. Most common complication of scabies:",
    options: [
      "secondary pyoderma",
      "paralysis",
      "atrophy",
      "herpes simplex"
    ],
    answer: 0
  },
  {
    question: "86. Primary morphological element of scabies:",
    options: [
      "tubercle",
      "papule-vesicle",
      "erythema",
      "bubble"
    ],
    answer: 1
  },
  {
    question: "87. Atypical form of hard chancre:",
    options: [
      "chancre-amygdalitis",
      "phimosis",
      "phagedenism",
      "vulvovaginitis"
    ],
    answer: 0
  },
  {
    question: "88. Typical chancre should be differentiated with:",
    options: [
      "herpes simplex",
      "anogenital wart",
      "candidiasis",
      "lichen planus"
    ],
    answer: 0
  },
  {
    question: "89. Complication of hard chancre:",
    options: [
      "lymphangitis",
      "multiple ostiofolliculitis",
      "paraphimosis",
      "none"
    ],
    answer: 2
  },
  {
    question: "90. Sign of typical hard chancre:",
    options: [
      "soreness",
      "purulent discharge",
      "ripped edges",
      "regular rounded or oval outline"
    ],
    answer: 3
  },
  {
    question: "91. Average incubation period of syphilis:",
    options: [
      "1 week",
      "2 weeks",
      "5-12 hours",
      "3-4 weeks"
    ],
    answer: 3
  },
  {
    question: "92. Rare localization of hard chancre:",
    options: [
      "head of penis",
      "labia minora",
      "vaginal wall",
      "labia majora"
    ],
    answer: 2
  },
  {
    question: "93. Main way treponema spreads inside body:",
    options: [
      "lymphogenous",
      "intestinal tract",
      "genitourinary tract",
      "nerve trunks"
    ],
    answer: 0
  },
  {
    question: "94. Characteristic of secondary syphilis:",
    options: [
      "acute inflammation",
      "painful lesions",
      "spontaneous disappearance of rash",
      "subjective disorders"
    ],
    answer: 2
  },
  {
    question: "95. Sign of secondary period of syphilis:",
    options: [
      "hard chancre",
      "diffuse papular infiltration",
      "regional lymphadenitis only",
      "syphilitic roseola"
    ],
    answer: 3
  },
  {
    question: "96. Differential diagnosis with pustular syphilis:",
    options: [
      "rosacea",
      "vulgar ecthyma",
      "pemphigus vulgaris",
      "urticarial rash"
    ],
    answer: 1
  },
  {
    question: "97. Typical symptom of syphilitic sore throat:",
    options: [
      "sharp borders, pale mucosa",
      "soreness",
      "pain on swallowing",
      "purulent plugs"
    ],
    answer: 0
  },
  {
    question: "98. Most contagious manifestation of secondary syphilis:",
    options: [
      "roseola",
      "papule on trunk",
      "hypertrophied papule of genitals (wide condylomas)",
      "alopecia"
    ],
    answer: 2
  },
  {
    question: "99. Syphilitic alopecia differentiated with:",
    options: [
      "microsporia, trichophytosis",
      "psoriasis scalp",
      "seborrheic eczema",
      "scalp lice"
    ],
    answer: 0
  },
  {
    question: "100. Varieties of pigmented syphilis:",
    options: [
      "bubble",
      "in the form of spots",
      "flaky",
      "papular"
    ],
    answer: 1
  },
  {
  question: "101. With what do you need to differentiate gummous syphilis?",
  options: [
    "psoriasis of the scalp",
    "multiple ostiofoliculitis",
    "indurative erythema Bazin",
    "eczema"
  ],
  answer: 2
  },
  {
    question: "102. Clinical manifestations characteristic of tertiary syphilis:",
    options: [
      "papules of palms and soles",
      "pustules",
      "grouped tubercles",
      "bubble"
    ],
    answer: 2
  },
  {
    question: "103. What morphologically is syphilitic gumma?",
    options: [
      "a cluster of tubercles",
      "the accumulation of papules",
      "node",
      "bubble of large size with purulent contents"
    ],
    answer: 2
  },
  {
    question: "104. Which complication can occur during treatment with penicillin?",
    options: [
      "lung embolism",
      "polyneuritis",
      "necrosis at the injection site",
      "anaphylactic shock"
    ],
    answer: 3
  },
  {
    question: "105. A syphilitic tubercle should be differentiated from:",
    options: [
      "lichen planus",
      "psoriasis",
      "tuberculous lupus",
      "atopic dermatitis"
    ],
    answer: 2
  },
  {
    question: "106. Varieties of syphilitic tubercles:",
    options: [
      "serpiginous (creeping)",
      "giant",
      "exudative",
      "herpetiform"
    ],
    answer: 0
  },
  {
    question: "107. For epidermophytosis inguinal it is characteristic:",
    options: [
      "peripheral border of papules of vesicles",
      "infection from animals",
      "green glow with luminescence",
      "bubble"
    ],
    answer: 0
  },
  {
    question: "108. Methods for diagnosing pityriasis versicolor:",
    options: [
      "serological",
      "Balzer's iodine test",
      "apple jelly symptom",
      "Kebner's symptom"
    ],
    answer: 1
  },
  {
    question: "109. Tuberculous lupus is differentiated with:",
    options: [
      "discoid lupus erythematosus",
      "rosacea",
      "psoriasis",
      "vulgar acne"
    ],
    answer: 0
  },
  {
    question: "110. Diagnostic sign in vulgar lupus:",
    options: [
      "The Benier-Meshchersky symptom",
      "the symptom of apple jelly",
      "Nikolsky's symptom",
      "Pospelov's symptom"
    ],
    answer: 1
  },
  {
    question: "111. Clinical manifestations of scrofuloderma:",
    options: [
      "papules in the deep layers of the dermis",
      "pustules",
      "slightly painful ulcers with soft thin overhanging edges",
      "hyperpigmentation"
    ],
    answer: 2
  },
  {
    question: "112. Papulonecrotic tuberculosis is localized on:",
    options: [
      "face, torso",
      "scalp",
      "palms",
      "soles"
    ],
    answer: 0
  },
  {
    question: "113. Papulonecrotic tuberculosis is differentiated from:",
    options: [
      "psoriasis",
      "lichen planus",
      "common acne vulgaris",
      "syphilitic roseola"
    ],
    answer: 2
  },
  {
    question: "114. Clinical test for leprosy:",
    options: [
      "Balzer's test",
      "test with a Wood lamp",
      "Jadasson test",
      "test with Mitsuda reaction"
    ],
    answer: 3
  },
  {
    question: "115. Lepromatous type of leprosy differentiates with:",
    options: [
      "psoriasis",
      "lichen planus",
      "syphilitic tubercle",
      "pityriasis rose Gibert"
    ],
    answer: 2
  },
  {
    question: "116. Rash with lepromatous type of leprosy:",
    options: [
      "blister",
      "tubercle",
      "papule",
      "pustule"
    ],
    answer: 1
  },
  {
    question: "117. For the treatment of leprosy, use:",
    options: [
      "azithromycin",
      "acyclovir",
      "diaminodiphenylsulfone (dapsone)",
      "methotrexate"
    ],
    answer: 2
  },
  {
    question: "118. Clinical form of leprosy:",
    options: [
      "syphiloform",
      "indurative",
      "verrucous",
      "tuberculoid"
    ],
    answer: 3
  },
  {
  question: "119. Grouped vesicles are typical of:",
  options: [
    "pemphigus",
    "primary syphilis",
    "herpes zoster",
    "herpes simplex"
  ],
  answer: 3
  },
  {
    question: "120. Vesicles with pain along nerve trunks are typical of:",
    options: [
      "pemphigus",
      "primary syphilis",
      "herpes zoster",
      "herpes simplex"
    ],
    answer: 2
  },
  {
    question: "121. Erosion with dense painless infiltration at base is typical of:",
    options: [
      "pemphigus",
      "primary syphilis",
      "herpes zoster",
      "herpes simplex"
    ],
    answer: 1
  },
  {
    question: "122. Bubbles, erosion, positive Nikolsky sign are typical of:",
    options: [
      "pemphigus",
      "primary syphilis",
      "herpes zoster",
      "herpes simplex"
    ],
    answer: 0
  },
  {
  question: "123. Clothes louse lives in:",
  options: [
    "bristly hair",
    "long hair",
    "dress, shirt"
  ],
  answer: 2
  },
  {
    question: "124. Pubic louse lives in:",
    options: [
      "bristly hair",
      "long hair",
      "dress, shirt"
    ],
    answer: 0
  },
  {
    question: "125. Head louse lives in:",
    options: [
      "bristly hair",
      "long hair",
      "dress, shirt"
    ],
    answer: 1
  }
];

// ===== RANDOMIZE FUNCTION =====
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ===== RANDOMIZE QUESTIONS BEFORE START =====
shuffleArray(questions);

// ===== VARIABLES =====
let current = 0;
let score = 0;
let answered = false;

// ===== DOM ELEMENTS =====
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

// ===== LOAD QUESTION =====
function loadQuestion() {
  answered = false;
  feedbackEl.textContent = "";
  optionsEl.innerHTML = "";

  const q = questions[current];
  questionEl.textContent = q.question;

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index, btn);
    optionsEl.appendChild(btn);
  });

  scoreEl.textContent = `Score: ${score}/${questions.length}`;
}

// ===== CHECK ANSWER =====
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

// ===== NEXT BUTTON =====
nextBtn.onclick = () => {

  // ❌ Prevent skipping without answering
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

// ===== START EXAM =====
loadQuestion();
