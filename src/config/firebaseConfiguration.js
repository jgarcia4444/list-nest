import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCZ9h26lRl3QNU-dmNZYWitVTih3kn-d-Y",
    authDomain: "list-nest.firebaseapp.com",
    projectId: "list-nest",
    storageBucket: "list-nest.appspot.com",
    messagingSenderId: "35290567008",
    appId: "1:35290567008:web:13074208f4fc513e3a8e05",
    measurementId: "G-1S1LW7HQ1Y"
};

const app = initializeApp(firebaseConfig);

export default app;