import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyBugbj2zovvo9T4DgL08PJ350KOeWYPjC0",
  authDomain: "travelapp-13dc1.firebaseapp.com",
  databaseURL: "https://travelapp-13dc1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "travelapp-13dc1",
  storageBucket: "travelapp-13dc1.appspot.com",
  messagingSenderId: "923335503960",
  appId: "1:923335503960:web:ceb94ab80627d956965a2d"
    
}

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const auth = getAuth(app);

const db = initializeFirestore(app, { experimentalForceLongPolling: true });

export { auth, db , storage};
