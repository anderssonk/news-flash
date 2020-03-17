import apiConfig from "./util/apiConfig";

class NewsModel {
  constructor() {
    this.starred = [];
    this.feed = [];
    this.subscribers = [];
  }
  addObserver(callback) {
    console.log("NewsModel: addObserver: ", callback);
    this.callback = callback;
    this.subscribers.push(callback);
  }
  notifyObservers(whatHappened) {
    //calls what's in subscribers list
    console.log("NewsModel: notifyObservers: ", whatHappened);
    this.subscribers.forEach(callback => callback(whatHappened));
  }

  removeObserver(observer) {
    this.subscribers = this.subscribers.filter(each => observer !== each);
  }

  addToFeed(array) {
    this.feed = [...this.feed, array];
  }

  getStarred() {
    // console.log("getStarred ", this.starred);
    var starred = this.starred;
    return starred;
  }

  addToStarred(url) {
    console.log("addToStarred 1 ", this.starred);
    const addedNews = this.feed[0].filter(article => article.id === url);

    this.starred = this.starred.concat(addedNews);
    this.notifyObservers({ upd_starred: this.starred });

    console.log("addToStarred 2 ", this.starred);

    // console.log(
    //   "hej",
    //   this.feed[0].filter(article => article.id === url)
    // );
  }

  removeFromStarred(url) {
    // const currentStarred = this.starred
    this.starred = this.starred.filter(news => news.id !== url);
    this.notifyObservers({ removed: this.starred });
  }

  handleQuery(query) {
    return fetch(`http://newsapi.org/v2/${query}&apiKey=${apiConfig().API_KEY}`)
      .then(this.handleHTTPError)
      .then(response => response.json())
      .catch(console.error);
  }

  handleHTTPError(response) {
    if (response.ok) return response;
    throw Error(response.statusText); // otherwise logs an error
  }

  searchNews(type, country = "se") {
    let x = this.handleQuery(`${type}?country=${country}`);
    return x.then(data => data.articles);
  }

  getDataFromAPITopHeadlines(type, country = "se", searchString) {
    //arguments used to change type of API call, type ="everything" uses searchString="some search string ", type="top-headlines" uses country="us,uk,se etc..."
    //returns a promise

    var url = "";

    type === "everything" //to handle change between "everything" or "top-headlines"
      ? (url = `http://newsapi.org/v2/${type}?q=${searchString}&apiKey=${
          apiConfig().API_KEY
        }`)
      : (url =
          `http://newsapi.org/v2/${type}?` +
          `country=${country}&q=corona` +
          `apiKey=${apiConfig().API_KEY}`);

    var req = new Request(url);

    return fetch(req)
      .then(this.handleHTTPError)
      .then(response => response.json())
      .catch(console.error);
  }
}

export default new NewsModel();
