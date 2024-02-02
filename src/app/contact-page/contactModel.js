


import mongoose, { Schema, Model } from "mongoose";

const contactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, },
    message: { type: String }
});

const Contact= mongoose.model.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
