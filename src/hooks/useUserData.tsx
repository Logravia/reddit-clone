import { UserData, userState } from "@/atoms/userAtom";
import { auth, db } from "@/firebase/clientApp";
import { doc, getDoc, increment, runTransaction } from "firebase/firestore";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

const useUserData = () => {
  const [userStateValue, setUserStateValue] = useRecoilState(userState);

  const [user, loading, onError] = useAuthState(auth);

  function joinOrLeave(name: string) {
    if (hasJoined(name)) {
      leaveCommunity(name);
    } else {
      joinCommunity(name);
    }
  }

  async function getUserData() {
    try {
      if (!user) {
        throw "User not logged in";
      }

      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);
      const value = userDoc.data() as UserData;
      setUserStateValue(value);
    } catch (e) {
      console.log("Getting user data error @useUserData", e);
    }
  }

  function hasJoined(communityName: string) {
    return userStateValue.subscribes.some((name) => name == communityName);
  }

  async function joinCommunity(name: string) {
    try {
      if(!user){throw "No user logged in"}
      const communityRef = doc(db, "communities", name);
      const userRef = doc(db, "users", user.uid);

      await runTransaction(db, async (transaction) => {
        const communityDoc = await transaction.get(communityRef);
        if (!communityDoc.exists()) {
          throw "Community does not exist!";
        }

        const updatedUserState = {...userStateValue, subscribes: [...userStateValue.subscribes, name]}
        
        transaction.update(communityRef, {subscribers: increment(1)});
        transaction.update(userRef, {subscribes: [...userStateValue.subscribes, name]})
        setUserStateValue(updatedUserState)
      });
      console.log("Transaction successfully committed!");
    } catch (e) {
      console.log("Transaction failed: ", e);
    }
  }

  async function leaveCommunity(name: string) {
    try {
      if(!user){throw "No user logged in"}
      const communityRef = doc(db, "communities", name);
      const userRef = doc(db, "users", user.uid);

      await runTransaction(db, async (transaction) => {
        const communityDoc = await transaction.get(communityRef);
        if (!communityDoc.exists()) {
          throw "Community does not exist!";
        }

        let subscriptions = [...userStateValue.subscribes]
        subscriptions.splice(subscriptions.findIndex(e=>e===name), 1)
        
        transaction.update(communityRef, {subscribers: increment(-1)});
        transaction.update(userRef, {subscribes: subscriptions})
        setUserStateValue(prev=>({...prev, subscribes: subscriptions}))
      });
      console.log("Transaction successfully committed!");
    } catch (e) {
      console.log("Transaction failed: ", e);
    }
  }

  useEffect(() => {
    // Call getUserData only when no user data has been loaded.
    if (user && userStateValue.username === "") {
      console.log("I called getUserData");
      getUserData();
    }
  }, [user]);

  return {
    userStateValue,
    joinOrLeave,
    hasJoined,
  };
};
export default useUserData;
