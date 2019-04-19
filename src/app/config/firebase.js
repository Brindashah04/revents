import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDv_9Fw1LkNv2n5mq70wXeLrj3tkVhu8V0",
    authDomain: "revents-237118.firebaseapp.com",
    databaseURL: "https://revents-237118.firebaseio.com",
    projectId: "revents-237118",
    storageBucket: "revents-237118.appspot.com",
    messagingSenderId: "1035663384554"
}


firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
}
firestore.settings(settings);
export default firebase;