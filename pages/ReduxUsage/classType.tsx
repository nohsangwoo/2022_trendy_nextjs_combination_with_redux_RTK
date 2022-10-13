import { connect } from 'react-redux'
import { Component } from 'react'
// 여기에선 class 형식의 react component에서 redux를 사용하는 방법을 보여준다.
// 또한 hoc의 개념을 알아본다.

interface StateProps {}

interface DispatchProps {}

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
    return (
      <>
        <div>count: 0</div>
        <button>increase</button>
        <button>decrease</button>
      </>
    )
  }
}

export default TestPageClass
