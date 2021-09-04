import React from "react";

function Button() {
    const [name, setName] = useState("İbrahim");
    const [count, setCount] = useState(0);
    const [friends, setFriends] = useState(["Ahmet", "Murat"]);
    const [address, setAddress] = useState({ title: "Amasya", zip: 5 });
    
  return (
    <div>
      <button onClick={() => setName("Ahmet")}>Değiştir</button>
      <button onClick={() => setCount(count - 1)}>Düşür</button>
      <button>{count}</button>
      <button onClick={() => setCount(count + 1)}>Yükselt</button>
      <hr></hr>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends, "Mehmet"])}>
        Arkadaş Ekle
      </button>
      <hr></hr>
      {address.title} {address.zip} <br></br>
      <button
        onClick={() => setAddress({ ...address, title: "Ankara", zip: 6 })}
      >
        Adresi Değiştir
      </button>
    </div>
  );
}

export default Button;
