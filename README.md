# Users
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
