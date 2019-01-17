'use strict';

var response = require('./res');
var connection = require('./conn');

exports.users = function(req, res) {
    connection.query('SELECT * FROM tbl_user', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.updateUsers = function(req,res){
	var username = req.body.username;
	var tipe = req.body.tipe;
	var user_id = req.body.user_id;	

	connection.query('update tbl_user set username=?,tipe=? where id_user=?',[username,tipe,user_id],
		function(error,rows,fields){
			if(error){
				console.log(error)
			}else{
				response.ok('Berhasil Mengupdate!',res)
			}
		});
} ;

exports.findUsers = function (req,res){
	var user_id= req.params.user_id;

	connection.query('select * from tbl_user where id_user = ?',[user_id],
	function(error,rows,fields){
		if(error){
			console.log(error)
		}else{
			response.ok(rows,res)
		}
	})
}		


exports.deleteUsers = function(req,res){
	var user_id = req.body.user_id;

	connection.query('delete from tbl_user where id_user=?',[user_id],
	function(error,rows,fields){
		if(error){
			console.log(error)
		}else{
			response.ok('Data '+user_id+' berhasil dihapus!',res)
		}
	});
}


exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};