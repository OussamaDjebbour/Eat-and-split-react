import ListFriend from "./ListFriend";
import AddFriend from "./AddFriend";
import Form from "./Form";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export default function List() {
  const [friend, setFriend] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [friendListAll, setFriendListAll] = useState(initialFriends);
  const [addFriendShown, setAddFriendShown] = useState(false);
  const [isOpen, setIsOpen] = useState(null);
  const [friendInfo, setFriendInfo] = useState("");

  function handleAddFriendShow() {
    setAddFriendShown((current) => !current);
  }

  function handleImage() {
    setImgSrc(`https://i.pravatar.cc/${handleImgNbr()}`);
  }
  function handleImgNbr() {
    return Math.floor(Math.random() * 300);
  }

  return (
    <div className="App">
      <div>
        {friendListAll.length > 0 &&
          friendListAll.map((friend) => (
            <ListFriend
              friend={friend}
              name={friend.name}
              imgSrc={friend.image}
              balance={friend.balance}
              key={friend.id}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              friendInfo={friendInfo}
              setFriendInfo={setFriendInfo}
            />
          ))}

        {addFriendShown && (
          <AddFriend
            name={friend}
            setFriend={setFriend}
            imgSrc={imgSrc}
            setImgSrc={setImgSrc}
            friendListAll={friendListAll}
            setFriendListAll={setFriendListAll}
            onAddFriendShow={handleAddFriendShow}
            onImage={handleImage}
          />
        )}
        <div className="btn">
          <button
            onClick={() => {
              setFriend("");
              handleAddFriendShow();
              handleImage();
            }}
          >
            {addFriendShown ? "Close" : "Add Friend"}
          </button>
        </div>
      </div>
      {isOpen && (
        <Form
          friendInfo={friendInfo}
          setFriendListAll={setFriendListAll}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
}
