const STORAGE_KEY = "sta2e-dashboard:v1";

const attributes = ["Control", "Daring", "Fitness", "Insight", "Presence", "Reason"];
const departments = ["Command", "Conn", "Engineering", "Medicine", "Science", "Security"];
const shipSystems = ["Comms", "Computers", "Engines", "Sensors", "Structure", "Weapons"];
const shipDepartments = ["Command", "Conn", "Engineering", "Medicine", "Science", "Security"];

const characterTypes = {
  main: {
    label: "Main character",
    attributeArray: [10, 10, 9, 9, 8, 7],
    departmentNote: "Fill all six departments. Creation in Play starts with either 5/3 or 4/4, and the remaining ratings are 3, 2, 2, and 1.",
    departmentArrays: [
      [5, 3, 3, 2, 2, 1],
      [4, 4, 3, 2, 2, 1]
    ],
    focusCount: 0,
    valueCount: 1,
    page: "pp. 142-143"
  },
  support: {
    label: "Supporting character",
    attributeArray: [10, 9, 9, 8, 8, 7],
    departmentArray: [4, 3, 2, 2, 1, 1],
    focusCount: 3,
    valueCount: 0,
    page: "pp. 145-146"
  },
  supervisory: {
    label: "Supervisory supporting character",
    attributeArray: [10, 10, 9, 9, 8, 8],
    departmentArray: [4, 4, 3, 2, 2, 1],
    focusCount: 4,
    valueCount: 1,
    page: "p. 146"
  }
};

const creationSteps = [
  ["Choose role", "Decide the character's job in the crew, division, broad purpose, and starting equipment."],
  ["Assign attributes", "Assign 10, 10, 9, 9, 8, and 7 before species modifiers."],
  ["Choose species", "Record species trait and ability, then apply species attribute increases."],
  ["Assign primary departments", "Choose two starting departments: either 5 and 3, or two 4s."],
  ["Choose one value", "Write one value that expresses the character concept."],
  ["Begin play", "Leave remaining values, departments, focuses, talents, and pastimes to be defined in play."]
];

const wizardSteps = {
  main: [
    ["mode", "Mode"],
    ["concept", "Role"],
    ["attributes", "Attributes"],
    ["species", "Species"],
    ["departments", "Departments"],
    ["value", "Value"],
    ["focuses", "Focuses"],
    ["talents", "Talents"],
    ["review", "Review"]
  ],
  support: [
    ["mode", "Mode"],
    ["purpose", "Purpose"],
    ["attributes", "Attributes"],
    ["species", "Species"],
    ["departments", "Departments"],
    ["focuses", "Focuses"],
    ["talents", "Talents"],
    ["finish", "Finish"],
    ["review", "Review"]
  ],
  supervisory: [
    ["mode", "Mode"],
    ["purpose", "Purpose"],
    ["attributes", "Attributes"],
    ["species", "Species"],
    ["departments", "Departments"],
    ["focuses", "Focuses"],
    ["value", "Value"],
    ["talents", "Talents"],
    ["finish", "Finish"],
    ["review", "Review"]
  ]
};

const roleExamples = [
  ["Commanding Officer", "Responsible for the vessel, station, or mission command."],
  ["Executive Officer", "Second-in-command and chief advisor to the commanding officer."],
  ["Operations Manager", "Coordinates technical operations and ship resources."],
  ["Chief Engineer", "Leads engineering and keeps the ship operational."],
  ["Chief of Security", "Leads security, safety, and investigations."],
  ["Chief Tactical Officer", "Maintains and operates ship weapons and combat systems."],
  ["Flight Controller", "Pilots the vessel and handles helm operations."],
  ["Navigator", "Plots courses, charts hazards, and supports helm."],
  ["Science Officer", "Advises on scientific matters and leads scientific analysis."],
  ["Chief Medical Officer", "Leads medical care and crew health."],
  ["Ship's Doctor", "Provides medical care for a smaller crew or facility."],
  ["Counselor", "Supports mental well-being and cultural/psychological insight."],
  ["Communications Officer", "Handles translation, encryption, and communications systems."],
  ["Expert", "A specialist consultant focused on one field."],
  ["Intelligence Agent", "Gathers information through agency resources and contacts."],
  ["Bodyguard", "Protects an assigned person from danger."],
  ["Merchant", "Handles trade, unusual goods, and commercial contacts."],
  ["Political Liaison", "Represents a government or organization."],
  ["Translator", "Specializes in languages and communication."]
];

const rankExamples = [
  "Fleet Admiral",
  "Admiral",
  "Vice-Admiral",
  "Rear Admiral",
  "Commodore",
  "Fleet Captain",
  "Captain",
  "Commander",
  "Lieutenant Commander",
  "Lieutenant",
  "Lieutenant Junior Grade",
  "Ensign",
  "Cadet",
  "Master Chief Petty Officer",
  "Senior Chief Petty Officer",
  "Chief Petty Officer",
  "Petty Officer 1st Class",
  "Petty Officer 2nd Class",
  "Petty Officer 3rd Class",
  "Crewman 1st Class",
  "Crewman 2nd Class",
  "Crewman 3rd Class",
  "Doctor",
  "Professor",
  "Ambassador"
];

const speciesExamples = [
  { name: "Aenar", attributes: "+1 Control, +1 Insight, +1 Presence", trait: "Aenar", ability: "Telepathic", reminder: "Can sense and communicate telepathically within the limits set by the GM.", values: ["Peace is the better path", "Silence reveals truth", "I will not be overlooked"] },
  { name: "Andorian", attributes: "+1 Control, +1 Daring, +1 Presence", trait: "Andorian", ability: "Intense", reminder: "Personal conviction can turn a strong success into extra momentum.", values: ["Never back down", "My family name is my honor", "Action is better than hesitation"] },
  { name: "Bajoran", attributes: "+1 Control, +1 Daring, +1 Insight", trait: "Bajoran", ability: "The Will of the Prophets", reminder: "Faith and conviction can help when a value is relevant.", values: ["Faith carries me forward", "Never forget the occupation", "The Prophets guide my path"] },
  { name: "Betazoid", attributes: "+1 Insight, +1 Presence, +1 Reason", trait: "Betazoid", ability: "Telepathic", reminder: "Telepathy or empathy can reveal emotional states and surface thoughts as appropriate.", values: ["Honesty is more than words", "Emotions tell their own truth", "No one should suffer alone"] },
  { name: "Cardassian", attributes: "+1 Control, +1 Presence, +1 Reason", trait: "Cardassian", ability: "Healthy Suspicions", reminder: "Suspicion and preparation can help detect deception or hidden danger.", values: ["Order preserves civilization", "Trust must be earned", "Secrets are tools"] },
  { name: "Denobulan", attributes: "+1 Fitness, +1 Insight, +1 Reason", trait: "Denobulan", ability: "Breadth of Study", reminder: "Broad education makes it easier to connect different fields of knowledge.", values: ["Curiosity is a civic duty", "Many families mean many obligations", "There is always another perspective"] },
  { name: "Ferengi", attributes: "+1 Control, +1 Insight, +1 Presence", trait: "Ferengi", ability: "See the Opportunity", reminder: "Commercial instinct can reveal leverage, useful resources, or profitable angles.", values: ["Everything has a price", "Opportunity favors the prepared", "A deal is a promise with teeth"] },
  { name: "Human", attributes: "+1 to any three attributes", trait: "Human", ability: "Faith of the Heart", reminder: "Adaptability and conviction help humans push through difficult moments.", values: ["To boldly go", "We are stronger together", "The mission comes first"] },
  { name: "Klingon", attributes: "+1 Daring, +1 Fitness, +1 Presence", trait: "Klingon", ability: "Brak'lul", reminder: "Hardy physiology provides extra resilience.", values: ["Honor above comfort", "Today is a good day to act", "Cowardice is the only defeat"] },
  { name: "Orion", attributes: "+1 Daring, +1 Fitness, +1 Presence", trait: "Orion", ability: "Never at Face Value", reminder: "Experience with deception and reputation can help in social maneuvering.", values: ["Never show every card", "My past does not own me", "Freedom is worth any risk"] },
  { name: "Romulan", attributes: "+1 Control, +1 Fitness, +1 Reason", trait: "Romulan", ability: "Paranoia", reminder: "Caution and suspicion help prepare for betrayal or concealed threats.", values: ["Trust is a tactical choice", "The state sees everything", "Secrets keep people alive"] },
  { name: "Tellarite", attributes: "+1 Control, +1 Fitness, +1 Insight", trait: "Tellarite", ability: "Sturdy", reminder: "Tough physiology grants extra resilience.", values: ["A good argument clarifies everything", "Politeness wastes time", "I was built to endure"] },
  { name: "Trill", attributes: "+1 Control, +1 Presence, +1 Reason", trait: "Trill", ability: "Patient", reminder: "Patience and perspective help when taking time to approach a problem.", values: ["The past is never finished", "Patience reveals the pattern", "I carry more than my own story"] },
  { name: "Vulcan", attributes: "+1 Control, +1 Fitness, +1 Reason", trait: "Vulcan", ability: "Mind-Meld", reminder: "Disciplined telepathic contact can share thoughts and memories with consent.", values: ["Logic is the beginning of wisdom", "The needs of the many", "Emotion acknowledged is emotion mastered"] }
];

const sampleValues = [
  "A good mystery is irresistible",
  "Act with confidence, even if you don't feel confident",
  "Always up for an adventure",
  "Build relationships",
  "Crew comes first",
  "Diplomacy is the first and last solution to anything",
  "Every puzzle has a solution",
  "Exploration is the blood that fills my veins",
  "Friends are the family you choose",
  "Good leaders get their hands dirty",
  "I am surrounded by a team I trust",
  "I can make something from nothing",
  "I finish what I start",
  "I fix what is broken",
  "I study war to learn from the best",
  "Information is power",
  "Keep a smile on your face no matter how you feel",
  "Listen to opposing viewpoints",
  "Loyalty matters most",
  "Never hide who you are",
  "Never leave a stone unturned",
  "Our best defense is knowledge",
  "Patience is a virtue",
  "Resistance is never futile",
  "Space really wants us dead",
  "Starfleet to the core",
  "Teamwork makes for success",
  "Technology is simpler than people",
  "The Academy taught me 10 percent of what I know",
  "The crew is my family",
  "The mission comes first",
  "To boldly go where no one has gone before",
  "We are all connected despite being worlds apart",
  "We are stronger united than apart",
  "Well-placed words are deadlier than a phaser",
  "Willing to sacrifice myself to save my crew"
];

const sampleFocuses = {
  Command: ["Art", "Bargain", "Composure", "Cultural Expert", "Debate", "Deception", "Diplomacy", "Emotional Intelligence", "Etiquette", "Gambling", "History", "Inspiration", "Intimidation", "Journalism", "Law", "Linguistics", "Mental Discipline", "Negotiation", "Persuasion", "Philosophy", "Politics", "Prime Directive", "Rhetoric", "Starfleet Protocols", "Station Operations"],
  Conn: ["Astronavigation", "Astrophysics", "Atmospheric Flight", "Boat Pilot / Submersibles", "Climbing", "Combat Maneuvers", "Communication Systems", "Evacuation Procedures", "Evasive Action", "Extra-Vehicular Activity", "Flight Controller", "Ground Vehicles", "Guidance Systems", "Helm Operations", "Impulse Engines", "Power Management", "Precision Maneuvering", "Repairs and Maintenance", "Ship Design and Construction", "Shuttlebay Management", "Small Craft", "Space Station Operations", "Starfleet Protocols", "Starship Expert", "Starship Recognition", "Stellar Cartography", "Subspace Theory"],
  Engineering: ["Advanced Holograms", "Cybernetics", "Deflector Systems", "Diagnostics", "Electro-Plasma Systems", "Emergency Repairs", "Energy Weapons", "EVA Suits", "Experimental Device", "Flight Control Systems", "Forcefields", "Imaging Equipment", "Impulse Fundamentals", "Jury-Rigging", "Locksmith", "Manufacturing", "Mining Operations", "Modeling & Design", "Percussive Maintenance", "Propulsion", "Reverse Engineering", "Saboteur", "Salvage", "Sensor Calibration", "Shuttlecraft Maintenance", "Structural Engineering", "Subspace Mechanics"],
  Security: ["Ambush Tactics", "Blade Weapons", "Camouflage", "Chemical and Biological Weapons", "Combat Medic", "Computer Security Systems", "Criminal Organizations", "Crisis Management", "Deflector Operations", "Demolitions", "Espionage", "Evacuation Procedures", "Fleet Formations", "Forensics", "Hand Phasers", "Hazardous Environments", "Interrogation", "Intimidation", "Lead Investigator", "Martial Arts", "Mental Resistance Techniques", "Phasers", "Pickpocketing", "Security Systems", "Ship Engagement Tactics", "Ship Lockdown Procedures", "Small Unit Tactics"],
  Medicine: ["Alternative Medicine", "Anesthesia / Pain Management", "Biotechnology", "Counseling", "Dentistry", "Emergency Medicine", "Ethics", "Field Medic", "First Aid", "Genetics", "Guided Therapy", "Imaging Systems", "Immunology", "Internal Medicine", "Kinesiology", "Medical Toxicology", "Microbiology", "Neuropsychology / Psychiatry", "Parapsychology", "Patient Care", "Pediatrics", "Pharmacology", "Psychiatry", "Psychoanalysis", "Psychosomatic Disorders", "Rheumatology", "Stress Disorders"],
  Science: ["Animal Behavior", "Anthropology", "Archaeology", "Astrometrics", "Biochemistry", "Biology / Xenobiology", "Botany / Xenobotany", "Catastrophism", "Chemistry", "Deflector Operations", "Ecology", "Geology", "Laboratory Maintenance", "Marine Biology", "Meteorology", "Microbiology", "Physics", "Prototyping", "Quantum Mechanics", "Rapid Analysis", "Research", "Sensor Operations", "Sociology", "Specific Historical Time Period", "Starfleet Programming", "Subspace Theory", "Temporal Mechanics"]
};

