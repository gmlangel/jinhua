/**
 * Created by haoweirui on 2017/5/13.
 */
import React from 'react';
import {store,state,ACTION} from '../store.js';

class Game extends React.Component{
    constructor (){
        super();
        this.state=state.loading;
    }

    render () {
        let self = this;
        return (
            <div>

            </div>
        )
    }
}
export default Game;