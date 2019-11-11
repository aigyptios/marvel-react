import React, { Component} from "react";

export default class InfiniteScroller extends Component {

  componentDidMount() {
    /* source: https://medium.com/walmartlabs/lazy-loading-images-intersectionobserver-8c5bff730920 */
    let observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => { entry.isIntersecting ? this.props.onTrigger() : undefined ; })
      },
      {
        rootMargin: "0px 0px 500px 0px"
      }
    );
    observer.observe( this.bottomAnchor );
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <div className="loading-indicator" ref={ el => this.bottomAnchor = el } ></div>
      </React.Fragment>
    );
  }
}