import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { OptionsView } from 'Views/Options/options'
import { setupActions } from './options.state'

class Options extends React.Component {
  render() {
    return (
      <OptionsView {...this.props}/>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(setupActions, dispatch)
}

function mapStateToProps(state) {
  return {}
}

const OptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Options)

export default OptionsContainer;