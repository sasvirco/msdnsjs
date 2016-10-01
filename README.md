# msdnsjs
A simple rest api wrapper for dnscmd /recordadd and /recorddelete command with ssl and authentication support

#Install
First install nodejs. Than either clone the repo or download the zip file and unpack.
```
git clone https://github.com/sasvirco/msdnsjs.git

```
# Configure
## Generate self-signed certificates
The app comes with self-signed certificates. To generate your own certificates run
```
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout msdnsjs-key.pem -out msdnsjs-cert.pem
```
## Create new username and password
To create new username and password use the htpasswd utility 

```
$ cd config/
$ ../node_modules/htpasswd/bin/htpasswd -c passwd user
New password: password
Re-type new password: password
Adding password for user user.
$
```
## Configure application ports, keys and passwd file
The following parameters can be changed trough configuration:

* httpPort - defaults to 3000
* httpsPort - defaults to 3001
* privateKey - defalts to sslcerts/msdnsjs-key.pem
* certificate - defaults to "sslcerts/msdnsjs-cert.pem"
* passwdFile - defaults to config/passwd

Configuration is done via the node-config so all node-config rules apply - you can have multiple configuration files for different environments, use yaml, properties or other formats etc.

Example:

```json
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
#Run
You can run the app manually from the cmd line.
```
cd c:\msdnsjs
node app.js
```
Or if you want to make a windows service out of it you can use http://nssm.cc/usage.
Make sure you run the app with the user that is allowed to run the dnscmd command and add domain entries.

#Usage
Go to https://youripaddress:3001/recordadd or https://youripaddress:3001/recorddelete with a browser and see the help file provided.
