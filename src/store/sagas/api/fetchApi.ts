import fetchSlice from '@src/store/reducers/fetchSlice'
import axios from 'axios'
import ReduxStore from '@src/store/store'

/**
 * 로그를 남기는 fetching api입니다. 
 * @param url 펫칭할 url
 * @param where 팻칭이 실행되는 컴포넌트의 이름
 * @param return return 값은 없음.
 */
export const fetchApi = async <T extends string>(
  url: T,
  where: string | null = null,
): Promise<void> => {
  const { dispatch, getState } = ReduxStore

  if (!!where) {
    dispatch(fetchSlice.actions.setWhere(where))
    console.log(`${where} 에서 호출 됨`)
  } else {
    console.log('호출 위치를 알 수 없습니다.')
  }

  try {
    dispatch(fetchSlice.actions.setIsLoading(true)) // 로딩
    dispatch(fetchSlice.actions.setIsSuccess(false)) // 펫칭 성공 여부
    const { data } = await axios.get(url) //  fetching
    dispatch(fetchSlice.actions.setTodos(data)) // 데이터 가져옴

    dispatch(fetchSlice.actions.setIsSuccess(true)) // // 펫칭 성공!
  } catch (e: any) {
    if (Object.keys(e).includes('message'))
      dispatch(fetchSlice.actions.setError(e.message)) // 에러시 핸들링

    dispatch(fetchSlice.actions.setIsSuccess(false)) // 펫칭 실패...
  } finally {
    dispatch(fetchSlice.actions.setIsLoading(false)) // 펫칭 성공을 했던 실패를 했던 로딩 끝
  }
}
