import axios from 'axios';

// Action
const GET_POST = 'post/GET_POST';
const SET_POST = 'post/SET_POST';
const SET_PAGE_INDEX = 'post/SET_PAGE_INDEX';

// Action Creator
export const getPost = (page) => {
    return { type : GET_POST, page };
};

export const setPost = (page) => {
    return { type : SET_POST, page };
};

export const setPageIndex = (start, end) => {
    return { type : SET_PAGE_INDEX, start, end };
};

// Initial State
const initialState = {
    original : [],
    list : [],
    total : 210,
    start : 0,
    end : 0,
};

// 첫 로딩시 모든 문제 데이터 반환 [Middleware]
export const setPostAWS = () => {
    return function(dispatch, getState, {history}){
        axios.get('http://54.180.113.24/').then((res)=>{
            dispatch(setPost(res.data));
        }).catch((err)=>{
            console.log(err);
        })
    };
};

// 필터된 문제 데이터 반환 [Middleware]
export const setFilteredPostAWS = (val, temp) => {
    return function(dispatch, getState, {history}){
        const temp = getState((state) => state.filter);
        const filter = temp.filter.list;
        let url = 'filter?';

        filter.forEach((val) => {
            let value = val.split('?')[0];
            let category = val.split('?')[1];

            switch(category){
                case 'level':
                    // remove "Level" prefix
                    value = value.replace('Level ', '');
                    url += `level=${value}&`;
                    break;
                case 'language':
                    // remove special character
                    if(value === 'C++') {
                        url += `language=cpp&`;
                    } else if(value === 'C#') {
                        url += `language=csharp&`;
                    } else {
                        url += `language=${value}&`;
                    }
                    break;
                case 'reference':
                    url += `reference=${value}&`;
                    break;
            }
        });

        if(url === 'filter?') {
            url = '';
        }

        axios.get(`http://54.180.113.24/${url}`).then((res)=>{
            dispatch(setPost(res.data));
        }).catch((err)=>{
            console.log(err);
        })
    };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'post/GET_POST':
            return state;
        case 'post/SET_POST':
            const set_list = action.page.slice(1, 21); // 첫 페이지의 20개
            return {original : action.page, list : set_list, total : action.page.length};
        case 'post/SET_PAGE_INDEX':
            let page_list = state.original.slice(action.start, action.end);
            return {original : state.original, list : page_list, total : state.total, start : action.start, end : action.end};
        default:
            return state;
    }
};