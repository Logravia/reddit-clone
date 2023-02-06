import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

export const createUserDocument = functions.auth
  .user()
  .onCreate(async (user) => {

    const newUser = {
        username: "",
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
        pfp: "",
        karma: 1,
        subscribes:[],
        moderates:[]
    }

    db.collection("users")
      .doc(user.uid)
      .set(newUser);
  });
