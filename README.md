## Testing GQL rate limits

This repo hosts a sample k6 load test script to easily simulate various traffic load conditions for a GQL endpoint. It is primarily aimed at testing for rate limiting.

To use:
1. Install [k6](https://k6.io/), i.e. `brew install k6`
1. Customize `connector-odyssey.js` to your liking, in particular the `query` it runs and any load testing paramters. The provided one is a query used in the [Introducing Apollo Connectors](https://www.apollographql.com/tutorials/connectors-intro-rest/01-overview) odyssey course.
1. To run the test, run `k6 run connector-odyssey.js`. This will use the predefined scenario, if you pass other CLI options it will use those instead.
1. To learn more about how to cusotmize the scenario's constant request rate settings, [read the relevant k6 documentation](https://k6.io/blog/how-to-generate-a-constant-request-rate-with-the-new-scenarios-api/).