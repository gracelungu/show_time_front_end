import React from "react";
import thunk from "redux-thunk";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import Login from "../Containers/Login/Login";

let wrapper, store;
const props = {};
const mockStore = configureMockStore([thunk]);
const storeStateMock = {
  auth: { loading: false },
  error: null
};

describe("Login.jsx", () => {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Login {...props} />
        </Router>
      </Provider>
    );
  });

  test("should render Login.jx", () => {
    wrapper.find(".text-white").simulate("click");
    expect(wrapper.find(".login-page").length).toBe(1);
  });
});
