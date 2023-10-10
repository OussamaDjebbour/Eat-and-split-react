import { useState } from "react";

export default function Form({ friendInfo, setFriendListAll, setIsOpen }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [payingBill, setPayingBill] = useState("You");

  function handleExpense(e) {
    setYourExpense((exp) => (+e.target.value <= +bill ? +e.target.value : ""));
    // if (yourExpense > bill) return;
  }
  const friendExpense = bill - yourExpense;

  function handleForm() {
    setFriendListAll((friendList) =>
      friendList.map((friend) =>
        friend.id === friendInfo.id
          ? {
              ...friend,
              balance:
                payingBill === "You"
                  ? friend.balance + friendExpense
                  : friend.balance - yourExpense,
              new: "great",
            }
          : friend
      )
    );
    setIsOpen(null);
  }
  return (
    <div className="form">
      <h2>SPLIT A BILL WITH {friendInfo.name} </h2>
      <div>
        <p>💰 Bill value</p>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>
      <div>
        <p>🧍‍♀️ Your expense</p>
        <input
          type="text"
          value={yourExpense}
          onChange={(e) => handleExpense(e)}
        />
      </div>
      <div>
        <p>👫 {friendInfo.name}'s expense</p>
        <span>{friendExpense}</span>
      </div>
      <div>
        <p>🤑 Who is paying the bill</p>
        <select
          value={payingBill}
          onChange={(e) => setPayingBill(e.target.value)}
        >
          <option>You</option>
          <option>{friendInfo.name}</option>
        </select>
      </div>
      <div>
        <p></p>
        <button onClick={handleForm}>Split bill</button>
      </div>
    </div>
  );
}
