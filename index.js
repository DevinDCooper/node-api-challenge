const app = require('./server.js')

const port = 4000;



const PORT = 4000;
app.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
