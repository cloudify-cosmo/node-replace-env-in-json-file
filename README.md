# node-replace-env-in-json-file
node module that simply replaces placeholders with environment variables values into a json file


# example

given config.json file

```json
{
  "ssh" : {
    "key" : "__key__",
    "username" : "__username__"
  }
}
```

running the following 

```bash
export __key__="/tmp/file_location.pem"
export __username__="ubuntu"
node inject.js config.json
```

will result in config.json content replaced with

```json
{
  "ssh" : {
    "key" : "/tmp/file_location.pem",
    "username" : "ubuntu"
  }
}
```


