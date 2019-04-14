//todo mongoose server connection to mongodb

//todo db연결하는 부분 (route 설정 , 모델 설정)

const user = mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    email : {type: String , required: true},
    password : {type: String, required: true},
    name :{type: String, required:true},
})
module.exports = mongoose.model('User',user);