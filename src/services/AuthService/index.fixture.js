import userSignInResponse from "../../fixtures/getUserSignInResponse.json";
import { FIXTURES_API_TIMEOUT } from "../../constants/AppConstants";

class AuthFixtureService {
  signInAPI() {
    return new Promise(resolve => {
      setTimeout(() => resolve(userSignInResponse), FIXTURES_API_TIMEOUT);
    });
  }
}

export default AuthFixtureService;
