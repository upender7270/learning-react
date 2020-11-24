class Cell {
  id;
  isHidden;
  constructor(isHidden) {
    this.id = Math.random().toString();
    this.isHidden = isHidden;
  }
}
export default Cell;
