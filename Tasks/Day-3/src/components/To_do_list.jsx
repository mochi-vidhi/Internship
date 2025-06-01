import React, { useState } from 'react'
import './todo.css'

export const To_do_list = () => {
   const [form, setForm] = useState({
      task: '',
      des: '',
      priority: '',
      category: '',
      date: ''

   });
   const [task, setTask] = useState([]);
   const [index, setIndex] = useState(null);
   const [search, setSearch] = useState('');
   const [openDropdown, setDropDown] = useState(null);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }))
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      if (index !== null) {
         const update = [...task];
         update[index] = form;
         console.log(update);
         setTask(update);
         setIndex(null);
      }
      else {
         setTask([...task, form])
         console.log(task);
      }
      setForm({ task: '', des: '', priority: '', category: '', date: '' });

   }
   const handleEdit = (index) => {
      setForm(task[index]);
      setIndex(index);

   }
   const handleDelete = (index) => {
      task.splice(index, 1);
      setTask([...task]);
   }
   const handleToggle = (index) => {
      setDropDown(openDropdown === index ? null : index)
   }
   const filterTask = task.filter(t => t.task.toLowerCase().includes(search.toLowerCase()))

   return (
      <>
         <h1 className="heading">To do List </h1>
         <form className="todo-form">

            <label>Enter the Task: </label>
            <input type="text" name="task" value={form.task} onChange={handleChange} required />

            <label>Enter the description: </label>
            <textarea type="text" name="des" value={form.des} onChange={handleChange} required />

            <label>Enter the Priority : </label>
            <select type="radio" name="priority" value={form.priority} onChange={handleChange} required>
               <option name='High' value="High">High</option>
               <option name="Low" value="Low">Low</option>
               <option name="Intermediate" value="Intermediate">Intermediate</option>
            </select>

            <label>Enter the category</label>
            <select type="radio" name="category" value={form.category} onChange={handleChange} required>
               <option name="personal" value="personal">Personal</option>
               <option name="Work" value="Work">Work</option>
               <option name="Study" value="Study">Study</option>
               <option name="Shopping" value="Shopping">Shopping</option>
            </select>
            <label>Enter due date</label>
            <input type="date" name="date" onChange={handleChange} required />
            <button onClick={handleSubmit}>Submit</button>
         </form>

         <div>
            <label>Search  Task here</label>
            <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
         </div>


         <ul className='task-list'>
            {filterTask.map((ts, i) => (
               <li key={i}>
                  <div className='task-header'>
                     <strong>{ts.task}</strong>
                     <div className='button'>
                        <button onClick={() => handleToggle(i)}>
                           {openDropdown == i ? 'Hide' : 'Show'}
                        </button>
                        <button onClick={() => handleEdit(i)}>Edit</button>
                        <button onClick={() => handleDelete(i)}>Delete</button>
                     </div>
                  </div>
                  {openDropdown == i && (
                     <div className="task-details">
                        <p><strong>Description:</strong> {ts.des}</p>
                        <p><strong>Priority:</strong> {ts.priority}</p>
                        <p><strong>Category:</strong> {ts.category}</p>
                        <p><strong>Date:</strong> {ts.date}</p>
                     </div>
                  )}
               </li>
            ))}
         </ul>



      </>
   )
} 