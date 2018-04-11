/*jshint esversion:6*/
const Table = require('cli-table');


class View{
  static helpView(){
    console.log('berikut command yang disediakan oleh kami');
    console.log('=========================================');
    console.log('list : untuk melihat daftar TODO');
    console.log('add <task_content> : menambahkan TODO ke dalam list');
    console.log('findById <task_id>: untuk melihat TODO sesuai dengan `task_idnya`');
    console.log('delete <task_id> : menghapus TODO sesuai task_id nya');
    console.log('complete <task_id> : menandai status TODO telah selesai');
    console.log('uncomplete <task_id> : menandai status TODO belum selesai');
  }

  static listTodo(datalist){
    var table = new Table({
      head:['id','kegiatan','status','created_at','updated_at'],
      colWidths : [5,40,15,20,20]
    });
    for(let i = 0 ; i < datalist.length ; i++){
      table.push([datalist[i].id,datalist[i].name,datalist[i].status,datalist[i].created_at,datalist[i].updated_at]);
    }
    console.log(table.toString());
  }

  static addView(kegiatan){
    console.log(`kamu berhasil menambahkan ${kegiatan}, ke dalam to do list`);
  }

  static findIDView(kegiatan){
    console.log('ini kan yang kamu butuhkan',kegiatan);
  }

  static deleteView(needs,numberID){
    if(needs === 'sukses'){
      console.log(`kamu berhasil mendelete kegiatan di nomor ${numberID}`);
    }else{
      console.log('gagal delete');
    }
  }

  static completed(needs,numberID){
    if(needs === 'sukses'){
      console.log(`kamu berhasil menyelesaikan kegiatan di nomor ${numberID}`);
    }else{
      console.log('gagal delete');
    }
  }

  static uncompleted(needs,numberID){
    if(needs === 'sukses'){
      console.log(`kamu jangan malas - malasan selesaikan kegiatan di nomor ${numberID}`);
    }else{
      console.log('gagal delete');
    }
  }
}





module.exports = View;
