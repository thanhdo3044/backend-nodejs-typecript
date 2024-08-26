import { Dialect } from 'sequelize'

interface DBDetails {
  userName: string
  passWord: string
  dataBaseName: string
  host: string
  port: number
  dialect: Dialect
  dialectOptions?: {
    ssl?: boolean
  }
}

const dbConfigDev: DBDetails = {
  userName: process.env.DB_USER_NAME_DEV!,
  passWord: process.env.DB_PASSWORD_DEV!,
  dataBaseName: process.env.DB_NAME_DEV!,
  host: process.env.DB_HOST_DEV! || '127.0.0.1',
  port: Number(process.env.DB_PORT_DEV!) || 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: false
  }
}

const dbConfigProd: DBDetails = {
  userName: process.env.DB_USER_NAME_PRO!,
  passWord: process.env.DB_PASSWORD_PRO!,
  dataBaseName: process.env.DB_NAME_PRO!,
  host: process.env.DB_HOST_PRO! || '127.0.0.1',
  port: Number(process.env.DB_PORT_PRO!) || 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: false
  }
}

export { dbConfigDev, dbConfigProd }
