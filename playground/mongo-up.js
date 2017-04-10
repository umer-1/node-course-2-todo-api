const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connet Mong server');
    }
    console.log('Connected to MongoDB server');
   
db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58dc72349c56fb293095e995')
}, {
    $set: {
        name: 'Umer Farooq'
}, 
$inc: {
        age: 1
}
}, 
{
    returnoriginal: false
}). then((result)=>{
    console.log(result);
});

    //db.close();
});