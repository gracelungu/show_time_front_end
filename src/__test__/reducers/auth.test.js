import {
  EMAIL_AUTH_SUCCESS,
  EMAIL_AUTH_STARTED,
  EMAIL_AUTH_ERROR,
  EMAIL_LOGIN_SUCCESS,
  EMAIL_LOGIN_STARTED,
  EMAIL_LOGIN_ERROR,
  LOGOUT
} from "../../actionTypes/index";
import reducer from "../../reducers/auth";

describe("Login reducer", () => {
  test("should test the reducer with type EMAIL_AUTH_SUCCESS", () => {
    const state = reducer({}, { type: EMAIL_AUTH_SUCCESS });
    expect(state.loading).toBe(false);
  });

  test("should test the reducer with type EMAIL_AUTH_STARTED", () => {
    const state = reducer({}, { type: EMAIL_AUTH_STARTED });
    expect(state.loading).toBe(true);
  });

  test("should test the reducer with type EMAIL_AUTH_ERROR", () => {
    const state = reducer({}, { type: EMAIL_AUTH_ERROR });
    expect(state.loading).toBe(false);
  });

  test("should test the reducer with type EMAIL_LOGIN_SUCCESS", () => {
    const state = reducer({}, { type: EMAIL_LOGIN_SUCCESS });
    expect(state.loading).toBe(false);
  });

  test("should test the reducer with type EMAIL_LOGIN_STARTED", () => {
    const state = reducer({}, { type: EMAIL_LOGIN_STARTED });
    expect(state.loading).toBe(true);
  });

  test("should test the reducer with type EMAIL_LOGIN_ERROR", () => {
    const state = reducer({}, { type: EMAIL_LOGIN_ERROR });
    expect(state.loading).toBe(false);
  });

  test("should test the reducer with type LOGOUT", () => {
    const state = reducer({}, { type: LOGOUT });
    expect(state.loggedIn).toBe(false);
  });

  test("should test the reducer with default value", () => {
    const state = reducer({}, { type: "default" });
    expect(state.loading).toBe(undefined);
  });
});
