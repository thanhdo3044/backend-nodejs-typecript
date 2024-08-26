import { Sequelize } from 'sequelize-typescript'
import { dbConfigDev, dbConfigProd } from './config'

interface SequelizeConfig {
  database: string
  username: string
  password: string
  options: {
    host: string
    port: number
    dialect: string
    dialectOptions?: {
      ssl?: boolean
    }
    // logging?: (msg: string) => void
  }
}

const env = process.env.NODE_ENV || 'development'
let config: SequelizeConfig

if (env === 'development') {
  config = {
    database: dbConfigDev.dataBaseName,
    username: dbConfigDev.userName,
    password: dbConfigDev.passWord,
    options: {
      host: dbConfigDev.host,
      port: dbConfigDev.port,
      dialect: dbConfigDev.dialect,
      dialectOptions: dbConfigDev.dialectOptions,
      // logging: (msg) => logInfoToFile(msg)
    }
  }
} else {
  config = {
    database: dbConfigProd.dataBaseName,
    username: dbConfigProd.userName,
    password: dbConfigProd.passWord,
    options: {
      host: dbConfigProd.host,
      port: dbConfigProd.port,
      dialect: dbConfigProd.dialect,
      dialectOptions: dbConfigProd.dialectOptions,
      // logging: (msg) => logInfoToFile(msg)
    }
  }
}

const sequelize = new Sequelize(config.database, config.username, config.password, {
  ...config.options,
  dialect: 'postgres',
  dialectOptions: config.options.dialectOptions,
  // logging: (msg) => logInfoToFile(msg)
  models: [__dirname + '/models/*.ts']
})
export default sequelize
