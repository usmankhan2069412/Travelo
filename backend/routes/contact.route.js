import express from 'express';
import { ContactData, ShowContactData, UpdateContactData, DeleteContactData } from '../Controller/contact.controller.js'

const route = express.Router();

route.post('/', ContactData);                 // Create contact
route.get('/', ShowContactData);               // Get all contacts
route.put('/:id', UpdateContactData);          // Update specific contact by ID
route.delete('/:id', DeleteContactData);       // Delete specific contact by ID

export default route;
