# WyvernAPI
> The API Docs for Wyvern

## How to connect?
Different languages have different ways to access it.
write up WIP

# User related
---
## Creating a user:
```js
 /api/createuser
 Create User route
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
---
## Get a user:
```js
 /api/getuser
 Get User route
 enters:
 [GET]
 {token="token"}

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
---
## Get user info
```js
 /api/getuserinfo
 Get User Info route
 enters:
 [GET]
 {wyvernid="wyvernid"}

 returns:
 [Json]
 [
  ID,
  "USERNAME",
  "WYVERNID",
  "DATE",
  "PLAN",
  "PROFILE PICTURE",
 ]
```
# WyvernAPI related
---
## Get server time
```js
 /api/servertime
 Time route
 returns:
 [Json]
 {
    'dateTime':DATE AND TIME STRING,
    'requestIp':IPADDRESS,
 }
```
