import 'dotenv/config';
import express from 'express';
import consign from 'consign';
import BullBoard from 'bull-board';
import Queue from './lib/Queue';

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));


const app = express();
app.use(express.json());
consign().include('routes').into(app);
app.use('/admin/queues', BullBoard.UI);
app.listen(5400, () => {
    console.log("Server is running");
});