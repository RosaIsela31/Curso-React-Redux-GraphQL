import { loginWithGoogle } from '../firebase';

// constants 
let initialData = {
  loggedIn: false,
  fetching: false,
}

let LOGIN = 'LOGIN';
let LOGIN_SUCCESS = 'LOGIN_SUCCESS';
let LOGIN_ERROR = 'LOGIN_ERROR'; 

// reducer | recibe state y action 
export default function reducer(state = initialData, action) {
  switch(action.type){
    case LOGIN_SUCCESS:
      return { ...state, fetching: false, ...action.payload, loggedIn: true }
    case LOGIN_ERROR:
      return { ...state, fetching: false, error: action.payload }
    case LOGIN:
      return { ...state, fetching: true }
    default:
      return state
  }
};

// función auxiliar que ayuda a guardar cosas en el localstorage
 
function saveStorage(storage) {
  localStorage.storage = JSON.stringify(storage)
}

// action (action creator)

export let doGoogleLoginAction = () => (dispatch, getState) => {
  dispatch({
    type: LOGIN,
  })
  return loginWithGoogle()
    .then( user => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { 
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
         }
      })
      saveStorage(getState())
    })
    .catch( e => {
      console.log(e);
      dispatch({
        type: LOGIN_ERROR,
         payload: e.message,
      })
    })
}