/**
 * Created by haoweirui on 2017/5/19.
 */
import React from 'react';
class GameRule extends React.Component{
    constructor () {
        super();
    }

    render () {
        return (
            <div className="pop_gameRule">
                <div className="centerAll">
                    <span className="menu_rule_head centerAll">游戏规则</span>
                    <span className="menu_rule_middle"></span>
                    <ul className="centerAll">
                        <li>一、什么都不要说</li>
                        <li>二、就是干</li>
                        <li>三、干他娘的</li>
                        <li>四、fuck!!!</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default GameRule;


