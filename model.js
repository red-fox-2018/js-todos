const fs = require('fs');

class Model{

  static readData(){
    let listData = JSON.parse(fs.readFileSync('data.json','utf8'));
    return listData;
  }

  static addData(activity){
    let listData = Model.readData();
    console.log(listData.length);
    if(listData.length === 0){
      let newObject = {id:1,activity:activity,status:" ",date:new Date(),completeTime:new Date(),tags:[]};
      listData.push(newObject);
      Model.writeData(JSON.stringify(listData));
    }else{
      let newObject = {id:(parseInt(listData[listData.length-1].id)+1).toString(),activity:activity,status:" ",date:new Date(),completeTime:new Date(),tags:[]};
      listData.push(newObject);
      Model.writeData(JSON.stringify(listData));
    }
  }

  static addTagData(idList,tagNames){
    let listData = Model.readData();
    for(let i=0;i<listData.length;i++){
      if(listData[i].id == idList){
        for(let j=0;j<tagNames.length;j++){
          listData[i].tags.push(tagNames[j]);
        }
        Model.writeData(JSON.stringify(listData));
        return listData[i].activity;
      }
    }
  }

  static writeData(listData){
    fs.writeFileSync('data.json',listData,'utf8');
  }

  static findData(findValue){
    let listData = Model.readData();
    //console.log(findValue);
     for(let i=0;i<listData.length;i++){
         //console.log(listData[i].id);
        if(listData[i].id == findValue){
          return listData[i];
        }
     }
      listData = null
    return listData
  }

  static deleteData(deleteValue){
    let listData = Model.readData();
    for(let i=0;i<listData.length;i++){
      if(listData[i].id == deleteValue){
        let deletedData = listData[i].activity;
        listData.splice(i,1)
        Model.writeData(JSON.stringify(listData));
        return deletedData;
      }
    }
  }

  static complete(idActivity){
    let listData = Model.readData();
    for(let i=0;i<listData.length;i++){
      var dataActivity=listData[i].id
      if(dataActivity == idActivity){
        listData[i].status = 'x';
        listData[i].completeTime = new Date();
        Model.writeData(JSON.stringify(listData));
        return dataActivity
      }
    }
    return dataActivity= null
  }

  static uncomplete(idActivity){
    let listData = Model.readData();
    for(let i=0;i<listData.length;i++){
      var dataResult=listData[i].id
      if(listData[i].id == idActivity){
        listData[i].status = ' ';
        listData[i].completeTime = listData[i].date;
        Model.writeData(JSON.stringify(listData));
        return dataResult
      }
    }
    return dataResult = null
  }

  static createdSort(sorttype){
    let listData = Model.readData();

    if(sorttype == "desc"){
      return listData.reverse();
    }
    return listData
  }

  static completedSort(sorttype,sort){
    let listData = Model.readData();
    let complete = []
    if(sorttype == 'asc'){
      let dataSort =listData.sort(function(a, b){
        return new Date(a.completeTime)-new Date(b.completeTime)
      })
      for (let i = 0; i < dataSort.length; i++) {
        if(dataSort[i].status === "x" ){
          complete.push(dataSort[i])
        }
      }
      return complete
    }else if(sorttype == 'desc'){
      let dataSort =listData.sort(function(a, b){
        return new Date(b.completeTime)-new Date(a.completeTime)
      })
      for (let i = 0; i < dataSort.length; i++) {
        if(dataSort[i].status === "x" ){
          complete.push(dataSort[i])
        }
      }

      return complete
    }
  }

  static filterData(category){
    let listData = Model.readData();
    let dataWithSameCategory = [];

    for(let i=0;i<listData.length;i++){

      for(let j=0;j<listData[i].tags.length;j++){

        if(listData[i].tags[j] == category){

          dataWithSameCategory.push(listData[i]);
        }
      }

    }

    let filteredData = [];

    for(let i=0;i<dataWithSameCategory.length;i++){
      filteredData.push(dataWithSameCategory[i]);
    }

    return filteredData
  }
}

module.exports = Model;
