import * as http from 'http';

const server = http.createServer();
server.listen(3000,()=>{
   console.log('Server is Running: http://localhost:3000')
})
