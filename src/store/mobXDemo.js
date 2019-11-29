import { decorate, observable, autorun, action } from "mobx";
import API from '../api/pagiNationAPI'

class MobXDemo {
    @observable title = 'TODO LIST';
    @observable todoList = [];
    @observable apiDataList = [];
    @observable id = [];
    @observable i = 0;

    @action 
    makeTodoList(val){
        this.todoList = [...this.todoList, val];
    }

    @action
    deleteDataOnList(index){
         this.apiDataList.splice(index,1);
         this.apiDataList = [...this.apiDataList]
    }

    @action 
    callAxios(val, index){
        // for deleting functionality worked
        // cond = index+this.i;
        // for(this.i; this.i < cond; this.i++){
        //     this.id = [...this.id, this.i];
        //     console.log("index value is ", this.id[this.i]);
        // }
        
        API.get('', {params: {page: val}})
        .then( response =>{
            this.apiDataList = [...this.apiDataList, ...response.data.data,];
            //this.apiDataList = [...]
            //console.warn("id", this.apiDataList[1].id)
            // for(this.i; this.i < cond; this.i++){
            //     this.apiDataList[this.i].id = this.i;
            //     console.warn("id", this.apiDataList[this.i].id)
            // }

        })
        .catch(function(error) {
            console.log(error);
        });
        
       // console.warn("API size ", this.i)
    }
}

export default MobXDemo;