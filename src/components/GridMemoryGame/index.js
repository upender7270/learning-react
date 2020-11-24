import React from 'react'
import { observer } from 'mobx-react'

import stores from '../../stores'

import GameField from './GameField'
import GameResult from './GameResult'
import Header from './Header'

@observer
class GridMemoryGame extends React.Component {
  constructor(props) {
    super(props)
    stores.gameStore.setGridCells()
  }
  render() {
    const {
      level,
      topLevel,
      onCellClick,
      playAgain,
      currentLevelGridCells,
      isGameCompleted,
      resetGame,
    } = stores.gameStore
    const { selectedTheme, updateTheme } = stores.themeStore
    return (
      <div
        className={`flex flex-col items-center justify-center min-h-screen ${
          selectedTheme === 'light' ? 'bg-gray-100' : 'bg-gray-900'
        }`}
      >
        <Header
          level={level}
          topLevel={topLevel}
          selectedTheme={selectedTheme}
          onChangeSelectedTheme={updateTheme}
        />
        {isGameCompleted ? (
          <GameResult
            level={level}
            selectedTheme={selectedTheme}
            playAgain={playAgain}
          />
        ) : (
          <GameField
            key={currentLevelGridCells[0].id}
            cells={currentLevelGridCells}
            onCellClick={onCellClick}
            level={level}
            theme={selectedTheme}
            resetGame={resetGame}
          />
        )}
      </div>
    )
  }
}
export default GridMemoryGame
