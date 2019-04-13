# fhictdigital


## BeterCodeHub
Reasons for excluding certain files/folders from bettercodehub by item:

**- server.js:** This is mostly a configuration of the server. For readability you want this to be longer then the standard given by BetterCodeHub (15 lines). Ofcourse you can chain a lot of code after eachother just to 'trick' the system but this would IMO be a no go.

**- sequalize.js:** This is mostly a configuration of the ORM. For readability you want this to be longer then the standard given by BetterCodeHub (15 lines). Ofcourse you can chain a lot of code after eachother just to 'trick' the system but this would IMO be a no go.

**- /exports/validators:** The way this validation works is by receiving the resolution, the request and a next function (3 parameters). BetterCodeHub does not like this and there is no way to configure this rule. That is why I have excluded this folder. This might not be good practive but I have not found a better and cleaner way..
  
