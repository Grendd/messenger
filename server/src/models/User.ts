import mongoose from 'mongoose';

const {Types} = mongoose;

const userSchema = new mongoose.Schema({
  email: {type:String, required: true, unique: true},
  password: {type:String, required: true, unique: true},
  chats: [{ type: Types.ObjectId, ref: 'Chat' }]
})

export default mongoose.model('User', userSchema);