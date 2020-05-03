import React, { useContext, useState, useEffect } from "react";
import { ModelContext } from "../../NewsContext";
import useObserver from "../../hooks/useObserver";
import firebase from "../../util/firebaseConfig";

import Button from "../button/Button";

const ArticleDisplay = ({ article }) => {
  const [isStarred, setisStarred] = useState(false);
  const { model } = useContext(ModelContext);
  const starredArray = useObserver("starred", model);
  const db = firebase.firestore();

  const removeFromStarred = () => {
    model.removeFromStarred(article.url);

    // model.retrieveUserInfo() ? db.collection("users").doc(model.retrieveUserInfo().uid).collection("starred_collection").doc(`${article.uniqueID}`) :

    db.collection("users") //removes article document with id
      .doc(model.retrieveUserInfo().uid)
      .collection("starred_collection")
      .doc(`${article.uniqueID}`)
      .get()
      .then((doc) => {
        //if document exists
        if (doc.exists) {
          db.collection("users")
            .doc(model.retrieveUserInfo().uid)
            .collection("starred_collection")
            .doc(`${article.uniqueID}`)
            .delete();
        } else {
          console.log("article is not deletable");
        }
      });
  };
  const addingToStarred = () => {
    model.addToStarred(article.url);
    setisStarred(!isStarred);

    db.collection("users")
      .doc(model.retrieveUserInfo().uid)
      .collection("starred_collection")
      .limit(1)
      .get()
      .then((query) => {
        if (query.size === 0) {
          console.log("new user");
          //returns 1 if exist, 0 if it doesn't
          //starred_collection dont exists and therefore user does not have any article saved.
          // set new collection
          db.collection("users")
            .doc(model.retrieveUserInfo().uid)
            .collection("starred_collection")
            .doc(`${article.uniqueID}`)
            .set({ article });
        } else {
          //starred_collection DOES exist and therefore user has articles saved.
          //update collection with new articles
          console.log("already existing user");

          db.collection("users")
            .doc(model.retrieveUserInfo().uid)
            .collection("starred_collection")
            .doc(`${article.uniqueID}`)
            .set({ article });
        }
      });

    //     db.collection("users")
    //       .doc(model.retrieveUserInfo().uid)
    //       .collection("starred_collection")
    //       .doc(`${article.uniqueID}`)
    //       .get()
    //       .then((doc) => {
    //         console.log("doc data", doc.data());
    //         if (doc.exists) {
    //           console.log("user exists");
    //           //   db.collection("users")
    //           //     .doc(model.retrieveUserInfo().uid)
    //           //     .collection("starred_collection")
    //           //     .doc(`${article.uniqueID}`)
    //           //     .update({ article });
    //         } else {
    //           console.log("user doesnt exist");
    //           //   db.collection("users")
    //           //     .doc(model.retrieveUserInfo().uid)
    //           //     .collection("starred_collection")
    //           //     .doc(`${article.uniqueID}`)
    //           //     .set({ article });
    //         }
    //       });
    //   };

    // db.collection('users').doc(this.username).collection('booksList').doc(myBookId).set(

    //     db.collection("users") //updates the array "starredDatabase" in firestore with
    //       .doc(model.retrieveUserInfo().uid)
    //       .collection("starred_collection")
    //     	.doc(article.uniqueID)
    //       .set({
    //         starredArray: firebase.firestore.FieldValue.arrayUnion({ article }),
    //       });
  };
  const starArticle = () => {
    isStarred ? removeFromStarred() : addingToStarred();
    console.log("article is starred");
  };

  useEffect(() => {
    setisStarred(
      model.starred.filter((item) => item.url === article.url).length > 0
    );
  }, [starredArray]);

  return (
    <div key={article.url} className="articleDisplay">
      <div id="img-container">
        <img src={article.urlToImage} alt="articleimg" />
      </div>
      <h3 className="title">{article.title}</h3>

      <a href={article.url} target="blank">
        {article.source.name}
      </a>

      <p>published at : {article.publishedAt}</p>
      <Button starred isStarred={isStarred} onClick={starArticle}></Button>
    </div>
  );
};

export default ArticleDisplay;
