window.staShackletonGuide = {
  speciesRows: String.raw`
Akaru|+1 Control, +1 Fitness, +1 Presence|Akaru|Efficient Mindset|Akaru traits support passionate, efficiency-driven problem solving, trade, and communal improvement.|Never Knowingly Engage in Inefficiency
Cal-Mirran|+1 Control, +1 Fitness, +1 Reason|Cal-Mirran|Crystalline State|Cal-Mirrans can shift bodily state, tolerate heat, cold, pressure, and vacuum, but are sensitive to vibration and some radiation.|Peaceful Persistence
Qofuari|+1 Fitness, +1 Insight, +1 Reason|Qofuari|Mental Capacity|Qofuari are natural swimmers and climbers with exceptional capacity to model complicated problems before acting.|Everyone is Equal
VinShari|+1 Control, +1 Presence, +1 Reason|VinShari|Evolutionary Survivors|VinShari have defensive bone collars, radiation resistance, strong immune systems, broad-spectrum vision, and perfect night vision.|Power is Our Birthright!
  `.trim(),
  talentRows: String.raw`
A Better Path|Akaru, or GM permission|When you succeed at a task during an extended task, add 1 challenge die to determine Work completed.
Charming Demeanor|Akaru, or GM permission|In a social interaction or social conflict, reroll 1d20; if the task succeeds, gain 1 bonus Momentum.
Water Glassing|Cal-Mirran|With a Fitness + Science task, harden water temporarily; Difficulty depends on water volume. After success, you cannot use this talent or change bodily state again for the rest of the scene.
Time Refraction|Cal-Mirran|Spend 1 Determination and attempt Insight + Science to glimpse the past or future: Difficulty 1 up to a minute, 2 up to an hour, 3 up to a day, higher at GM discretion. Success answers 1 question plus 1 per Momentum spent.
That Wasn't Me|Orion, or GM permission|When you successfully complete a task to win a target's trust, add 1 bonus Momentum to the pool.
Criminal Understanding|Orion, or GM permission|When trying to understand intrigue, guile, hidden schemes, or concealed meanings, roll 1 additional d20.
Mental Imaging|Qofuari, or GM permission|When attempting a Reason task, reroll 1d20. On a successful time-pressured Reason task, reduce the Momentum cost to reduce time by 1.
Nimble|Qofuari, or GM permission|When attempting a Fitness test to maneuver through water, a tight space, or while climbing, gain 1 additional d20.
Silent Scream|VinShari|Use the silent scream as a ranged weapon with 2 challenge dice, Area, and Piercing 1. Other VinShari with this talent may assist, adding 1 challenge die each.
Vocal Gymnastics|VinShari|Mimic any heard voice and most non-vocal sounds accurately enough to fool computer analysis; when distracting or deceiving with mimicry, reroll your entire dice pool.
  `.trim(),
  valueAdditions: ["Everything is a Deal"],
  focusAdditions: {
    Command: [
      "Administration",
      "Akaru Law",
      "Bureaucracy",
      "Carousing",
      "Cultural Studies",
      "Education",
      "Fleet Operations",
      "Leadership",
      "Logistics",
      "Meditation",
      "Meditation Techniques",
      "Political Science",
      "Propaganda",
      "Retail Operations"
    ],
    Conn: [
      "Evasive Maneuvers",
      "Flight Deck Operations",
      "Small Craft Operations"
    ],
    Engineering: [
      "Ancient Technologies",
      "Computer Maintenance",
      "Holo-technology",
      "Small Craft Systems",
      "Starship Systems",
      "Tilikaal Engineering",
      "Tilikaal Transporter Systems",
      "Tilikaal Transporter Technology",
      "Transporters/Replicators"
    ],
    Security: [
      "Battle Tactics",
      "Black Market Operations",
      "Bladed Weapons",
      "Close Quarters Combat",
      "Covert Operations",
      "Criminology",
      "Federation Security Protocols",
      "Hand-to-Hand Combat",
      "Law Enforcement Procedures",
      "Lockdown Procedures",
      "Military Tactics",
      "Orion Syndicate Operations",
      "Physical Fitness Instruction",
      "Security Procedures",
      "Shipboard Tactical Systems",
      "Sleight-of-hand",
      "Starship Tactical Systems",
      "Starship Tactics",
      "Starship Weaponry",
      "Stick Fighting",
      "Subterfuge",
      "Survival",
      "Unconventional Melee Weapons"
    ],
    Medicine: [
      "Psychology",
      "Resilience",
      "Triage Operations",
      "Xenoanatomy"
    ],
    Science: [
      "Astroentomology",
      "Biology",
      "Fluid Mechanics",
      "Logic",
      "Observation",
      "Prism Physics",
      "Spatial Phenomena",
      "Theoretical Physics",
      "Unorthodox Mathematics",
      "Xenoanatomy",
      "Xenoanthropology",
      "Xenoarchaeology",
      "Xenobiology"
    ]
  }
};
