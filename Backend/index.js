const express = require('express');
const app = express();
const port = 4005;

app.use(express.json());

const students = [
  { id: "1", name: "Ashish", class: "CSE-V-B" }
];

// GET all students
app.get("/", (req, res) => {
  try {
    res.status(200).json({
      message: "fetch all students successfully",
      data: students
    });
  } catch (err) {
    res.status(500).json({ message: "failed to fetch", Error: err.message });
  }
});
4
// GET student by id
app.get("/:id", (req, res) => {
  try {
    const id = req.params.id;
    const student = students.find(s => s.id == id);

    if (!student) {
      return res.status(404).json({ message: "student not found" });
    }

    res.status(200).json({ message: "student found", student });
  } catch (err) {
    res.status(500).json({
      message: "failed to search student",
      Error: err.message
    });
  }
});

// POST add student
app.post("/add", (req, res) => {
  try {
    const newStudent = {
      id: String(students.length + 1), // convert to string
      ...req.body
    };

    students.push(newStudent);

    res.status(201).json({
      message: "student created successfully",
      newStudent
    });
  } catch (err) {
    res.status(500).json({
      message: "failed to create student",
      Error: err.message
    });
  }
});

// PUT update student
app.put("/edit/:id", (req, res) => {
  try {
    const id = req.params.id;
    const index = students.findIndex(s => s.id == id);

    if (index === -1) {
      return res
        .status(404)
        .json({ message: `${id} id student not found` });
    }

    students[index] = {
      ...students[index],
      ...req.body
    };

    res.status(200).json({
      message: `${id} id student updated`,
      updatedData: students[index]
    });
  } catch (err) {
    res.status(500).json({
      message: "failed to update student",
      Error: err.message
    });
  }
});

// DELETE student
app.delete("/delete/:id", (req, res) => {
  try {
    const id = req.params.id;
    const index = students.findIndex(s => s.id == id);

    if (index === -1) {
      return res
        .status(404)
        .json({ message: `${id} id student not found` });
    }

    students.splice(index, 1);

    res.status(200).json({
      message: `${id} id student deleted successfully`
    });
  } catch (err) {
    res.status(500).json({
      message: "failed to delete student",
      Error: err.message
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
