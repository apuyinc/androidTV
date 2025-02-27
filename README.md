To Run the tests:

1. Clone the repository AndroidTV
2. install dependencies: npm install
3. URL is not set in the code, so you can run the tests by:
   - npx cypress run --config baseUrl="http://my.url"
   - npx cypress open --config baseUrl="http://my.url"
   - setting the url in baseUrl located in cypress.config.js file
4. Report will be generated in reports/html

Assumptions: 
- Every time the application is opened:
  - It focuses on TV App
  - Same apps are loaded in every section
  - There is always at least one app in the favourites row, besides Watch TV

Future improvements:
- In terms of navigation, we always start from Watch TV and assume the items in screen are always the same and located in the same position, e.g. Home, TV Guide, Channels, Apps, a possible idea is to implement a smart navigation based on the ids and navigation.
- analyse the possibility of handling async calls with await/async instead of chaining promises
  
