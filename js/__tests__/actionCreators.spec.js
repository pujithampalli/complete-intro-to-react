// @flow
import moxios from "moxios";
import { setSearchTerm, addAPIData, getAPIDetails } from "../actionCreators";

test("setSearchTerm", () => {
  expect(setSearchTerm("black")).toMatchSnapshot();
});
const blackMirror = {
  tt2085059: {
    rating: "0.0",
    title: "Black Mirror",
    year: "2011–",
    description: "A television anthology series that shows the dark side of life and technology.",
    poster: "bm.jpg",
    imdbID: "tt2085059",
    trailer: "jDiYGjp5iFg"
  }
};
test("addAPIData", () => {
  expect(addAPIData(blackMirror)).toMatchSnapshot();
});

test("getAPIDetails", (done: Function) => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    const thunk = getAPIDetails(blackMirror.imdbID);
    thunk(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: blackMirror
        })
        .then(() => {
          expect(request.url).toEqual(
            `http://localhost:3000/${blackMirror.imdbID}`
          );
          expect(dispatchMock).toBeCalledWith(addAPIData(blackMirror));
          done();
        });
    });
  });
});
