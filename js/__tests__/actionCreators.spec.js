import { setSearchTerm, addAPIData } from "../actionCreators";

test("setSearchTerm", () => {
  expect(setSearchTerm("black")).toMatchSnapshot();
});

test("addAPIData", () => {
  expect(
    addAPIData({
      tt2085059: {
        rating: "0.0",
        title: "Black Mirror",
        year: "2011–",
        description: "A television anthology series that shows the dark side of life and technology.",
        poster: "bm.jpg",
        imdbID: "tt2085059",
        trailer: "jDiYGjp5iFg"
      }
    })
  ).toMatchSnapshot();
});
