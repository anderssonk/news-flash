import React, { useState, useEffect, useContext } from "react";
import "./login.css";
// import "./typography.css";
import firebase from "../../util/firebaseConfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { ModelContext } from "../../NewsContext";

function Login() {
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

        console.log(starredPromise(user));

        // db.collection("users")
        //   .doc(model.retrieveUserInfo().uid)
        //   .collection("starred_collection")
        //   .doc("dokument")
        //   .set({ namn: "albin" });
        // db.collection("users")
        // .doc(model.retrieveUserInfo().uid)
        // .collection("starred_collection")
        // .get()
        // .then((doc) => {
        //   if (doc.exists) {
        //     console.log("doc exists");
        //     //   db.collection("users")
        //     //     .doc(model.retrieveUserInfo().uid)
        //     //     .collection("starred_collection")
        //     //     .doc(`${article.uniqueID}`)
        //     //     .update({ article });
        //   }})
      }
      setIsSignedIn(!!user); // !!
    });
  }, []);

  // console.log(user.uid);
  // db.collection("users")
  //   .get()
  //   .then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       if (doc.id === user.uid) {
  //         console.log("user exists in db");
  //         return;
  //       } else {
  //         db.collection("users").doc(user.uid).set({ starredArray: [] });

  //         console.log("user was added to db");
  //       }
  //       // console.log("d:", doc.id, doc.data());
  //     });
  //   });

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
