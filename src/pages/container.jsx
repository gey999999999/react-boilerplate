import React, { Component } from "react";
import propTypes from "prop-types";
import Loading from "components/loading";
import splits from "./splits";
import ReactLoadable from "react-loadable";
import { observer } from "mobx-react";

let
  container_ensure_src_cache,
  container_ensure_component_cache;

const ensure = (src, loading = Loading) => {
  if (container_ensure_src_cache === src) {
    return container_ensure_component_cache;
  }
  container_ensure_src_cache = src;
  container_ensure_component_cache = splits[src] ? splits[src](Loading) : ReactLoadable({
    loader: () => import(`../pages/${src}`),
    loading: Loading
  });

  return container_ensure_component_cache;
};
@observer
class Container extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    match: propTypes.object,
    history: propTypes.object
  };

  render() {
    const
      {
        match,
        match: {
          params: { name }
        },
        history,
      } = this.props,
      Components = ensure(name);
    return (
      <div data-role="container">
        <Components match={match} />
      </div>
    );
  }
}

export default Container;