const talentExamples = {
  General: [
    ["Back-Up Plans", "Control 9+"],
    ["Bold (X)", "Department-specific"],
    ["Calm and Logical", "Reason 11+"],
    ["Cautious (X)", "Department-specific"],
    ["Close-Knit Crew", "Supporting character"],
    ["Collaboration (X)", "Department-specific"],
    ["Constantly Watching", "Fitness 9+"],
    ["Dauntless", "Fitness 11+"],
    ["Extra Effort", "Insight 11+"],
    ["Gut Feeling", "Reason 9+"],
    ["Methodical Planning", "Control 11+"],
    ["No Hesitation", "Daring 9+"],
    ["No Pain, No Gain", "Daring 11+"],
    ["Personal Effects", "Main character"],
    ["Quick Survey", "Insight 9+"],
    ["Reassuring", "Presence 9+"],
    ["Second Wind", "Presence 11+"],
    ["Studious", "Reason 9+"],
    ["Technical Expertise", "Control 9+"],
    ["Voice of Authority", "Presence 11+"],
    ["Well-Informed", "Presence 9+"]
  ],
  "Species and Culture": [
    ["Abrupt Insights", "Betazoid or GM permission"],
    ["Acute Senses", "Aenar or GM permission"],
    ["Asking the Right Questions", "Tellarite or GM permission"],
    ["Cultural Flexibility", "Denobulan or GM permission"],
    ["Former Initiate", "Trill or GM permission"],
    ["Guile and Cunning", "Orion or GM permission"],
    ["Incisive Scrutiny", "Tellarite or GM permission"],
    ["Joined", "Trill or GM permission"],
    ["Killer's Instinct", "Klingon or GM permission"],
    ["Mind Meld", "Vulcan or GM permission"],
    ["Nerve Pinch", "Vulcan or GM permission"],
    ["Never Place Friendship Above Profit", "Ferengi or GM permission"],
    ["Open Book", "Betazoid or GM permission"],
    ["Orb Experience", "Bajoran or GM permission"],
    ["Parent Figure", "Denobulan or GM permission"],
    ["Pheromones", "Orion female or GM permission"],
    ["Proud and Honorable", "Andorian or GM permission"],
    ["Regimented Mind", "Cardassian or GM permission"],
    ["Resolute", "Human or GM permission"],
    ["Spirit of Discovery", "Human or GM permission"],
    ["Strong Pagh", "Bajoran or GM permission"],
    ["The Ends", "Cardassian or GM permission"],
    ["The Ushaan", "Andorian or GM permission"],
    ["Wary", "Romulan or GM permission"],
    ["Warrior's Spirit", "Klingon or GM permission"]
  ],
  "Augment, Cybernetic, Esoteric": [
    ["Augmented Ability", "Augment trait"],
    ["Durability", "Augment or Cyborg trait"],
    ["Empathy", "Empathy"],
    ["Extrasensory Perception", "ESP"],
    ["Psychokinesis", "Psychokinesis"],
    ["Sensory Replacement", "Cyborg trait"],
    ["Telepathy", "Telepathy"],
    ["Telepathic Projection", "Telepathy"]
  ],
  Command: [
    ["Advanced", "Command 4+, main character"],
    ["Advisor", "Command 2+"],
    ["Call Out Targets", "Command 3+ and Security 3+"],
    ["Call to Action", "Command 3+"],
    ["Cold Reading", "Command 4+"],
    ["Coordinated Efforts", "Command 4+"],
    ["Decisive Leadership", "Command 4+"],
    ["Defuse the Tension", "Command 3+"],
    ["Follow My Lead", "Command 3+"],
    ["Multi-Discipline", "Command 3+"],
    ["Plan of Action", "Command 4+"],
    ["Precautions", "Command 4+"],
    ["Supervisor", "Main character"],
    ["Teacher", "Command 3+"]
  ],
  Conn: [
    ["Attack Run", "Conn 4+"],
    ["Covering Advance", "Conn 3+"],
    ["Efficient Evasion", "Conn 3+"],
    ["Fly-By", "Conn 2+"],
    ["Glancing Impact", "Conn 4+"],
    ["Hands-on Pilot", "Conn 3+ and Engineering 3+"],
    ["Spacewalk", "Conn 3+"],
    ["Starship Expert", "Conn 3+"],
    ["Strafing Run", "Conn 3+"],
    ["Thread the Needle", "Conn 4+"],
    ["Visit Every Star", "Conn 3+ and Science 2+"],
    ["Zero-G Combat", "Conn 3+ and Security 3+"]
  ],
  Engineering: [
    ["I Know My Ship", "Engineering 4+"],
    ["I'm Giving It All She's Got", "Engineering 4+"],
    ["Maintenance Specialist", "Engineering 3+"],
    ["Meticulous", "Engineering 3+ and Control 10+"],
    ["Miracle Worker", "Engineering 5"],
    ["More Power!", "Engineering 3+"],
    ["Past the Redline", "Engineering 4+ and Daring 9+"],
    ["Percussive Maintenance", "Engineering 4+"],
    ["Procedural Compliance", "Engineering 3+ and Conn 2+"],
    ["Repair Team Leader", "Engineering 3+ and Command 2+"],
    ["Right Tool for the Job", "Engineering 3+"],
    ["Saboteur", "Engineering 3+"],
    ["Transporter Chief", "Engineering 3+"]
  ],
  Security: [
    ["Ambush Tactics", "Security 3+"],
    ["Applied Force", "Security 4+ and Fitness 9+"],
    ["Close Protection", "Security 4+"],
    ["Fire at Will", "Security 3+"],
    ["Get Down!", "Security 2+"],
    ["Interrogation", "Security 3+"],
    ["Lead Investigator", "Security 3+ or Conn 3+"],
    ["Martial Artist", "Security 4+"],
    ["Mean Right Hook", "Security 4+"],
    ["Pack Tactics", "Security 4+"],
    ["Piercing Salvo", "Security 4+"],
    ["Quick to Action", "Security 3+"],
    ["Steady Hands", "Security 3+ and Control 9+"]
  ],
  Science: [
    ["Applied Research", "Science 3+"],
    ["Dedicated Focus (X)", "Science 4+"],
    ["Did the Reading", "Science 4+"],
    ["Expedition Expert", "Science 3+ and Fitness 9+"],
    ["Intense Scrutiny", "Engineering 3+ or Science 3+"],
    ["Lab Rat", "Science 3+ and Engineering 3+"],
    ["Learn from Failure", "Science 4+"],
    ["Mental Repository", "Science 3+ and Reason 10+"],
    ["Rapid Analysis", "Science 3+ and Daring 9+"],
    ["Rapid Hypothesis", "Science 5"],
    ["Student of War", "Science 4+ and Security 3+"],
    ["Testing a Theory", "Science 2+"],
    ["Theory into Practice", "Science 3+ and Testing a Theory"],
    ["Walking Encyclopedia", "Science 2+ and Reason 9+"]
  ],
  Medicine: [
    ["Bedside Manner", "Command 3+ and Medicine 3+"],
    ["Chief of Staff", "Medicine 3+ and Command 3+"],
    ["Combat Medic", "Medicine 3+ and Security 2+"],
    ["Cutting Edge Medicine", "Medicine 4+"],
    ["Fellowship Specialty", "Medicine 4+"],
    ["Field Medicine", "Medicine 4+"],
    ["First Response", "Medicine 3+"],
    ["Insightful Guidance", "Command 2+ and Medicine 3+"],
    ["Positive Reinforcement", "Ship's Counselor, Medicine 3+"],
    ["Practice Makes Perfect", "Medicine 3+ and Reason 8+"],
    ["Psychoanalyst", "Medicine 3+ and psychology focus"],
    ["Quick Study", "Science 3+ or Medicine 3+"],
    ["Stimulant Shot", "Medicine 3+"]
  ]
};

const talentSummaries = {
  "Back-Up Plans": "Gain a preparedness benefit when earlier planning or backup resources matter.",
  "Bold (X)": "When attempting the chosen department, use risky success to generate extra Momentum.",
  "Calm and Logical": "Use disciplined reasoning to steady yourself under pressure.",
  "Cautious (X)": "When attempting the chosen department carefully, reduce the risk from complications.",
  "Close-Knit Crew": "Improves how a recurring supporting character connects to and benefits the crew.",
  "Collaboration (X)": "When a trait supports teamwork in the chosen department, make assistance stronger.",
  "Constantly Watching": "Stay alert for danger and react better to sudden threats.",
  "Dauntless": "Resist fear, intimidation, and similar pressure more effectively.",
  "Extra Effort": "Push through strain to gain a stronger result when the situation demands it.",
  "Gut Feeling": "Use instinct to get a useful read on a situation before all facts are known.",
  "Methodical Planning": "Planning before action can make later tasks more reliable.",
  "No Hesitation": "Act decisively when speed matters and avoid losing momentum to delay.",
  "No Pain, No Gain": "Endure harm or stress to keep acting effectively.",
  "Personal Effects": "Begin with an unusual personal item that can matter mechanically in play.",
  "Quick Survey": "Rapidly gather extra useful information from a new place or situation.",
  "Reassuring": "Help others recover composure or resist emotional pressure.",
  "Second Wind": "Recover enough stamina or stress capacity to stay in the scene.",
  "Studious": "Research and preparation make knowledge tasks more reliable.",
  "Technical Expertise": "Improve tasks involving technical systems such as computers or sensors.",
  "Voice of Authority": "Commanding presence makes orders and social pressure more effective.",
  "Well-Informed": "Leverage broad contacts or prior knowledge to ask better questions.",
  "Abrupt Insights": "Telepathic or empathic flashes can reveal a sudden useful detail.",
  "Acute Senses": "Heightened senses improve perception and detection tasks.",
  "Asking the Right Questions": "Tellarite argument and inquiry help extract useful information.",
  "Cultural Flexibility": "Adapt quickly to unfamiliar customs or social expectations.",
  "Former Initiate": "Draw on Trill initiate training and knowledge of joined culture.",
  "Guile and Cunning": "Use deception, reputation, or misdirection to gain an edge.",
  "Incisive Scrutiny": "Analyze a target through pointed questions and sharp observation.",
  "Joined": "Access the depth of experience provided by a Trill symbiont.",
  "Killer's Instinct": "In lethal situations, exploit an enemy's vulnerability more efficiently.",
  "Mind Meld": "Perform a Vulcan mind meld to share thoughts, memories, or impressions.",
  "Nerve Pinch": "Use the Vulcan nerve pinch as a special close-combat option.",
  "Never Place Friendship Above Profit": "Ferengi priorities create advantages in negotiation or acquisition.",
  "Open Book": "Use emotional openness or telepathic sensitivity to improve social reads.",
  "Orb Experience": "A Bajoran spiritual encounter provides insight or conviction in play.",
  "Parent Figure": "Denobulan social experience helps support and guide others.",
  "Pheromones": "Use Orion pheromones as a social influence tool when appropriate.",
  "Proud and Honorable": "Andorian honor strengthens resistance to coercion and dishonor.",
  "Regimented Mind": "Cardassian discipline helps resist mental intrusion or manipulation.",
  "Resolute": "Human resolve helps push through adversity.",
  "Spirit of Discovery": "Human curiosity improves exploration and first-contact moments.",
  "Strong Pagh": "Bajoran faith and spirit provide resilience or conviction.",
  "The Ends": "Cardassian pragmatism helps justify harsh measures when stakes are high.",
  "The Ushaan": "Andorian duel tradition grants a combat-oriented benefit.",
  "Wary": "Romulan caution helps anticipate betrayal or ambush.",
  "Warrior's Spirit": "Klingon ferocity improves direct confrontation.",
  "Augmented Ability": "An augment enhances a selected attribute or capability.",
  "Durability": "Genetic or cybernetic resilience improves resistance to harm.",
  "Empathy": "Sense emotions and use that information in social scenes.",
  "Extrasensory Perception": "Gain limited nonstandard perception beyond normal senses.",
  "Psychokinesis": "Move or influence objects with mental power under suitable conditions.",
  "Sensory Replacement": "Cybernetic senses compensate for or enhance perception.",
  "Telepathy": "Sense or communicate thoughts within the limits of the ability.",
  "Telepathic Projection": "Project thoughts or impressions into another mind.",
  "Advanced": "Improve supporting-character introduction or development options.",
  "Advisor": "Assisting with Command can provide stronger guidance to an ally.",
  "Call Out Targets": "Command allies toward weak points during attacks.",
  "Call to Action": "Rally allies into immediate action.",
  "Cold Reading": "Read a person quickly and gain useful social information.",
  "Coordinated Efforts": "Assistance during extended tasks becomes more effective.",
  "Decisive Leadership": "Command decisions help the group act with less hesitation.",
  "Defuse the Tension": "Persuasion can reduce conflict before it escalates.",
  "Follow My Lead": "Allies benefit when acting according to your direction.",
  "Multi-Discipline": "Apply Command across another field more flexibly.",
  "Plan of Action": "A declared plan creates a stronger path for team tasks.",
  "Precautions": "Prepared safeguards reduce the consequences of failure.",
  "Supervisor": "Improve how main characters manage and develop supporting characters.",
  "Teacher": "Training or instruction helps allies improve their attempts.",
  "Attack Run": "Helm action can set up stronger attacks during ship combat.",
  "Covering Advance": "Movement can protect allies or support tactical positioning.",
  "Efficient Evasion": "Evasive piloting can reduce risk or cost.",
  "Fly-By": "Evasive Action no longer penalizes your own ship's attacks in the usual way.",
  "Glancing Impact": "Reduce or exploit consequences from close maneuvering and collisions.",
  "Hands-on Pilot": "Ignore or reduce penalties from environmental piloting problems.",
  "Spacewalk": "Move and act effectively in EVA and zero-gravity situations.",
  "Starship Expert": "Recognize and analyze starship types more effectively.",
  "Strafing Run": "Attack Pattern can provide extra movement or attack pressure.",
  "Thread the Needle": "Navigate tight, hazardous, or precise courses more safely.",
  "Visit Every Star": "Long experience with travel improves navigation and exploration.",
  "Zero-G Combat": "Fight effectively in low- or zero-gravity conditions.",
  "I Know My Ship": "Deep familiarity with your vessel improves technical problem-solving.",
  "I'm Giving It All She's Got": "Push ship systems beyond normal limits for a short time.",
  "Maintenance Specialist": "Engineering maintenance improves extended repair work.",
  "Meticulous": "Careful engineering reduces risk from technical complications.",
  "Miracle Worker": "Exceptional engineering can overcome severe technical problems.",
  "More Power!": "Generate or reroute power more effectively.",
  "Past the Redline": "Push systems past limits for performance at added risk.",
  "Percussive Maintenance": "Quick improvised fixes can restore function in the moment.",
  "Procedural Compliance": "Following procedures improves technical safety and consistency.",
  "Repair Team Leader": "Direct repair teams more effectively during emergencies.",
  "Right Tool for the Job": "Having or acquiring the proper tool improves engineering tasks.",
  "Saboteur": "Disable or undermine systems more effectively.",
  "Transporter Chief": "Transporter operations become more reliable or flexible.",
  "Ambush Tactics": "Gain an advantage when attacking unaware or vulnerable targets.",
  "Applied Force": "Use physical strength more effectively in melee combat.",
  "Close Protection": "Protect nearby allies from attacks more effectively.",
  "Fire at Will": "Coordinate weapon fire more aggressively.",
  "Get Down!": "Help an ally avoid or reduce an incoming attack.",
  "Interrogation": "Coercive questioning becomes more effective.",
  "Lead Investigator": "Evidence analysis yields more useful information.",
  "Martial Artist": "Unarmed combat becomes more effective.",
  "Mean Right Hook": "Improve direct melee strikes.",
  "Pack Tactics": "Allied attacks become stronger when you coordinate pressure.",
  "Piercing Salvo": "Ship attacks can better target or penetrate defenses.",
  "Quick to Action": "Act early or respond quickly when combat begins.",
  "Steady Hands": "Careful aim improves precision under pressure.",
  "Applied Research": "Use research to support practical action in the field.",
  "Dedicated Focus (X)": "A chosen scientific focus becomes especially potent.",
  "Did the Reading": "Prior study makes knowledge checks more reliable.",
  "Expedition Expert": "Field science and exploration work become more effective.",
  "Intense Scrutiny": "Detailed analysis reveals extra information.",
  "Lab Rat": "Laboratory work and experiments become more reliable.",
  "Learn from Failure": "Failed scientific attempts can still produce useful progress.",
  "Mental Repository": "Retain and recall large amounts of useful knowledge.",
  "Rapid Analysis": "Analyze information quickly during urgent scenes.",
  "Rapid Hypothesis": "Form useful theories quickly from incomplete evidence.",
  "Student of War": "Apply scientific analysis to tactical situations.",
  "Testing a Theory": "Use experimentation to create progress or advantages.",
  "Theory into Practice": "Turn scientific theory into direct practical benefits.",
  "Walking Encyclopedia": "Recall broad facts and context on demand.",
  "Bedside Manner": "Medical care also reassures and supports the patient.",
  "Chief of Staff": "Coordinate medical personnel more effectively.",
  "Combat Medic": "Provide medical aid under fire more effectively.",
  "Cutting Edge Medicine": "Use advanced medicine to attempt difficult treatments.",
  "Fellowship Specialty": "A chosen medical specialty becomes especially effective.",
  "Field Medicine": "Treat injuries in rough or improvised conditions.",
  "First Response": "React quickly to injuries and emergencies.",
  "Insightful Guidance": "Use medical or psychological insight to guide others.",
  "Positive Reinforcement": "Counseling and support help others recover emotionally.",
  "Practice Makes Perfect": "Repeated medical practice improves consistency.",
  "Psychoanalyst": "Psychological care and analysis become more effective.",
  "Quick Study": "Adapt quickly to unfamiliar medical or scientific problems.",
  "Stimulant Shot": "Use medicine to revive or temporarily bolster someone."
};

