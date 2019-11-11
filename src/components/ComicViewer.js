import React, { Component} from "react";
import ComicsService from '../services/ComicsService';

import InfiniteScroller from './InfiniteScroller';

import '../styles/ComicViewer.css';

export default class ComicViewer extends Component {

  constructor( props ) {
    super( props );
    this.state = { 
      comics: []
    };
    this.loadComics = this.loadComics.bind( this );
  }

  loadComics() {
    ComicsService.getNextComics()
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ comics:  [...this.state.comics, ...result.data.results] });
        }
      );
  }

  render() {
    return (
      <InfiniteScroller onTrigger={this.loadComics}>
        <ul className="comics-catalog">
          {this.state.comics.map( (comic, i) => (
            <li className="comics-catalog__item" key={i}>
              <span className="comics-catalog__item-title">{comic.title}</span>
              <span className="comics-catalog__item-price">${comic.prices[0].price}</span>
              <img  className="comics-catalog__item-thumbnail" src={ comic.thumbnail.path + '.' + comic.thumbnail.extension } />
            </li>
          ))}
        </ul>
      </InfiniteScroller>
    );
  }
}