let Controller = require("./controller")
let View = require("./view")
const fs = require('fs')

class Model{
    static update(update){
        fs.writeFileSync("data.json",JSON.stringify(update))
    }

    static dataJson(){
        let data = fs.readFileSync("data.json","utf-8")
        let obj = JSON.parse(data)
        return obj
    }

    static addDataJson(add){
        let obj = Model.dataJson()
        obj.push({"id":obj[obj.length-1].id+1,"task":add,"complete":false,"date":new Date(),"tags":[]})
        Model.update(obj)

    }

    static deletedDataJson(deleted){
        let obj = Model.dataJson()
        for(let x in obj){
            if(obj[x].id==deleted){
                obj.splice(x,1)
            }
        }
        Model.update(obj)
    }

    static completeDataJson(command,complete){
        let obj = Model.dataJson()
        if(command=="complete"){
            obj[Number(complete)-1].complete = true
            Model.update(obj)
        }else{
            obj[Number(complete)-1].complete = false
            Model.update(obj)
        }
    }

    static ascDesc(command,ascDesc){
        let result = Model.dataJson()
        let key = ""
        if(command=="list:created"){
            key = "date"
        }else{
            key = "complete"
        }

        if(ascDesc=="asc"){
            for(let x in result){
                for(let y in result){
                    if(result[x][key]<result[y][key]){
                    let tmp = result[x]
                    result[x] = result[y]
                    result[y] = tmp
                    }
                }
            }
        }else{
            for(let x in result){
                for(let y in result){
                    if(result[x][key]>result[y][key]){
                    let tmp = result[x]
                    result[x] = result[y]
                    result[y] = tmp
                    }
                }
            }
        }
        return result
    }

    static tag(tag,tags){
        let taged = tags.split(" ")
        let list = Model.dataJson()

        let result = ""
        for(let i=0;i<list.length;i++){
            if(list[i].id==tag){
                for(let k=0;k<taged.length;k++){
                    list[i]["tags"].push(taged[k])
                }
                result = `Tagged task "${list[i].task}" with tags: ${taged}`
            }
        }
        Model.update(list)
        return result
    }

    static filter(filter){
        let tabel = Model.dataJson()
        let result = ""
        for(let i=0;i<tabel.length;i++){
            for(let k=0;k<tabel[i].tags.length;k++){
                if(tabel[i].tags[k]==filter){
                    result += `${tabel[i].id} [${tabel[i].complete == true ? 'x' : ' '}] ${tabel[i].task} [${tabel[i].tags}]\n`
                }
            }
        }

        return result.slice(0,result.length-1)
    }
}

module.exports = Model