# Pocketsync

Pocketsync is a tool used for synchronising the schemas of different [pocketbase](https://github.com/pocketbase/pocketbase) instances.

<br>

## Example:
You have a Pocketbase instance in prod and can't do development on that exact instance, then you could have a local instance of pocketbase to do development on and synchronise them when you're done. 

You should probably use a Github action or other Devops tool to do this

<br>

## Usage:
Pocketsync takes in 6 arguments, The email and password (for authorization) of both instances, and the url of both instances.

```ts
pocketSync({
    email1@gmail.com, 
    email2@gmail.com, 
    password1, 
    password2, 
    url1, 
    url2
})
```