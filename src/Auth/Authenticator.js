/**
 * The Authenticator class
 */
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signOut, } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL, } from 'firebase/storage';
import { Loader } from '../Components/Loader';
import User from '../Models/User';
class Authenticator {
    constructor() {
        this.errorContainer = document.querySelector('.form-validation');
        this.feedbackContainer = document.getElementById('feedback');
    }
    // displays an error in the errorcontainer
    displayError(error) {
        this.feedbackContainer.removeChild(this.feedbackContainer.lastChild);
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
        const formData = new FormData(document.querySelector('.register__form'));
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const confPassword = formData.get('confirmPassword');
        const avatar = formData.get('avatar');
        let imageUrl = '';
        // @ts-ignore
        if (avatar?.size !== 0) {
            // https://stackoverflow.com/questions/29805909/jquery-how-to-check-if-uploaded-file-is-an-image-without-checking-extensions
            // @ts-ignore
            if (avatar?.type.split('/')[0] === 'image') {
                const storage = getStorage();
                // @ts-ignore
                const storageRef = ref(storage, avatar.name);
                // @ts-ignore
                await uploadBytes(storageRef, avatar).then(() => {
                    getDownloadURL(storageRef).then((downloadUrl) => {
                        imageUrl = downloadUrl;
                    });
                });
            }
            else {
                this.displayError('Please upload an image file');
                // @ts-ignore
                document.querySelector("input[name='avatar']").value = '';
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
                            const userClass = new User(result.user.uid, email, imageUrl, username);
                            await userClass.storeUserData();
                            window.location.replace('/dashboard');
                        }).catch((e) => {
                            this.displayError(e.message);
                        });
                    }).catch((e) => {
                        this.displayError(e.message);
                    });
                }
                catch (e) {
                    this.displayError(e.message);
                }
            }
            else {
                this.displayError('Password and confirm password do not match, please try again :(');
            }
        }
        else {
            this.displayError('Please fill in all required fields to register!');
        }
    }
    async login() {
        this.removeError();
        this.feedbackContainer.appendChild(new Loader().render());
        const formData = new FormData(document.querySelector('.login__form'));
        const email = formData.get('email');
        const password = formData.get('password');
        if (email && password) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then(async (userCredentials) => {
                const { user } = userCredentials;
                const userClass = new User(user.uid, user.displayName, user.email, user.photoURL);
                window.location.replace('/dashboard');
            })
                .catch((e) => {
                this.displayError(e.messge);
            });
        }
        else {
            this.displayError('Please fill in all the fields to log in!');
        }
    }
    async loginWithGoogle() {
        this.removeError();
        this.feedbackContainer.appendChild(new Loader().render());
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(async (result) => {
            const { user } = result;
            const { uid, displayName, email, photoURL, } = user;
            const userClass = new User(uid, email, photoURL, displayName);
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
    async loginWithFacebook() {
        this.removeError();
        this.feedbackContainer.appendChild(new Loader().render());
        const provider = new FacebookAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(async (result) => {
            const { user } = result;
            const { email, photoURL, uid, } = user;
            const userClass = new User(uid, email, photoURL);
            // if the users data is complete it goes to the dashboard else it goes to extra info page
            if (await userClass.checkComplete()) {
                window.location.replace('/dashboard');
            }
            else {
                await userClass.storeUserData();
                window.location.replace('/username');
            }
        }).catch((e) => {
            this.displayError(e.message);
        });
    }
    static logout() {
        const auth = getAuth();
        signOut(auth).then(() => {
            window.location.replace('/');
        });
    }
}
export default Authenticator;
