/**
 * Created by haoweirui on 2017/5/19.
 */
import React from 'react';
import {store,state,ACTION} from '../store.js';

class SelfData extends React.Component{
    constructor () {
        super();
        this.state = state.menu_info;
        store.subscribe(this.updateState.bind(this));
    }

    updateState (){
        this.setState(store.getState().menu_info);
    }

    render () {
        let self=this;
        console.log(self);
        return (
            <div  className="pop_selfData">
                <ul className="centerAll">
                    <li>我的资料</li>
                    <li></li>
                    <li>姓名：<span>{self.state.info.name}</span></li>
                    <li>性别：<span>{self.state.info.sex}</span></li>
                    <li>财富：<span>{self.state.info.riches}</span></li>
                    <li>背包：</li>
                    <li className="centerAll">
                        {
                            self.state.info.backpack.map(function (v) {
                                return <span key={v.type}>{v.type}({v.doc})</span>;
                            })
                        }
                    </li>
                </ul>
            </div>
        );
    }
}

export default SelfData;


