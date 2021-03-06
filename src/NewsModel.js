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
  }

  addObserver(callback) {
    // console.log("NewsModel: addObserver: ", callback);
    this.callback = callback;
    this.subscribers.push(callback);
  }
  notifyObservers(whatHappened) {
    //calls what's in subscribers list
    // console.log("NewsModel: notifyObservers: ", whatHappened);
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
  addComment(article, comment) {
    article.comment = comment;
  }

  addToStarredDatabase(article) {
    const db = firebase.firestore();

    if (this.retrieveUserInfo()) {
      //if someone is logged in
      db.collection("users")
        .doc(this.retrieveUserInfo().uid)
        .collection("starred_collection")
        .limit(1)
        .get()
        .then((query) => {
          if (query.size === 0) {
            //returns 1 if exist, 0 if it doesn't
            //starred_collection dont exists and therefore user does not have any article saved.
            // set new collection
            db.collection("users")
              .doc(this.retrieveUserInfo().uid)
              .collection("starred_collection")
              .doc(`${article.uniqueID}`)
              .set({ article });
          } else {
            //starred_collection DOES exist and therefore user has articles saved.
            //update collection with new articles

            db.collection("users")
              .doc(this.retrieveUserInfo().uid)
              .collection("starred_collection")
              .doc(`${article.uniqueID}`)
              .set({ article });
          }
        });
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
    console.log("query", query);
    return fetch(
      `https://newsapi.org/v2/${query}&apiKey=${apiConfig().API_KEY}`
    )
      .then(this.handleHTTPError)
      .then((response) => response.json())
      .catch(console.error);
  }

  handleHTTPError(response) {
    if (response.ok) {
      return response;
    }
    console.log("error", response);
    throw Error(response.statusText); // otherwise logs an error
  }

  async searchNews(type, country = "se", category = "", searchString = "") {
    if (!searchString.replace(/\s/g, "").length < 0) {
      return; //if searchstring contains empty strings the searchNews call is ended to prevent failures
    }
    let API_promise;
    // console.log("You searched for: ", searchString);
    if (type === "everything" && searchString !== "") {
      //when searching for news
      API_promise = this.handleQuery(`${type}?q=${searchString}`);
    } else {
      API_promise = this.handleQuery(
        `${type}?country=${country}&category=${category}`
      );
    }

    var returnPromise = await API_promise;

    return returnPromise;
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
