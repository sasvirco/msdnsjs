var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	
  	const execFile = require('child_process').execFile;
	const child = execFile('ps', ['--version'], (error, stdout, stderr) => {
		var result_json = { stdout:"", stderr:"", error:""};
  		if (error) {
	   		throw error;
  		}
  		console.log(stdout);
		if (stdout) {
			result_json.stdout = stdout
			res.send(JSON.stringify(result_json, null, 4));
		} else {
			result_json.error = error;
			res.send(JSON.stringify(result_json, null, 4));
		}
	});
});

router.post('/', function(req, res, next) {
	res.send(req.body);
});		

module.exports = router;