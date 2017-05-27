/**
 * Created by haoweirui on 2017/5/13.
 */
import React from 'react';
import {store,state,ACTION} from '../store.js';

class Loading extends React.Component{
    constructor (){
        super();
        this.state=state.loading;
        store.subscribe(this.updateSate.bind(this));
    }

    updateSate () {
        this.setState(store.getState().loading);
    }

    render () {
        let self = this;
        return (
            <div className="centerAll">
                <div className="loading_gif"></div>
                <div className="loading_middle"></div>
                <div>{self.state.loadNum}%</div>
            </div>
        )
    }
}
export default Loading;







