import { LOGIN, LOGOUT } from "../types";
import firebase from "../firebase";
const provider = new firebase.auth.GoogleAuthProvider();
export const login =
    (detail, onSuccess = () => {}) =>
    async (dispatch) => {
        await dispatch(Loader(true));
        // console.log("details data",detail)
        try {
            await firebase
                .auth()
                .signInWithEmailAndPassword(detail.username, detail.password)
                .then((userCredential) => {
                    var user = userCredential.user.uid;
                    firebase
                        .firestore()
                        .collection("users")
                        .doc(user)
                        .onSnapshot(async (query) => {
                            if (query.data()) {
                                dispatch({
                                    type: LOGIN,
                                    payload: {
                                        uid: user,
                                        user: { id: user, ...query.data() },
                                    },
                                });
                                onSuccess();
                                alert("Login successfully");
                            } else
                                alert(
                                    "Your account data have been deleted from database. But the good news is, your account is still alive. Please contact your admin to create a new slot for you to store data then you will be able to login."
                                );
                            dispatch(Loader(false));
                        });
                })
                .catch((err) => {
                    dispatch(Loader(false));
                    alert("Sorry no such user exists!");
                });
        } catch (error) {
            dispatch(Loader(false));
            alert(error);
        }
    };
export const signInWithGoogle = () => async (dispatch) => {
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(async (result) => {
            const uid = result?.user?.uid;
            const userRef = firebase.firestore().collection("users").doc(uid);
            userRef
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        const tempUser = { id: uid, ...doc.data() };
                        dispatch({
                            type: LOGIN,
                            payload: tempUser,
                        });
                    } else {
                        userRef
                            .set({
                                imageURL: result?.user?.photoURL,
                                name: result?.user?.displayName,
                                email: result?.user?.email,
                                createdAt: firebase.firestore.Timestamp.now(),
                            })
                            .then(() => {
                                // console.log("Signup successfully");
                            });
                    }
                })
                .catch((error) => {
                    // console.log(error);
                });
        })
        .catch((error) => {
            firebase.auth().signOut();
        });
};
export const signUpWithEmail_Password =
    (payload, password, onSuccess = () => {}) =>
    async (dispatch) => {
        dispatch(Loader(true));
        firebase
            .auth()
            .createUserWithEmailAndPassword(payload.email, password)
            .then((data) => {
                firebase.auth().currentUser.sendEmailVerification();
                firebase
                    .firestore()
                    .collection("users")
                    .doc(data.user.uid)
                    .set({
                        createdAt: firebase.firestore.Timestamp.now(),
                        username: payload.username,
                        profilePictureURL: payload.profile,
                        idNumber: payload.number,
                        idNumber2: payload.number2,
                        digit1ID: payload.digit1,
                        digit2ID: payload.digit2,
                        digit3ID: payload.digit3,
                        email: payload.email,
                    })
                    .then((res) => {
                        dispatch(Loader(false));
                        onSuccess();
                    })
                    .catch((err) => {
                        dispatch(Loader(false));
                        alert(err, "danger");
                    });
            })
            .catch((err) => {
                dispatch(Loader(false));
                alert(
                    "This email address is already in use by someone else, please use another one!"
                );
            });
    };
export const doLogOut = (onSuccess) => async (dispatch) => {
    try {
        localStorage.clear();
        firebase
            .auth()
            .signOut()
            .then((data) => {
                dispatch({ type: "LOGOUT", uid: "" });
                onSuccess();
            })
            .catch((err) => {
                alert(err.message);
            });
    } catch (error) {
        alert(error.message);
    }
};
const Loader = (data) => async (dispatch) => {
    dispatch({
        type: "LOADER",
        payload: data,
    });
};
