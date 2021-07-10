# Authentication
### /api/auth/register
> requires: token, email, username

returns: (example)
```json
{
    "status":"success"
}
```
# Server
## /api/chat {join} 
> This a socket.io event: join
> (Must be used on each "login")
> requires: token

# User data
### /api/user
> requires: user ID

returns: (example)
```json
{
  "id": 0,
  "tag": 0, 
  "username": "test", 
  "joined": "01/07/2021 13:25:43"
}
```
### /api/real_user
> requires: token

returns: (example)
```json
{
    "id": 1, 
    "tag": 0, 
    "username": "link", 
    "joined": "01/07/2021 13:25:43", 
    "email": "banana@test.org", 
    "status": None, 
    "activity": None, 
    "pfp": None, 
    "friends": "2,3,7", 
    "serves": "4753487524785,23405985483290,05943859289", 
    "subscription": None, 
    "badges": None
}
```
> If you want to store a list, it must be plain text with comma seperated values

# Messaging

### /api/chat
>requires: token, serverid, content, type

request arguments: (example)
```json
{
  "token": 1234567890,
  "serverid": 1234567890, 
  "content": "hey", 
  "type": "text"
}
```
returns: (example)
```json
{
  "messageid":123,
  "status":"sent" // sent or failed
}
```
Content types:
|type|use case|
| --- | --- |
| text | plain text, may contain links |
|img|contains raw image data|
|media|contains external media link|
|embed|contains special wyvern styling|

## /api/history
> requires: token, serverid, channelid
