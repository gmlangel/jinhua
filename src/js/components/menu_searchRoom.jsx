/**
 * Created by haoweirui on 2017/5/19.
 */
import React from 'react';
class SearchRoom extends React.Component{
    constructor () {
        super();
    }

    searchRoom () {
        let numEnter = document.getElementById('searchRoom_inputNum').value;
        alert('正在加入房间：'+numEnter);
    }

    render () {
        let self = this;
        return (
            <div className="pop_searchRoom">
                <ul className="centerAll">
                    <li><span>加入房间</span></li>
                    <li>
                        <div className="backImgALL heitao_createRoom"></div>
                        <div className="backImgALL hongtao_createRoom"></div>
                        <div className="backImgALL huazi_createRoom"></div>
                    </li>
                    <li><span className="centerAll">房间号：<input id="searchRoom_inputNum" type="number"/></span></li>
                    <li className="centerAll"><span onClick={self.searchRoom}>加入</span></li>
                </ul>
            </div>
        );
    }
}

export default SearchRoom;


