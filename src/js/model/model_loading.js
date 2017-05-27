/**
 * Created by haoweirui on 2017/5/13.
 */
class model_loading{
    constructor (){
        this.initData();
    }
    initData (){
        this.modleName='model_loading';
        this.loadNum=0;
    }
    changeNum (value){
        this.loadNum+=value;
    }
}

let exp_loading = new model_loading();
export default exp_loading;