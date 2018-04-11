
let data = 
[
  {"id":1,"task":"add TODO 1 YA :DD","created_data":"2018-04-11T09:16:05.721Z","completed_data":"2018-04-11T09:44:36.314Z","complete":true},
  {"id":2,"task":"add TODO 2 HIDIDIDI","created_data":"2018-04-11T09:16:18.500Z","completed_data":"2018-04-11T09:41:39.194Z","complete":true},
  {"id":4,"task":"add TODO 4 HALAHHH","created_data":"2018-04-11T09:16:32.162Z","completed_data":"2018-04-11T09:42:57.488Z","complete":true},
  {"id":5,"task":"add TODO 5 APALAH","created_data":"2018-04-11T09:16:36.510Z","completed_data":"2018-04-11T09:43:44.211Z","complete":true}]

function _sortByDate(value) {
  return value.sort(function(b, a) {
    return new Date(b.completed_data) - new Date(a.completed_data);
  });
}

console.log(_sortByDate(data));

console.log(new Date().toISOString());
// console.log(typeof new Date('2016-04-11T09:06:47.762Z').getTime());