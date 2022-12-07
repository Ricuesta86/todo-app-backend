import express,{Request, Response} from 'express';
import fs from 'fs'
import path from 'path';
import cors from 'cors';
import data from './data.json'


const app = express();
const port = process.env.PORT || '8000';

app.use(cors());


app.get('/', ( req:Request,res:Response)=>{
    const hola = fs.readFileSync('./data.json')
    res.json({"hola":"hola mundo"})
})

app.post('/',(req:Request, res:Response)=>{
  fs.writeFileSync('data.json', JSON.stringify({hola:'ricuesta'}))
    res.json({msg:"Succers"})
})

app.listen(port,() => {
  return console.log(`Server is listening on ${port}`);
});