var mongoose = require('mongoose');
// var Schema = mongoose.Schema

var topicSchema = new mongoose.Schema({
	title: {type: String, required: true, minlength: 10},
    description: String,
    _answers: [{type: mongoose.Schema.Types.ObjectId, ref:'answers'}],
    _user: {type: mongoose.Schema.Types.ObjectId, ref:'users', required: true}
	}, {timestamps: true})

mongoose.model('topics', topicSchema);
