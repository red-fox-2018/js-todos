let View = require("./view")
let Model = require("./model")

class Controller{
    static listCommandHelp(){
        let list = ["$ node todo.js list","$ node todo.js add <task_content>","$ node todo.js findById <task_id>"
        ,"$ node todo.js delete <task_id>","$ node todo.js complete <task_id>","$ node todo.js uncomplete <task_id>",
        "$ node todo.js list:created asc | desc","$ node todo.js list:complete asc | desc","$ node todo.js tags <id> <tags_name> <tags_name1>",
        "$ node todo.js filter <tag>"]

        for(let i=0;i<list.length;i++){
            View.listCommandView(`${list[i]}`)
        }
    }

    static listCommandList(){
        let list = Model.dataJson()

        for(let i=0;i<list.length;i++){
            View.listCommandView(`${list[i].id} [${list[i].complete == true ? 'x' : ' '}] ${list[i].task} [${list[i].tags}]`)
        }
    }

    static listCommandAdd(add){
        let result = Model.addDataJson(add)
        View.listCommandView(`Added ${add} to your TODO list`)
    }

    static listCommandFind(find){
        let result = Model.dataJson()
        View.listCommandView(`${find}. [${result[Number(find)-1].complete == true ? 'x' : ' '}] ${result[Number(find)-1].task} [${result[Number(find)-1].tags}]`)
    }

    static listCommandDelete(deleted){
        let result = Model.dataJson()
        Model.deletedDataJson(deleted)
        View.listCommandView(`Deleted "${result[Number(deleted)-1].task}" from your TODO list`)
    }

    static listCommandComplete(command,complete){
        Model.completeDataJson(command,complete)
        let list = Model.dataJson()
        for(let i=0;i<list.length;i++){
            View.listCommandView(`${list[i].id} [${list[i].complete == true ? 'x' : ' '}] ${list[i].task} [${list[i].tags}]`)
        }
    }

    static listCommandDate(command,ascDesc){
        let result = Model.ascDesc(command,ascDesc)
        for(let i=0;i<result.length;i++){
            View.listCommandView(`${result[i].id} [${result[i].complete == true ? 'x' : ' '}] ${result[i].task} [${result[i].tags}]`)
        }
    }

    static listCommandTag(tag,tageds){
        let newtag = Model.tag(tag,tageds)
        View.listCommandView(newtag)
    }

    static listCommandFilter(filter){
        let result = Model.filter(filter)
        View.listCommandView(result)
    }

}

module.exports = Controller