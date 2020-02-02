const SEVERITY_LOW = 0;
const SEVERITY_MEDIUM = 1;
const SEVERITY_HIGH = 2;
const SEVERITY_CRITICAL = 3;

const SYMPTONS_LOW = [
  // low
  {
    name: "Low 1",
    severity: SEVERITY_LOW,
    category: []
  },
  {
    name: "Low 2",
    severity: SEVERITY_LOW,
    category: []
  },
  {
    name: "Low 3",
    severity: SEVERITY_LOW,
    category: []
  },
  {
    name: "Low 4",
    severity: SEVERITY_LOW,
    category: []
  },
  {
    name: "Low 5",
    severity: SEVERITY_LOW,
    category: []
  },
  {
    name: "Low 6",
    severity: SEVERITY_LOW,
    category: []
  }
];

const SYMPTONS_MEDIUM = [
  // medium
  {
    name: "Medium 1",
    severity: SEVERITY_MEDIUM,
    category: []
  },
  {
    name: "Medium 2",
    severity: SEVERITY_MEDIUM,
    category: []
  },
  {
    name: "Medium 3",
    severity: SEVERITY_MEDIUM,
    category: []
  },
  {
    name: "Medium 4",
    severity: SEVERITY_MEDIUM,
    category: []
  },
  {
    name: "Medium 5",
    severity: SEVERITY_MEDIUM,
    category: []
  },
  {
    name: "Medium 6",
    severity: SEVERITY_MEDIUM,
    category: []
  }
];

const SYMPTONS_HIGH = [
  {
    name: "High 1",
    severity: SEVERITY_HIGH,
    category: []
  },
  {
    name: "High 2",
    severity: SEVERITY_HIGH,
    category: []
  },
  {
    name: "High 3",
    severity: SEVERITY_HIGH,
    category: []
  },
  {
    name: "High 4",
    severity: SEVERITY_HIGH,
    category: []
  }
];

const SYMPTONS_CRITICAL = [
  // critical
  {
    name: "Critical 1",
    severity: SEVERITY_CRITICAL,
    category: []
  },
  {
    name: "Critical 2",
    severity: SEVERITY_CRITICAL,
    category: []
  },
  {
    name: "Critical 3",
    severity: SEVERITY_CRITICAL,
    category: []
  }
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomFromList(lst) {
  return lst[getRandomInt(0, lst.length - 1)];
}

const generateRandomSymptons = level => {
  var n = Math.ceil(level / 4);
  if (n < 2) n = 2;
  if (n >= 5) n = 5;

  let maxSeverityPoints = 10;
  let totalSeverity = 0;

  let symptons = [randomFromList(SYMPTONS_LOW)];
  symptons[0].discovered = true;

  for (let i = 1; i < n; i++) {
    let s = randomFromList(
      [].concat(SYMPTONS_MEDIUM, SYMPTONS_HIGH, SYMPTONS_CRITICAL)
    );
    if (totalSeverity + s.severity < maxSeverityPoints) {
      s.discovered = false;
      symptons.push(s);
      totalSeverity += s.severity;
    }
  }

  return symptons;
};

export default {
  generateRandomSymptons: generateRandomSymptons
};
