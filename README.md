# Oh?
This is [pendragonscode.xyz](https://pendragonscode.xyz), the site that acts as my personal site! I made this for fun, and to also help achieve a basic online precense!

# Setup
```
git clone https://github.com/pendragons-code/Personal-Site
cd Personal-Site
npm i
node .
```
# Minor bug:
I cannot write any code right now, so I will describe it, upon running the app for the first time without any data, the app would sometimes crash if the database and weather daemon (I think this is the right word.) cannot execute fast enough.      
Fix 1, delay the require webserver.          
Fix 2:
```
Run a check if the data entry from the database is null
    if it is null, proceed with executing get weather from the weather.js loader/daemon
        after that execute accordingly
    not null, proceed as usual
```

# load-balancing
Will work on redirecting to alt links.          
Will prompt users to use mirror servers.        
E.g: on the nav bar I could add another button that gives a dropdown menu of urls by country. India: india.pendragonscode.xyz
