import * as types from '../constant/action-types';
import {apiServer} from "../constant/const";
import ApiService from "../api/services/api-http-service";


export function setAllLists() {
    return function (dispatch) {
        ApiService.apiGetAll(apiServer.method.lists).then(lists => {
            return dispatch({
                type: types.SET_LISTS,
                payload: lists
            });
        });

    }
}

export function setAllItems(id) {
    return function (dispatch) {
        ApiService.apiGetItem(apiServer.method.listItemWithId, id).then(items => {
            return dispatch({
                type: types.SET_ITEMS,
                payload: items
            });
        });
    }
}
export function setSingleList(idList, idItem) {
    return function (dispatch) {
        ApiService.apiGetItemById(apiServer.method.itemWithListId, idList, idItem).then(list => {
            return dispatch({
                type: types.SET_LIST,
                payload: list
            });
        });
    }
}
export function deleteList(id) {
    return function (dispatch) {
        ApiService.apiDelete(apiServer.method.listWithId, id);

    }
}

export function deleteItem(idI, idL) {
    return function (dispatch) {
        ApiService.apiDeleteItem(apiServer.method.itemWithListId, idI, idL)
    }
}
export function updateItem(item) {
    return function (dispatch) {
        ApiService.apiPut(apiServer.method.itemWithId, item);
    }
}

export function createNewItem(item) {
    return function (dispatch) {
        ApiService.apiPost(apiServer.method.items, item);
    }
}

export function createNewList(list) {
    return function (dispatch) {
        ApiService.apiPost(apiServer.method.lists, list);
    }
}

export function createNew(object) {
    return {
        type: types.CREATE_NEW,
        payload: object
    }
}

export function setNewItem(item) {
    return {
        type: types.SET_NEW_ITEM,
        payload: item
    }
}

export function setNewList(list) {
    return {
        type: types.SET_NEW_LIST,
        payload: list
    }
}


export function setSingleItem(item) {
    return function (dispatch) {
        return dispatch({
            type: types.SET_ITEM,
            payload: item
        });
    }
}

