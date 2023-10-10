export default function ListFriend({
  friend,
  name,
  imgSrc,
  balance,
  isOpen,
  setIsOpen,
  setFriendInfo,
}) {
  function handleFr(fr) {
    setFriendInfo(fr);
  }

  function handleFriend(id) {
    setIsOpen(id !== isOpen ? id : null);
  }
  function description() {
    if (balance < 0)
      return (
        <p className="red">
          You owe {name} {Math.abs(balance)}$
        </p>
      );
    if (balance > 0)
      return (
        <p className="green">
          {name} owes you {Math.abs(balance)}$
        </p>
      );
    if (balance === 0) return <p>You and {name} are even</p>;
  }
  return (
    <div className="list-friend">
      <div className="description">
        <img src={imgSrc} alt="Avatar Not Show" />
        <div>
          <h3>{name}</h3>
          {description()}
        </div>
      </div>
      <button
        onClick={() => {
          handleFriend(friend.id);
          handleFr(friend);
        }}
      >
        {isOpen === friend.id ? "Close" : "Select"}
      </button>
    </div>
  );
}
