var Table = require('cli-table');

class View{

  static helpCommand(commandArgv){
    let listCommand = ['help','list','add <task_content>','findById <task_id>','delete <task_id>','complete <task_id>','uncomplete <task_id>','completedSort <asc/desc>','Tag <task_content>','Filter Tag <task_content>']

    if(commandArgv == undefined){
      console.log("# this page is default if keyword is empty Task");
    }
    var table = new Table({
        head: ['NO','COMMAND', 'KEY WORD']
      , colWidths: [4, 18,50]
    });

    for(let i=0;i<listCommand.length;i++){
      table.push(
          [ i+1,`$ node todo.js`, `${listCommand[i]}`]
      );
    }
  console.log(table.toString());
  }

  static listCommand(listData){

    var table = new Table({
        head: ['NO','STATUS', 'ACTIVITY','TAGS','TIME']
      , colWidths: [4,8,25,30,50]
    });
    for(let i=0;i<listData.length;i++){
      let list = listData[i]
      table.push([`${list.id}`, `[${list.status}]`,` ${list.activity}` , `${list.tags}`,`${list.completeTime}`,]);
    }
    console.log(table.toString());
  }


  static addCommand(newData){
      console.log(`Added ${newData} to your TODO list `);
  }
  static findCommand(findedData){
    if(findedData==null){
      console.log('data tidak ada');
    }else{
      console.log(`${findedData.id}. ${findedData.activity}`);
    }
  }


  static deleteCommand(deleteData){
    if(deleteData==undefined){
      console.log('DATA SUDAH DIHAPUS');
    }else{
      console.log(`Deleted ${deleteData} from your TODO list`);
    }
  }

  static tagCommand(tagData,tagNames){
    if(tagData==undefined){
      console.log(`ID TIDAK ADA, TIDAK DAPAT MENAMBAH TAG ${tagNames}`);
    }else{
      let tagInfo = '';
      for(let i=0;i<tagNames.length;i++){
        tagInfo = tagInfo + tagNames[i] + ' ';
      }
      console.log(`Tagged task ${tagData} with tags: ${tagInfo.substr(0,tagInfo.length-1)}`);
    }
  }

  static completeCommand(noData){
      console.log('ID SALAH/TIDAK ADA');
  }

  static uncompleteCommand(noData){
      console.log('ID SALAH/TIDAK ADA');
  }

  static filterCommand(filteredData){
    if(filteredData.length!==0){
      var table = new Table({
          head: ['NO','STATUS', 'ACTIVITY','TAGS']
        , colWidths: [4,8,25,30]
      });
      for(let i=0;i<filteredData.length;i++){
        let list = filteredData[i]
        table.push([`${list.id}`, `[${list.status}]`,` ${list.activity}` , `${list.tags}`]);
      }
      console.log(table.toString());
    }else{
      console.log('KATEGORI TIDAK ADA YG SESUAI');
    }
  }
}



module.exports = View;
