var express = require('express');
var router = express.Router();

/*
dnscmd <ServerName> /recorddelete <ZoneName> <NodeName> <RRType> <RRData>[/f]


<ServerName> 
	Specifies the DNS server to manage, represented by local computer syntax, 
	IP address, FQDN, or host name. If this parameter is omitted, the local server is used.
<ZoneName> 
	Specifies the zone in which the record resides.
<NodeName> 
	Specifies a specific node in the zone.
<RRType> 
	Specifies the type of record to be added.
<RRData> 
	Specifies the type of data that is expected.

dnscmd /recorddelete test.contoso.com test MX 10 mailserver.test.contoso.com 


*/
router.get('/', function(req, res, next) {
	res.render('recorddelete', { title: 'recorddelete' });
});

router.post('/', function(req, res, next) {
	var cmd = "serverName /recorddelete zoneName nodeName rrType rrData /f",
		key;

	Object.keys(req.body).forEach(function(key) {
		cmd = cmd.replace(key, req.body[key]);
	});

	console.log(cmd);

	const exec = require('child_process').exec;
	const child = exec('dnscmd '+cmd, (error, stdout, stderr) => {
		var result_json = { stdout:"", stderr:"", error:""};

		result_json.error= error;
		result_json.stdout = stdout
		result_json.stderr = stderr;
		res.json(result_json);
	});
});		

module.exports = router;