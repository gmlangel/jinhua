/**
 * Created by haoweirui on 2017/5/19.
 */
import React from 'react';
class CreateRoom extends React.Component{
    constructor () {
        super();
    }
    createRoom (){
        let numCount=document.getElementById('CreateRoom_inputNum').value;
        if(numCount > 20){
            alert('只能容纳20人');
            return;
        }
        if(numCount <= 0){
            alert('请输入正确的人数');
            return;
        }
        alert('开始创建...');
    }
    render () {
        let self=this;
        return (
            <div className="pop_createRoom">
                <ul className="centerAll">
                    <li><span>创建房间</span></li>
                    <li>
                        <div className="backImgALL heitao_createRoom"></div>
                        <div className="backImgALL hongtao_createRoom"></div>
                        <div className="backImgALL huazi_createRoom"></div>
                    </li>
                    <li><span className="centerAll">房间人数：<input id="CreateRoom_inputNum" type="number"/></span></li>
                    <li className="centerAll"><span onClick={self.createRoom}>创建</span></li>
                </ul>
            </div>
        );
    }
}

export default CreateRoom;


