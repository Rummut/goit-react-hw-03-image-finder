import { Component } from 'react';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './image-gallery/ImageGallery';
import { Button } from './button/Button';
import { AppStyled } from './App.styled';
import { FetchImages } from './api-request/Api-requst';
import { RotatingLines } from 'react-loader-spinner';


export class App extends Component {
  state = {
    values: '',
    images: [],
    page: 1,
    isLoading: false,
    total: 0,
  };
  changeValues = newValues => {
    this.setState({
      values: newValues,
      images: [],
      page: 1,
    });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.values !== this.state.values ||
      this.state.page !== prevState.page
    ) {
      try {
        this.setState({ isLoading: true });
        const { hits, total } = await FetchImages({
          page: this.state.page,
          values: this.state.values,
        });
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          total: total,
          isLoading: false,
        }));
      } catch (error) {
        console.log('error');
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { values, page, images, isLoading, total } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.changeValues} />
        <main>
          <ImageGallery imageState={images} />
          {isLoading ? (
            <RotatingLines
              strokeColor="blue"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          ) : (
            images.length > 0 & images.length < total && <Button onClick={this.handleLoadMore} />
          )}
        </main>
      </AppStyled>
    );
  }
}
