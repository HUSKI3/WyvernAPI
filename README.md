# WyvernAPI
> The API Docs for Wyvern

## How to connect?
Different languages have different ways to access it.
write up WIP

# User related

## Creating a user:
```js
 Create User rout
 enters:
 [GET]
 {username="username"}

 returns:
 [Json]
 [
  ID, 
  "USERNAME", 
  "WYVERNID", 
  "TOKEN", 
  "DATE", 
  "SERVERS", 
  "PLAN", 
  "PROFILE PICTURE",
  "EXTRAINFO"
 ]
```

# WyvernAPI related
---
## Get server time
```js
 Time route
 returns:
 [Json]
 {
    'dateTime':DATE AND TIME STRING,
    'requestIp':IPADDRESS,
 }
```
