import { connect } from 'react-redux'
import { Component } from 'react'
import { RootState, wrapper } from '@src/store/store'
import counterSlice from '@src/store/reducers/counterSlice.saga'
import { GetServerSideProps } from 'next'
// 여기에선 class 형식의 react component에서 redux를 사용하는 방법을 보여준다.
// 또한 hoc의 개념을 알아본다.

interface StateProps {
  num: number
  noti: number
}

interface DispatchProps {
  increaseNumber: (payload: number) => void
  decreaseNumber: (payload: number) => void
}

interface State {}

type Props = StateProps & DispatchProps

class TestPageClass extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  componentDidUpdate(prevProps: Props, prevState: State) {}

  componentWillUnmount() {}

  render() {
    console.log('state num: ', this.props.num)
    console.log('state noti ', this.props.noti)
    return (
      <>
        <div>count: {this.props.num}</div>
        <button onClick={() => this.props.increaseNumber(1)}>increase</button>
        <button onClick={() => this.props.decreaseNumber(1)}>decrease</button>
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  num: state.counter.number,
  noti: state.counter.noticount,
})
const mapDispatchToProps = (dispatch: any) => ({
  increaseNumber: (payload: number) =>
    dispatch(counterSlice.actions.increase(payload)),
  decreaseNumber: (payload: number) =>
    dispatch(counterSlice.actions.decrease(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TestPageClass)

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async () => {
    store.dispatch(counterSlice.actions.increase(1))
    console.log('State on server counter', store.getState().counter)

    return {
      props: {},
    }
  })
