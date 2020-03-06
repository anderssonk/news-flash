import ApiConfig from "./Utility/ApiConfig";

class NewsModel {
  constructor() {
    this.starred = [];
  }

  henlo() {
    console.log("henlo from news model");
  }

  handleHTTPError(response) {
    if (response.ok) return response;
    throw Error(response.statusText); // otherwise logs an error
  }

  getDataFromAPITopHeadlines(type, country = "se", searchString) {
    //arguments used to change type of API call, type ="everything" uses searchString="some search string ", type="top-headlines" uses country="us,uk,se etc..."
    //returns a promise

    var url = "";

    type === "everything" //to handle change between "everything" or "top-headlines"
      ? (url = `http://newsapi.org/v2/${type}?q=${searchString}&apiKey=${
          ApiConfig().API_KEY
        }`)
      : (url =
          `http://newsapi.org/v2/${type}?` +
          `country=${country}&q=corona` +
          `apiKey=${ApiConfig().API_KEY}`);

    var req = new Request(url);

    return fetch(req)
      .then(this.handleHTTPError)
      .then(response => response.json())
      .catch(console.error);
  }
}

export default new NewsModel();
