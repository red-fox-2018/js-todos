let Model = require('./model.js')
let View = require('./view.js')

class Controller{
    constructor(){
        this.model = new Model()
    }
    notice(){
        View.notice()
    }
    help(){
        View.notif()
    }
    list(){
        let data = this.model.getList()
        View.list(data)
    }
    add(to_do) {
        let data = this.model.add(to_do)
        View.show(data)
    }
    findById(id){
        let data = this.model.findId(id)
        if(typeof data!='string'){
            View.showId(data)
        }
        else{
            View.show(data)
        }
    }
    delete(to_do){
        let data = this.model.delete(to_do)
        View.show(data)
    }
    complete(to_do){
        let data = this.model.complete(to_do)
        View.list(data)
    }
    uncomplete(to_do){
        let data = this.model.uncomplete(to_do)
        View.list(data)
    }
    created_asc(){
        let data = this.model.created_asc()
        View.list(data)
    }
    created_desc(to_do){
        let data = this.model.created_desc()
        View.list(data)
    }
    completed_asc(){
        let data = this.model.completed_asc()
        View.list(data)
    }
    completed_desc(to_do){
        let data = this.model.completed_desc()
        View.list(data)
    }
    add_tag(id,tag){
        let data = this.model.add_tag(id,tag)
        View.show(data)
    }
    filter(tag){
        let data = this.model.filter(tag)
        View.filter(data)
    }
}

module.exports = Controller