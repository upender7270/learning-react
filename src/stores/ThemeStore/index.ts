import { observable, action } from 'mobx'

import ThemeModel from '../models/ThemeModel'

class ThemeStore {
  @observable selectedTheme
  @observable selectedThemes: Array<ThemeModel> = observable([])

  constructor() {
    this.selectedTheme = 'light'
    this.selectedThemes = observable([])
  }

  @action.bound
  updateTheme() {
    if (this.selectedTheme === 'light') {
      this.selectedTheme = 'dark'
    } else {
      this.selectedTheme = 'light'
    }
    const themeObject = {
      time: new Date().toString(),
      theme: this.selectedTheme,
    }
    const themeModel = new ThemeModel(themeObject)
    this.selectedThemes.push(themeModel)
  }
}
export default ThemeStore
