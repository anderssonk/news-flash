import React, { useState, useEffect } from "react";
import "./login.css";
// import "./typography.css";
import firebase from "../../util/firebaseConfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// firebase.initializeApp({
//   apiKey: "AIzaSyAG-FLhyeAjBajQpPqfH7SzCdu49V6_SbY",
//   authDomain: "newsflash-8e21c.firebaseapp.com",
// });
function Login() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("user", user);
      setIsSignedIn(!!user);
    });
  });
  return (
    <div className="login">
      {isSignedIn ? (
        <div className="loggedIn">
          <button onClick={() => firebase.auth().signOut()}>Sign out</button>
          <p>Welcome {firebase.auth().currentUser.displayName}</p>
          <img
            id="profileImage"
            alt="profileIMG"
            src={firebase.auth().currentUser.photoURL}
          />
        </div>
      ) : (
        <div className="preLoggedIn">
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      )}
    </div>
  );
}

export default Login;
