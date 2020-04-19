import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    title: mongoose.Schema.Types.String,
    content: mongoose.Schema.Types.Mixed,
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now }
});

const article = mongoose.model('article', articleSchema);

export default article;
