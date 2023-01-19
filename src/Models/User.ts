/**
 * The user class
 */
import { v4 as uuidv4 } from 'uuid';
import { deleteUser, getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  doc, setDoc, getDoc, getFirestore, deleteDoc, updateDoc, getDocs, collection,
} from 'firebase/firestore';
import Router from '../lib/router';
import { Loader } from '../Components/Loader';

class User {
    id: string;
    email: string;
    avatar: string;
    hasAvatar: boolean;
    username: string;

  constructor( id="", email = '', avatar = '', username = 'test') {
    this.id = id;
    this.email = email;
    this.avatar = avatar;
    this.hasAvatar = !!this.avatar;
    this.username = username;
  }

  // // sets the user values of the class
  // setUserData(id = '', email = '', avatar = '') {
  //   this.id = id;
  //   this.email = email;
  //   this.avatar = avatar;
  //   this.hasAvatar = !!this.avatar;
  // }


  async storeUserData() {
    const db = getFirestore();
    await setDoc(doc(db, 'users', this.id), {
      email: this.email,
      avatar: this.avatar,
    });
  }

  async checkComplete() {
    const db = getFirestore();
    const docSnap = await getDoc(doc(db, 'users', this.id));
    if (docSnap.exists()) {
      return !!docSnap.data().firstname;
    }
    return false;
  }

  static getUserId() : Promise<string> {
    const auth = getAuth();
    const user = auth.currentUser;
    return new Promise((resolve) => {
      if (user) {
        resolve(user.uid);
      } else {
        window.location.replace('/');
      }
    });
  }

  // update the user
  static async updateUserData(uid:string) {
    const db = getFirestore();
    const docRef = doc(db, 'users', uid);
    await updateDoc(docRef, {
        username: this.use,
    });
  }

  static async getAllUsers() {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, 'users'));
    const users:User[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      users.push(new User(doc.id, data.email, data.avatar, data.username));
    });
    return users;
  }

  // gets the ll data of the current user
  // when the user is not logged in it redirects to the login page
  static async getCurrentUserData() :Promise<User> {
    const db = getFirestore();
    const auth = getAuth();
    return new Promise((resolve) => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const docSnap = await getDoc(doc(db, 'users', user.uid));
          const userData = docSnap.data();
          const userObject = new User(user.uid, userData?.email, userData?.avatar);
          resolve(userObject);
        } else {
          window.location.replace('/');
        }
      });
    });
  }

  // deletes all the data of the current user and redirects to the login page
  static async deleteCurrentUser() {
    const portal = document.getElementById('portal');
    while (portal!.firstChild) {
      portal!.removeChild(portal!.lastChild!);
    }
    portal!.appendChild(new Loader().render());
    const db = getFirestore();
    const auth = getAuth();
    const user = auth.currentUser;
    await deleteDoc(doc(db, 'users', user!.uid));
    deleteUser(user!).then(() => {
      window.location.replace('/');
    });
  }
}

export default User;
