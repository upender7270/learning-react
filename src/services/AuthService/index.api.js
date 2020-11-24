import { create } from "apisauce";
import { apiMethods } from "../../constants/APIConstants";
import { networkCallWithApisauce } from "../../utils/APIUtils";

class AuthService {
  api;
  constructor() {
    this.api = create({
      baseURL: "https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/"
    });
  }

  signInAPI(request) {
    return networkCallWithApisauce(
      this.api,
      "v1/signin/",
      request,
      apiMethods.get
    );
  }
}

export default AuthService;
