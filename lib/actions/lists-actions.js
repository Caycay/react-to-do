import * as types from '../constant/action-types';

export function setAllLists(lists) {
    return function (dispatch) {
        return dispatch({
            type: types.SET_LISTS,
            payload: lists
        });
    };
}
export function setNewList(list) {
    return {
        type: types.SET_NEW_LIST,
        payload: list
    };
}

export function setSingleList(list) {
    return function (dispatch) {
        return dispatch({
            type: types.SET_LIST,
            payload: list
        });
    };
}

export function setAllItems(items) {
    return function (dispatch) {
        return dispatch({
            type: types.SET_ITEMS,
            payload: items
        });
    };
}

export function createNew(object) {
    return {
        type: types.CREATE_NEW,
        payload: object
    };
}

export function setNewItem(item) {
    return {
        type: types.SET_NEW_ITEM,
        payload: item
    };
}
export function setSingleItem(item) {
    return function (dispatch) {
        return dispatch({
            type: types.SET_ITEM,
            payload: item
        });
    };
}