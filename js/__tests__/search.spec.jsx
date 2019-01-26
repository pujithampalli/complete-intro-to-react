import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../store";
import preload from "../../data.json";
import Search, { Unwrapped as UnwrappedSearch } from "../Search";
import ShowCard from "../ShowCard";
import { setSearchTerm } from "../actionCreators";

test("Search renders correctly", () => {
  const component = shallow(
    <UnwrappedSearch shows={preload.shows} searchTerm="" />
  );
  expect(component).toMatchSnapshot();
});

test("search should render correct amount of show", () => {
  const component = shallow(
    <UnwrappedSearch shows={preload.shows} searchTerm="" />
  );
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test("search should render correct amount of shows based on search term with out redux", () => {
  const searchWord = "black";
  const component = shallow(
    <UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />
  );
  // component.find("input").simulate("change", { target: { value: searchWord } });
  const showCount = preload.shows.filter(
    show =>
      `${show.description} ${show.title}`
        .toUpperCase()
        .indexOf(searchWord.toUpperCase()) >= 0
  );
  expect(component.find(ShowCard).length).toEqual(showCount.length);
});

test("search should render correct amount of shows based on search term with redux", () => {
  const searchWord = "black";
  store.dispatch(setSearchTerm(searchWord));
  const component = render(
    <Provider store={store}>
      <MemoryRouter>
        <Search shows={preload.shows} searchTerm={searchWord} />
      </MemoryRouter>
    </Provider>
  );
  // component.find("input").simulate("change", { target: { value: searchWord } });
  const showCount = preload.shows.filter(
    show =>
      `${show.description} ${show.title}`
        .toUpperCase()
        .indexOf(searchWord.toUpperCase()) >= 0
  );
  expect(component.find(".show-card").length).toEqual(showCount.length);
});
