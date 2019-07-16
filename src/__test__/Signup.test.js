import React from "react";
import thunk from "redux-thunk";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import Signup from "../Containers/Signup/Signup";

let wrapper, store;
const props = {};
const mockStore = configureMockStore([thunk]);
const storeStateMock = {
  auth: { loading: false },
  error: null
};

describe("Signup.jsx", () => {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Signup {...props} />
        </Router>
      </Provider>
    );
  });

  test("should render Signup.jx", () => {
    wrapper.find(".text-white").simulate("click");
    expect(wrapper.find(".signup-page").length).toBe(1);
  });
});
