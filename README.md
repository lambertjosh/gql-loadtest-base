## Testing GQL rate limits

This repo hosts a sample k6 load test script to easily simulate various traffic load conditions for a GQL endpoint. It is primarily aimed at testing for rate limiting.

To use:
1. Install k6, i.e. `brew install k6`
1. Customize `connector-odyssey.js` to your liking, in particular the `query` it runs and any load testing paramters. 
1. To run the test, run `k6 run connector-odyssey.js`. This will use the predefined scenario, if you pass other CLI options it will use those instead.