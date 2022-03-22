import {initializeApp} from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';


const firebaseConfig = {
    apiKey: "AIzaSyAnu9uucvrk68VvvNBmgOsSrGhypDbaa1w",
    authDomain: "userspasswords-bac51.firebaseapp.com",
    projectId: "userspasswords-bac51",
    storageBucket: "userspasswords-bac51.appspot.com",
    messagingSenderId: "246519034005",
    appId: "1:246519034005:web:8a671669fa2b46dff8eb9c"
  };

class Firebase {
  constructor(){
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.autorization = app.auth;
    this.firebaseui = new firebaseui.auth.AuthUI(app.auth());
  } 
}

const app = initializeApp(firebaseConfig);

export default Firebase