var connection = require ('../config/connection');

function jadwal_kelas() {
	this.get = function(res) {
		connection.acquire(function(err,con) {
			con.query('select * from kelas', function(err,result) {
				con.release();
				res.send(result);
				console.log("get successful");
			});
		});
	};
	this.getByID = function(id,res) {
		connection.acquire(function(err,con) {
			con.query('select * from kelas where id_kelas = ?', id, function(err,result) {
				con.release();
				res.send(result);
				console.log("get by ID successful");
			});
		});
	};
	this.create = function(jadwal_kelas,res) {
		connection.acquire(function(err,con) {
			con.query('insert into kelas set ?', jadwal_kelas, function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, message:'jadwal creation fail'});
				} else {
					res.send({status:0, message:'jadwal creation succes'});
					console.log("Post Succesful");
				}
			});
		});
	};
	this.update = function(jadwal_kelas,id,res) {
		connection.acquire(function(err,con) {
			con.query('UPDATE kelas SET kelas = ?, jam = ?, id_MK = ?, id_dosen = ? WHERE id_kelas = ?', [jadwal_kelas, id], function(err,result) {
				con.release();
				if(err) {
					res.send({status:1, message:'kelas update fail'});
				}else{
					res.send({status:0, message:'kelas update succes'});
					console.log("Put successful");
				}
			});
		});
	};
	this.delete = function(id,res) {
		connection.acquire(function(err,con) {
			con.query('delete from buku where id_kelas = ?', id, function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, message:'kelas delete fail'})
				} else {
					res.send({status:0, message:'kelas delete succes'});
					console.log("delete successful");
				}
			});
		});
	};
	this.get = function(res) {
		connection.acquire(function(err,con) {
			con.query('select * from matakuliah', function(err,result) {
				con.release();
				res.send(result);
				console.log("get successful");
			});
		});
	};
	this.getByID = function(id,res) {
		connection.acquire(function(err,con) {
			con.query('select * from matakuliah where id_MK = ?', id, function(err,result) {
				con.release();
				res.send(result);
				console.log("get by ID successful");
			});
		});
	};
	this.create = function(jadwal_kelas,res) {
		connection.acquire(function(err,con) {
			con.query('insert into matakuliah set ?', jadwal_kelas, function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, message:'matakuliah creation fail'});
				} else {
					res.send({status:0, message:'matakuliah creation succes'});
					console.log("Post Succesful");
				}
			});
		});
	};
	this.update = function(jadwal_kelas,id,res) {
		connection.acquire(function(err,con) {
			con.query('UPDATE kelas SET matakuliah = ?, jam = ? WHERE id_MK = ?', [jadwal_kelas, id], function(err,result) {
				con.release();
				if(err) {
					res.send({status:1, message:'matakuliah update fail'});
				}else{
					res.send({status:0, message:'matakuliah update succes'});
					console.log("Put successful");
				}
			});
		});
	};
	this.delete = function(id,res) {
		connection.acquire(function(err,con) {
			con.query('delete from matakuliah where id_MK = ?', id, function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, message:'matakuliah delete fail'})
				} else {
					res.send({status:0, message:'matakuliah delete succes'});
					console.log("delete successful");
				}
			});
		});
	};
	this.get = function(res) {
		connection.acquire(function(err,con) {
			con.query('select * from dosen', function(err,result) {
				con.release();
				res.send(result);
				console.log("get successful");
			});
		});
	};
	this.getByID = function(id,res) {
		connection.acquire(function(err,con) {
			con.query('select * from kelas where id_dosen = ?', id, function(err,result) {
				con.release();
				res.send(result);
				console.log("get by ID successful");
			});
		});
	};
	this.create = function(jadwal_kelas,res) {
		connection.acquire(function(err,con) {
			con.query('insert into dosen set ?', jadwal_kelas, function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, message:'dosen creation fail'});
				} else {
					res.send({status:0, message:'dosen creation succes'});
					console.log("Post Succesful");
				}
			});
		});
	};
	this.update = function(jadwal_kelas,id,res) {
		connection.acquire(function(err,con) {
			con.query('UPDATE dosen SET dosen = ?, nama_dosen = ? WHERE id_dosen = ?', [jadwal_kelas, id], function(err,result) {
				con.release();
				if(err) {
					res.send({status:1, message:'dosen update fail'});
				}else{
					res.send({status:0, message:'dosen update succes'});
					console.log("Put successful");
				}
			});
		});
	};
	this.delete = function(id,res) {
		connection.acquire(function(err,con) {
			con.query('delete from dosen where id_dosen = ?', id, function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, message:'dosen delete fail'})
				} else {
					res.send({status:0, message:'dosen delete succes'});
					console.log("delete successful");
				}
			});
		});
	};
};
module.exports = new jadwal_kelas ();
