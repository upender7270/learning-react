import { observable, action, runInAction } from "mobx";

import levels from "../../config/level";
import generateGameField from "../../utils/GridGameUtils";

import CellModel from "../models/Cell";

class GameStore {
  @observable level = 0;
  @observable topLevel = 0;
  selectedCellsCount = 0;
  @observable currentLevelGridCells = [];
  @observable isGameCompleted = false;

  @action.bound
  onCellClick(isWrongCell) {
    if (isWrongCell) {
      this.goToInitialLevelAndUpdateCells();
    } else {
      this.incrementSelectedCellCount();
      if (this.selectedCellsCount === levels[this.level].memoryCount) {
        if (levels.length === this.level + 1) {
          setTimeout(() => {
            this.isGameCompleted = true;
          }, 200);
        } else {
          this.goToNextLevelAndUpdateCells();
        }
      }
    }
  }

  @action.bound
  incrementSelectedCellCount() {
    this.selectedCellsCount = this.selectedCellsCount + 1;
  }

  @action.bound
  resetSelectedCellsCount() {
    this.selectedCellsCount = 0;
  }

  @action.bound
  goToNextLevelAndUpdateCells() {
    setTimeout(() => {
      runInAction(() => {
        this.level = this.level + 1;
        this.setGridCells();
        this.resetSelectedCellsCount();
      });
    }, 200);
  }

  @action.bound
  goToInitialLevelAndUpdateCells() {
    setTimeout(() => {
      runInAction(() => {
        this.resetGame();
      });
    }, 200);
  }

  @action.bound
  resetGame() {
    if (this.level > this.topLevel) {
      this.topLevel = this.level;
    }
    this.level = 0;
    this.setGridCells();
    this.resetSelectedCellsCount();
  }

  @action.bound
  playAgain() {
    this.isGameCompleted = false;
    this.resetGame();
  }

  @action.bound
  setGridCells() {
    const levelConfig = levels[this.level];
    let { field } = generateGameField(
      levelConfig.cellCount,
      levelConfig.memoryCount
    );
    const cells = field.map(field => {
      if (field === 1) {
        return new CellModel(false);
      }
      return new CellModel(true);
    });
    this.currentLevelGridCells = cells;
  }
}

export default GameStore;
