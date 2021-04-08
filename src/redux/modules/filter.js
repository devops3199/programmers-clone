const ADD_FILTER = 'filter/ADD_FILTER';
const REMOVE_FILTER = 'filter/REMOVE_FILTER';
const CLEAR_FILTER = 'filter/CLEAR_FILTER';

export const addFilter = (filter, category) => {
    return { type : ADD_FILTER, filter, category };
};

export const removeFilter = (filter, category) => {
    return { type : REMOVE_FILTER, filter, category };
};

export const clearFilter = () => {
    return { type : CLEAR_FILTER };
};

const initialState = {
    list : [],
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'filter/ADD_FILTER':
            const add_temp = action.filter + '?' + action.category;
            const new_list = [...state.list, add_temp];
            return {list : new_list};
        case 'filter/REMOVE_FILTER':
            const remove_temp = action.filter + '?' + action.category;
            const deleted_filter = state.list.filter((val) => {
                if(val !== remove_temp){
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