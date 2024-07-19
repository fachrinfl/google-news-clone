import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyACEPaAnHQ2bHPSYdtH44-HgR2CjSzD8to",
    authDomain: "news-clone-1e359.firebaseapp.com",
    projectId: "news-clone-1e359",
    storageBucket: "news-clone-1e359.appspot.com",
    messagingSenderId: "561847351564",
    appId: "1:561847351564:web:cd62dd1330f35cf0e23129"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();