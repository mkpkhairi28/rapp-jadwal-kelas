var jadwal_kelas = require('../models/jadwal kelas');

module.exports = {
	configure: function(app) {
		app.get('/jadwal kelas', function(req,res) {
			jadwal_kelas.get(res);
		});
		app.get('/jadwal kelas/:id',function(req,res) {
			jadwal_kelas.getByID(req.params.id,res);
		});
		app.post('/jadwal kelas',function(req,res) {
			jadwal_kelas.create(req.body,res);
		});
		app.put('/jadwal kelas/:id',function(req,res) {
			jadwal_kelas.update(req.body.judul,req.params.id,res);
		});
		app.delete('/jadwal kelas/:id',function(req,res) {
			jadwal_kelas.delete(req.params.id,res);
		});
	}
};