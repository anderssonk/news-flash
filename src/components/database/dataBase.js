// MIGHT NOT EVEN BE USED? ? ?

import React, { useContext } from "react";
// import firebaseConfig from "../../util/firebaseConfig";
import { ModelContext } from "../../NewsContext";

import firebase from "../../util/firebaseConfig";

const DataBase = () => {
  const { model } = useContext(ModelContext);

  // var user = firebase.auth().currentUser;

  // const writeArticleToDB = (article) =>{
  //   db.collection('users').doc(user.uid).set(article)

  //   })
  // }
  const db = firebase.firestore();

  var favo = [
    {
      food: "Pizza",
      color: "Blue",
      subject: "Gym",
    },
    { people: "Mom1", animal: "Cat" },
  ];
  if (model.retrieveUserInfo()) {
    db.collection("users").doc(model.retrieveUserInfo().uid).set({ favo });
  }
  // model.user
  //   ? db.collection("users").doc(model.user.uid).set(favo)
  //   : console.log("_____");

  // db.collection("users").where("user", "==", user.uid).get() //get data..

  // db.settings({ timestampsInSnapshots: true }); //is defaulted
  // db.collection("users")
  //   .get()
  //   .then((snapshot) => {
  //     //   console.log("from db_", snapshot.docs);
  //     snapshot.docs.forEach((doc) => {
  //       console.log(doc.data());
  //     });
  //   });

  return <div>dataBase</div>;
};

export default DataBase;
