import express from 'express';
import bodyParser from 'body-parser';
import { AdminRoute ,VandorRoute } from './routes';
import mongoose from 'mongoose';
import { MONGO_URI } from './config';



const app = express ();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.use('/admin',AdminRoute);
app.use('/vandor',VandorRoute )
console.clear();

mongoose.connect(MONGO_URI).then(result => {
    console.log("deu bom ");
}).catch(err => console.log("error: " + err));

app.listen(8000, () => {
    console.log('App is listening on port 8000');
});