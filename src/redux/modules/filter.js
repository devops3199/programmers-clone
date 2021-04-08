const GET_FILTER = 'filter/GET_FILTER';
const ADD_FILTER = 'filter/ADD_FILTER';
const REMOVE_FILTER = 'filter/REMOVE_FILTER';
const CLEAR_FILTER = 'filter/CLEAR_FILTER';

export const getFilter = (filter) => {
    return { type : GET_FILTER, filter };
};

export const addFilter = (filter) => {
    return { type : ADD_FILTER, filter };
};

export const removeFilter = (filter) => {
    return { type : REMOVE_FILTER, filter };
};

export const clearFilter = () => {
    return { type : CLEAR_FILTER };
};

const initialState = {
    list : [],
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'filter/GET_FILTER':
            return state;
        case 'filter/ADD_FILTER':
            const new_list = [...state.list, action.filter];
            return {list : new_list};
        case 'filter/REMOVE_FILTER':
            const deleted_filter = state.list.filter((val) => {
                if(val !== action.filter){
                    return val;
                }
            });
            return {list : deleted_filter};
        case 'filter/CLEAR_FILTER':
            return {list : []};
        default:
            return state;
    }
};