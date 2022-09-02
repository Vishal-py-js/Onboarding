import {
    SET_NAME, 
    SET_DISPLAY_NAME, 
    SET_WORKSPACE_NAME, 
    SET_WORKSPACE_URL, 
    SET_USER
} from "../Constants"



export const setName = (name) => (dispatch) => {
    dispatch({ type: SET_NAME, payload:name})
}

export const setDisplayName = (name) => (dispatch) => {
    dispatch({ type: SET_DISPLAY_NAME, payload:name})
}

export const setWorkspaceName = (name) => (dispatch) => {
    dispatch({ type: SET_WORKSPACE_NAME, payload:name})
}

export const setWorkspaceUrl = (name) => (dispatch) => {
    dispatch({ type: SET_WORKSPACE_URL, payload:name})
}

export const setUser = (name) => (dispatch) => {
    dispatch({ type: SET_USER, payload:name})
}


