const {Schema, model} = require('mongoose')

const userSchema = Schema({
    email:{ 
        type: String,
        required: true,
        unique: true, 
    },
    pw: {
        type: String, 
        required: true, 
    }, 
    edad:{
        type: String,
        required: true
    }, 
    nombre:{
        type: String,
        required: true
    },
    nacionalidad:{
        type: String,
        required: true,
    }, 
    tipoDeDocumento: {
        type: String,
        required: true
    },
    documentoDeIdentidad:{
        type: String,
        required: true
    }, 
    numeroDeContacto:{
        type: String, 
        required:true
    },
    rol: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'UserRol',
        required: true,
    }
});

module.exports = model('Users', userSchema)

