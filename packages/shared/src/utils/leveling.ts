const RANK_THRESHOLDS = {
  unranked: 0,
  bronzeBrain: 500,
  inTheLab: 2000,
  lockedIn: 5000,
  offerReady: 10000,
} as const;

const READINESS_THRESHOLDS = {
  cold: 0,
  wakingUp: 30,
  heatingUp: 50,
  lockedIn: 70,
  onFire: 85,
} as const;

export { RANK_THRESHOLDS, READINESS_THRESHOLDS };
