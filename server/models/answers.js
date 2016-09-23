var mongoose = require('mongoose');

var answerSchema = new mongoose.Schema({
    message: {type: String, required: true, minlength: 5},
    supporting: String,
    likes: {type: Number},
    _topic: {type: mongoose.Schema.Types.ObjectId, ref:'topics'},
    _user: {type: mongoose.Schema.Types.ObjectId, ref:'users', required: true},
    _comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'comments'}]
	}, {timestamps: true})

mongoose.model('answers', answerSchema);
