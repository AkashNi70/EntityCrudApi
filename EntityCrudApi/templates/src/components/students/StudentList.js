import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function StudentList() {
    let baseUrl = "https://localhost:7044/api/";

    const [studentList, setStudentList] = useState([]);    

    function getStudentList() { 
        let studentUrl =  baseUrl + "Student";
        fetch(studentUrl)
        .then(res => res.json())
        .then(json => {
            setStudentList(json)
        })
    }

    useEffect(() => {
        getStudentList()
    }, []);

    function deleteStudent(id){
        let deleteUrl = baseUrl+`student/${id}`;
        fetch(deleteUrl, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
    }

  return (
    <div className="container vh-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4 text-uppercase fw-bold"> Student List </h2>
                            <div className="col-xl-12">
                                <div className="float-end mb-3">
                                    <Link to='/add-student' className='btn btn-primary'>Add Student</Link>
                                </div>
                            </div>
                            <table className="table table-light">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Course</th>
                                        <th>Status</th>
                                        <th>Created Date</th>
                                        <th>Update Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        studentList.map((student) => {
                                            return (
                                                <tr key={student.id}>
                                                    <td>{student.id}</td>
                                                    <td>{student.name}</td>
                                                    <td>{student.phone}</td>
                                                    <td>
                                                        {
                                                            student.courses.reduce((acc,course) => {
                                                                return [...acc,course.courseName];
                                                            },[]).join(", ")
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            student.status === true ? "Active" : "In Active"
                                                        }
                                                    </td>
                                                    <td>{student.created}</td>
                                                    <td>{student.updated}</td>
                                                    <td>
                                                        <Link to={`/edit-student/${student.id}`} className='btn btn-info text-white me-2'><i className="material-icons">&#xE254;</i></Link>
                                                        <button type='button' onClick={()=> {deleteStudent(student.id)}} className='btn btn-danger text-white me-2'><i className="material-icons">&#xE872;</i></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
