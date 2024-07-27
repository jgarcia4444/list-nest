import {initializeApp} from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZ9h26lRl3QNU-dmNZYWitVTih3kn-d-Y",
    authDomain: "list-nest.firebaseapp.com",
    projectId: "list-nest",
    storageBucket: "list-nest.appspot.com",
    messagingSenderId: "35290567008",
    appId: "1:35290567008:web:13074208f4fc513e3a8e05",
    measurementId: "G-1S1LW7HQ1Y"
};

const firestoreApp = initializeApp(firebaseConfig);
const store = getFirestore(firestoreApp)
connectFirestoreEmulator(store, 'http://127.0.0.1:8080');
const auth = getAuth(firestoreApp);
connectAuthEmulator(auth, 'http://127.0.0.1:9099');
const emulators = {
    store,
    auth,
}

export default emulators