import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializwAuthentication = () => {
 initializeApp(firebaseConfig);
}

export default initializwAuthentication;