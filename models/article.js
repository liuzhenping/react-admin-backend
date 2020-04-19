import mongoose from 'mongoose';

const ArticleSchema = mongoose.Schema({
    title: mongoose.Schema.Types.String,
    content: mongoose.Schema.Types.Mixed,
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now }
});

const Article = mongoose.model('article', ArticleSchema);

export default Article;
