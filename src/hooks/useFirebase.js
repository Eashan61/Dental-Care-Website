import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializwAuthentication from "../Pages/Login/Firebase/firebase.init";


initializwAuthentication();

const useFirebase = () => {
 const [user, setUser] = useState({});
 const [isLoading, setIsLoading] = useState(true);

 const auth = getAuth();


 const signInUsingGoogle = () => {
  setIsLoading(true);
  const googleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, googleProvider)
  .then(result => {
   setUser(result.user);
  })
  .finally(()=> setIsLoading(false));
 }
// observe user state change
 useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, user => {
   if (user){
    setUser(user);
   }
   else{
    setUser({})
   }
   setIsLoading(false);
  });
  return () => unsubscribe;
 },[auth])

 const logOut = () => {
  setIsLoading(true);
  signOut(auth)
  .then(() => {})
  .finally(()=> setIsLoading(false));
 }

 return{
  user,
  isLoading,
  signInUsingGoogle,
  logOut
 }
}

export default useFirebase;