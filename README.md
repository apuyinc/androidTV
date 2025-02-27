To Run the tests:

1. Clone the repository AndroidTV
2. install dependencies: npm install
3. URL is not set in the code, so you can run the tests by:
   - npx cypress run --config baseUrl="http://my.url"
   - npx cypress open --config baseUrl="http://my.url"
   - setting the url in baseUrl located in cypress.config.js file
4. Report will be generated in reports/html

Assumptions: - Every time the application is opened: - It focuses on TV App - Same apps are loaded in every section - There is always at least one app in the favourites row, besides Watch TV

Future improvements: - We always start from Watch TV and assume the items in screen are always the same and located in the same position, e.g. Home, TV Guide, Channels, Apps - We can improve the navigation to an specific element by checking it is focused before Enter
