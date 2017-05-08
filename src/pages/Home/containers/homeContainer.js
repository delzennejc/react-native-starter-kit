import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../reducks/home.creators'
import Home from '../../../components/Home'

const mapStateToProps = state => ({
  users: state.home.users
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)