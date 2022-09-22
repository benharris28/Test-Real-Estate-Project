function getItem(key) {
  let val;

  try {
    val = localStorage.getItem(key);
  } catch (e) {
    console.error(`could not read '${key}' from localStorage`, e);
  }

  if (val) {
    try {
      return JSON.parse(val);
    } catch (e) {
      console.error(`could not json parse localStorage '${key}' value '${val}'`, e);
    }
  }

  return null;
}

function setItem(key, val) {
  const valJson = JSON.stringify(val);

  try {
    localStorage.setItem(key, valJson);
  } catch (e) {
    console.error(`could not write '${key}' to localStorage`, e);
  }
}

export function clear() {
  localStorage.clear();
}

export function isFirstVisit() {
  const isFirstVisit = getItem('returningUser') !== true;
  setItem('returningUser', true);
  return isFirstVisit;
}

export function updateClientState(gameState) {
  setItem('clientState', gameState);
}

export function getClientState() {
  return getItem('clientState');
}

export function setStats(stats) {
  setItem('stats', stats);
}

export function getStats() {
  return getItem('stats');
}
