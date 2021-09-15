import { upperFirst } from "lodash-es";
import { apiStatus } from "../constants/apiStatus";

/**
 * Will generate computed properties for each api status
 * For example, if the reactivePropertyKey = 'fetchDataStatus'
 * then the returned object will be as follows
 *
 * {
 *   fetchDataStatusIdle: function() {
 *     return this['fetchDataStatus'] === 'IDLE'
 *   }
 *
 *   fetchDataStatusPending: function() {
 *     return this['fetchDataStatus'] === 'PENDING'
 *   }
 *
 *   fetchDataStatusSuccess: function() {
 *     return this['fetchDataStatus'] === 'SUCCESS'
 *   }
 *
 *   fetchDataStatusError: function() {
 *     return this['fetchDataStatus'] === 'ERROR'
 *   }
 * }
 *
 * @important - reactivePropertyKey must be a reactive value
 *
 * @param {string[] | string} reactivePropertyKeys
 * @return {object}
 */
export const apiStatusComputedFactory = (reactivePropertyKeys = []) => {
  /**
   * Object to store computed getters for
   * different API statuses
   */
  let computed = {};

  // If the argument passed is an array then assign it,
  // otherwise, wrap it in an array
  const properties = Array.isArray(reactivePropertyKeys)
    ? reactivePropertyKeys
    : [reactivePropertyKeys];

  for (const reactivePropertyKey of properties) {
    /**
     * Loop through API statuses
     * IDLE, PENDING, SUCCESS, ERROR
     */
    for (const [statusKey, statusValue] of Object.entries(apiStatus)) {
      /**
       * Normalise status key
       * IDLE -> Idle
       * SUCCESS -> Success
       */
      const normalisedStatus = upperFirst(statusKey.toLowerCase());
      /**
       * Add a computed property
       */
      computed[`${reactivePropertyKey}${normalisedStatus}`] = function() {
        return this[reactivePropertyKey] === statusValue;
      };
    }
  }
  return computed;
};
