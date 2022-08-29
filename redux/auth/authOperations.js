import db from "../../firebase/config";
import { authSlice } from "./authReducer";

const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;

export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      await db.auth().createUserWithEmailAndPassword(email, password);

      const user = await db.auth().currentUser;

      await user.updateProfile({
        displayName: login,
      });

      const { uid, displayName } = await db.auth().currentUser;

      dispatch(
        updateUserProfile({
          userId: uid,
          nickname: displayName,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await db.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {
  await db.auth().signOut();
  dispatch(authSignOut());
};

export const authStateChangeUser = () => async (dispatch, getState) => {
  await db.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(
        updateUserProfile({
          userId: user.uid,
          nickname: user.displayName,
        })
      );
      dispatch(authStateChange({ stateChange: true }));
    }
  });
};