const standardEquipment = [
  "Uniforms",
  "Communicator",
  "Tricorder",
  "Sidearm for Starfleet or military characters",
  "Duty tools such as engineering toolkit or medkit when appropriate",
  "Personal effects and accessibility/support equipment as needed"
];

Object.assign(talentSummaries, {
  "Back-Up Plans": "When you or a present ally fails a task, add 1 Momentum to the group pool.",
  "Bold (X)": "For the chosen department, if you buy 1+ d20 by adding Threat, reroll 1 d20.",
  "Calm and Logical": "Suppress an emotional/mood trait for 1 task or 1 combat turn by suffering 1 Stress.",
  "Cautious (X)": "For the chosen department, if you buy 1+ d20 with Momentum, reroll 1 d20.",
  "Close-Knit Crew": "At scene start, if group Momentum is below the number of present characters with this talent, add 1 Momentum.",
  "Collaboration (X)": "Spend 1 Momentum Immediate so an ally using the chosen department can use your department rating and one relevant focus.",
  "Constantly Watching": "NPCs cost +2 Threat to take the first turn in an action scene; reroll 1d20 to locate hidden enemies or dangers.",
  "Dauntless": "When threatened or intimidated, suffer 2 Stress to ignore the attempt.",
  "Extra Effort": "Reduce a task's Difficulty by 1, minimum 0; after the task, take Stress equal to the original Difficulty.",
  "Gut Feeling": "When the GM introduces reinforcements or a Reversal with Threat, it costs +2 Threat total.",
  "Methodical Planning": "If an ally benefits from a planning/strategy trait you created, you may Assist even when absent; in combat it does not use your task.",
  "No Hesitation": "At the start of an action-scene round, add 1 Threat to take the first turn.",
  "No Pain, No Gain": "When you fail a non-opposed Daring task, you may Succeed at Cost.",
  "Personal Effects": "Gain one significant, uncommon non-standard item useful on missions; may be selected multiple times for different items.",
  "Quick Survey": "At scene start, ask 1 Obtain Information question using only what your senses could perceive.",
  "Reassuring": "After succeeding with Presence, spend 1 Momentum Repeatable; one ally who sees/hears you recovers 1 Stress, max 3 Stress per use.",
  "Second Wind": "Spend Determination at start of your turn to remove Defeated and recover up to half maximum Stress.",
  "Studious": "When spending Momentum to Obtain Information, ask 1 extra question total.",
  "Technical Expertise": "On a task assisted by ship Computers or Sensors, reroll 1 of your d20s or the ship's assist d20.",
  "Voice of Authority": "When assisting with Presence, add 2 Threat to count your assist die as a 1 instead of rolling.",
  "Well-Informed": "At scene start, add 1 Threat to ask 2 Obtain Information questions based on contacts, news, or rumors.",
  "Abrupt Insights": "In social conflict, increase complication range by 1-3; on success, gain equal bonus Momentum.",
  "Acute Senses": "Reroll 1d20 when detecting something hidden from conventional senses or hard to perceive.",
  "Asking the Right Questions": "When a task relates to answers from Obtain Information earlier in the scene, reroll 1d20.",
  "Cultural Flexibility": "When learning about an unfamiliar culture or acting appropriately within one, reroll 1d20.",
  "Former Initiate": "When using Control or Reason and spending Determination to set a die to 1, reroll the dice pool after rolling; incompatible with Joined.",
  "Guile and Cunning": "When hiding or concealing your actions, add 1 Threat to increase the Difficulty to detect you or reveal your actions by +1.",
  "Incisive Scrutiny": "After succeeding at a task using Control or Insight, ask 1 Obtain Information question.",
  "Joined": "Gain the symbiont as an extra trait; up to twice per adventure, declare a past host expertise to gain 1 focus for the rest of that adventure.",
  "Killer's Instinct": "Deadly Attacks add 0 Threat; when an enemy makes a Deadly Attack against you, add 1 Threat to increase its Difficulty by 1.",
  "Mind Meld": "Physical-contact telepathy requires a task, usually Control + Science, Difficulty at least 1 and opposed if unwilling; success links thoughts and memories.",
  "Nerve Pinch": "Make a Melee Attack that inflicts Stun Injury Severity 3 with Intense; use Science or Medicine instead of Security.",
  "Never Place Friendship Above Profit": "When assisting or using Direct and complications occur, add 1 Threat to avoid the ill effect for yourself.",
  "Open Book": "When a character enters a scene, spend 1 Momentum Immediate to ask 1 question about current emotions or surface thoughts.",
  "Orb Experience": "Gain 1 additional value; once per session when using it, either choose 2 Determination-spend options or gain 2 Determination instead of 1.",
  "Parent Figure": "When 2+ other characters are involved in a task you attempt or assist, ignore the first complication from the acting character or assistants.",
  "Pheromones": "Against affected males, gain 2 bonus Momentum on persuade or command tasks; affected females increase interaction complication range by 1.",
  "Proud and Honorable": "To resist dishonorable coercion, add Threat equal to task Difficulty to immediately succeed.",
  "Regimented Mind": "After spending Momentum to Obtain Information, reduce Difficulty of one related task later in the scene by 1.",
  "Resolute": "Increase maximum Stress by your Command rating.",
  "Spirit of Discovery": "Adds a Determination option: immediately add 3 Momentum to the group pool.",
  "Strong Pagh": "To resist coercion or threats, take Stress equal to task Difficulty to automatically succeed.",
  "The Ends": "When spending Determination because of a Directive, choose 2 Determination benefits instead of 1.",
  "The Ushaan": "On Melee Attack or defense, if you buy 1+ d20 by adding Threat, reroll any number of dice; Ushaan-tor counts as standard issue.",
  "Wary": "When attempting to detect an enemy or hazard, reroll 1d20.",
  "Warrior's Spirit": "On Melee Attack or defense, if you buy 1+ d20 by adding Threat, reroll the dice pool; mek'leth or bat'leth is standard issue.",
  "Augmented Ability": "Choose 1 attribute; gain Extraordinary Attribute 1 for it, giving 1 automatic success on tasks using it, but increase complication range by 2.",
  "Durability": "Gain Protection 2.",
  "Empathy": "Sense nearby emotions and communicate with familiar empaths/telepaths; tasks may be needed to isolate or block emotions, with Difficulty increased by stress, crowds, or resistance.",
  "Extrasensory Perception": "Ask the GM for nonstandard hints or insights about the situation; each accepted hint adds 1 Threat.",
  "Psychokinesis": "Move Close-range objects with normal physical force; spend 1 Momentum per extra person's force or for Medium range, 2 for Long; violent use adds 1 Threat for Control + Security Difficulty 2, Severity 3.",
  "Sensory Replacement": "Gain Artificial Sense; when locating hidden/concealed things or details not normally perceptible to that sense, reroll 1d20.",
  "Telepathy": "Sense nearby surface thoughts/emotions and communicate telepathically; specific targets, memory searches, or blocking minds require tasks with Difficulty increased by stress, crowds, or resistance.",
  "Telepathic Projection": "For offensive projection, roll Presence + Security Difficulty 2, +1 per range beyond Close; success inflicts Stun or Deadly Injury Severity 3 with Piercing.",
  "Advanced": "First time you introduce a supporting character in an adventure, choose 1 extra improvement option.",
  "Advisor": "When you Assist another character using Command, the assisted character may reroll 1d20.",
  "Call Out Targets": "When you Assist a character in an Attack, they generate 2 bonus Momentum if the Attack succeeds.",
  "Call to Action": "In conflict, use Prepare minor action to grant one ally you can communicate with a minor action immediately.",
  "Cold Reading": "On social-conflict success, gain 1 bonus Momentum for Obtain Information about someone present; if extended, ignore the target's Resistance.",
  "Coordinated Efforts": "When you Assist another character during an extended task, the assisted character increases Impact by 1.",
  "Decisive Leadership": "In conflict, once per round, you or your allies may Keep the Initiative for free.",
  "Defuse the Tension": "When persuading someone not to resort to violence, the first purchased d20 is free.",
  "Follow My Lead": "After succeeding during combat or peril, spend Determination; one ally's next task counts as assisted by your Presence + Command with the assist die set to 1.",
  "Multi-Discipline": "Choose one additional Role Benefit; it cannot be Commanding Officer.",
  "Plan of Action": "When an ally succeeds because of a planning/strategy trait you created, they gain 2 bonus Momentum.",
  "Precautions": "Once per scene, prevent one ally Injury or one ship Breach by describing the precaution you prepared.",
  "Supervisor": "Increase the ship's Crew Support by 1; cumulative with other main characters who select it.",
  "Teacher": "When you create a guidance/advice trait for an ally, that ally may reroll 1d20 on one task benefiting from the trait.",
  "Attack Run": "When you take Attack Pattern, enemy attacks no longer reduce Difficulty because of that action.",
  "Covering Advance": "After maneuvering successfully, spend 2 Momentum; if a non-you allied ship is targeted while you are closest, attack Difficulty equals your ship Scale.",
  "Efficient Evasion": "On the second or later consecutive Evasive Action in a scene, add 1 Momentum to the group pool.",
  "Fly-By": "When using Swift Action, the second task does not increase Difficulty if one task is piloting a vessel.",
  "Glancing Impact": "After successful Evasive Action, increase your ship's Resistance by 2 until your next turn.",
  "Hands-on Pilot": "For Warp, Evasive Action, or Attack Pattern, ship focus range counts as double Conn; when others pilot, complication range increases by 1.",
  "Spacewalk": "Ignore low/zero-gravity Difficulty increases; if gravity would make a task impossible, attempt it at +1 Difficulty.",
  "Starship Expert": "On Conn task to identify/understand a starship, gain 1 bonus Momentum usable for Obtain Information or Create Trait about a weakness.",
  "Strafing Run": "After Attack Pattern and Keep the Initiative, Keep the Initiative costs 0; next attacker may reroll 1d20.",
  "Thread the Needle": "After Impulse or Warp, attacks from larger-Scale ships increase Difficulty by +1, or +2 if Scale is at least double yours.",
  "Visit Every Star": "Gain 1 extra focus related to navigation/space science; successful navigation tasks gain 1 bonus Momentum.",
  "Zero-G Combat": "In zero/micro-gravity, use higher of Conn or Security for Attacks, ignore gravity penalties, and untrained enemies increase attack Difficulty against you by 1.",
  "I Know My Ship": "When finding the source of a technical problem on your ship, the first bonus d20 purchased is free.",
  "I'm Giving It All She's Got": "Once per scene, if the ship has 0 Reserve Power at your turn start, add 2 Threat to gain Reserve Power.",
  "Maintenance Specialist": "Ignore first complication on Engineering tasks; equipment traits you create also let users ignore first complication.",
  "Meticulous": "During timed challenge/extended task, treat one die as a 1 before rolling; task takes +1 interval.",
  "Miracle Worker": "On successful Engineering extended-task work, spend 1 Momentum instead of 2 to increase Impact by 1.",
  "More Power!": "When using Reroute Power, spend 2 Momentum to give Reserve Power to two systems instead of one.",
  "Past the Redline": "Using advanced technology, increase complication range by 1-3; on success, gain equal bonus Momentum.",
  "Percussive Maintenance": "On Control + Engineering, add 1 Threat to use Daring instead; on success, reduce time by 1 interval for free.",
  "Procedural Compliance": "Before an Engineering task, remove 1 d20 from the pool to gain 1 automatic success.",
  "Repair Team Leader": "On successful Damage Control, spend 2 Momentum Repeatable to repair 1 additional Breach.",
  "Right Tool for the Job": "Engineering tool with Opportunity Cost gains +1 Potency; if used in extended task, user increases Impact by 1.",
  "Saboteur": "When attacking a structure, machine, or stationary vehicle in personal combat, use Engineering instead of Security.",
  "Transporter Chief": "For transporter use/repair/modification, add 2 Threat to reduce Difficulty by 2, minimum 0.",
  "Ambush Tactics": "On Attack against unaware/vulnerable enemy, increase Severity by 2.",
  "Applied Force": "For Melee Attacks, use Fitness instead of Daring; Unarmed Strike Severity +1.",
  "Close Protection": "After a successful Attack, spend 1 Momentum to protect one Close-range ally; next attack against them is +1 Difficulty.",
  "Fire at Will": "After an Attack, Swift Action costs 1 Momentum instead of 2, but the second major action must also be an Attack.",
  "Get Down!": "You and Close-range allies gain +1 Protection while in Cover.",
  "Interrogation": "On successful coercion in social conflict, ask 1 Obtain Information question for free.",
  "Lead Investigator": "Reroll 1d20 to retrieve/analyze crime evidence; when using Obtain Information on crime evidence, ask 1 extra question.",
  "Martial Artist": "Unarmed Strike can inflict Deadly Injuries as well as Stun Injuries.",
  "Mean Right Hook": "Unarmed Strike gains the Intense quality.",
  "Pack Tactics": "When you Assist in combat, the assisted character gains 1 bonus Momentum on success.",
  "Piercing Salvo": "On Torpedo Attack, spend 2 Momentum Immediate to add Piercing.",
  "Quick to Action": "During the first combat round, you and allies ignore the normal Keep the Initiative cost.",
  "Steady Hands": "When you Aim before a Ranged Attack, add +1 Severity in addition to Aim's normal effect.",
  "Applied Research": "Once per scene, on a task related to information gained earlier from Obtain Information, first bonus d20 is free.",
  "Dedicated Focus (X)": "Choose one focus; when it applies, dice score critical successes at or below double the relevant department.",
  "Did the Reading": "Spend 1 Momentum Immediate to use Science instead of the normal department and count as having a focus; cost increases by +1 each further use that scene.",
  "Expedition Expert": "Before an away mission, spend 2 Momentum Immediate; away team may reroll up to Science-rating d20s on terrain/hazard tasks.",
  "Intense Scrutiny": "On Reason or Control extended-task success, ignore the extended task's Resistance.",
  "Lab Rat": "When using a laboratory on an extended task, increase Impact by 1.",
  "Learn from Failure": "After failing Science, add 3 Threat to create an insight trait; cost reduced by 1 per success rolled.",
  "Mental Repository": "Treat Obtain Information as Immediate, but answers must come from what you already know/remember.",
  "Rapid Analysis": "On successful Science task, Reduce Time costs 1 Momentum.",
  "Rapid Hypothesis": "Once per scene, after asking 2+ Obtain Information questions, immediately create a theory trait about the subject.",
  "Student of War": "When assisting an Attack or Guard action, the acting character may reroll 1d20.",
  "Testing a Theory": "On Engineering/Science task in a field where you previously succeeded this adventure, first bonus d20 is free; hypothesis trait also grants reroll 1d20.",
  "Theory into Practice": "On Engineering/Science success using Testing a Theory's bonus d20 or a hypothesis trait, gain 2 bonus Momentum.",
  "Walking Encyclopedia": "Once per session, spend 2 Momentum Immediate to gain one focus for the session; tasks using it increase complication range by 1.",
  "Bedside Manner": "After healing an Injury with Medicine, remove one patient trait; Reputation Check gains +1 positive influence.",
  "Chief of Staff": "When you Assist a Medicine task, each assisting character may reroll their assistance die.",
  "Combat Medic": "During combat Medicine tasks, ignore one trait that increases the task Difficulty.",
  "Cutting Edge Medicine": "On Medicine Difficulty 3+, spend up to 3 Momentum Immediate to reduce Difficulty by that amount, minimum 1; complication range +1 per Momentum.",
  "Fellowship Specialty": "Choose a focus; on Medicine success where it applies, Create Trait costs 1 Momentum.",
  "Field Medicine": "Ignore Medicine Difficulty or complication range increases from lacking proper tools/equipment.",
  "First Response": "For First Aid in combat, first purchased die is free; may always Succeed at Cost, but each complication adds +1 Difficulty to later healing.",
  "Insightful Guidance": "When assisting in social conflict with psychology/emotional insight, assisted character also counts as having beneficial trait Psychological Profile.",
  "Positive Reinforcement": "Once per mission, Presence + Medicine Difficulty 3 creates Boosted Confidence until mission end; target may reroll once as if spending Determination.",
  "Practice Makes Perfect": "After a Medicine success, reduce Difficulty by 1 for later Medicine tasks that scene treating the same kind of condition.",
  "Psychoanalyst": "In social conflict using Medicine, increase complication range by 1-3 to ask that many Obtain Information questions.",
  "Quick Study": "Ignore Difficulty or complication range increases from unfamiliar practices, techniques, procedures, or species.",
  "Stimulant Shot": "When First Aid revives a Defeated ally, add 1 Threat so they recover Stress equal to your Medicine; once per character per adventure."
});

