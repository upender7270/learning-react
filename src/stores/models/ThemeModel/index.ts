import { observable, action } from 'mobx'

class ThemeModel {
  time
  @observable theme

  constructor(themeObject) {
    this.time = themeObject.time
    this.theme = themeObject.theme
  }

  @action.bound
  toggleTheme() {
    if (this.theme === 'light') {
      this.theme = 'dark'
    } else {
      this.theme = 'light'
    }
  }
}

export default ThemeModel
