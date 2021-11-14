const mongoose = require("mongoose");

//post model
const jobSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    // image: {
    //     type: File,
    //     required: false
    // },
    external: {
        type: String,
        required: true
    },
    publication_data: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
     level: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: false
    },
    company: {
        type: Object,
        required: false
    },

}, {
    versionKey: false,
    timestamps: true,
});

const job = mongoose.model("job", jobSchema);

module.exports = job;