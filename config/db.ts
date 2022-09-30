import { createPool } from 'mysql2'

export const pool = createPool({
  host: 'localhost', // videohelpme TEST DB
  user: 'super',
  password: 'root',
  port: 3308,
  database: '',
})

pool.getConnection(err => {
  if (err) {
    console.error('getConnection error :: ', err)
  }
  console.log('Connected to DB...')
})

export const excuteQuery = (query: string, arrParams: any) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arrParams, (err, data) => {
        if (err) {
          console.error('error in executing the query')
          reject(err)
        }
        resolve(data)
      })
    } catch (err) {
      reject(err)
    }
  })
}

export default {}
