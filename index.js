import express from "express";
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "finally it conntect to an host server",
  });
});

app.listen(PORT, () => {
  console.log(`backend is running on Port No ${PORT}`);
});
