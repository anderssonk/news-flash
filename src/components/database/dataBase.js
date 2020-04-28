import React from "react";
// import firebaseConfig from "../../util/firebaseConfig";
import firebase from "../../util/firebaseConfig";

const dataBase = () => {
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true });
  db.collection("users")
    .get()
    .then((snapshot) => {
      //   console.log("from db_", snapshot.docs);
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
      });
    });

  return <div>dataBase</div>;
};

export default dataBase;
