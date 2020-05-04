import apiConfig from "./util/apiConfig";
import firebase from "./util/firebaseConfig";

class NewsModel {
  constructor() {
    this.user = null;
    this.starred = [];
    this.feed = [];
    this.subscribers = [];
  }

  retrieveUserInfo() {
    return this.user;
  }

  assignUser(user) {
    this.user = user;
    console.log("assigned user:", user);
  }

  addObserver(callback) {
    console.log("NewsModel: addObserver: ", callback);
    this.callback = callback;
    this.subscribers.push(callback);
  }
  notifyObservers(whatHappened) {
    //calls what's in subscribers list
    console.log("NewsModel: notifyObservers: ", whatHappened);
    this.subscribers.forEach((callback) => callback(whatHappened));
  }

  removeObserver(observer) {
    this.subscribers = this.subscribers.filter((each) => observer !== each);
  }

  addToFeed(article) {
    if (!this.feed.filter((item) => item.url === article.url).length > 0) {
      this.feed = [...this.feed, article];
    }
  }

  loginSetStarred(array) {
    this.starred = array;
    this.notifyObservers({ upd_starred: this.starred });
  }
  logoutSetStarred() {
    this.starred = [];
    this.notifyObservers({ upd_starred: this.starred });
  }

  getStarred() {
    return this.starred;
  }
  getFeed() {
    return this.feed;
  }

  addToStarred(url) {
    if (!this.starred.filter((article) => article.url === url).length > 0) {
      // om url inte redan är i starred
      const addedNews = this.feed.filter((article) => article.url === url); //
      this.starred = this.starred.concat(addedNews); // lägg till artikeln med den url:en
      this.notifyObservers({ upd_starred: this.starred });
    } else {
      console.log(url, " has already been starred.");
    }
  }

  removeFromStarredDataBase(article) {
    const db = firebase.firestore();

    if (this.retrieveUserInfo()) {
      db.collection("users") //removes article document with id
        .doc(this.retrieveUserInfo().uid)
        .collection("starred_collection")
        .doc(`${article.uniqueID}`)
        .get()
        .then((doc) => {
          //if document exists
          if (doc.exists) {
            db.collection("users")
              .doc(this.retrieveUserInfo().uid)
              .collection("starred_collection")
              .doc(`${article.uniqueID}`)
              .delete();
            console.log("article deleted, id:", article.uniqueID);
          } else {
            console.log("article is not deletable");
          }
        });
    }
  }

  removeFromStarred(url) {
    // const currentStarred = this.starred
    this.starred = this.starred.filter((news) => news.url !== url);
    this.notifyObservers({ removed: this.starred });
  }

  handleQuery(query) {
    return fetch(
      `https://newsapi.org/v2/${query}&apiKey=${apiConfig().API_KEY}`
    )
      .then(this.handleHTTPError)
      .then((response) => response.json())
      .catch(console.error);
  }

  handleHTTPError(response) {
    if (response.ok) return response;
    throw Error(response.statusText); // otherwise logs an error
  }

  searchNews(type, country = "se", category = "") {
    let x = this.handleQuery(`${type}?country=${country}&category=${category}`);
    return x.then((data) => data.articles);
  }

  getDataFromAPITopHeadlines(type, country = "se", searchString) {
    //arguments used to change type of API call, type ="everything" uses searchString="some search string ", type="top-headlines" uses country="us,uk,se etc..."
    //returns a promise

    var url = "";

    type === "everything" //to handle change between "everything" or "top-headlines"
      ? (url = `https://newsapi.org/v2/${type}?q=${searchString}&apiKey=${
          apiConfig().API_KEY
        }`)
      : (url =
          `https://newsapi.org/v2/${type}?` +
          `country=${country}&q=corona` +
          `apiKey=${apiConfig().API_KEY}`);

    var req = new Request(url);

    return fetch(req)
      .then(this.handleHTTPError)
      .then((response) => response.json())
      .catch(console.error);
  }
}

export default new NewsModel();
