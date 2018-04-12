class View{

    static v_help(){
        console.log('=============command===============')
        console.log('node todo.js help')
        console.log('node todo.js list')
        console.log('node todo.js add <task_content>')
        console.log('node todo.js findById <task_id>')
        console.log('node todo.js delete <task_id>')
        console.log('node todo.js complete <task_id>')
        console.log('node todo.js uncomplete <task_id>')
        console.log('=============command===============')
    }

    static v_ShowTodoList(value){
        console.log('hasilnya (ada nomor ID dan list todonya): ')
        let list = JSON.parse(value)
        // let number = 1;
        for(let obj of list){
            if(obj.status == 'complete'){
                console.log(`${obj.id}. [X] ${obj.task}`)
            }
            else{
                console.log(`${obj.id}. [ ] ${obj.task}`)
            }
            // number++;
        } 
    }

    static v_ShowSearchedTask(value){
        if(value !== null){
            console.log(`${value.id}. ${value.task}`)
        }
        console.log('ID yang anda maksud tidak ada !!!')
    }

    static v_ShowAsSorted(value){
        console.log('hasilnya (ada nomor ID dan list todonya): ')
        // let number = 1;
        for(let obj of value){
            if(obj.status == 'complete'){
                console.log(`${obj.id}. [X] ${obj.task}`)
            }
            else{
                console.log(`${obj.id}. [ ] ${obj.task}`)
            }
            // number++;
        } 
    }

    static v_ShowDataByFilter(tagginglist){
        console.log('List by Filter: ')
        for(let obj of tagginglist){
            if(obj.status == 'complete'){
                console.log(`${obj.id}. [X] ${obj.task} [${obj.tag}]`)
            }
            else{
                console.log(`${obj.id}. [ ] ${obj.task} [${obj.tag}]`)
            }
        }
    }
}

module.exports = View