let data = require('fs')

class Model{

    static m_GetTodoList(){
        let datalist = data.readFileSync('data.json','utf8')
        return datalist
    }

    static m_SetTodoList(value){
        let datalist = data.readFileSync('data.json','utf8')
        let arrlist = JSON.parse(datalist)
        if(arrlist.length === 0){
            var number = 1;
        }
        else{
            number = arrlist[arrlist.length-1].id + 1
        }
        let set = {
            id: number,
            status: 'uncomplete',
            created_date: new Date(),
            created_complete: 0,
            tag:[],
            task: value
        }
        arrlist.push(set)
        let into = data.writeFile('data.json',JSON.stringify(arrlist))
    }

    static m_Search(value){
        let datalist = data.readFileSync('data.json','utf8')
        let arrlist = JSON.parse(datalist)
        let findedtask = null;
        for(let obj of arrlist){
            if(obj.id == value){
                findedtask = obj
            }
        }
        return findedtask
    }

    static m_delete(value){
        let datalist = data.readFileSync('data.json','utf8')
        let arrlist = JSON.parse(datalist)
        let status = false
        for(let i=0;i<arrlist.length;i++){
            let obj = arrlist[i];
            if(obj.id == value){
                status = true
                arrlist.splice(i,1)
            }
        }
        if(status == false){
            throw 'Id yang anda maksud tidak ada dalam data list !!!'
        }
        else{
            let into = data.writeFile('data.json',JSON.stringify(arrlist))
        }
    }

    static m_complete(value){
        let datalist = data.readFileSync('data.json','utf8')
        let arrlist = JSON.parse(datalist)
        let status = false
        for(let i=0;i<arrlist.length;i++){
            let obj = arrlist[i];
            if(obj.id == value){
                status = true
                if(obj.status == 'uncomplete'){
                    obj.status = 'complete'
                    obj.created_complete = new Date()
                }                
            }
        }
        if(status == false){
            throw 'Id yang anda maksud tidak ada dalam data list !!!'
        }
        else{
            let into = data.writeFile('data.json',JSON.stringify(arrlist))
        }
    }

    static m_uncomplete(value){
        let datalist = data.readFileSync('data.json','utf8')
        let arrlist = JSON.parse(datalist)
        let status = false
        for(let i=0;i<arrlist.length;i++){
            let obj = arrlist[i];
            if(obj.id == value){
                status = true
                if(obj.status == 'complete'){
                    obj.status = 'uncomplete'
                    obj.created_complete = null
                }                
            }
        }
        if(status == false){
            throw 'Id yang anda maksud tidak ada dalam data list !!!'
        }
        else{
            let into = data.writeFile('data.json',JSON.stringify(arrlist))
        }
    }

    static m_sortCreatedDate(command){
        let datalist = data.readFileSync('data.json','utf8')
        let arrlist = JSON.parse(datalist)
        if(command == 'asc'){
            arrlist.sort()
        }
        else if(command == 'desc'){
            arrlist.sort().reverse()
        }
        else{
            throw 'command anda salah'
        }
        return arrlist
    }

    static m_sortCompleteDate(command){
        let datalist = data.readFileSync('data.json','utf8')
        let arrlist = JSON.parse(datalist)
        let temp = []

        for(let i=0;i<arrlist.length;i++){
            if(arrlist[i].created_complete === 0){
                temp.push(arrlist[i]);
                arrlist.splice(i,1)
                i--
            }
        }
        if(command == 'asc'){
            for(let i=0;i<arrlist.length;i++){
                for(let j=i+1;j<arrlist.length;j++){

                    if(arrlist[i].created_complete.toString() > arrlist[j].created_complete.toString()){
                        let temp = arrlist[i]
                        arrlist[i] = arrlist[j]
                        arrlist[j] = temp
                    }
                }
            }
        }
        else if(command == 'desc'){
            for(let i=0;i<arrlist.length;i++){
                for(let j=i+1;j<arrlist.length;j++){
                    if(arrlist[i].created_complete.toString() < arrlist[j].created_complete.toString()){
                        let temp = arrlist[i]
                        arrlist[i] = arrlist[j]
                        arrlist[j] = temp
                    }
                }
            }
        }
        else{
            throw 'command anda salah'
        }
        return arrlist
    }

    static m_Tag(id,tags){
        let datalist = data.readFileSync('data.json','utf8')
        let arrlist = JSON.parse(datalist)
        let tags2 = tags.split(' ')
        for(let obj of arrlist){
            if(obj.id == id){
                obj.tag = tags2
            }
        }
        let into = data.writeFile('data.json',JSON.stringify(arrlist))
    }

    static m_ShowByFilter(value){
        let datalist = data.readFileSync('data.json','utf8')
        let arrlist = JSON.parse(datalist)
        let arrfilter = []
        for(let obj of arrlist){
            for(let key in obj){
                if(key == 'tag'){
                    for(let i=0;i<obj[key].length;i++){
                        if(value == obj[key][i]){
                            arrfilter.push(obj)
                        }
                    }
                }
            }
        }
        return arrfilter
    }
}

module.exports = Model