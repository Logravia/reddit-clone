import { UserData, userState } from "@/atoms/userAtom";
import { auth, db } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
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
        throw new Error("User not logged in");
      }

      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);
      const value = userDoc.data() as UserData
      setUserStateValue(value);

    } catch (e) {
      console.log("Getting user data error @useUserData", e);
    }
  }

  function hasJoined(communityName: string) {
    return userStateValue.subscribes.some((name) => name == communityName);
  }

  function joinCommunity(name: string) {
    return name;
  }

  function leaveCommunity(name: string) {
    return name;
  }

  useEffect(() => {
    // Call getUserData only when no user data has been loaded.
    if (user && userStateValue.username === "") {
      console.log("I called getUserData")
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
