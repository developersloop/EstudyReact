import express from 'express';
const app = express();


app.addListener(3001,() =>{
      console.log('run in port 3001');
})