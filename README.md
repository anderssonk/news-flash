# News Flash! #

## Mid-project review ##

### Project description

The main purpose of the application is to let users search among and read top news stories. A news feed containing previews of news stories as well as a sidebar containing starred items will be shown on the page. A click on a dish will show a detailed view of the dish. [Link to project proposal](https://docs.google.com/document/d/12wm2Mx144A_1xpNfDBL6Xi5HL_HaQ-QJQVoBJuQYewk/edit?usp=sharing) 

The **component file structure** is (for now)  as follows: 

```
App.js
  |-- ArticleDisplay
  |     |__ ArticleDisplay.js
  |           
  |-- NewsFeed 
  |     |-- NewsFeed.js
  |     |__ NewsFeedView.js
  |
  |-- SelectedArticle
  |     |-- SelectedArticle.js
  |     |__ SelectedArticleView.js
  |
  |__ SideBar
        |-- Sidebar.js
        |__ SidebarView.js
``` 


### What we have done ###

- Bootstrapped project with CRA 
- Setup basic framework code
- Styled some components with CSS stylesheets 

### What we are planning on doing  ###

- **TODO BEFORE MID-REVIEW:** Make our first API call 
- More styling
- Create a NewsModel 
- React routes 
- React context API 
- A "star" button on ArticleDisplay as well as SelectedArticleView that adds article to the sidebar. 



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

Where the change is made (can be left empty if the change is made globally or is difficult  be assigned to a specific component)

### Commit message example
```
refactor(Sidebar): early refactoring of code from hyperscript to JSX
```



