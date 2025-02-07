import http from 'k6/http'

export const options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 61,
      timeUnit: '1m', // 1000 iterations per second, i.e. 1000 RPS
      duration: '180s',
      preAllocatedVUs: 1, // how large the initial pool of VUs would be
      maxVUs: 5, // if the preAllocatedVUs are not enough, we can initialize more
    },
  },
};

export default function () {

  const query = `
    query FeaturedListings {
      featuredListings {
        amenities {
          category
          id
          name
        }
        closed
        costPerNight
        id
        numOfBeds
        title
      }
    }`;

  const headers = {
    'Content-Type': 'application/json',
  };

  const res = http.post('http://localhost:4000/', JSON.stringify({ query: query }), {
    headers: headers,
  });

}