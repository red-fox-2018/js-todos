

class View{
    static notice(){
        console.log('please input help for more information')
    }
    static notif(){
        console.log(`list                add <task_content>   findById <task_id> \ndelete <task_id>    complete <task_id>   uncomplete <task_id>`)
    }
    static list(notif){
        for(let i=0;i<notif.length;i++){
            let status =''
            if(notif[i].status==false){
                status = '[ ]'
            }
            else if(notif[i].status==true){
                status = '[x]'
            }
            console.log(`${notif[i].id}. ${status} ${notif[i].to_do}`)
        }
    }
    static show(notif){
        console.log(notif)
    }
    static showId(notif){
        console.log(`${notif.id}. ${notif.to_do}`)
    }
    static filter(data){
        for(let i=0;i<data.length;i++){
            console.log(data[i])
        }
    }
}

module.exports = View