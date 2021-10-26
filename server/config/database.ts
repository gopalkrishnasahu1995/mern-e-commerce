import logger from '../utils/Logger'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.DATABASE, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => {
        logger.info('database connected successfully')
      })
  } catch (error) {
    logger.error(`${error}`)
  }
}

export default connectDB
