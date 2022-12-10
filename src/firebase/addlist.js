import { db } from "./firebase";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { toast } from "react-toastify";

const toastOptions = {
  autoClose: 400,
  closeOnClick: false,
  pauseOnHover: false,
  progress: undefined,
  theme: "dark",
};

const loggedIn = localStorage.getItem("loggedIn");

const addList = async (movie) => {
  const list = doc(db, "users", loggedIn);

  await updateDoc(list, {
    list: arrayUnion({
      id: movie.id,
      name: movie.title,
      img: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
    }),
  });
  toast.success("Added to the list", toastOptions);
};

const removeList = async (index) => {
  const remove = doc(db, "users", loggedIn);

  await updateDoc(remove, {
    list: arrayRemove(index),
  });
};

export { addList, removeList };
