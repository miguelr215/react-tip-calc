import { useState } from 'react';

export default function App() {
  const [billAmt, setBillAmt] = useState(0);
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleBillAmtChange(newAmt) {
    setBillAmt(Number(newAmt));
  }

  function handleYourTipChange(tip) {
    setYourTip(tip);
  }

  function handleFriendTipChange(tip) {
    setFriendTip(tip);
  }

  function handleReset() {
    setBillAmt(0);
    setYourTip(0);
    setFriendTip(0);
  }

  return (
    <div className="App">
      <Bill billAmt={billAmt} onBillAmtChange={handleBillAmtChange} />
      <YourTip tip={yourTip} onYourTipChange={handleYourTipChange} />
      <FriendTip tip={friendTip} onFriendTipChange={handleFriendTipChange} />
      <Result billAmt={billAmt} yourTip={yourTip} friendTip={friendTip} />
      <ResetBtn onReset={handleReset} />
    </div>
  );
}

function Bill({ billAmt, onBillAmtChange }) {
  return (
    <div className="bill">
      <span>How much was the bill?</span>
      <input
        type="text"
        value={billAmt}
        onChange={(e) => onBillAmtChange(e.target.value)}
      />
    </div>
  );
}

function YourTip({ tip, onYourTipChange }) {
  return (
    <div className="tip">
      <span>How did you like the service?</span>
      <select
        value={tip}
        onChange={(e) => onYourTipChange(Number(e.target.value))}
      >
        <option value="0">Bad Service (0%)</option>
        <option value="5">Just OK Service (5%)</option>
        <option value="10">Good Service (10%)</option>
        <option value="20">Great Service (20%)</option>
      </select>
    </div>
  );
}

function FriendTip({ tip, onFriendTipChange }) {
  return (
    <div className="tip">
      <span>How did your friend like the service?</span>
      <select
        value={tip}
        onChange={(e) => onFriendTipChange(Number(e.target.value))}
      >
        <option value="0">Bad Service (0%)</option>
        <option value="5">Just OK Service (5%)</option>
        <option value="10">Good Service (10%)</option>
        <option value="20">Great Service (20%)</option>
      </select>
    </div>
  );
}

function Result({ billAmt, yourTip, friendTip }) {
  const avgTip = (yourTip + friendTip) / 2;
  const total = billAmt + billAmt * (avgTip / 100);

  return (
    <div className="result">
      <p>
        You pay ${total} (${billAmt} + {avgTip}% avg tip)
      </p>
    </div>
  );
}

function ResetBtn({ onReset }) {
  return (
    <div>
      <button type="button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
