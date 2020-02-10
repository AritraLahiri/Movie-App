const express    = require('express'),
      app        = express(),
      flash      = require('connect-flash'),
      bodyParser = require('body-parser');
      
// Requiring Routes
const index      = require('./routes/index'),
      result     = require('./routes/result'),
      show       = require('./routes/show');
      
   
      

//App Config
app.set("view engine", ".ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + "/public"));
app.use(flash());
app.use(index);
app.use(result);
app.use(show);



// Server 
app.listen(process.env.PORT || 3000);