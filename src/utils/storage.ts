const STORAGE_KEY = "terra-game-state";

export interface GameState {
  correctIds: string[];
  history: number[];
  // États planète
  unfloodPlanet: boolean;
  turnPlanetGreen: boolean;
  growTrees: boolean;
  unmeltIce: boolean;
  cleanAir: boolean;
  cleanWater: boolean;
  replaceBuildings: boolean;
  cleanWaste: boolean;
  transitionEnergy: boolean;
  extinguishFire: boolean;
  addAnimals: boolean;
}

export function saveGameState(state: GameState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("Terra: impossible de sauvegarder la progression", e);
  }
}

export function loadGameState(): GameState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as GameState;
  } catch (e) {
    console.warn("Terra: impossible de charger la progression", e);
    return null;
  }
}

export function clearGameState(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function hasSavedGame(): boolean {
  return localStorage.getItem(STORAGE_KEY) !== null;
}
