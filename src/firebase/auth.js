import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { toast } from "react-toastify";

const toastOptions = {
  autoClose: 5000,
  closeOnClick: false,
  pauseOnHover: false,
  progress: undefined,
  theme: "dark",
};

const handleLogin = async (username, password, navigate) => {
  const querySnapshot = await getDocs(collection(db, "users"));

  const data = [];

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  const user = data.find((user) => user.username === username);

  if (user.username === username && user.password === password) {
    toast.success("Login successful", toastOptions);

    setTimeout(() => navigate("/"), 1500);
    setTimeout(() => window.location.reload(), 2000);
    localStorage.setItem("loggedIn", user.id);
  } else {
    toast.error("Incorrect username or password", toastOptions);
  }
};

const handleSignUp = async (username, password, confirm, navigate) => {
  const querySnapshot = await getDocs(collection(db, "users"));

  const data = [];

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  if (!username) {
    toast.error("Please enter username", toastOptions);
  } else if (data.find((user) => user.username === username)) {
    toast.error("This username is in use", toastOptions);
  } else if (password.length <= 5) {
    toast.error("Please enter 6 character password", toastOptions);
  } else if (password !== confirm) {
    toast.error("Please confirm your password", toastOptions);
  } else {
    try {
      const id = generateKey(20);
      await setDoc(doc(db, "users", id), {
        username,
        password,
        id,
        list: [],
      });
      toast.success("Registration successful", toastOptions);
      setTimeout(() => navigate("/login"), 1500);
    } catch (e) {
      toast.error(e, toastOptions);
    }
  }
};

function generateKey(length) {
  let key = "";

  for (let i = 0; i < length; i++) {
    let randomCode = Math.floor(Math.random() * 26) + 65;
    let randomChar = String.fromCharCode(randomCode);
    key += randomChar;
  }

  return key;
}

export { handleLogin, handleSignUp };
