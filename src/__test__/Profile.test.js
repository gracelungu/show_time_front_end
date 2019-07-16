import React from "react";
import thunk from "redux-thunk";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import Profile from "../Containers/Profile/Profile";

let wrapper, store;
const props = {};
const mockStore = configureMockStore([thunk]);
const storeStateMock = {
  index: { navToggle: true },
  auth: {
    user: {},
    loading: false,
    error: null,
    loggedIn: false
  },
  profile: {
    user: {},
    loading: false,
    error: null
  }
};

describe("Profile.jsx", () => {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Profile {...props} />
        </Router>
      </Provider>
    );
  });

  test("should render Profile.jx", () => {
    expect(wrapper.find(".profile").length).toBe(3);
  });
});
