
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAM7s1pr5gLGqlQB5bV0og_N3GI0wOEGFI",
  authDomain: "impronta-roja.firebaseapp.com",
  projectId: "impronta-roja",
  storageBucket: "impronta-roja.appspot.com",
  messagingSenderId: "278800828818",
  appId: "1:278800828818:web:4772dfa9ac8fb3d81b994b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)