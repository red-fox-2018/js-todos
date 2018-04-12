let Model = require('./model')
let View = require('./view')
class Controller{

    static c_ShowHelp(){
        View.v_help()
    }

    static c_TodoList(){
        let result = Model.m_GetTodoList()
        View.v_ShowTodoList(result)
    }

    static c_newTodoList(value){
        Model.m_SetTodoList(value)
    }

    static c_find(value){
        let result = Model.m_Search(value)
        View.v_ShowSearchedTask(result)
    }

    static c_deleteTask(value){
        Model.m_delete(value)
    }

    static c_completedTask(value){
        Model.m_complete(value)
    }

    static c_uncompletedTask(value){
        Model.m_uncomplete(value)
    }

    static c_ascendingdescendingTask(command){
        let sort = Model.m_sortCreatedDate(command)
        View.v_ShowAsSorted(sort)
    }

    static c_ascendingdescendingCompleteTask(command){
        let sort = Model.m_sortCompleteDate(command)
        View.v_ShowAsSorted(sort)
    }

    static c_putTag(id,tags){
        Model.m_Tag(id,tags)
    }

    static c_filter(value){
        let tagginglist = Model.m_ShowByFilter(value)
        View.v_ShowDataByFilter(tagginglist)
    }
}

module.exports = Controller