import { Component } from 'react'

import {
  Wrapper,
  Box,
  Text
} from './'

class Talk extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showDetails: false
    }
    // This binding is necessary to make `this` work in the callback
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails () {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
    console.log('toggle');
  }

  // render ({

  //   ...props
  // }) => (
  render () {
    const {
      title,
      speaker,
      profilePicture,
      twitter,
      children,
      css = {}
    } = this.props
    return (
      <Box mb={5} css={{display: 'flex'}}>
        <Box is='img' src={profilePicture} css={{width: '20%', height: '20%', margin: '0.5em'}}/>
        <Box>
          <Text is='h2'
            fontSize={1}
            bold>
            {title}
          </Text>
          <Text is='h3'>{speaker} - <a href={`https://twitter.com/${twitter}`}>@{twitter}</a></Text>
          <Box is='a' onClick={this.toggleDetails}>{this.state.showDetails ? 'Less details >' : 'More details >'}</Box>
          <Box display={!this.state.showDetails && 'none'}>
            {children}
          </Box>
        </Box>
      </Box>
    )
  }
}

export default Talk
