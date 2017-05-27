/**
 * Created by haoweirui on 2017/5/13.
 */
class model_menu_info{
    constructor (){
        this.initData();
    }
    
    initData (){
        this.modleName='model_menu';
        this.info = {};
    }
    
    updateInfo (obj) {
        this.info = obj;
    }
}

let exp_menu = new model_menu_info();
export default exp_menu;