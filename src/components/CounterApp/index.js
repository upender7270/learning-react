import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

const appState = observable({
  count: 0,
  onIncrement: () => {
    appState.count++;
  },

  onDecrement: () => {
    appState.count--;
  },
  onChangeCount: e => {
    appState.count = e.target.value;
  }
});

const CounterApp = observer(() => (
  <div className="h-screen flex flex-col items-center justify-center">
    <h3 className="mb-6 text-5xl font-bold">Counter</h3>
    <div>
      <button
        className="h-12 w-12 mx-4 font-bold text-3xl sm:h-16 sm:w-16 bg-blue-700 text-white focus:outline-none rounded"
        onClick={appState.onIncrement}
      >
        +
      </button>
      <input
        className="w-40 h-12 sm:h-16 text-3xl border-orange-400 border-2 text-center rounded"
        value={appState.count}
        onChange={appState.onChangeCount}
        type="number"
      />
      <button
        className="h-12 w-12 mx-4 font-bold text-3xl sm:h-16 sm:w-16 bg-blue-700 text-white focus:outline-none rounded"
        onClick={appState.onDecrement}
      >
        -
      </button>
    </div>
  </div>
));
export default CounterApp;
