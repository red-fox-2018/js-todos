class SortTask {
  static dateAsc(){}

  static dateDesc(arrTask){
    arrTask.sort(function(a,b){
      return new Date(b.date) - new Date(a.date)
    })

    return arrTask
  }
}

module.exports = SortTask;
