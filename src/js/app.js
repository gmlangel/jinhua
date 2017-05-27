/**
 * Created by haoweirui on 2017/5/12.
 */
import React from 'react';
import "../css/main.less";
import { initWX } from "./wxHandle";
import ReactDom from 'react-dom';
import {store, ACTION} from './store';
import Loading from './components/j_loading.jsx';
import Menu from './components/j_menu.jsx';
import Game from './components/j_game.jsx';

window.onload=function () {
    $('.jContain').css('visibility','visible');
}

//初始化微信
initWX();

ReactDom.render(
    <Loading />,
    document.getElementsByClassName('j_loading')[0]
)
ReactDom.render(
    <Menu />,
    document.getElementsByClassName('j_menu')[0]
)
ReactDom.render(
    <Game />,
    document.getElementsByClassName('j_game')[0]
)