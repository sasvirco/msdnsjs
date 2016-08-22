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
