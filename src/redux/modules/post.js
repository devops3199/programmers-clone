const GET_POST = 'post/GET_POST';

export const getPost = (page) => {
    return { type : GET_POST, page };
};

const initialState = {
    list : new Array(256).fill(0),
    total : 256,
};

export const setPostAWS = () => {
    return function(dispatch, getState, {history}){
        fetch('https://cat-fact.herokuapp.com/facts')
        .then((res) => console.log(res.json()))
        .catch((err) => console.log(err));
    };
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'post/GET_POST':
            return state;
        default:
            return state;
    }
};