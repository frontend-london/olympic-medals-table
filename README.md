## Programming Task - Olympic Medals Table

The app should allow:
* Countries to be added to a table, along with the TOTAL number of medals the country won during the last Olympic Games;
* Rows to be sorted in descending order of medals won, either automatically or manually by the user.
* Add counts for each type of medal (Gold, Silver, Bronze) and make the countries order by Gold first, Silver next and Bronze thereafter;
* Add country flag icons/images to the country names;
* Allow editing and/or deleting of countries from the list.

Additional functionalities:
* Add counts for each type of medal (Gold, Silver, Bronze) and make the countries order by Gold first, Silver next and Bronze thereafter;
* Add country flag icons/images to the country names;
* Allow editing and/or deleting of countries from the list.

### Running the project

1. Type `npm install` to install all the dependencies.
2. Once it's complete, type `npm start` to run project in your browser.
3. If you want to deploy the code type `npm run build` and copy a content of a folder `dist/` to your server

### Used solutions

I tried to use all the best techniques of writing code in this project. Here is list of the features I've added to this project:

1. I started with installing **React** with **Webpack** from scratch instead of using `create-react-app` script to have more control over the code and install only those dependencies that I'm going to use
2. I've added **TypeScript** to prove my knowledge of this library and use benefits of this library (type control, checking errors while coding)
3. I've added `Sass-Loader` library to write proper and well-structured Sass code using BEM methodology
4. I've added `file-loader` library to dependencies to allow using images in the project (I needed it for medals image)
5. I've created basic styled static version of table and modal. I could use front-end framework such as Bootstrap to speed up the process of styling but instead of it I decided to write it from scratch to reduce the size of it to only used components and prove my knowledge of writing well-structured Sass code
6. I've added **CSS Image Sprites** for medals to speed up loading of the images
7. I've used extension technique in Sass to reduce need of duplicating class name and modifier - for example I'm using `class="medal--gold"` instead of `"medal medal--gold"` (more info: <https://webuniverse.io/css-organization-naming-conventions-and-safe-extend-without-preprocessors/#To_extend_or_not_to_extend?>)
8. I've added **WAI-ARIA standard** for accessibility (for example aria-label attribute in medals images)
9. I've structured my Sass files in the following way:
   * `general` folder contains components that can be used multiple times in the project such as button or modal. It also contains file common.scss which has basic styling of the page, `reset.scss` which is simple CSS Reset, simple grid system in `grid-system.scss`, list of used colors in colors.scss (I've generated them using <https://www.color-blindness.com/color-name-hue/> and sorted alphabetically) and list other variables used in the project in variables.scss (such as breakpoints - the same as in Bootstrap),
   * `specific` folder contains components that are not going to be used multiple times in the project such as `.button-add-country`,
   * `components` folder represents structure of React Components but no styling inside - instead of it it's importing them from `general/` and `specific/` folders.
10. After completing styling part I've started working on a React Components. First of all I've added functionality to open and close modal window which allows adding new country to the table.
11. I've added ESC and ENTER handlers to the modal window.
12. Table is showing dynamic date of countries
13. Added sorting to table: by Gold first, Silver next and Bronze thereafter;
14. Added list of countries to modal window. Country that has already been used is removed from the list.
15. Added flags of countries to table.
16. Added editing country medals functionality.
17. Added remove country functionality. Removed country is back again on available countries list.
18. Added message when there is no countries in the table.
19. Added favicon.

### Roadmap
Current version of the project is available online at <http://enside.pl/olympic-medals-table/>. In future I'll add extra functionalities:
1. **Redux** to use instead of React State.
2. Tests using **Enzyme and Jest** libraries