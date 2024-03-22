const router=require('express').Router();
const todo = require('../models/todo');
const Todo=require('../models/todo');
const User=require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// list all todos
router.get('/', (req, res) => {
    Todo.find().exec()
      .then(todos => {
        return res.json({ data: todos });
      })
      .catch(err => {
        return res.json({ error: err });
      });
  });
  

//create a todo
router.post('/create',(req,res)=>{
    const todo=Todo({
        title:req.body.title,
        content:req.body.content,
    });
    todo.save()
    .then(savedTodo => {
      return res.json(savedTodo);
    })
    .catch(err => {
      return res.json({ error: err });
    });
  
});

//edit a todo
router.put('/:id', (req, res) => {
  const id = req.params.id;

  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        return res.json({ error: 'No Todo found with the given id' });
      }

      todo.title = req.body.title || todo.title;
      todo.content = req.body.content || todo.content;
      todo.completed = req.body.completed || todo.completed;

      return todo.save();
    })
    .then(updatedTodo => {
      return res.json({ data: updatedTodo });
    })
    .catch(err => {
      return res.json({ error: err });
    });
});



//delete a todo
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Todo.deleteOne({ _id: id })
    .then(result => {
      if (result.deletedCount === 0) {
        return res.json({ data: 'No Todo found with the given id' });
      }
      return res.json({ data: 'Deleted successfully' });
    })
    .catch(err => {
      return res.json({ error: err });
    });
});
//todo signup
router.post('/signup', async (req, res) => {
  try {
      const { email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
//todo login
router.post('/login', async (req, res) => {
  try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid credentials' });
      }
      const token = jwt.sign({ userId: user._id, email: user.email }, 'SECRET_KEY');
      res.json({ token });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});


module.exports=router;

