/**
 * Created by haoweirui on 2017/5/13.
 */
import React from 'react';
import {store,state,ACTION} from '../store.js';

import SelfData from './menu_selfData.jsx';
import CreateRoom from './menu_creatRoom.jsx';
import SearchRoom from './menu_searchRoom.jsx';
import GameRule from './menu_gameRule.jsx';

class Menu extends React.Component{
    constructor (){
        super();
        this.state=state.menu;
        store.subscribe(this.updateSate.bind(this));
    }

    updateSate () {
        this.setState(store.getState().menu);
    }

    clickEventParent (e){
        $('.menu_popCon').hide();
        $('.menu_popCon > div').hide();
    }

    clickEventSelfData (e) {
        $('.menu_popCon').show();
        $('.menu_popCon > div').hide();
        $('.pop_selfData').show();
        e.preventDefault();
        e.stopPropagation();
    }

    clickEventCreateRoom (e) {
        $('.menu_popCon').show();
        $('.menu_popCon > div').hide();
        $('.pop_createRoom').show();
        e.preventDefault();
        e.stopPropagation();
    }

    clickEventSearchRoom (e) {
        $('.menu_popCon').show();
        $('.menu_popCon > div').hide();
        $('.pop_searchRoom').show();
        e.preventDefault();
        e.stopPropagation();
    }

    clickEventGameRule (e) {
        $('.menu_popCon').show();
        $('.menu_popCon > div').hide();
        $('.pop_gameRule').show();
        e.preventDefault();
        e.stopPropagation();
    }
    clickEventStartGame (e) {
        
        e.preventDefault();
        e.stopPropagation();
    }

    render () {
        let self = this;
        return (
            <div className="centerAll">
                <div className="centerAll menu_choseCon" onClick={self.clickEventParent}>
                    <div className="menu_helpCon">
                        <div className="menu_help backImgALL"></div>
                    </div>
                    <div className="menu_menuCon">
                        <div className="menu_top"></div>
                        <div className="menu_middle">
                            <div className="menu_selfData" onClick={self.clickEventSelfData}>我的资料</div>
                            <div className="menu_createRoom" onClick={self.clickEventCreateRoom}>创建房间</div>
                            <div className="menu_searchRoom" onClick={self.clickEventSearchRoom}>加入房间</div>
                            <div className="menu_startGame" onClick={self.clickEventStartGame}>快速开始</div>
                            <div className="menu_gameRule" onClick={self.clickEventGameRule}>游戏规则</div>
                        </div>
                        <div className="menu_bottom"></div>
                    </div>
                </div>
                <div className="menu_popCon">
                    <SelfData />
                    <CreateRoom />
                    <SearchRoom />
                    <GameRule />
                </div>
            </div>
        )
    }
}
export default Menu;







