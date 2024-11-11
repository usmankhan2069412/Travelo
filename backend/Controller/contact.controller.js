import Contact from '../models/contactmodel.js';

// For creating data
export const ContactData = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const result = await newContact.save(); // Remove redundant save
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
};

// For reading/printing data
export const ShowContactData = async (req, res) => {
    try {
        const showContact = await Contact.find({});
        res.json(showContact);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' }); // Fix status code
    }
};

// For updating data
export const UpdateContactData = async (req, res) => {
    try {
        const updateContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateContact) {
            return res.status(404).json({ message: 'Contact not found' }); // Handle not found
        }
        res.status(200).json(updateContact); // Return updated contact
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
// For deleting data
export const DeleteContactData = async (req, res) => {
    try {
        const deleteContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deleteContact) {
            return res.status(404).json({ message: 'Contact not found' }); // Handle not found
        }
        res.json(deleteContact);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

