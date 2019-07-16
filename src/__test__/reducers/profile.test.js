import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_STARTED,
  GET_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_STARTED,
  UPDATE_PROFILE_ERROR
} from "../../actionTypes";

import reducer from "../../reducers/profile";

describe("Login reducer", () => {
  test("should test the reducer with type GET_PROFILE_SUCCESS", () => {
    const state = reducer({}, { type: GET_PROFILE_SUCCESS });
    expect(state.loading).toBe(false);
  });

  test("should test the reducer with type GET_PROFILE_STARTED", () => {
    const state = reducer({}, { type: GET_PROFILE_STARTED });
    expect(state.loading).toBe(true);
  });

  test("should test the reducer with type GET_PROFILE_ERROR", () => {
    const state = reducer({}, { type: GET_PROFILE_ERROR });
    expect(state.loading).toBe(false);
  });

  test("should test the reducer with type UPDATE_PROFILE_SUCCESS", () => {
    const state = reducer({}, { type: UPDATE_PROFILE_SUCCESS });
    expect(state.loading).toBe(false);
  });

  test("should test the reducer with type UPDATE_PROFILE_STARTED", () => {
    const state = reducer({}, { type: UPDATE_PROFILE_STARTED });
    expect(state.loading).toBe(true);
  });

  test("should test the reducer with type UPDATE_PROFILE_ERROR", () => {
    const state = reducer({}, { type: UPDATE_PROFILE_ERROR });
    expect(state.loading).toBe(false);
  });

  test("should test the reducer with default value", () => {
    const state = reducer({}, { type: "default" });
    expect(state.loading).toBe(undefined);
  });
});
