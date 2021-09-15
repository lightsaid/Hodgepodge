const IDLE = Symbol("IDLE");
const PENDING = Symbol("PENDING");
const SUCCESS = Symbol("SUCCESS");
const ERROR = Symbol("ERROR");
// const REVALIDATING = Symbol("REVALIDATING");

export const DEFAULT_API_STATUSES = [
  "IDLE",
  "PENDING",
  "SUCCESS",
  "ERROR",
  // "REVALIDATING",
];

export const apiStatus = {
  IDLE,
  PENDING,
  SUCCESS,
  ERROR,
  // REVALIDATING,
};
