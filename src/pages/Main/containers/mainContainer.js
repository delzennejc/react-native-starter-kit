import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../reducks/main.creators'
import Main from '../../../components/Main'

const mapStateToProps = state => ({
  initialized: state.app.initialized
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Main)