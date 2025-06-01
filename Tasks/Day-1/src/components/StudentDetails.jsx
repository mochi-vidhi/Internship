import { useState, useEffect } from "react"
import { databases,account } from "../utils/Appwrite";
import './studentDetails.css';
import { Permission, Role } from 'appwrite';


const DB_ID = 'Your db Id';
const COLLECTION_ID = 'your collection id';

export const StudentDetails = () => {
    const [student, setStudent] = useState([]);
    const [form, setForm] = useState({ name: '', age: '', field: '', grade: '' });

       useEffect(() => {
        const checkSession = async () => {
            try {
                await account.get();  
            } catch {
                await account.createAnonymousSession(); 
            }
        };
        checkSession();
        fetchStudent();
    }, []);



    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
               
            await databases.createDocument(DB_ID, COLLECTION_ID, 'unique()', {
                name: form.name,
                age: parseInt(form.age),
                field: form.field,
                grade: form.grade
            },[
               Permission.read(Role.any()),
               Permission.write(Role.any()),
               Permission.update(Role.any()),
               Permission.delete(Role.any())
            ]);
            alert('Student Added!');
            setForm({ name: '', age: '', field: '', grade: '' });
            fetchStudent();
        } catch (error) {
            console.error('Error adding student: ', error);
        }
    }

    const fetchStudent = async () => {
        try {
            const res = await databases.listDocuments(DB_ID, COLLECTION_ID);
            setStudent(res.documents);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };
   

    return (
        <div className="container">
            <h1>Welcome  Student Information Portal</h1>
            <h2>Add Student Details</h2>
            <form onSubmit={handleSubmit} className="form">
                <label>Enter Name of the student: </label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
                <label>Enter age of the student: </label>
                <input type="number" name="age" value={form.age} onChange={handleChange} required />
                <label>Enter field of the student: </label>
                <input type="text" name="field" value={form.field} onChange={handleChange} required />
                <label>Enter Grade of the student: </label>
                <input type="text" name="grade" value={form.grade} onChange={handleChange} required />
                <button type="submit">Add Student</button>
            </form>

            <h2>Student List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Field</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((stu) => (
                        <tr key={stu.$id}>
                            <td>{stu.name}</td>
                            <td>{stu.age}</td>
                            <td>{stu.field}</td>
                            <td>{stu.grade}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    )
}