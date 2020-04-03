# News Flash!

## Mid-project review

### Project description

The main purpose of the application is to let users search among and read top news stories. A news feed containing previews of news stories as well as a sidebar containing starred items will be shown on the page. A click on a dish will show a detailed view of the dish. [Link to project proposal](https://docs.google.com/document/d/12wm2Mx144A_1xpNfDBL6Xi5HL_HaQ-QJQVoBJuQYewk/edit?usp=sharing)

The **component structure** is (for now) as follows:

```
App.js
  |-- ArticleDisplay
  |     |__ ArticleDisplay.js
  |
  |-- NewsFeed
  |     |-- NewsFeed.js
  |     |__ NewsFeedView.js
              |-- NewsCountry.js
              |__ NewsCategory.js
  |
  |-- SelectedArticle
  |     |-- SelectedArticle.js
  |     |__ SelectedArticleView.js
  |
  |__ SideBar
        |-- Sidebar.js
        |__ SidebarView.js
```

**Note** that this is _not the same_ structure as the file structure!

### What we have done

- Bootstrapped project with Create React App
- Setup basic framework code
- Styled some components with CSS stylesheets
- Created a NewsModel
- React context API for the NewsModel
- Made our first API call (used in the search function below)
- A search function which allows the user to search by
  - country
  - news category
- A "star" button on each article (ArticleDisplay) that adds the article to a sidebar.
- A sidebar containing starred articles (which can be removed by clicking on a button)

### What we are planning on doing

- Implement a search function allowing the user to enter a string to search by.
- Create a more detailed view for each article (SelectedArticleView)
- More styling
- React routes
- Manipulate the data in the API (some kind of calculation)
- “Recommended for you”-feature (see our project proposal for more details)
- Drag and drop (if we have time)

## Commit Messages

```
<type>[optional scope]: <description>
```

### `type`

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

### `scope`

Where the change is made (can be left empty if the change is made globally or is difficult be assigned to a specific component)

### Commit message example

```
refactor(Sidebar): early refactoring of code from hyperscript to JSX
```
