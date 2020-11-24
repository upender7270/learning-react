import TodoService from "../services/TodoService";
import ProductService from "../services/ProductService";
import UserService from "../services/UserService/index.api";
import AuthService from "../services/AuthService/index.api";

import ThemeStore from "./ThemeStore";
import GameStore from "./GameStore";
import TodoStore from "./TodoStore";
import ProductStore from "./ProductStore";
import UsersStore from "./UsersStore";
import AuthStore from "./AuthStore";

const gameStore = new GameStore();

const themeStore = new ThemeStore();

const todoStore = new TodoStore(new TodoService());

const usersStore = new UsersStore(new UserService());

const productStore = new ProductStore(new ProductService());

const authStore = new AuthStore(new AuthService());

const stores = {
  gameStore,
  themeStore,
  todoStore,
  productStore,
  usersStore,
  authStore
};

export default stores;
