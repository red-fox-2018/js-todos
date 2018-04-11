const helpMessage = `
    $ node todo.js                                           # Will call help
    $ node todo.js help                                      # Menampilkan command apa saja yang tersedia
    $ node todo.js list                                      # Melihat daftar TODO
    $ node todo.js add <task_content>                        # Menambahkan TODO ke dalam list
    $ node todo.js findBy <task_id>                          # Melihat detail TODO sesuai 'task_id' nya
    $ node todo.js delete <task_id>                          # Menghapus TODO sesuai 'task_id' nya
    $ node todo.js complete <task_id>                        # Menandai status TODO selesai
    $ node todo.js uncomplete <task_id>                      # Menandai status TODO belum selesai
    $ node todo.js list:created asc|desc                     # Melihat daftar TODO sesuai tanggal dibuat
    $ node todo.js list:completed asc|desc                   # Melihat daftar TODO sesuai daftar yang sudah selesai
    $ node todo.js delete:all                                # Menghapus semua daftar TODO
    $ node todo.js tag <task_id><tag_name1> ... <tag_name_N> # Menambahkan beberapa tag pada TODO
    $ node todo.js filter:<tag_name>                         # Mecari / memfilter TODO yang memiliki tag tertentu
`
module.exports = helpMessage;
