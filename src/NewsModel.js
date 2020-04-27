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

	addToMenu(dish) {
		// debugger;
		if (!this.dishes.filter((e) => e.id === dish.id).length > 0) {
			this.addTypeToDish(dish);
			this.dishes = [...this.dishes, dish]; // spread is an immutable object - creates new array
			this.notifyObservers({ add_dish: dish });
		}
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

	removeFromStarred(url) {
		this.starred = this.starred.filter((news) => news.url !== url);
		this.notifyObservers({ removed: this.starred });
	}

	addComment(article, comment) {
		article.comment = comment;
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
