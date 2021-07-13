# JQ on string with escapes
```
jq '.c | fromjson' <<< '{
  "a" : 1,
  "b" : 2,
  "c" : "{\"id\":\"9ee ...\",\"parent\":\"abc...\"}\n"
}'

{
  "id": "9ee ...",
  "parent": "abc..."
}
```