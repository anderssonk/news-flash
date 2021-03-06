import React, { useState, useEffect, useContext } from "react";
import "./login.css";
import firebase from "../../util/firebaseConfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { ModelContext } from "../../NewsContext";

const Login = () => {
  const { model } = useContext(ModelContext);
  const db = firebase.firestore();

  const [isSignedIn, setIsSignedIn] = useState(false);
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  async function starredPromise(user) {
    var starred_array = [];

    var fetchData = db
      .collection("users")
      .doc(user.uid)
      .collection("starred_collection")
      .get();

    var data = await fetchData;
    const handleData = () => {
      data.forEach((doc) => {
        starred_array = starred_array.concat(doc.data().article);
      });
      return starred_array;
    };

    var result = handleData();
    return result;
  }
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      model.assignUser(user); //assigns the user in the model

      if (model.retrieveUserInfo()) {
        //checks if user logged in
        starredPromise(user) //loads saved articles from firestore
          .then((result) => {
            model.loginSetStarred(result); //populate sidebar with "this.starred" in model with saved articles
          })
          .catch((err) => {
            console.log(
              "There was an error retrieving data from firestore",
              err
            );
          });
      } else {
        model.logoutSetStarred(); // resets the sidebar to empty by clearing the "this.starred" in model
      }

      setIsSignedIn(!!user); // !!
    });
  }, []);

  return (
    <>
      {isSignedIn ? (
        <div className="loggedIn">
          <div id="profileImageDiv">
            <img
              id="profileImage"
              alt="profileIMG"
              src={firebase.auth().currentUser.photoURL}
            />
            <div id="loggedIn_message">
              Logged in as: {firebase.auth().currentUser.displayName}
            </div>
          </div>

          <button
            className="btn-signout"
            id="logout_button"
            onClick={() => firebase.auth().signOut()}
          >
            <span>Sign out</span>
          </button>
        </div>
      ) : (
        <div className="preLoggedIn">
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      )}
    </>
  );
};

export default Login;
