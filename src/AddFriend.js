export default function AddFriend({
  name,
  setFriend,
  imgSrc,
  setFriendListAll,
  onAddFriendShow,
  onImage,
}) {
  function handleAddNewFriend() {
    if (!name || !imgSrc) return;
    setFriendListAll((newFriend) => [
      ...newFriend,
      {
        id: +Date.now().toString().slice(7),
        name: name,
        image: imgSrc,
        balance: 0,
      },
    ]);
    onImage();
    onAddFriendShow();
    setFriend("");
  }

  return (
    <div className="add-friend">
      <div>
        <span>👫 Friend name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setFriend(e.target.value);
          }}
        />
      </div>
      <div>
        <span> 🌄 Image Url</span>
        <input type="text" value={imgSrc} onChange={onImage} />
      </div>
      <div>
        <span></span>
        <button onClick={handleAddNewFriend}>Add</button>
      </div>
    </div>
  );
}
