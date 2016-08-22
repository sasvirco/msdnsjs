var express = require('express');
var router = express.Router();

/*
dnscmd [<ServerName>] /recordadd <ZoneName> <NodeName> <RRType> <RRData>


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

dnscmd dnssvr1.contoso.com /recordadd test A 10.0.0.5
dnscmd /recordadd test.contoso.com test MX 10 mailserver.test.contoso.com 


*/
router.get('/', function(req, res, next) {
	res.render('recordadd', { title: 'recordadd' });
});

router.post('/', function(req, res, next) {
	var cmd = "serverName /recordadd zoneName nodeName rrType rrData",
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