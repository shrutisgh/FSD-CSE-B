const url = "https://dummyjson.com/users?limit=1";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const user = data.users[0]; 
    console.log("name =", user.firstName);
    console.log("email =", user.email);
    console.log("ip =", user.ip);
    console.log("mac =", user.macAddress);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });
