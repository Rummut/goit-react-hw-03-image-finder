import { Component } from 'react';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './image-gallery/ImageGallery';
import { Button } from './button/Button';
import { AppStyled } from './App.styled';
import { fetchImages } from './api-request/Api-requst';

export class App extends Component {
  state = {
    values: '',
    images: {},
    page: 1,
  };

  changeValues = newValues => {
    this.setState({
      values: `${Date.now()} /${newValues}`,
      images: {},
      page: 1,
    });
  };

  async componentDidUpdate(prevState, prevProps) {
    if (
      prevState.values !== this.state.values ||
      this.state.values !== prevState.values
    ) {
      try {
        const images = await fetchImages();
        console.log(images)
        this.setState({ images});
      } catch (error) {
        console.log('error');
      }
    }
  }

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.changeValues} />
        <main>
          <ImageGallery imageState={this.componentDidUpdate} />
          <Button />
        </main>
      </AppStyled>
    );
  }
}
