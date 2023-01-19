/**
 * The Authenticator class
 */

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signOut,
} from 'firebase/auth';
import {
  getStorage, ref, uploadBytes, getDownloadURL,
} from 'firebase/storage';
import {Loader} from '../Components/Loader';
import Router from '../Lib/Router';
import User from '../Models/User';

/* eslint-disable consistent-return */
class Authenticator {
  errorContainer: HTMLElement;
  feedbackContainer: HTMLElement;
  constructor() {
    this.errorContainer = document.querySelector('.form-validation')!;
    this.feedbackContainer = document.getElementById('feedback')!;
  }

  // displays an error in the errorcontainer
  displayError(error:string) {
    this.feedbackContainer.removeChild(this.feedbackContainer.lastChild!);
    this.errorContainer.classList.remove('hide');
    this.errorContainer.innerHTML = `<small>${error}</small>`;
  }

  // removes the error from the errorcontainer
  removeError() {
    this.errorContainer.classList.add('hide');
    this.errorContainer.innerHTML = '';
  }

  // registers the user en stores the data in the database
  async register() {
    this.removeError();
    this.feedbackContainer.appendChild(new Loader().render());
    const formData = new FormData(document.querySelector('.register__form') as HTMLFormElement);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const confPassword = formData.get('confirm');
    const avatar = formData.get('avatar');
    let imageUrl = '';

    // if there is an avatar
    if (avatar.size !== 0) {
      // Check if file type is image (https://roufid.com/javascript-check-file-image/)
      if (avatar.type.split('/')[0] === 'image') {
        const storage = getStorage();
        const storageRef = ref(storage, avatar.name);
        await uploadBytes(storageRef, avatar).then(() => {
          getDownloadURL(storageRef).then((downloadUrl) => {
            imageUrl = downloadUrl;
          });
        });
      } else {
        this.displayError('The entered avatar is not an image.');
        document.querySelector("input[name='avatar']")!.value = '';
      }
    }

    if (username && email && password && confPassword) {
      if (password === confPassword) {
        const auth = getAuth();
        try {
          createUserWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
              updateProfile(result.user, {
                displayName: username, photoURL: imageUrl,
              }).then(async () => {
                const userClass = new User(
                  result.user.uid,
                  username,
                  email,
                  imageUrl,
                );
                await userClass.storeUserData();
                window.location.replace('/');
              }).catch((e) => {
                this.displayError(e.message);
              });
            }).catch((e) => {
              this.displayError(e.message);
            });
        } catch (e) {
          this.displayError(e.message);
        }
      } else {
        this.displayError('Password and confirm password do not match, please try again :(');
      }
    } else {
      this.displayError('Please fill in all necessary fields to register!');
    }
  }

  // logs in the user
  async login() {
    this.removeError();
    this.feedbackContainer.appendChild(new Loader().render());
    const formData = new FormData(document.querySelector('.login__form') as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (email && password) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredentials) => {
          const { user } = userCredentials;
          const userClass = new User(user.uid, user.displayName!, user.email!, user.photoURL!);

          window.location.replace('/dashboard');
        })
        .catch((e) => {
          this.displayError(e.messge);
        });
    } else {
      this.displayError('Please fill in all the fields to log in!');
    }
  }


  // login with google
  async loginWithGoogle() {
    this.removeError();
    this.feedbackContainer.appendChild(new Loader().render());
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const { user } = result;
        const {
          uid, email, photoURL,
        } = user;

        const userClass = new User( uid, email!, photoURL!);
        await userClass.storeUserData();

        // const { isNewUser } = getAdditionalUserInfo(result);
        // console.log(isNewUser);
        // if (isNewUser) {
        //   const userClass = new User( uid, email!, photoURL!);
        //   console.log(userClass);
        //   await userClass.storeUserData();
        // }

          window.location.replace('/dashboard');
      }).catch((e) => {
        this.displayError(e.message);
      });
  }

  // login with facebook
  async loginWithFacebook() {
    this.removeError();
    this.feedbackContainer.appendChild(new Loader().render());
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const { user } = result;
        const {
          email, photoURL, uid,
        } = user;
        const userClass = new User(uid, email, photoURL);

        // if the users data is complete it goes to the dashboard else it goes to extra info page
        if (await userClass.checkComplete()) {
          window.location.replace('/dashboard');
        } else {
          await userClass.storeUserData();
          window.location.replace('/username');
        }
      }).catch((e) => {
        this.displayError(e.message);
      });
  }

  // logs out the current user
  static logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      window.location.replace('/');
    });
  }
}

export default Authenticator;