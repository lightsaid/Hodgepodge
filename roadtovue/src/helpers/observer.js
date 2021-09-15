export const createObserver = () => {
  let observers = {};

  const on = (topic, fn) => {
    observers[topic] || (observers[topic] = []);
    observers[topic].push(fn);
  };

  const off = (topic, fn) => {
    if (!observers[topic]) return;
    const index = observers[topic].indexOf(fn);
    if (~index) observers[topic].splice(index, 1);
  };

  const notify = (topic, ...args) => {
    for (let i = observers[topic].length - 1; i >= 0; i--) {
      observers[topic][i](...args);
    }
  };

  return {
    on,
    off,
    notify,
  };
};