const personalActions = {
  minor: [
    ["Aim", "Re-roll one d20 on an Attack this turn.", "p. 288"],
    ["Draw Item", "Draw or pick up an item within Reach; simple use can happen as part of the action.", "p. 288"],
    ["Interact", "Use a simple object or control; complex interactions may require a task.", "p. 288"],
    ["Movement", "Move up to one zone, unless an enemy is within Reach or you also take a movement major action.", "p. 288"],
    ["Prepare", "Set up a task or ready equipment that requires preparation.", "p. 288"],
    ["Stand/Drop Prone", "Stand up or become Prone.", "p. 288"]
  ],
  major: [
    ["Assist", "Help another character's task, either on your turn or by giving up your later turn.", "p. 289"],
    ["Attack", "Attempt to injure or defeat a viable target.", "pp. 289-290"],
    ["Create Trait", "Create, change, remove, increase, or decrease a trait with an appropriate Difficulty 2 task.", "p. 289"],
    ["Direct", "A leader spends 1 Momentum to let an ally act immediately and assists with Control + Command.", "p. 289"],
    ["First Aid", "Revive a Defeated character or treat an Injury within Reach.", "p. 289"],
    ["Guard", "Make yourself or an ally within Reach harder to attack until the next turn.", "p. 289"],
    ["Other Tasks", "Attempt a GM-defined task, challenge, or extended task.", "p. 289"],
    ["Pass", "Take no major action.", "p. 289"],
    ["Ready", "Hold a major action for a defined trigger before your next turn.", "p. 289"],
    ["Sprint", "Move two zones; difficult or hazardous terrain may call for Fitness + Conn.", "p. 289"]
  ]
};

const personalHouseRules = [
  ["Ranged Attack with Cover", "If the target has cover, the ranged attack is opposed and the defender gains 1 free bonus Momentum usable only to purchase an additional die for that defense roll.", "House rule"],
  ["Ranged Weapon Distance", "Standard weapons can fire to Medium range. Rifles, scoped weapons, or aim-assisted weapons can fire to Long range. Extreme range requires GM approval.", "House rule"]
];

const starshipStations = [
  {
    id: "command",
    name: "Command",
    minor: [],
    major: [
      ["Assist", "Assist two characters instead of one when coordinating from command.", "p. 301"],
      ["Create Trait", "Establish battle plans, priorities, strategies, or similar command advantages.", "p. 301"],
      ["Direct", "Spend 1 Momentum so one bridge ally immediately takes a major action; assist with Control + Command.", "p. 301"],
      ["Rally", "Attempt Presence + Command Difficulty 0 to generate Momentum.", "p. 301"]
    ]
  },
  {
    id: "communications",
    name: "Communications",
    minor: [],
    major: [
      ["Create Trait", "Boost, recalibrate, secure, decrypt, or coordinate communications.", "p. 301"],
      ["Damage Control", "Direct teams to patch one breach with Presence + Engineering.", "p. 301"],
      ["Transport", "Coordinate transporters remotely; bridge operation increases Difficulty.", "p. 301"]
    ]
  },
  {
    id: "helm",
    name: "Helm",
    minor: [
      ["Impulse", "Move up to two zones; one-zone movement can ease difficult terrain costs.", "p. 302"],
      ["Thrusters", "Make fine positional adjustments within the current zone, including safe Contact.", "p. 302"]
    ],
    major: [
      ["Attack Pattern", "Fly steadily to assist ship attacks, but enemy attacks become easier until your next turn.", "p. 302"],
      ["Create Trait", "Use careful positioning or skilled maneuvering to create an advantage.", "p. 302"],
      ["Evasive Action", "Make enemy attacks opposed by your piloting, while your ship's attacks become harder.", "p. 302"],
      ["Maneuver", "Attempt Control + Conn Difficulty 0 to generate Momentum for movement.", "p. 302"],
      ["Ram", "Move into Contact and make a collision attack against a close target.", "p. 302"],
      ["Warp", "Requires Reserve Power and Prepare; move many zones or leave the battlefield.", "p. 302"]
    ]
  },
  {
    id: "navigator",
    name: "Navigator",
    minor: [],
    major: [
      ["Assist", "Assist the officer at the helm.", "p. 303"],
      ["Create Trait", "Plot courses, chart hazards, or study terrain.", "p. 303"]
    ]
  },
  {
    id: "operations",
    name: "Operations/Engineering",
    minor: [],
    major: [
      ["Create Trait", "Represent modifications or adjustments to ship systems.", "p. 303"],
      ["Damage Control", "Patch a breach with Presence + Engineering.", "p. 303"],
      ["Regain Power", "Attempt Control + Engineering to restore Reserve Power; each scene attempt gets harder.", "p. 303"],
      ["Regenerate Shields", "Requires Reserve Power; restore shields with Control + Engineering.", "p. 303"],
      ["Reroute Power", "Requires Reserve Power; empower the next action using a chosen system.", "p. 303"],
      ["Transport", "Operate transporters remotely from bridge or engineering controls.", "p. 303"]
    ]
  },
  {
    id: "sensors",
    name: "Sensor Operations",
    minor: [
      ["Calibrate Sensors", "On your next sensor action, ignore one affecting trait or re-roll one d20.", "p. 304"],
      ["Launch Probe", "Place a probe in a zone within Long range and use it as a sensor origin.", "p. 304"]
    ],
    major: [
      ["Create Trait", "Turn detected information into a scene advantage.", "p. 304"],
      ["Reveal", "Search for hidden or cloaked vessels within Long range.", "p. 304"],
      ["Scan For Weakness", "Set up the next attack against a vessel for extra damage or Piercing.", "p. 304"],
      ["Sensor Sweep", "Scan a zone for ships, objects, and phenomena.", "p. 304"]
    ]
  },
  {
    id: "tactical",
    name: "Tactical",
    minor: [
      ["Calibrate Weapons", "Increase damage by 1 on the next ship weapon attack.", "p. 305"],
      ["Prepare", "Raise/lower shields or arm/disarm weapons.", "p. 305"],
      ["Targeting Solution", "Set up the next attack to re-roll a d20 or choose the hit system.", "p. 305"]
    ],
    major: [
      ["Create Trait", "Create weapon-system or targeting advantages.", "p. 305"],
      ["Defensive Fire", "Make enemy attacks opposed. If successful, you may spend 2 Momentum to counterattack with an available energy weapon.", "p. 305"],
      ["Fire", "Attack with an energy weapon or torpedo; torpedo attacks add Threat.", "p. 305"],
      ["Modulate Shields", "If shields are not at 0, increase Resistance until your next turn.", "p. 305"],
      ["Tractor Beam", "Attempt to immobilize a close object or vessel.", "p. 305"]
    ]
  }
];

