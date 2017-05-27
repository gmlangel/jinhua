/**
 * Created by haoweirui on 2017/5/12.
 */
import { createStore } from 'redux';
import state_loading from "./model/model_loading";
import state_menu from "./model/model_menu";
import state_menu_info from "./model/model_menu_info";
import state_game from "./model/model_game";

//创建并绑定各模块state
let state={};
state.loading = state_loading;
state.menu = state_menu;
state.menu_info = state_menu_info;
state.game = state_game;

/**
 * 指令集  存储 操作的reduce type
 * @param const
 */
const ACTION=Object.freeze({
    LOADING:{
        IMG:'LOADING_IMG'
    },
    MENU:{
        INFO:'INFO'
    }
});

let reducer = function(state,action){
    switch(action.type){
        case ACTION.LOADING.IMG:
            state.loading.changeNum(action.value);
            return state;
            break;
        case ACTION.MENU.INFO:
            state.menu_info.updateInfo(action.value);
            return state;
            break;
        default:
            return state;
    }
}

let store = createStore(reducer,state);

export { store, state, ACTION }