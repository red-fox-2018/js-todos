class ViewToDo{
    static showHelp(){
        var strList="node todo.js"+ "\n"+ "node todo.js help" + "\n" + "node todo.js list" +"\n"+ "node todo.js add <task_content>"
        +"\n"+ "node todo.js findById <task_id>"+"\n"+ "node todo.js delete <task_id>"+"\n"+ "node todo.js complete <task_id>"+"\n"+ "node todo.js uncomplete <task_id>"
        console.log(strList)
    }

    static displayList(parseData){
        var dataStr=""
        for(var i=0; i<parseData.length; i++){
            dataStr+=Object.keys(parseData[i]) +" : " + Object.values(parseData[i]) + "\n"  
        }
        console.log(dataStr)
    }

}

module.exports=ViewToDo