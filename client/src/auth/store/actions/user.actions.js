import history from 'history.js';
import { setDefaultSettings } from 'store/actions/fuse';
import { FuseDefaultSettings } from '@fuse';
import _ from '@lodash';
import store from 'store';
import * as Actions from 'store/actions';
import jwtService from 'jwtService';

export const SET_USER_DATA = '[USER] SET DATA';
export const REMOVE_USER_DATA = '[USER] REMOVE DATA';
export const USER_LOGGED_OUT = '[USER] LOGGED OUT';

/**
 * Set User Data
 */
export function setUserData(user) {
    return (dispatch) => {

        /*
        Set User Settings
         */
        dispatch(setDefaultSettings(user.data.settings));

        /*
        Set User Data
         */
        dispatch({
            type: SET_USER_DATA,
            payload: user
        })
    }
}

/**
 * Update User Settings
 */
export function updateUserSettings(settings) {
    return (dispatch, getState) => {
        const oldUser = getState().auth.user;
        const user = _.merge({}, oldUser, { data: { settings } });

        updateUserData(user);

        return dispatch(setUserData(user));
    }
}

/**
 * Update User Shortcuts
 */
export function updateUserShortcuts(shortcuts) {
    return (dispatch, getState) => {
        const user = getState().auth.user;
        const newUser = {
            ...user,
            data: {
                ...user.data,
                shortcuts
            }
        };

        updateUserData(newUser);

        return dispatch(setUserData(newUser));
    }
}

/**
 * Remove User Data
 */
export function removeUserData() {
    return {
        type: REMOVE_USER_DATA
    }
}

/**
 * Logout
 */
export function logoutUser() {

    return (dispatch, getState) => {

        const user = getState().auth.user;

        if (user.role === 'guest') {
            return null;
        }

        history.push({
            pathname: '/'
        });

        switch (user.from) {
            default:
                {
                    jwtService.logout();
                }
        }

        dispatch(setDefaultSettings(FuseDefaultSettings));

        dispatch({
            type: USER_LOGGED_OUT
        })
    }
}

/**
 * Update User Data
 */
function updateUserData(user) {
    if (user.role === 'guest') {
        return;
    }

    switch (user.from) {
        default:
            {
                jwtService.updateUserData(user)
                    .then(() => {
                        store.dispatch(Actions.showMessage({ message: "User data saved with api" }));
                    })
                    .catch(error => {
                        store.dispatch(Actions.showMessage({ message: error.message }));
                    });
                break;
            }
    }
}
