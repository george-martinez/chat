import express from 'express';
import path from 'path'
const app = express()

/* 
import { dirname } from 'path';
import { fileURLToPath } from 'url'; 
const currentDirectory = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(currentDirectory, 'public')));
*/

app.use(express.static(path.join(__dirname, 'public')))


export default app