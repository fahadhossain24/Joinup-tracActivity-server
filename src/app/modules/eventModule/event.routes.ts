import express from 'express';
import eventControllers from './event.controllers';

const eventRouter = express.Router();

eventRouter.post('/create', eventControllers.createNewEvent);
eventRouter.get('/volunteer/search', eventControllers.searchVolunteers);
eventRouter.get('/retrive/organizer/:id', eventControllers.retriveEventsByOrganizer);
eventRouter.delete('/delete/:id', eventControllers.deleteSpecificEvent);
eventRouter.patch('/deliver/:id', eventControllers.updateSpecificEvent);

export default eventRouter;