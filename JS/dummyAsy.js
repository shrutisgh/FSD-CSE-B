// const url = "https://dummyjson.com/users?limit=1";
// async function fetchUser() {
//   try {
//     const res = await fetch(url);       
//     const data = await res.json();      
//     const user = data.users[0];         
    
//     console.log("name =", user.firstName);
//     console.log("email =", user.email);
//     console.log("ip =", user.ip);
//     console.log("mac =", user.macAddress);
//   } catch (err) {
//     console.error("Error:", err.message);
//   }
// }

// fetchUser();




const url = "https://dummyjson.com/users?limit=5";

const f1 = async () => {
  try {
    const res = await fetch(url);
    const jsondata = await res.json();

    jsondata.users.forEach((user) => {
      console.log("name =", user.firstName);
      console.log("email =", user.email);
      console.log("ip =", user.ip);
      console.log("mac =", user.macAddress);
      console.log("-------------------------");
    });
  } catch (err) {
    console.error("Error:", err.message);
  }
};

f1();
