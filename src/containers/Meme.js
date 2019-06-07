import React, { PureComponent } from 'react';
import DisplayView from '../components/UserView';
import TextPicker from '../components/TextComponent';
import ImagePicker from '../components/ImageComponent';

export default class Meme extends PureComponent {
  state = {
    topText: '',
    image: '',
    bottomText: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { topText, bottomText, image } = this.state;

    return (
      <>
        <DisplayView topText={topText} bottomText={bottomText} image={image} handleChange={this.handleChange}/>
        <ImagePicker image={image} handleChange={this.handleChange} />
        <TextPicker topText={topText} bottomText={bottomText} handleChange={this.handleChange}/>
      </>
    );
  }
}
