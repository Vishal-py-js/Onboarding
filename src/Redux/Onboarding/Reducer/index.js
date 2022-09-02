import {
    SET_NAME, 
    SET_DISPLAY_NAME, 
    SET_WORKSPACE_NAME, 
    SET_WORKSPACE_URL, 
    SET_USER
} from "../Constants"

const initialState = {
    name: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    user: ""
}

export const userInfoReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_NAME:
            return {...state, name:action.payload}

        case SET_DISPLAY_NAME:
            return {...state, displayName:action.payload}  
            
        case SET_WORKSPACE_NAME:
            return {...state, workspaceName:action.payload}

        case SET_WORKSPACE_URL:
            return {...state, workspaceUrl:action.payload}

        case SET_USER:
            return {...state, user:action.payload}
        
        default:
            return state
    }
}