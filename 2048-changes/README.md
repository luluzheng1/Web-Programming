# 2048 Game Center 

A Web application with a game server and a database that stores users' 
information.

The web application uses Heroku, Node.js with the Express web framework, and
MongoDB. A database maintains final scores and grids for all users playing
this 2048 game.

## Run
```bash
$ node index.js
```

### What has been implemented correctly? 
I believe that most aspects of the work have been correctly implemented. One
aspect that is currently lacking is the styling of the 2048 Game Center page. 
Another aspect that was not implemented was a popup with top 10 highest scores 
ever who have played my modified version of 2048 on the client side. All other 
features seem to me to be working properly.

The API has been implemented with `/submit.json`, `/scores.json`, and `/` 
routes. 

### Modifications made to the 2048 game
- game_manager.js has been modified to take in an input as the user's 
  username. AJAX sends the user's username, score, grid to the
  game server using JQuery. The data will be included in the Mongo database. 
- 2048.html has been modified to give credit to the official 2048 web
  application. The notes have been modified to specify this web application
  on Heroku is NOT the official site. 

### Collaboration

I have collaborated with two students in COMP20, Esther and Yishu, in the form 
of discussion. I would like to thank Yishu for sharing her insights about how
AJAX work to connect the client side to the server side, and for explaining 
how data is transmitted through JQuery using AJAX. I have also received some
help from several TAs. Lastly, I referenced documentation of Node.js, MongoDB,
Express and seeked help from a plentiful of StackOverflow posts. 

## Time
I have spent approximately 15 hours completing the assignment. 2 hours
were spent setting up basic dependencies, production environments, and folder
structure. 3 hours were spent researching and understanding how client side
and server side communicate through JQuery, XMLHTTPRequest, and Express.
Around 2 hours was spent setting up Heroku and MongoDB. 6 hours was spent
writing code in index.js and modifying inherited code in game_manager.js. 
The remaining hours were mostly spent fixing minor bugs and making tweeks. 
