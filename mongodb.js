const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').updateOne( { 
    //     _id: new ObjectID("5fb18f9242a31c380cb359bc") 
    // }, { 
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch(() => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({}, { 
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch(() => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({ 
        description: 'Make cake'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


    // db.collection('users').findOne({ name: 'Jen', age: 1 }, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 22 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5fb1926d8eda7c22c834b8ef") }, (error, task) => {
    //     console.log(task)
    // })
    
    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').insertOne({
    //     name: 'Caio',
    //     age: 25
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Vitoria',
    //         age: 22
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }
        
    //    console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Make cake',
    //         completed: true
    //     }, {
    //         description: 'Solve cube',
    //         completed: true
    //     }, {
    //         description: 'Study',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert tasks')
    //     }
        
    //    console.log(result.ops)
    // })
    
})