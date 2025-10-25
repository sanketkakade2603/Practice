import mongoose from 'mongoose'

export const DBconnect = async() =>{

    try {

    mongoose.connect('mongodb://localhost:27017/myapp')
    console.log('✅ Database connect sucessfully.')
        
    } catch (error) {

        console.log('❌ Database connection failed', error.message)
    }
    
}