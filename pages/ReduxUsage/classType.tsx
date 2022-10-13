import { connect } from 'react-redux'
import { Component } from 'react'
import { RootState } from '@src/store/store'
import counterSlice from '@src/store/reducers/counterSlice'
// 여기에선 class 형식의 react component에서 redux를 사용하는 방법을 보여준다.
// 또한 hoc의 개념을 알아본다.

interface StateProps {
  count: number
}

interface DispatchProps {
  increaseNumber: (payload: number) => void
  decreaseNumber: (payload: number) => void
}
type ownProps = {}

type Props = StateProps & DispatchProps & ownProps

interface ownState {}

class TestPageClass extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  componentDidUpdate(prevProps: Props, prevState: ownState) {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <div>count: {this.props.count}</div>
        <button onClick={() => this.props.increaseNumber(1)}>increase</button>
        <button onClick={() => this.props.decreaseNumber(1)}>decrease</button>
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  count: state.counter.number,
})
const mapDispatchToProps = (dispatch: any) => ({
  increaseNumber: (payload: number) =>
    dispatch(counterSlice.actions.basicIncrease(payload)),
  decreaseNumber: (payload: number) =>
    dispatch(counterSlice.actions.basicDecrease(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TestPageClass)