const glossary = [
  ["Accurate", "Weapon quality: after using Aim before the attack, reroll up to two d20s instead of one.", "p. 241"],
  ["Area", "Weapon or hazard effect: after a successful attack, spend 1 Momentum per additional target in the same zone; the attack may Succeed at Cost.", "pp. 226, 241, 328"],
  ["Breach", "A serious ship damage trait tied to the system hit; it may increase Difficulty, make tasks impossible, or require Damage Control.", "pp. 303, 310"],
  ["Calibration", "Starship weapon quality: the weapon cannot be fired unless Prepare is taken before the Attack in the same turn.", "p. 226"],
  ["Charge", "Weapon quality: after Prepare, add Area, Intense, or Piercing to the attack; Area reduces severity by 1.", "p. 241"],
  ["Cumbersome", "Quality: personal weapons require Prepare before attacking; starship weapons increase attack Difficulty by 1 and torpedoes cannot be fired as a salvo.", "pp. 226, 241"],
  ["Dampening", "Starship weapon quality: if the target has Reserve Power available, it loses that Reserve Power.", "p. 227"],
  ["Deadly", "Injury type: choosing a Deadly Attack adds 1 Threat; a Defeated character with Deadly Injuries is Dying.", "pp. 290-292"],
  ["Debilitating", "Weapon quality: Difficulty to treat or heal Injuries caused by the weapon increases by 1.", "p. 241"],
  ["Depleting", "Starship weapon quality: cannot cause the ship to be shaken, but Added Damage costs 1 Momentum instead of 2.", "p. 227"],
  ["Devastating", "Starship weapon quality: tasks to repair breaches caused by the weapon increase in Difficulty by 1.", "p. 227"],
  ["Escalation X", "Equipment cost paid by adding X Threat when obtaining aggressive, dangerous, or combat-signaling items.", "p. 239"],
  ["Hidden X", "Quality for concealed weapons or weapon systems; finding it requires a Security-related search/scan at Difficulty X.", "pp. 227, 242"],
  ["High Yield", "Starship weapon quality: if the attack inflicts one or more breaches, add one extra breach or increase a breach's Potency by 1.", "p. 227"],
  ["Inaccurate", "Weapon quality: the weapon does not benefit from the Aim minor action.", "p. 242"],
  ["Intense", "Quality: spend 1 Momentum, repeatable, to increase personal severity or starship damage by 1 instead of spending 2.", "pp. 227, 242"],
  ["Jamming", "Starship weapon quality: until round end, the target increases Difficulty by 1 for tasks assisted by Communications or Sensors.", "p. 227"],
  ["Opportunity X", "Equipment cost paid with X Momentum as an Immediate spend, or by adding Threat if needed.", "p. 239"],
  ["Persistent", "Starship weapon/hazard effect: spend 1-3 Momentum; for that many rounds, the target suffers half the weapon's damage again at round end.", "pp. 227, 328"],
  ["Piercing", "Quality/effect: personal attacks ignore Protection; starship attacks ignore Resistance.", "pp. 227, 242, 328"],
  ["Shaken", "Minor starship damage result triggered by shield thresholds; the commanding officer chooses or rolls a minor damage effect.", "pp. 308-309"],
  ["Slowing", "Starship weapon quality: until round end, characters aboard the target cannot use Keep the Initiative.", "p. 227"],
  ["Spread", "Starship weapon quality: Devastating Attack costs 1 Momentum and is repeatable.", "p. 227"],
  ["Stun", "Injury type intended to incapacitate; a Stun Injury is removed shortly after the character stops being Defeated.", "p. 292"],
  ["Versatile X", "Starship weapon quality: on a successful attack, gain X bonus Momentum; it cannot be saved.", "p. 227"]
];

const momentumSpends = {
  Roleplay: [
    ["Purchase Dice", "1-3 Momentum, Immediate, Repeatable", "Before attempting a task, buy up to three extra d20s. The first die costs 1, the second costs 2 more, and the third costs 3 more; the pool cannot exceed 5d20.", "p. 260"],
    ["Create a Trait", "2 Momentum", "Establish a new scene trait, or change, increase the potency of, or remove a trait in play. The trait must relate to the task just passed.", "p. 260"],
    ["Obtain Information", "1 Momentum, Repeatable", "Ask the gamemaster one truthful question related to the task attempted. If there is no information to learn, the Momentum is refunded.", "p. 260"],
    ["Reduce Time", "2 Momentum", "Reduce the time required for the task, typically halving the normal time. This cannot be used during an action scene.", "p. 260"]
  ],
  "Personal Combat": [
    ["Added Severity", "2 Momentum, Repeatable", "Increase the severity of a successful attack by 1 for every 2 Momentum spent, to a maximum increase of 2.", "p. 293"],
    ["Alter Trait", "2 Momentum", "Create, change, or remove a scene trait. The change must relate to the completed task.", "p. 293"],
    ["Extra Minor Action", "1 Momentum", "Take one additional minor action on your turn.", "p. 293"],
    ["Keep The Initiative", "2 Momentum, Immediate", "At the end of your turn, pass the next turn to an ally instead of an enemy. Once that ally has acted, the next turn must go to an enemy.", "p. 293"],
    ["Extra Major Action", "2 Momentum", "Attempt one additional major action. If the action includes a task, increase that task's Difficulty by 1.", "p. 293"],
    ["Disarm", "1-2 Momentum", "Target drops one held weapon within Reach. The cost is 1 Momentum for a one-handed weapon or 2 Momentum for a two-handed weapon.", "p. 293"],
    ["Purchase Dice", "1-3 Momentum, Immediate, Repeatable", "Before attempting a task, buy extra d20s. The first die costs 1, the second costs 2 more, and the third costs 3 more; the pool cannot exceed 5d20.", "p. 293"]
  ],
  "Starship Combat": [
    ["Purchase Dice", "1-3 Momentum, Immediate, Repeatable", "Before attempting a task, buy extra d20s. The first die costs 1, the second costs 2 more, and the third costs 3 more; the pool cannot exceed 5d20.", "p. 293"],
    ["Keep the Initiative", "2 Momentum, Immediate", "At the end of a ship's turn, pass the next turn to an allied ship or character instead of the opposition. Once that ally has acted, the next turn must go to the enemy.", "pp. 293, 307"],
    ["Added Damage", "2 Momentum, Repeatable", "Increase the damage of a successful attack by 1 for every 2 Momentum spent.", "p. 307"],
    ["Devastating Attack", "2 Momentum", "Roll an additional system; that system suffers a hit dealing half the attack's damage, rounded up.", "p. 307"]
  ]
};

function createCharacter(type = "main") {
  return {
    id: crypto.randomUUID(),
    type,
    wizardStep: 0,
    uiSearch: {
      species: "",
      role: "",
      value: "",
      focus: "",
      talent: "",
      rank: ""
    },
    name: "",
    rank: "",
    role: "",
    purpose: "",
    division: "",
    species: "",
    speciesTrait: "",
    speciesAbility: "",
    speciesAttributes: "",
    speciesAbilityReminder: "",
    careerTrait: "",
    assignmentTrait: "",
    equipment: "",
    equipmentChecklist: Object.fromEntries(standardEquipment.map((item) => [item, false])),
    attributes: Object.fromEntries(attributes.map((name) => [name, ""])),
    departments: Object.fromEntries(departments.map((name) => [name, ""])),
    focuses: ["", "", "", "", "", ""],
    values: ["", "", "", ""],
    talents: ["", "", "", ""],
    pastimes: "",
    undefinedDepartments: "",
    inPlayNotes: "",
    notes: ""
  };
}

function createShip(index = 1) {
  return {
    id: crypto.randomUUID(),
    name: index === 1 ? "U.S.S. Example" : `Ship ${index}`,
    registry: "",
    className: "",
    missionProfile: "",
    traits: "",
    scale: "",
    resistance: "",
    shields: "",
    currentShields: "",
    crewSupport: "",
    reservePower: "",
    systems: Object.fromEntries(shipSystems.map((name) => [name, ""])),
    systemBreaches: Object.fromEntries(shipSystems.map((name) => [name, ""])),
    departments: Object.fromEntries(shipDepartments.map((name) => [name, ""])),
    talents: "",
    weapons: "",
    breaches: "",
    notes: "",
    actions: {}
  };
}

function defaultState() {
  return {
    settings: {
      activeTab: "character",
      shipCount: 1,
      selectedCharacterId: "",
      selectedShipId: "",
      glossarySearch: ""
    },
    characters: [],
    ships: [createShip(1)]
  };
}

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || typeof saved !== "object") return ensureState(defaultState());
    return ensureState(saved);
  } catch {
    return ensureState(defaultState());
  }
}

function ensureState(nextState) {
  const base = defaultState();
  const merged = {
    settings: { ...base.settings, ...(nextState.settings || {}) },
    characters: Array.isArray(nextState.characters) ? nextState.characters : [],
    ships: Array.isArray(nextState.ships) && nextState.ships.length ? nextState.ships : base.ships
  };

  if (merged.characters.length === 0) {
    const first = createCharacter("main");
    merged.characters.push(first);
    merged.settings.selectedCharacterId = first.id;
  }

  merged.characters = merged.characters.map((character) => normalizeCharacter(character));

  if (!merged.characters.some((character) => character.id === merged.settings.selectedCharacterId)) {
    merged.settings.selectedCharacterId = merged.characters[0].id;
  }

  merged.ships = merged.ships.map((ship, index) => ({
    ...createShip(index + 1),
    ...ship,
    systems: { ...createShip().systems, ...(ship.systems || {}) },
    systemBreaches: { ...createShip().systemBreaches, ...(ship.systemBreaches || {}) },
    departments: { ...createShip().departments, ...(ship.departments || {}) },
    actions: ship.actions || {}
  }));
  merged.settings.shipCount = Math.max(1, Number(merged.settings.shipCount) || merged.ships.length || 1);
  syncShipCount(merged, merged.settings.shipCount);
  if (!merged.ships.slice(0, merged.settings.shipCount).some((ship) => ship.id === merged.settings.selectedShipId)) {
    merged.settings.selectedShipId = merged.ships[0].id;
  }
  return merged;
}

function normalizeCharacter(character) {
  const type = character.type || "main";
  const base = createCharacter(type);
  const nextCharacter = {
    ...base,
    ...character,
    type,
    wizardStep: Number.isFinite(Number(character.wizardStep)) ? Number(character.wizardStep) : 0,
    uiSearch: { ...base.uiSearch, ...(character.uiSearch || {}) },
    attributes: { ...base.attributes, ...(character.attributes || {}) },
    departments: { ...base.departments, ...(character.departments || {}) },
    equipmentChecklist: { ...base.equipmentChecklist, ...(character.equipmentChecklist || {}) },
    focuses: [...base.focuses],
    values: [...base.values],
    talents: [...base.talents]
  };

  (character.focuses || []).forEach((value, index) => {
    nextCharacter.focuses[index] = value;
  });
  (character.values || []).forEach((value, index) => {
    nextCharacter.values[index] = value;
  });
  (character.talents || []).forEach((value, index) => {
    nextCharacter.talents[index] = value;
  });

  const steps = getWizardSteps(nextCharacter);
  nextCharacter.wizardStep = Math.max(0, Math.min(nextCharacter.wizardStep, steps.length - 1));
  return nextCharacter;
}

