import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCb5gaLNnbjc5K5nClRRcvoKmuQeMfxIcM",
    authDomain: "alexandre-martinho-ecommerce.firebaseapp.com",
    projectId: "alexandre-martinho-ecommerce",
    storageBucket: "alexandre-martinho-ecommerce.appspot.com",
    messagingSenderId: "743452200095",
    appId: "1:743452200095:web:c934bf6750bd16974726aa"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

