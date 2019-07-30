import axios from 'axios';

async function loadUsers() {
    await showWelcomeSpinner();
    loading = true;
    const res = await loadUsers();
    prepareUsers(res);
    loading = false;
}
// action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* INITIAL STATE */

const initialState = [];

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
        case LOAD_POSTS:
            return [...action.payload];
        default:
            return statePart;
    }
};

export const getPosts = ({ posts }) => posts;

export const LOAD_POSTS = createActionName('LOAD_POSTS');

export const loadPosts = payload => ({
    payload,
    type: LOAD_POSTS
});
/* THUNKS */
export const loadPostsRequest = () => {
    return async dispatch => {
        try {

        let res = await axios.get(`${API_URL}/posts`);
        dispatch(loadPosts(res.data));

        } catch(e) {
        console.log(e.message);
        }

    };
};

// export function posts(statePart = initialState, action = {}) {
//     switch (action.type) {
//         case PostsList:
//             return  { ...statePart, request: { pending: false, success: true, posts.length > 0 } };
//         case Spinner:
//             return { ...statePart, request: { pending: true, success: null } };
//         case AlertError:
//             return { ...statePart, request: { pending: false, error: null } };
//         case AlertInfo:
//             return { ...statePart, request: { pending: false, success: true, posts.length === 0 } };
//         default:
//             return statePart;
//     }
// };