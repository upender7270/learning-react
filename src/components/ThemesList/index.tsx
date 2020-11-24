import React, { Component } from 'react'
import { observer } from 'mobx-react'

import stores from '../../stores'
import ThemeModel from '../../stores/models/ThemeModel'

const { themeStore } = stores

type ThemeRowProps = {
  onThemeClick: Function
  themeModel: ThemeModel
}

@observer
class ThemeRow extends Component<ThemeRowProps> {
  onThemeClick = () => {
    const { onThemeClick, themeModel } = this.props
    onThemeClick(themeModel)
  }

  render() {
    const { themeModel } = this.props
    return (
      <div key={themeModel.time}>
        <p>{themeModel.time}</p>
        <button onClick={this.onThemeClick}>{themeModel.theme}</button>
      </div>
    )
  }
}

@observer
class ThemesList extends Component {
  onThemeClick = (themeModel) => {
    themeModel.toggleTheme()
  }
  render() {
    return (
      <div>
        {themeStore.selectedThemes.map((themeModel) => {
          return (
            <ThemeRow
              themeModel={themeModel}
              onThemeClick={this.onThemeClick}
            />
          )
        })}
      </div>
    )
  }
}

export default ThemesList
