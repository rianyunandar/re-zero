const mongoose = require ( 'mongoose')
const dotenv = require ( 'dotenv')
const colors = require ( 'colors')
const users = require ( './datas/users.js')
const categories = require ( './datas/Categories.js')
const User = require ( './models/modelUser.js')
const Category = require ( './models/modelCategory.js')
const connectDB = require ( './config/database.js')

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await Category.deleteMany()

    await User.insertMany(users)
    await Category.insertMany(categories)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
