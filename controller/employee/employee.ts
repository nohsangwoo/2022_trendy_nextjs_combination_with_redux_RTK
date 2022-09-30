import { excuteQuery } from '@config/db'
import { executeQueryWithConnect } from '@database/database'

export const getAllEmployees = async (req: any, res: any) => {
  // 첫번째 방법으로 데이터 가져오기 - 변경해야할 부분이 조금 많음...
  let result = await excuteQuery(
    'select * from videohelp_ts02_200610_A002.TUSER limit 10',
    [],
  )

  // 두번째 방법 - 기존 프로젝트에서 뽑아온 방법으로 가져오기
  const getLatestHistory = (email: string): string => {
    const query = `SELECT CATEGORY FROM videohelp.THISTORY WHERE HISTORYINFO LIKE "%${email}%" order by CDATETIME DESC limit 10;`
    return query
  }
  let result2 = await executeQueryWithConnect(getLatestHistory('nsgr12'))

  // console.log('result data: ', result)
  console.log('result data2: ', result)
  res.send(result)
}
