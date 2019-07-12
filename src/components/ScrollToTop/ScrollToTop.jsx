import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      document.body.style.scrollBehavior = "auto";
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.body.style.scrollBehavior = "smooth";
      });
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