function syncShipCount(targetState, count) {
  const nextCount = Math.max(1, Math.min(12, Number(count) || 1));
  targetState.settings.shipCount = nextCount;
  while (targetState.ships.length < nextCount) {
    targetState.ships.push(createShip(targetState.ships.length + 1));
  }
  if (!targetState.ships.slice(0, nextCount).some((ship) => ship.id === targetState.settings.selectedShipId)) {
    targetState.settings.selectedShipId = targetState.ships[0].id;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function actionId(stationId, kind, name) {
  return `${stationId}:${kind}:${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function activeCharacter() {
  return state.characters.find((character) => character.id === state.settings.selectedCharacterId) || state.characters[0];
}

function render() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === state.settings.activeTab);
  });

  const app = document.querySelector("#app");
  const renderers = {
    character: renderCharacterTab,
    personal: renderPersonalTab,
    space: renderSpaceTab,
    momentum: renderMomentumTab,
    glossary: renderGlossaryTab
  };
  app.innerHTML = (renderers[state.settings.activeTab] || renderCharacterTab)();
}

function renderSectionHeader(title, body, controls = "") {
  return `
    <div class="section-header">
      <div>
        <h2>${title}</h2>
        <p>${body}</p>
      </div>
      ${controls}
    </div>
  `;
}

function renderCharacterTab() {
  const character = activeCharacter();
  const steps = getWizardSteps(character);
  const stepId = steps[character.wizardStep]?.[0] || "mode";
  return `
    ${renderSectionHeader(
      "Character Generation",
      "A guided, suggest-only wizard for main characters and supporting characters."
    )}
    <div class="grid two">
      <section class="panel">
        <div class="action-topline">
          <div>
            <h3>Character Wizard</h3>
            <p class="source-note">${characterTypes[character.type]?.label || "Character"} (${characterTypes[character.type]?.page || "chapter 4"}). Warnings are advisory and never block saving.</p>
          </div>
          <div class="button-row">
            <button class="secondary-button" type="button" data-action="reset-character">Reset Draft</button>
            <button class="danger-button" type="button" data-action="delete-character">Delete</button>
          </div>
        </div>
        ${renderWizardProgress(character, steps)}
        ${renderWizardStep(character, stepId)}
        ${renderWizardNav(character, steps)}
      </section>

      <aside class="panel drafts-panel">
        <div class="action-topline">
          <h3>Drafts</h3>
          <button class="primary-button" type="button" data-action="add-character">New Character</button>
        </div>
        <div class="character-list">
          ${state.characters.map((item) => `
            <button type="button" class="${item.id === character.id ? "is-active" : ""}" data-action="select-character" data-id="${item.id}">
              <strong>${escapeHtml(item.name || "Unnamed character")}</strong>
              <span class="small">${characterTypes[item.type]?.label || "Character"}</span>
            </button>
          `).join("")}
        </div>
        ${renderPlayAidCard(character)}
      </aside>
    </div>
  `;
}

function getWizardSteps(character) {
  return wizardSteps[character.type] || wizardSteps.main;
}

function renderWizardProgress(character, steps) {
  return `
    <div class="wizard-progress" aria-label="Character creator progress">
      ${steps.map(([id, label], index) => `
        <button type="button" class="${index === character.wizardStep ? "is-active" : ""}" data-action="wizard-step" data-step="${index}">
          <span>${index + 1}</span>${label}
        </button>
      `).join("")}
    </div>
  `;
}

function renderWizardStep(character, stepId) {
  const warnings = getCharacterWarnings(character, stepId);
  const renderers = {
    mode: renderModeStep,
    concept: renderConceptStep,
    purpose: renderPurposeStep,
    attributes: renderAttributesStep,
    species: renderSpeciesStep,
    departments: renderDepartmentsStep,
    value: renderValueStep,
    focuses: renderFocusStep,
    talents: renderTalentStep,
    finish: renderFinishStep,
    review: renderReviewStep
  };
  return `
    <div class="wizard-step">
      <div data-wizard-warnings>${renderWarnings(warnings)}</div>
      ${(renderers[stepId] || renderModeStep)(character)}
    </div>
  `;
}

function renderWizardNav(character, steps) {
  const isFirst = character.wizardStep === 0;
  const isLast = character.wizardStep === steps.length - 1;
  return `
    <div class="wizard-nav">
      <button class="secondary-button" type="button" data-action="wizard-prev" ${isFirst ? "disabled" : ""}>Back</button>
      <div class="small">Drafts save automatically in this browser.</div>
      <button class="primary-button" type="button" data-action="wizard-next">${isLast ? "Stay on Review" : "Next"}</button>
    </div>
  `;
}

function renderModeStep(character) {
  return `
    <h3>Choose Creator Mode</h3>
    <p class="source-note">Use one wizard for all character types. Changing mode preserves matching fields where possible.</p>
    <div class="mode-grid">
      ${Object.entries(characterTypes).map(([type, config]) => `
        <button type="button" class="mode-card ${character.type === type ? "is-active" : ""}" data-action="set-character-field" data-field="type" data-value="${type}">
          <strong>${config.label}</strong>
          <span>${config.page}</span>
          <span>${type === "main" ? "Creation in Play for a player character." : type === "support" ? "A lighter crew character introduced through Crew Support." : "A more capable supporting character for senior roles."}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function renderConceptStep(character) {
  const roleResults = filterExamples(roleExamples, character.uiSearch.role, ([name, summary]) => `${name} ${summary}`);
  return `
    <h3>Role and Concept</h3>
    <p class="source-note">Creation in Play starts by deciding what job this character fills and what they bring to the crew.</p>
    <div class="field-grid">
      ${renderField("Name", "input", "name", character.name)}
      ${renderField("Rank or title", "input", "rank", character.rank)}
      ${renderField("Role", "input", "role", character.role)}
      ${renderField("Division or department", "input", "division", character.division)}
      ${renderField("Career trait", "input", "careerTrait", character.careerTrait)}
      ${renderField("Starting equipment notes", "textarea", "equipment", character.equipment)}
    </div>
    ${renderRolePicker(roleResults)}
    ${renderRankPicker(character)}
  `;
}

function renderPurposeStep(character) {
  return `
    <h3>Purpose and Crew Function</h3>
    <p class="source-note">Supporting characters start with a purpose, a matching department, and a trait describing their place in the crew.</p>
    <div class="field-grid">
      ${renderField("Name", "input", "name", character.name)}
      ${renderField("Rank or title", "input", "rank", character.rank)}
      ${renderField("Purpose", "input", "purpose", character.purpose)}
      ${renderField("Primary department", "select", "division", character.division, [["", "Choose a department"], ...departments.map((item) => [item, item])])}
      ${renderField("Purpose trait", "input", "assignmentTrait", character.assignmentTrait)}
      ${renderField("Notes", "textarea", "notes", character.notes)}
    </div>
    ${renderRankPicker(character)}
  `;
}

function renderAttributesStep(character) {
  const config = characterTypes[character.type] || characterTypes.main;
  return `
    <h3>Attributes</h3>
    <p class="source-note">Suggested array: ${config.attributeArray.join(", ")}. Species modifiers are recorded separately on the Species step.</p>
    <div class="field-grid compact">
      ${attributes.map((name) => renderField(name, "number", `attributes.${name}`, character.attributes[name])).join("")}
    </div>
  `;
}

function renderSpeciesStep(character) {
  const speciesResults = filterExamples(speciesExamples, character.uiSearch.species, (item) => `${item.name} ${item.trait} ${item.ability} ${item.attributes}`);
  return `
    <h3>Species</h3>
    <p class="source-note">Choose a core species to fill mechanical prompts, or enter a custom species.</p>
    <div class="field-grid">
      ${renderField("Species", "input", "species", character.species)}
      ${renderField("Attribute increases", "input", "speciesAttributes", character.speciesAttributes)}
      ${renderField("Species trait", "input", "speciesTrait", character.speciesTrait)}
      ${renderField("Species ability", "input", "speciesAbility", character.speciesAbility)}
      ${renderField("Ability reminder", "textarea", "speciesAbilityReminder", character.speciesAbilityReminder)}
    </div>
    <div class="example-panel">
      ${renderSearchInput("Species examples", "species", character.uiSearch.species)}
      <div class="example-grid">
        ${speciesResults.map((species) => `
          <button type="button" class="example-card" data-action="apply-species" data-species="${escapeHtml(species.name)}">
            <strong>${species.name}</strong>
            <span>${species.attributes}</span>
            <span>${species.ability}: ${species.reminder}</span>
          </button>
        `).join("")}
      </div>
      ${character.species ? renderSpeciesValueHints(character) : ""}
    </div>
  `;
}

function renderDepartmentsStep(character) {
  const config = characterTypes[character.type] || characterTypes.main;
  const expected = config.departmentArray
    ? `Suggested array: ${config.departmentArray.join(", ")}.`
    : config.departmentNote;
  return `
    <h3>Departments</h3>
    <p class="source-note">${expected}</p>
    <div class="field-grid compact">
      ${departments.map((name) => renderField(name, "number", `departments.${name}`, character.departments[name])).join("")}
    </div>
    ${character.type === "main" ? renderField("Department notes", "textarea", "undefinedDepartments", character.undefinedDepartments) : ""}
  `;
}

function renderValueStep(character) {
  const species = speciesExamples.find((item) => item.name === character.species);
  const values = [...sampleValues, ...((species && species.values) || [])];
  const valueResults = filterExamples(values, character.uiSearch.value, (item) => item);
  return `
    <h3>${character.type === "main" ? "Starting Value" : "Supervisory Value"}</h3>
    <p class="source-note">${character.type === "main" ? "Main characters start with one value and define the rest in play." : "Supervisory supporting characters begin with one value and one Determination when introduced."}</p>
    <div class="field-grid">
      ${[0, 1, 2, 3].map((index) => renderField(`Value ${index + 1}`, "input", `values.${index}`, character.values[index] || "")).join("")}
    </div>
    <div class="example-panel">
      ${renderSearchInput("Value examples", "value", character.uiSearch.value)}
      <div class="chip-list">
        ${valueResults.slice(0, 48).map((value) => `
          <button type="button" class="example-chip" data-action="apply-value-example" data-value="${escapeHtml(value)}">${escapeHtml(value)}</button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderFocusStep(character) {
  const config = characterTypes[character.type] || characterTypes.main;
  const focusResults = getFocusResults(character.uiSearch.focus);
  return `
    <h3>Focuses</h3>
    <p class="source-note">${character.type === "main" ? "Creation in Play can define focuses during play, but this wizard can record them now if useful." : `Suggested count: ${config.focusCount}.`} Select a book example or type a custom focus.</p>
    <div class="field-grid">
      ${[0, 1, 2, 3, 4, 5].map((index) => renderField(`Focus ${index + 1}`, "input", `focuses.${index}`, character.focuses[index] || "")).join("")}
    </div>
    <div class="example-panel">
      ${renderSearchInput("Focus examples", "focus", character.uiSearch.focus)}
      ${Object.entries(focusResults).map(([department, focusList]) => focusList.length ? `
        <details class="example-category" open>
          <summary>
            <span>${escapeHtml(department)}</span>
            <span class="example-count">${focusList.length}</span>
          </summary>
          <div class="chip-list">
            ${focusList.slice(0, 18).map((focus) => `
              <button type="button" class="example-chip" data-action="apply-array-example" data-array="focuses" data-value="${escapeHtml(focus)}">${escapeHtml(focus)}</button>
            `).join("")}
          </div>
        </details>
      ` : "").join("")}
    </div>
  `;
}

function renderTalentStep(character) {
  const talentResults = getTalentResults(character.uiSearch.talent);
  return `
    <h3>Talents</h3>
    <p class="source-note">Talents usually come from the core book. Select examples below or type a custom/house-ruled talent.</p>
    <div class="field-grid">
      ${[0, 1, 2, 3].map((index) => renderField(`Talent ${index + 1}`, "input", `talents.${index}`, character.talents[index] || "")).join("")}
    </div>
    <div class="example-panel">
      ${renderSearchInput("Talent examples", "talent", character.uiSearch.talent)}
      ${Object.entries(talentResults).map(([category, talentList]) => talentList.length ? `
        <details class="example-category" open>
          <summary>
            <span>${escapeHtml(category)}</span>
            <span class="example-count">${talentList.length}</span>
          </summary>
          <div class="talent-list">
            ${talentList.slice(0, 24).map(([talent, requirement]) => `
              <button type="button" class="talent-row" data-action="apply-array-example" data-array="talents" data-value="${escapeHtml(talent)}">
                <span>
                  <strong>${escapeHtml(talent)}</strong>
                  <em>Req: ${escapeHtml(requirement)}</em>
                </span>
                <span>${escapeHtml(talentSummaries[talent] || "Provides a situational mechanical benefit; check the full talent entry for exact handling.")}</span>
              </button>
            `).join("")}
          </div>
        </details>
      ` : "").join("")}
    </div>
  `;
}

function renderFinishStep(character) {
  return `
    <h3>Finish and Equipment</h3>
    <p class="source-note">Record standard issue, duty tools, name, rank, and any table notes.</p>
    <div class="equipment-list">
      ${standardEquipment.map((item) => `
        <label class="check-item">
          <input type="checkbox" data-action="toggle-equipment" data-equipment="${escapeHtml(item)}" ${character.equipmentChecklist[item] ? "checked" : ""}>
          <span><strong>${item}</strong></span>
        </label>
      `).join("")}
    </div>
    <div class="field-grid">
      ${renderField("Additional equipment", "textarea", "equipment", character.equipment)}
      ${renderField("Notes", "textarea", "notes", character.notes)}
    </div>
  `;
}

function renderReviewStep(character) {
  return `
    <h3>Review</h3>
    <p class="source-note">This review collects advisory warnings and provides a full editable sheet.</p>
    ${renderEditableSheet(character)}
  `;
}

function renderWarnings(warnings) {
  if (!warnings.length) {
    return `<div class="warning-list is-clear">No advisory warnings for this step.</div>`;
  }
  return `
    <div class="warning-list">
      <strong>Advisory warnings</strong>
      <ul>
        ${warnings.map((warning) => `<li>${warning}</li>`).join("")}
      </ul>
    </div>
  `;
}

function refreshWizardWarnings(character) {
  const warningSlot = document.querySelector("[data-wizard-warnings]");
  if (!warningSlot) return;
  const steps = getWizardSteps(character);
  const stepId = steps[character.wizardStep]?.[0] || "mode";
  warningSlot.innerHTML = renderWarnings(getCharacterWarnings(character, stepId));
}

function getCharacterWarnings(character, stepId = "all") {
  const warnings = [];
  const config = characterTypes[character.type] || characterTypes.main;
  const include = (...ids) => stepId === "all" || ids.includes(stepId);

  if (include("mode") && !character.type) warnings.push("Choose a creator mode.");
  if (include("concept", "purpose", "review")) {
    if (!character.name.trim()) warnings.push("Name is blank.");
    if (character.type === "main" && !character.role.trim()) warnings.push("Main character role is blank.");
    if (character.type !== "main" && !character.purpose.trim()) warnings.push("Supporting character purpose is blank.");
    if (!character.rank.trim()) warnings.push("Rank or title is blank.");
    if (character.type !== "main" && rankAboveLieutenant(character.rank)) warnings.push("Supporting characters normally should not have a rank above lieutenant.");
  }

  if (include("attributes", "review")) {
    const current = attributes.map((name) => Number(character.attributes[name])).filter((value) => Number.isFinite(value) && value > 0).sort((a, b) => b - a);
    if (current.length && current.join(",") !== [...config.attributeArray].sort((a, b) => b - a).join(",")) {
      warnings.push(`Attributes do not match the suggested array (${config.attributeArray.join(", ")}).`);
    }
    if (!current.length) warnings.push("Attributes are not filled in.");
  }

  if (include("species", "review")) {
    if (!character.species.trim()) warnings.push("Species is blank.");
    if (!character.speciesTrait.trim()) warnings.push("Species trait is blank.");
    if (!character.speciesAbility.trim()) warnings.push("Species ability is blank.");
    if (!character.speciesAttributes.trim()) warnings.push("Species attribute increases are blank.");
  }

  if (include("departments", "review")) {
    const blankDepartments = departments.filter((name) => String(character.departments[name] ?? "").trim() === "");
    const current = departments.map((name) => Number(character.departments[name])).filter((value) => Number.isFinite(value) && value > 0).sort((a, b) => b - a);
    if (blankDepartments.length) {
      warnings.push(`Department fields left blank: ${blankDepartments.join(", ")}.`);
    } else if (character.type === "main") {
      const validArrays = config.departmentArrays || [];
      const isExpectedArray = validArrays.some((array) => current.join(",") === [...array].sort((a, b) => b - a).join(","));
      if (!isExpectedArray) warnings.push("Main character departments usually total either 5, 3, 3, 2, 2, 1 or 4, 4, 3, 2, 2, 1.");
    } else if (current.join(",") !== [...config.departmentArray].sort((a, b) => b - a).join(",")) {
      warnings.push(`Departments do not match the suggested array (${config.departmentArray.join(", ")}).`);
    }
  }

  if (include("value", "review")) {
    if ((character.type === "main" || character.type === "supervisory") && !character.values[0]?.trim()) {
      warnings.push("Starting value is blank.");
    }
  }

  if (include("focuses", "review") && character.type !== "main") {
    const focusCount = character.focuses.filter((focus) => focus.trim()).length;
    if (focusCount < config.focusCount) warnings.push(`Expected ${config.focusCount} starting focuses; ${focusCount} filled.`);
  }

  if (include("talents", "review")) {
    const talentNames = knownTalentNames();
    const customTalents = character.talents
      .filter((talent) => talent.trim())
      .filter((talent) => !talentNames.has(talent.trim().toLowerCase()));
    if (customTalents.length) warnings.push(`Talent not found in the core picker: ${customTalents.join(", ")}.`);
  }

  if (include("finish", "review") && character.type !== "main") {
    const checkedEquipment = Object.values(character.equipmentChecklist || {}).some(Boolean);
    if (!checkedEquipment && !character.equipment.trim()) warnings.push("No equipment reminders or equipment notes are selected.");
  }

  return [...new Set(warnings)];
}

function rankAboveLieutenant(rank) {
  const normalized = rank.toLowerCase();
  return ["fleet admiral", "admiral", "vice-admiral", "rear admiral", "commodore", "fleet captain", "captain", "commander", "lieutenant commander"].some((item) => normalized.includes(item));
}

function filterExamples(items, query, toText) {
  const normalized = (query || "").trim().toLowerCase();
  if (!normalized) return items;
  return items.filter((item) => toText(item).toLowerCase().includes(normalized));
}

function renderSearchInput(label, key, value) {
  return `
    <label class="search-field">${label}
      <input type="search" data-character-search="${key}" value="${escapeHtml(value || "")}" placeholder="Search examples">
    </label>
  `;
}

function renderRolePicker(roleResults) {
  return `
    <div class="example-panel">
      ${renderSearchInput("Role examples", "role", activeCharacter().uiSearch.role)}
      <div class="example-grid">
        ${roleResults.map(([name, summary]) => `
          <button type="button" class="example-card" data-action="set-character-field" data-field="role" data-value="${escapeHtml(name)}">
            <strong>${name}</strong>
            <span>${summary}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderRankPicker(character) {
  const rankResults = filterExamples(rankExamples, character.uiSearch.rank, (item) => item);
  return `
    <div class="example-panel">
      ${renderSearchInput("Rank and title examples", "rank", character.uiSearch.rank)}
      <div class="chip-list">
        ${rankResults.map((rank) => `
          <button type="button" class="example-chip" data-action="set-character-field" data-field="rank" data-value="${escapeHtml(rank)}">${escapeHtml(rank)}</button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderSpeciesValueHints(character) {
  const species = speciesExamples.find((item) => item.name === character.species);
  if (!species) return "";
  return `
    <div class="species-hints">
      <details class="example-category" open>
        <summary>
          <span>${escapeHtml(species.name)} sample values</span>
          <span class="example-count">${species.values.length}</span>
        </summary>
        <div class="chip-list">
          ${species.values.map((value) => `
            <button type="button" class="example-chip" data-action="apply-value-example" data-value="${escapeHtml(value)}">${escapeHtml(value)}</button>
          `).join("")}
        </div>
      </details>
    </div>
  `;
}

function getFocusResults(query) {
  return Object.fromEntries(Object.entries(sampleFocuses).map(([department, focusList]) => [
    department,
    filterExamples(focusList, query, (item) => item)
  ]));
}

function getTalentResults(query) {
  return Object.fromEntries(Object.entries(talentExamples).map(([category, talentList]) => [
    category,
    filterExamples(talentList, query, ([name, requirement]) => `${name} ${requirement} ${talentSummaries[name] || ""}`)
  ]));
}

function knownTalentNames() {
  return new Set(Object.values(talentExamples).flat().map(([name]) => name.toLowerCase()));
}

function renderEditableSheet(character) {
  const checkedEquipment = Object.entries(character.equipmentChecklist || {})
    .filter(([, checked]) => checked)
    .map(([item]) => item);
  return `
    <article class="sheet-card">
      <div class="sheet-section">
        <h5>Identity</h5>
        <div class="field-grid">
          ${renderField("Name", "input", "name", character.name)}
          ${renderField("Rank / title", "input", "rank", character.rank)}
          ${renderField(character.type === "main" ? "Role" : "Purpose", "input", character.type === "main" ? "role" : "purpose", character.type === "main" ? character.role : character.purpose)}
          ${renderField("Division / department", "input", "division", character.division)}
          ${renderField("Species", "input", "species", character.species)}
          ${renderField("Species trait", "input", "speciesTrait", character.speciesTrait)}
          ${renderField("Species ability", "input", "speciesAbility", character.speciesAbility)}
          ${renderField("Species attributes", "input", "speciesAttributes", character.speciesAttributes)}
        </div>
      </div>
      <div class="sheet-section">
        <h5>Core Ratings</h5>
        <div class="grid two sheet-stat-grid">
          <div class="card">
            <h4>Attributes</h4>
            <div class="field-grid compact">
              ${attributes.map((name) => renderField(name, "number", `attributes.${name}`, character.attributes[name])).join("")}
            </div>
          </div>
          <div class="card">
            <h4>Departments</h4>
            <div class="field-grid compact">
              ${departments.map((name) => renderField(name, "number", `departments.${name}`, character.departments[name])).join("")}
            </div>
          </div>
        </div>
      </div>
      <div class="sheet-section">
        <h5>Values</h5>
        <div class="field-grid">
          ${[0, 1, 2, 3].map((index) => renderField(`Value ${index + 1}`, "input", `values.${index}`, character.values[index] || "")).join("")}
        </div>
      </div>
      <div class="sheet-section">
        <h5>Focuses</h5>
        <div class="field-grid">
          ${[0, 1, 2, 3, 4, 5].map((index) => renderField(`Focus ${index + 1}`, "input", `focuses.${index}`, character.focuses[index] || "")).join("")}
        </div>
      </div>
      <div class="sheet-section">
        <h5>Talents</h5>
        <div class="field-grid">
          ${[0, 1, 2, 3].map((index) => renderField(`Talent ${index + 1}`, "input", `talents.${index}`, character.talents[index] || "")).join("")}
        </div>
      </div>
      <div class="sheet-section">
        <h5>Equipment and Notes</h5>
        <div class="field-grid">
          ${checkedEquipment.length ? `<div class="small">Selected equipment reminders: ${escapeHtml(checkedEquipment.join(", "))}</div>` : ""}
          ${renderField("Equipment notes", "textarea", "equipment", character.equipment)}
          ${renderField("Notes", "textarea", "notes", [character.pastimes, character.inPlayNotes, character.notes].filter(Boolean).join(" | "))}
        </div>
      </div>
    </article>
  `;
}

function renderPlayAidCard(character, expanded = false) {
  const primaryValue = character.values.find((value) => value.trim()) || "No value chosen";
  const topFocuses = character.focuses.filter((focus) => focus.trim()).slice(0, 4);
  return `
    <article class="play-card ${expanded ? "is-expanded" : ""}">
      <h3>${escapeHtml(character.name || "Unnamed character")}</h3>
      <p>${escapeHtml(character.rank || "No rank")} ${character.rank && (character.role || character.purpose) ? " / " : ""}${escapeHtml(character.role || character.purpose || "No role")}</p>
      <div class="play-card-grid">
        <span><strong>Species</strong>${escapeHtml(character.species || "-")}</span>
        <span><strong>Trait</strong>${escapeHtml(character.speciesTrait || character.careerTrait || character.assignmentTrait || "-")}</span>
        <span><strong>Value</strong>${escapeHtml(primaryValue)}</span>
        <span><strong>Focuses</strong>${escapeHtml(topFocuses.join(", ") || "-")}</span>
      </div>
    </article>
  `;
}

function renderField(label, type, path, value, options = []) {
  if (type === "select") {
    return `
      <label>${label}
        <select data-field="${path}">
          ${options.map(([optionValue, optionLabel]) => `<option value="${escapeHtml(optionValue)}" ${optionValue === value ? "selected" : ""}>${escapeHtml(optionLabel)}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (type === "textarea") {
    return `
      <label>${label}
        <textarea data-field="${path}">${escapeHtml(value)}</textarea>
      </label>
    `;
  }
  const inputType = type === "input" ? "text" : type;
  return `
    <label>${label}
      <input type="${inputType}" data-field="${path}" value="${escapeHtml(value)}">
    </label>
  `;
}

function renderPersonalTab() {
  return `
    ${renderSectionHeader(
      "Personal Combat",
      "A turn normally allows one major action and one minor action. Extra actions can come from Momentum, Threat, or specific actions."
    )}
    <section class="panel personal-combat-section house-rule-panel">
      <h3>House Rules</h3>
      ${renderPersonalActionList(personalHouseRules, "house-rule")}
    </section>
    <section class="panel personal-combat-section">
      <h3>Minor Actions</h3>
      ${renderPersonalActionList(personalActions.minor, "minor")}
    </section>
    <section class="panel personal-combat-section">
      <h3>Major Actions</h3>
      ${renderPersonalActionList(personalActions.major, "major")}
    </section>
  `;
}

function renderPersonalActionList(actions, kind) {
  return `
    <div class="personal-action-list">
      ${actions.map(([name, summary, page]) => `
        <article class="personal-action-row">
          <div>
            <strong>${escapeHtml(name)}</strong>
            <p>${escapeHtml(summary)}</p>
          </div>
          <span class="page-ref plain">${escapeHtml(page)}</span>
        </article>
      `).join("")}
    </div>
  `;
}

function renderMomentumTab() {
  return `
    ${renderSectionHeader(
      "Momentum Spends",
      "Common roleplay spends and combat-specific spends, grouped by scene type."
    )}
    <div class="momentum-groups">
      ${Object.entries(momentumSpends).map(([category, spends]) => renderMomentumCategory(category, spends)).join("")}
    </div>
  `;
}

function renderMomentumCategory(category, spends) {
  return `
    <details class="spend-category" open>
      <summary>
        <h3>${escapeHtml(category)}</h3>
        <span class="small">${spends.length} spends</span>
      </summary>
      <div class="personal-action-list momentum-spend-list" role="list">
        ${spends.map(([name, cost, summary, page]) => `
          <article class="personal-action-row momentum-spend-row" role="listitem">
            <div>
              <strong>${escapeHtml(name)}</strong>
              <span class="spend-cost">${escapeHtml(cost)}</span>
              <p>${escapeHtml(summary)}</p>
            </div>
            <span class="page-ref plain">${escapeHtml(page)}</span>
          </article>
        `).join("")}
      </div>
    </details>
  `;
}

function renderActionCards(actions, kind) {
  return `
    <div class="action-grid">
      ${actions.map(([name, summary, page]) => `
        <article class="action-card">
          <div class="action-topline">
            <strong>${name}</strong>
            <span class="action-kind ${kind}">${kind}</span>
          </div>
          <p>${summary}</p>
          <span class="page-ref">${page}</span>
        </article>
      `).join("")}
    </div>
  `;
}

function renderSpaceTab() {
  const activeShips = state.ships.slice(0, state.settings.shipCount);
  const selectedShip = activeShips.find((ship) => ship.id === state.settings.selectedShipId) || activeShips[0];
  const selectedIndex = activeShips.findIndex((ship) => ship.id === selectedShip.id);
  const controls = `
    <div class="ship-controls">
      <label>Ships displayed
        <input type="number" min="1" max="12" value="${state.settings.shipCount}" data-action="ship-count">
      </label>
      <button class="danger-button" type="button" data-action="clear-all-actions">Clear All Actions</button>
    </div>
  `;
  return `
    ${renderSectionHeader(
      "Space Combat",
      "Editable ship sheets with scene-based action checklists grouped by bridge position.",
      controls
    )}
    <div class="space-combat-layout">
      <div class="space-main">
        ${renderShip(selectedShip, selectedIndex)}
      </div>
      <aside class="active-ships-panel">
        <h3>Active Combat</h3>
        <div class="active-ship-list">
          ${activeShips.map((ship, index) => renderActiveShipCard(ship, index, ship.id === selectedShip.id)).join("")}
        </div>
      </aside>
    </div>
  `;
}

function renderActiveShipCard(ship, index, isSelected) {
  const stationStatus = starshipStations.reduce((totals, station) => {
    const majorUsed = station.major.some(([name]) => ship.actions[actionId(station.id, "major", name)]);
    const minorUsed = station.minor.some(([name]) => ship.actions[actionId(station.id, "minor", name)]);
    return {
      major: totals.major + (majorUsed ? 1 : 0),
      majorTotal: totals.majorTotal + 1,
      minor: totals.minor + (station.minor.length && minorUsed ? 1 : 0),
      minorTotal: totals.minorTotal + (station.minor.length ? 1 : 0)
    };
  }, { major: 0, majorTotal: 0, minor: 0, minorTotal: 0 });

  return `
    <button type="button" class="active-ship-card ${isSelected ? "is-active" : ""}" data-action="select-ship" data-ship-id="${ship.id}">
      <strong data-active-ship-name="${ship.id}">${escapeHtml(ship.name || `Ship ${index + 1}`)}</strong>
      <div class="active-ship-actions">
        <span class="availability ${stationStatus.major === stationStatus.majorTotal ? "used" : "available"}">Major ${stationStatus.major}/${stationStatus.majorTotal}</span>
        <span class="availability ${stationStatus.minorTotal && stationStatus.minor === stationStatus.minorTotal ? "used" : "available"}">Minor ${stationStatus.minor}/${stationStatus.minorTotal}</span>
      </div>
    </button>
  `;
}

function shipHasReservePower(ship) {
  const value = String(ship.reservePower || "").trim().toLowerCase();
  return Boolean(value) && !["0", "false", "no", "off"].includes(value);
}

function renderShip(ship, index) {
  return `
    <section class="ship-block" data-ship-id="${ship.id}">
      <div class="ship-title">
        <h3 data-ship-title="${ship.id}">${escapeHtml(ship.name || `Ship ${index + 1}`)}</h3>
        <div class="button-row">
          <button class="secondary-button" type="button" data-action="clear-ship-actions" data-ship-id="${ship.id}">Clear Ship Actions</button>
        </div>
      </div>
      <div class="ship-layout">
        <div class="panel">
          <h4>Ship Sheet</h4>
          ${renderShipSheet(ship)}
        </div>
        <div class="station-grid">
          ${starshipStations.map((station) => renderStation(ship, station)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderShipSheet(ship) {
  return `
    <div class="field-grid">
      ${renderShipField(ship.id, "Name", "name", ship.name)}
      ${renderShipField(ship.id, "Scale", "scale", ship.scale, "number")}
      ${renderShipField(ship.id, "Resistance", "resistance", ship.resistance, "number")}
      ${renderShipField(ship.id, "Max shields", "shields", ship.shields, "number")}
      ${renderShipField(ship.id, "Current shields", "currentShields", ship.currentShields, "number")}
      ${renderShipField(ship.id, "Reserve Power", "reservePower", ship.reservePower, "reserve-select")}
    </div>

    <div class="card ship-systems-card">
      <h4>Systems</h4>
      <div class="ship-system-grid">
        ${shipSystems.map((name) => `
          <div class="ship-system-row">
            <strong>${escapeHtml(name)}</strong>
            ${renderShipField(ship.id, "Score", `systems.${name}`, ship.systems[name], "number")}
            ${renderShipField(ship.id, "Breaches", `systemBreaches.${name}`, ship.systemBreaches[name], "number")}
          </div>
        `).join("")}
      </div>
    </div>

    <div class="card ship-departments-card">
      <h4>Departments</h4>
      <div class="field-grid compact">
        ${shipDepartments.map((name) => renderShipField(ship.id, name, `departments.${name}`, ship.departments[name], "number")).join("")}
      </div>
    </div>
  `;
}

function renderShipField(shipId, label, path, value, type = "input") {
  const data = `data-ship-field="${path}" data-ship-id="${shipId}"`;
  if (type === "textarea") {
    return `
      <label>${label}
        <textarea ${data}>${escapeHtml(value)}</textarea>
      </label>
    `;
  }
  if (type === "reserve-select") {
    const selected = shipHasReservePower({ reservePower: value }) ? "1" : "";
    return `
      <label>${label}
        <select ${data}>
          <option value="" ${selected ? "" : "selected"}>No</option>
          <option value="1" ${selected ? "selected" : ""}>Yes</option>
        </select>
      </label>
    `;
  }
  const inputType = type === "input" ? "text" : type;
  return `
    <label>${label}
      <input type="${inputType}" ${data} value="${escapeHtml(value)}">
    </label>
  `;
}

function renderStation(ship, station) {
  const majorUsed = station.major.some(([name]) => ship.actions[actionId(station.id, "major", name)]);
  const minorUsed = station.minor.some(([name]) => ship.actions[actionId(station.id, "minor", name)]);
  return `
    <details class="station" data-station-id="${station.id}">
      <summary class="station-header">
        <h4>${station.name}</h4>
        <div class="station-badges">
          <span class="availability ${station.minor.length ? (minorUsed ? "used" : "available") : "none"}" data-station-badge="minor">
            ${station.minor.length ? "Minor Action" : "No Minor Actions"}
          </span>
          <span class="availability ${majorUsed ? "used" : "available"}" data-station-badge="major">Major Action</span>
        </div>
      </summary>
      <div class="station-actions">
        ${station.minor.length ? renderActionGroup(ship, station, "minor", "Minor Actions") : ""}
        ${renderActionGroup(ship, station, "major", "Major Actions")}
      </div>
    </details>
  `;
}

function renderActionGroup(ship, station, kind, label) {
  return `
    <div class="station-action-group">
      <h5>${label}</h5>
      ${renderChecklist(ship, station, kind)}
    </div>
  `;
}

function renderChecklist(ship, station, kind) {
  const items = station[kind];
  if (!items.length) return "";
  return `
    <div class="check-list">
      ${items.map(([name, summary, page]) => {
        const id = actionId(station.id, kind, name);
        const checked = Boolean(ship.actions[id]);
        return `
          <label class="check-item action-row ${checked ? "is-checked" : ""}">
            <input type="checkbox" data-action="toggle-ship-action" data-ship-id="${ship.id}" data-action-id="${id}" ${checked ? "checked" : ""}>
            <strong>${escapeHtml(name)}</strong>
            <span class="action-summary">${escapeHtml(summary)}</span>
            <span class="action-row-meta">
              <span>${kind}</span>
              <span class="page-ref plain">${escapeHtml(page)}</span>
            </span>
          </label>
        `;
      }).join("")}
    </div>
  `;
}

function refreshShipActionIndicators(ship) {
  const activeShips = state.ships.slice(0, state.settings.shipCount);
  const shipIndex = activeShips.findIndex((item) => item.id === ship.id);
  starshipStations.forEach((station) => {
    const stationElement = document.querySelector(`[data-ship-id="${ship.id}"] [data-station-id="${station.id}"]`);
    if (!stationElement) return;
    const majorUsed = station.major.some(([name]) => ship.actions[actionId(station.id, "major", name)]);
    const minorUsed = station.minor.some(([name]) => ship.actions[actionId(station.id, "minor", name)]);
    const majorBadge = stationElement.querySelector('[data-station-badge="major"]');
    const minorBadge = stationElement.querySelector('[data-station-badge="minor"]');
    if (majorBadge) majorBadge.className = `availability ${majorUsed ? "used" : "available"}`;
    if (minorBadge && station.minor.length) minorBadge.className = `availability ${minorUsed ? "used" : "available"}`;
  });

  const activeCard = document.querySelector(`.active-ship-card[data-ship-id="${ship.id}"] .active-ship-actions`);
  if (activeCard && shipIndex >= 0) {
    const replacement = renderActiveShipCard(ship, shipIndex, ship.id === state.settings.selectedShipId);
    const wrapper = document.createElement("div");
    wrapper.innerHTML = replacement.trim();
    const nextActions = wrapper.firstElementChild?.querySelector(".active-ship-actions");
    if (nextActions) activeCard.replaceWith(nextActions);
  }
}

function refreshShipName(ship) {
  const activeShips = state.ships.slice(0, state.settings.shipCount);
  const shipIndex = activeShips.findIndex((item) => item.id === ship.id);
  const fallbackName = shipIndex >= 0 ? `Ship ${shipIndex + 1}` : "Ship";
  const label = ship.name || fallbackName;
  document.querySelectorAll(`[data-ship-title="${ship.id}"], [data-active-ship-name="${ship.id}"]`).forEach((element) => {
    element.textContent = label;
  });
}

function renderGlossaryTab() {
  const query = (state.settings.glossarySearch || "").trim().toLowerCase();
  const filteredGlossary = glossary.filter(([term, definition, page]) => {
    const haystack = `${term} ${definition} ${page}`.toLowerCase();
    return haystack.includes(query);
  });
  const controls = `
    <label class="search-field">Search terms
      <input type="search" data-glossary-search value="${escapeHtml(state.settings.glossarySearch || "")}" placeholder="Filter glossary">
    </label>
  `;
  return `
    ${renderSectionHeader(
      "Glossary",
      "Dashboard terms only, with concise references for the pages used by these tools.",
      controls
    )}
    <section class="panel">
      <div class="glossary-summary">${filteredGlossary.length} of ${glossary.length} terms</div>
      <div class="glossary-list" role="list">
      ${filteredGlossary.map(([term, definition, page]) => `
        <article class="glossary-row" role="listitem">
          <div class="glossary-term">
            <strong>${term}</strong>
            <span>${page}</span>
          </div>
          <span>${definition}</span>
        </article>
      `).join("")}
      ${filteredGlossary.length ? "" : `<p class="small">No matching terms.</p>`}
      </div>
    </section>
  `;
}

function setDeepValue(target, path, value) {
  const parts = path.split(".");
  let cursor = target;
  while (parts.length > 1) {
    const part = parts.shift();
    if (Array.isArray(cursor)) {
      cursor = cursor[Number(part)];
    } else {
      cursor[part] = cursor[part] ?? {};
      cursor = cursor[part];
    }
  }
  const finalPart = parts[0];
  if (Array.isArray(cursor)) {
    cursor[Number(finalPart)] = value;
  } else {
    cursor[finalPart] = value;
  }
}

function handleClick(event) {
  const tabButton = event.target.closest(".tab-button");
  if (tabButton) {
    state.settings.activeTab = tabButton.dataset.tab;
    saveState();
    render();
    return;
  }

  const action = event.target.closest("[data-action]");
  if (!action) return;
  if (["ship-count", "toggle-ship-action", "toggle-equipment"].includes(action.dataset.action)) return;

  if (action.dataset.action === "add-character") {
    const character = createCharacter("main");
    state.characters.push(character);
    state.settings.selectedCharacterId = character.id;
  }

  if (action.dataset.action === "select-character") {
    state.settings.selectedCharacterId = action.dataset.id;
  }

  if (action.dataset.action === "select-ship") {
    state.settings.selectedShipId = action.dataset.shipId;
  }

  if (action.dataset.action === "wizard-step") {
    const character = activeCharacter();
    const steps = getWizardSteps(character);
    character.wizardStep = Math.max(0, Math.min(Number(action.dataset.step) || 0, steps.length - 1));
  }

  if (action.dataset.action === "wizard-prev") {
    const character = activeCharacter();
    character.wizardStep = Math.max(0, character.wizardStep - 1);
  }

  if (action.dataset.action === "wizard-next") {
    const character = activeCharacter();
    const steps = getWizardSteps(character);
    character.wizardStep = Math.min(steps.length - 1, character.wizardStep + 1);
  }

  if (action.dataset.action === "set-character-field") {
    const character = activeCharacter();
    const oldType = character.type;
    setDeepValue(character, action.dataset.field, action.dataset.value || "");
    if (action.dataset.field === "type" && character.type !== oldType) {
      character.wizardStep = 0;
    }
  }

  if (action.dataset.action === "apply-value-example") {
    applyValueExample(action.dataset.value || "");
    return;
  }

  if (action.dataset.action === "apply-array-example") {
    applyArrayExample(action.dataset.array, action.dataset.value || "");
    return;
  }

  if (action.dataset.action === "apply-species") {
    const character = activeCharacter();
    const species = speciesExamples.find((item) => item.name === action.dataset.species);
    if (species) {
      character.species = species.name;
      character.speciesAttributes = species.attributes;
      character.speciesTrait = species.trait;
      character.speciesAbility = species.ability;
      character.speciesAbilityReminder = species.reminder;
    }
  }

  if (action.dataset.action === "reset-character") {
    const current = activeCharacter();
    const replacement = createCharacter(current.type);
    replacement.id = current.id;
    const index = state.characters.findIndex((character) => character.id === current.id);
    state.characters[index] = replacement;
  }

  if (action.dataset.action === "delete-character") {
    if (state.characters.length === 1) {
      state.characters[0] = createCharacter("main");
      state.settings.selectedCharacterId = state.characters[0].id;
    } else {
      state.characters = state.characters.filter((character) => character.id !== activeCharacter().id);
      state.settings.selectedCharacterId = state.characters[0].id;
    }
  }

  if (action.dataset.action === "clear-ship-actions") {
    const ship = state.ships.find((item) => item.id === action.dataset.shipId);
    if (ship) ship.actions = {};
  }

  if (action.dataset.action === "clear-all-actions") {
    state.ships.forEach((ship) => {
      ship.actions = {};
    });
  }

  saveState();
  render();
}

function applyValueExample(value) {
  const character = activeCharacter();
  if (character.values.some((item) => String(item || "").trim() === value.trim())) return;
  const emptyIndex = character.values.findIndex((item) => !String(item || "").trim());
  const targetIndex = emptyIndex === -1 ? character.values.length - 1 : emptyIndex;
  const targetField = document.querySelector(`[data-field="values.${targetIndex}"]`);

  if (emptyIndex === -1) {
    if (targetField) {
      targetField.scrollIntoView({ block: "center", behavior: "smooth" });
      targetField.focus();
      targetField.setSelectionRange(targetField.value.length, targetField.value.length);
    }
    return;
  }

  character.values[targetIndex] = value;
  saveState();
  if (targetField) {
    targetField.value = value;
    targetField.focus();
    targetField.setSelectionRange(targetField.value.length, targetField.value.length);
  }
  refreshWizardWarnings(character);
}

function applyArrayExample(arrayName, value) {
  if (!["focuses", "talents"].includes(arrayName)) return;
  const character = activeCharacter();
  const list = character[arrayName];
  if (list.some((item) => String(item || "").trim() === value.trim())) return;
  const emptyIndex = list.findIndex((item) => !String(item || "").trim());
  const targetIndex = emptyIndex === -1 ? list.length - 1 : emptyIndex;
  const targetField = document.querySelector(`[data-field="${arrayName}.${targetIndex}"]`);

  if (emptyIndex === -1) {
    if (targetField) {
      targetField.scrollIntoView({ block: "center", behavior: "smooth" });
      targetField.focus();
      targetField.setSelectionRange(targetField.value.length, targetField.value.length);
    }
    return;
  }

  list[targetIndex] = value;
  saveState();
  if (targetField) {
    targetField.value = value;
    targetField.focus();
    targetField.setSelectionRange(targetField.value.length, targetField.value.length);
  }
  refreshWizardWarnings(character);
}

function handleInput(event) {
  if (event.target.matches("[data-character-search]")) {
    const character = activeCharacter();
    const key = event.target.dataset.characterSearch;
    character.uiSearch[key] = event.target.value;
    saveState();
    render();
    const search = document.querySelector(`[data-character-search="${key}"]`);
    if (search) {
      search.focus();
      search.setSelectionRange(search.value.length, search.value.length);
    }
    return;
  }

  if (event.target.matches("[data-glossary-search]")) {
    state.settings.glossarySearch = event.target.value;
    saveState();
    render();
    const search = document.querySelector("[data-glossary-search]");
    if (search) {
      search.focus();
      search.setSelectionRange(search.value.length, search.value.length);
    }
    return;
  }

  const characterField = event.target.closest("[data-field]");
  if (characterField) {
    const character = activeCharacter();
    const path = characterField.dataset.field;
    const value = characterField.value;
    const oldType = character.type;
    setDeepValue(character, path, value);
    if (path === "type") {
      character.focuses = character.focuses || ["", "", "", ""];
      character.values = character.values || ["", "", "", ""];
      if (character.type !== oldType) {
        character.wizardStep = 0;
      }
    }
    saveState();
    if (path === "type" || path.startsWith("uiSearch.")) {
      render();
    } else {
      refreshWizardWarnings(character);
    }
    return;
  }

  const shipField = event.target.closest("[data-ship-field]");
  if (shipField) {
    const ship = state.ships.find((item) => item.id === shipField.dataset.shipId);
    if (ship) {
      const path = shipField.dataset.shipField;
      const value = shipField.value;
      setDeepValue(ship, path, value);
      saveState();
      if (path === "name") {
        refreshShipName(ship);
      }
    }
    return;
  }

  if (event.target.matches("[data-action='ship-count']")) {
    syncShipCount(state, event.target.value);
    saveState();
    render();
    return;
  }

  if (event.target.matches("[data-action='toggle-ship-action']")) {
    const ship = state.ships.find((item) => item.id === event.target.dataset.shipId);
    if (ship) {
      ship.actions[event.target.dataset.actionId] = event.target.checked;
      event.target.closest(".check-item")?.classList.toggle("is-checked", event.target.checked);
      saveState();
      refreshShipActionIndicators(ship);
    }
  }

  if (event.target.matches("[data-action='toggle-equipment']")) {
    const character = activeCharacter();
    character.equipmentChecklist[event.target.dataset.equipment] = event.target.checked;
    saveState();
  }
}

document.addEventListener("click", handleClick);
document.addEventListener("input", handleInput);
document.addEventListener("change", handleInput);
render();
