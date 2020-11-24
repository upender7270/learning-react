import { create } from "apisauce";

import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethods } from "../../constants/APIConstants";

class TodoService {
  api;
  constructor() {
    this.api = create({ baseURL: "https://user-todo-list.getsandbox.com" });
  }

  async getTodos() {
    return networkCallWithApisauce(this.api, "todos", "", apiMethods.get);
  }
}
export default TodoService;
