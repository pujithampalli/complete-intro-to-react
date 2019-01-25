import React, { Component } from "react";
import preload from "../data.json";
import ShowCards from "./ShowCard";

class Search extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       searchTerm: "this is some sort of debug statement"
  //     };
  //     this.state.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  //   }
  state = {
    searchTerm: ""
  };
  handleSearchTermChange = event => {
    // debugger;
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
        <header>
          <h1>{this.state.searchTerm}</h1>
          <input
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.description} ${show.title}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCards key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
