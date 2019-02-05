import express from "express";
const app = express();

const PORT = 4000;

// function handleListening(){
//     console.log(`Listening on: http://localhost:${PORT}`);
// }

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);


const handleHome = (req, res) => res.send("Hello from sex!")
// function handleHome(req, res){
//     res.send('Hello from home');
// }

// function handleProfile(req, res){
//     res.send("You are on my profile")
// }

//arrow function 
const handleProfile = (req, res) =>  res.send("You are on my profile");

app.get("/", handleHome);

//localhost:4000/profile 이라는 url을 만든 것
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);