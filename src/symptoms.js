import utils from "./utils";

const SEVERITY_LOW = 0;
const SEVERITY_MEDIUM = 1;
const SEVERITY_HIGH = 2;
const SEVERITY_CRITICAL = 3;

const SYMPTOMS = [
  //    LOW
  { name: "Loud", severity: SEVERITY_LOW, icon: require(`@/assets/sintomas/loud.png`)},
  { name: "Angry", severity: SEVERITY_LOW, icon: require(`@/assets/sintomas/angry.png`) },
  { name: "Fat", severity: SEVERITY_LOW, icon: require(`@/assets/sintomas/fat.png`) },
  { name: "Hair Ball", severity: SEVERITY_LOW, icon: require(`@/assets/sintomas/hairball.png`) },
  { name: "Hoarse Voice", severity: SEVERITY_LOW, icon: require(`@/assets/sintomas/hoarsevoice.png`) },
  { name: "Eating a lot", severity: SEVERITY_LOW, icon: require(`@/assets/sintomas/eatingalot.png`) },
  { name: "Sad", severity: SEVERITY_LOW, icon: require(`@/assets/sintomas/sad.png`) },
  //    MEDIUM
  { name: "Not Eating", severity: SEVERITY_MEDIUM, icon: require(`@/assets/sintomas/noteating.png`) },
  { name: "Lazy", severity: SEVERITY_MEDIUM, icon: require(`@/assets/sintomas/lazy.png`) },
  { name: "Sneazing", severity: SEVERITY_MEDIUM, icon: require(`@/assets/sintomas/sneazing.png`) },
  { name: "Hair Loss", severity: SEVERITY_MEDIUM, icon: require(`@/assets/sintomas/hairloss.png`) },
  { name: "Weight Loss", severity: SEVERITY_MEDIUM, icon: require(`@/assets/sintomas/weightloss.png`) },
  { name: "Fleas", severity: SEVERITY_MEDIUM, icon: require(`@/assets/sintomas/fleas.png`) },
  //    HIGH
  { name: "Pain", severity: SEVERITY_HIGH, icon: require(`@/assets/sintomas/pain.png`) },
  { name: "Confused", severity: SEVERITY_HIGH, icon: require(`@/assets/sintomas/confused.png`) },
  { name: "Fever", severity: SEVERITY_HIGH, icon: require(`@/assets/sintomas/fever.png`) },
  { name: "Diarrhea", severity: SEVERITY_HIGH, icon: require(`@/assets/sintomas/diarrhea.png`) },
  { name: "Vomit", severity: SEVERITY_HIGH, icon: require(`@/assets/sintomas/vomit.png`) },
  //    CRITICAL
  { name: "Injury", severity: SEVERITY_CRITICAL, icon: require(`@/assets/sintomas/injury.png`) },
  { name: "Parasites", severity: SEVERITY_CRITICAL, icon: require(`@/assets/sintomas/parasites.png`) },
  { name: "Infection", severity: SEVERITY_CRITICAL, icon: require(`@/assets/sintomas/infection.png`) }
];

const TREATMENTS = [
  {
    name: "Flu Shot",
    SYMP: ["Infection", "Hair Loss", "Vomit", "Sneazing", "Fever"],
    price: 900
  },
  {
    name: "Anti Parasite Pills",
    SYMP: ["Parasites", "Diarrhea", "Weight Loss", "Lazy", "Confused"],
    price: 900
  },
  {
    name: "Plaster Cast",
    SYMP: ["Injury", "Angry", "Pain", "Fever", "Not Eating"],
    price: 850
  },
  { name: "Flea Bath", SYMP: ["Hair Loss", "Hair Ball", "Fleas"], price: 200 },
  { name: "Light Food", SYMP: ["Fat", "Hoarse Voice"], price: 100 },
  {
    name: "Premium Food",
    SYMP: ["Sad", "Not Eating", "Weight Loss"],
    price: 200
  },
  { name: "Catnip", SYMP: ["Sad", "Lazy", "Loud", "Confused"], price: 350 },
  { name: "Love", SYMP: ["Loud", "Eating a lot"], price: 0 },
  { name: "Ibuprofen", SYMP: ["Pain", "Fever"], price: 350 },
  { name: "Herbal Tea", SYMP: ["Diarrhea", "Vomit"], price: 350 },
  { name: "Breathing Mask", SYMP: ["Sneazing", "Hair Ball"], price: 125 }
];

const generateRandomSymptons = level => {
  console.log("level ", level);
  var maxPrice = 50 + level * 10;
  console.log("mp ", maxPrice);
  var treats = TREATMENTS.filter(t => t.price <= maxPrice);
  var selected = utils.randomFromList(treats);
  var symps = SYMPTOMS.filter(s => selected.SYMP.indexOf(s.name) != -1);

  var toRemove = Math.floor((Math.random() * level) / 10);
  var toAdd = Math.floor((Math.random() * level) / 15);

  for (let l = 0; l < toRemove; l++) {
    if (symps.length === 0) {
      break;
    }
    symps.splice(utils.getRandomInt(0, symps.length), 1);
  }
  for (let l = 0; l < toAdd; l++) {
    if (symps.length === 0) {
      break;
    }
    let nsymps = SYMPTOMS.filter(
      s => symps.map(s => s.name).indexOf(s.name) === -1
    );
    symps[symps.length] = nsymps[utils.getRandomInt(0, nsymps.length)];
  }

  var completing = false;
  for (let l = SEVERITY_CRITICAL; l >= 0; l--) {
    let nl = symps.filter(s => s.severity == l).length;
    if (!completing) {
      if (nl > 0) {
        completing = true;
      }
      continue;
    }
    if (nl > 0) {
      continue;
    }
    let nsymps = SYMPTOMS.filter(
      s => symps.map(t => t.name).indexOf(s.name) === -1
    );
    nsymps = nsymps.filter(s => s.severity === l);
    symps[symps.length] = nsymps[utils.getRandomInt(0, nsymps.length)];
  }

  symps = utils.shuffle(symps);

  return JSON.parse(JSON.stringify(symps));
};

/*
const generateRandomSymptons = level => {
  var n = Math.ceil(level / 4);
  if (n < 2) n = 2;
  if (n >= 5) n = 5;

  let maxSeverityPoints = 10;
  let totalSeverity = 0;

  let symptons = [utils.randomFromList(SYMPTOMS.LOW)];
  symptons[0].discovered = true;

  for (let i = 1; i < n; i++) {
    let s = utils.randomFromList(
      [].concat(SYMPTOMS.MEDIUM, SYMPTOMS.HIGH, SYMPTOMS.CRITICAL)
    );
    if (totalSeverity + s.severity < maxSeverityPoints) {
      s.discovered = false;
      symptons.push(s);
      totalSeverity += s.severity;
    }
  }

  return symptons;
};
*/

export default {
  generateRandomSymptons: generateRandomSymptons,
  TREATMENTS: TREATMENTS
};
