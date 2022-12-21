import {createReducer} from "@reduxjs/toolkit";

export const userReducer = createReducer({
    user:null,
    valid:false
},{
    login:(state,action)=>{
state.user=action.payload.user;
state.valid=true
    },
    load:(state,action)=>{
        state.user=action.payload.user;
        state.valid=true
    },
    logout:(state,action)=>{
        state.user=null;
        state.valid=false;
    },
    message:(state,action)=>{
        state.msg = action.payload;
    },
    templates:(state,action)=>{
        state.template= action.payload;
    }
});