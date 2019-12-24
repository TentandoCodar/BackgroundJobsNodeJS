import 'dotenv/config';
import express from 'express';
import consign from 'consign';

const app = express();
app.use(express.json());
consign().include('routes').into(app);

app.listen(5400, () => {
    console.log("Server is running");
});