import {NEW_POSTS, FETCH_POSTS} from '../actions/types'

const initialState = {
    items :[],
    item: {},
    infosignup : {}
}

export default function (state = initialState, action){
    switch (action.type) {
        case NEW_POSTS :
        console.log("got")
          return{
            ...state,
            items: action.payload
          }
          default : 
          return state;
    }
}