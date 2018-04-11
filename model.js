const fs = require('fs')

class Model{
    constructor(){
        this.data= fs.readFileSync('data.json', 'utf8') 
        this.list = JSON.parse(this.data)
        this.obj ={}
    }
    getList(){
        let result = []
        for(let i=0;i<this.list.length;i++){
            result.push(this.list[i])
        }
        return result
    }
    add(task){
        this.obj.id = this.list.length+1
        this.obj.to_do = task
        this.obj.status = false
        this.obj.created_date = new Date()
        this.obj.completed_date = '0'
        this.obj.tags = []
        this.list.push(this.obj)
        this.writeData()
        return `Added ${task} to your To Do list `
    }
    writeData(){
        fs.writeFileSync('data.json',JSON.stringify(this.list))
    }
    findId(id){
        if(id<=this.list.length){
            for(let i=0;i<this.list.length;i++){
                if(this.list[i].id == id){
                    return this.list[i]
                }
            }
        }
        else{
            return 'Tidak ada ID'
        }
    }
    delete(id){
        let result = []
        let notif = ''
        for(let i=0;i<this.list.length;i++){
            if(this.list[i].id != id){
                result.push(this.list[i])
            }
            else{
                notif+=this.list[i].to_do
                this.list.splice(i,1)
            }
        }
        this.writeData()
        return `Deleted ${notif} from your To Do list `
    }
    complete(id){
        for(let i=0;i<this.list.length;i++){
            if(this.list[i].id==id){
                this.list[i].status = true
                this.list[i].completed_date = new Date()
               
            }
        }
        this.writeData()
        return this.list
    }
    uncomplete(id){
        for(let i=0;i<this.list.length;i++){
            if(this.list[i].id==id){
                this.list[i].status= false
                this.list[i].completed_date = '0'
            }
        }
        this.writeData()
        return this.list
    }
    created_asc(to_do){
        for(let i=0;i<this.list.length;i++){
            for(let j=i+1;j<this.list.length;j++){
                let created = this.list[i].created_date
                let nextCreated = this.list[j].created_date
                    if(created>nextCreated){
                        var temp = this.list[i]
                        this.list[i] = this.list[j]
                        this.list[j] = temp
                    }
            }
        }
        return this.list
    }
    created_desc(to_do){
        for(let i=0;i<this.list.length;i++){
            for(let j=i+1;j<this.list.length;j++){
                let created = this.list[i].created_date
                let nextCreated = this.list[j].created_date
                if(created<nextCreated){
                    var temp = this.list[i]
                    this.list[i] = this.list[j]
                    this.list[j] = temp
                }
            }
        }
        return this.list
    }
    completed_asc(to_do){
        for(let i=0;i<this.list.length;i++){
            for(let j=i+1;j<this.list.length;j++){
                let created = this.list[i].completed_date
                let nextCreated = this.list[j].completed_date
                if(created>nextCreated){
                    var temp = this.list[i]
                    this.list[i] = this.list[j]
                    this.list[j] = temp
                }
            }
        }
        return this.list
    }
    completed_desc(to_do){
        for(let i=0;i<this.list.length;i++){
            for(let j=i+1;j<this.list.length;j++){
                let created = this.list[i].completed_date
                let nextCreated = this.list[j].completed_date
                    if(created<nextCreated){
                        var temp = this.list[i]
                        this.list[i] = this.list[j]
                        this.list[j] = temp
                    }
            }
        }
        return this.list
    }
    add_tag(id,tag){
        let notif = ''
        for(let i=0;i<this.list.length;i++){
            if(this.list[i].id == id){
                notif = this.list[i].to_do
                this.list[i].tags.push(tag.split(' ')[1],tag.split(' ')[2])
            }
        }
        this.writeData()
        return `Tagged task ${notif} with tags: ${tag} `
    }
    filter(tag){
        let notif = ''
        let result = []
        for(let i=0;i<this.list.length;i++){
            if(this.list[i].tags.indexOf(tag) != -1){
                notif = this.list[i].id + '. ' + this.list[i].to_do
                result.push(`${notif} [${this.list[i].tags}]`)
            }
        }
        return result
    }
}

module.exports = Model