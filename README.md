# fhictdigital


## BeterCodeHub
Reasons for excluding certain files/folders from bettercodehub by item:

**- server.js:** This is mostly a configuration of the server. For readability you want this to be longer then the standard given by BetterCodeHub (15 lines). Ofcourse you can chain a lot of code after eachother just to 'trick' the system but this would IMO be a no go.

**- sequalize.js:** This is mostly a configuration of the ORM. For readability you want this to be longer then the standard given by BetterCodeHub (15 lines). Ofcourse you can chain a lot of code after eachother just to 'trick' the system but this would IMO be a no go.

**- /exports/validators:** The way this validation works is by receiving the resolution, the request and a next function (3 parameters). BetterCodeHub does not like this and there is no way to configure this rule. That is why I have excluded this folder. This might not be good practive but I have not found a better and cleaner way.. (Yes I know this is calculated from a percentage of code having more then 2 parameters. The codebase is just to small I think)

**- /exports/data.js:** This is plain data consisting out of objects. This will 100% trigger the system on duplicates and to many code in units. Think everybody agrees dat data is not code :)
  
