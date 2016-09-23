var mongoose = require('mongoose');
var Schema = mongoose.Schema

var userSchema = new mongoose.Schema({
	name: {type: String, required: true, unique: true, minlength: 3},
	_topics: [{type: mongoose.Schema.Types.ObjectId, ref: 'topics'}],
    _answers: [{type: mongoose.Schema.Types.ObjectId, ref:'answers'}]
	}, {timestamps: true})

mongoose.model('users', userSchema);
