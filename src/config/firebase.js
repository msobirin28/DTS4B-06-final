import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: replace with your own config
const firebaseConfig = {
  apiKey: "AIzaSyDlDf7EuaYZhjT4nynLUiL78TPAB0teG3c",
  authDomain: "react-news-final-project.firebaseapp.com",
  projectId: "react-news-final-project",
  storageBucket: "react-news-final-project.appspot.com",
  messagingSenderId: "871095340901",
  appId: "1:871095340901:web:0c573c32c82ddd08d7db8c",
  measurementId: "G-5KER99QTCF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
