/*jshint esversion:6*/
const fs = require('fs');

class Model{
  static todoFile(){
    let dataTodo = JSON.parse(fs.readFileSync('./data.json','utf-8'));
    return dataTodo;
  }

  static add(todo){
    let dataTodo = Model.todoFile();
    let number = dataTodo.length-1;
    let kegiatan = {};
    kegiatan.id = dataTodo[number].id + 1;
    kegiatan.name = todo;
    kegiatan.status = 'uncomplete';
    kegiatan.created_at = new Date();
    kegiatan.updated_at = new Date();
    dataTodo.push(kegiatan);

    fs.writeFileSync('./data.json',JSON.stringify(dataTodo),'utf-8',null,2);
  }

  static findID(num){
    let dataTodo = Model.todoFile();
    for(let i = 0 ; i < dataTodo.length ; i++){
      if(dataTodo[i].id === Number(num)){
        return dataTodo[i];
      }
    }
  }

  static delete(num){
    let dataTodo = Model.todoFile();
    for(let i = 0 ; i < dataTodo.length; i++){
      if(dataTodo[i].id === Number(num)){
        var idx = i;
        dataTodo.splice(idx,1);
        fs.writeFileSync('./data.json',JSON.stringify(dataTodo),'utf-8');
        return 'sukses';
      }
    }
    return 'gagal';
  }

  static done(num){
    let dataTodo = Model.todoFile();
    for(let i = 0 ; i < dataTodo.length; i++){
      if(dataTodo[i].id === Number(num)){
        dataTodo[i].status = 'complete';
        dataTodo[i].updated_at = new Date();
        fs.writeFileSync('./data.json',JSON.stringify(dataTodo),'utf-8');
        return 'sukses';
      }
    }
    return 'gagal';
  }

  static undone(num){
    let dataTodo = Model.todoFile();
    for(let i = 0 ; i < dataTodo.length; i++){
      if(dataTodo[i].id === Number(num)){
        dataTodo[i].status = 'uncompleted';
        dataTodo[i].updated_at = new Date();
        fs.writeFileSync('./data.json',JSON.stringify(dataTodo),'utf-8');
        return 'sukses';
      }
    }
    return 'gagal';
  }

}





module.exports = Model;
