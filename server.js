// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');

const app = express();

// Production configuration
if (process.env.NODE_ENV === 'production') {
   // Express will serve up production assets
   // like our main.js file, or main.css file
   app.use(express.static('client/build'));

   // Express will serve up index.html file
   // if it doesn't recognize the route
   // eslint-disable-next-line @typescript-eslint/no-var-requires
   const path = require('path')
   app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
