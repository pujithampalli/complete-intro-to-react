// @flow
import React from "react";
import { connect } from "react-redux";
import ShowCards from "./ShowCard";
import Header from "./Header";

const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: Array<Show>
}) => (
  <div className="search">
    {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
    <Header showSearch />
    <div>
      {props.shows
        .filter(
          show =>
            `${show.description} ${show.title}`
              .toUpperCase()
              .indexOf(props.searchTerm.toUpperCase()) >= 0
        )
        .map(show => <ShowCards key={show.imdbID} {...show} />)}
    </div>
  </div>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);
