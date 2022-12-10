import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const getUser = async (setUser, loggedIn) => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const data = [];

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  const user = data.find((user) => user.id === loggedIn);
  setUser(user);
};

export { getUser };
