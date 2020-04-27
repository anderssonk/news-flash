import React, {useState} from "react";
import "./App.css";
import "./typography.css";
//import NewsFeed from "./components/newsFeed/NewsFeed";
//import ModelContextProvider from "./NewsContext";
//import Sidebar from "./components/sidebar/Sidebar";
//import Header from "./components/Header";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

function App() {
	const [isSignedIn, setIsSignedIn] = useState(false)
	const uiConfig = {
		signInFlow: "popup",
		signInOptions: [
		  firebase.auth.GoogleAuthProvider.PROVIDER_ID
		], callbacks : {
		  signInSuccess: () => false
		}
	  }
	return (
		<div className="container">
			<div className="App">
				{isSignedIn ? 
				<p>Signed in!</p>
				:
				<p>Not signed in!</p>
				}	
			</div>
		</div>
	);
}

export default App;

// <ModelContextProvider>
//<NewsFeed />
					//<Sidebar />
				//</ModelContextProvider>