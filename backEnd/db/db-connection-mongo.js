const mongoose = require('mongoose');

const getConnection = async () => {

try{

    const url = 'mongodb://lucasalvarez:lucas741@ac-sjxsxcy-shard-00-00.rgay7fu.mongodb.net:27017,ac-sjxsxcy-shard-00-01.rgay7fu.mongodb.net:27017,ac-sjxsxcy-shard-00-02.rgay7fu.mongodb.net:27017/inventarios-backend?ssl=true&replicaSet=atlas-m6pf6s-shard-0&authSource=admin&retryWrites=true&w=majority';
    await mongoose.connect(url); 

    console.log('conexion mongo exitosa');

} catch (error){
    console.log(error);
}

}

module.exports = {
    getConnection,
}