# Create new username and password
To create new username and password use the htpasswd utility 

```
$ cd config/
$ ../node_modules/htpasswd/bin/htpasswd -c passwd user
New password: password
Re-type new password: password
Adding password for user user.
$
```
# Configuration
The following parameters can be changed trough configuration:
* httpPort - defaults to 3000
* httpsPort - defaults to 3001
* privateKey - defalts to sslcerts/msdnsjs-key.pem
* certificate - defaults to "sslcerts/msdnsjs-cert.pem"
* passwdFile - defaults to config/passwd

Configuration is done via the node-config so all node-config rules apply - you can have multiple configuration files for different environments, use yaml, properties or other formats etc.

Example:

```
{
	"general" : {
		"httpPort" : 3000,
		"httpsPort": 3001,
		"privateKey" : "sslcerts/msdnsjs-key.pem",
		"certificate" : "sslcerts/msdnsjs-cert.pem",
		"passwdFile" : "config/passwd"
	}
}
```