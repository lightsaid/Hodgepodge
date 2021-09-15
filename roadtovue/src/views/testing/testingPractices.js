export const testingPractices = [
  `If a component relies on fetching data from an API or determines if some HTML markup should be rendered conditionally in the mounted hook, make sure you correctly await for it in your tests. You might need to await for the *nextTick* to ensure that Vue flushed all the updates and patched the DOM. In the first version of Vue Test Utils you need to await *nextTick* explicitly, the second one might already do it for you so check the docs. `,
  `Be careful with shallow mounting. If you use shallow mounting, but try to grab an element in a nested component, then it won't work, as it is not there. `,
  `When writing tests, focus on interacting with the DOM output, rather than Vue components. This way it will be easier to avoid testing implementation details. `,
  `What kind of tests you write will depend on what kind of software you're working on. Sometimes you might need to test implementation details, but avoid it when you can.`,
  `100% coverage should not always be a must. If you try to focus on 100% coverage, then you are likely to start testing implementation details just to satisfy the coverage percentage. You should weigh trade-offs and determine if it is worth trying to reach 100% coverage, as it could make your tests less clean and harder to maintain.`,
  `There are 2 main categories of consumers of your application code. You, the developer, and your end user, who is supposed to use it. Don't make tests the third consumer type of the app. Write the tests in a way that would imitate user's behaviour. `,
  `If you need to grab an element in a test by a dataset attribute, be consistent and use data-testid for all tests.`,
  `Don't test third-party libraries. This is not your code, so you should not test it. A third-party library should have its own test suite.`,
  `You can mock API requests for unit tests, as reusable components should be tested in isolation.`,
  `Try not to mock API requests in End To End tests to fully test the site like a normal user would use it, unless you have a specific reason to do it.`,
]
