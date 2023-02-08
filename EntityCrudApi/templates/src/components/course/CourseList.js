import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function CourseList() {
    const [courseList, setCourseList] = useState([]);    

    function getCourseList() { 
        let courseUrl = "https://localhost:7044/api/Course";
        fetch(courseUrl)
        .then(res => res.json())
        .then(json => {
            setCourseList(json)
        })
    }

    useEffect(() => {
        getCourseList()
    }, []);

    return (
        <div className="container vh-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4 text-uppercase fw-bold"> Course List </h2>
                            <div className="col-xl-12">
                                <div className="float-end mb-3">
                                    <Link to='/add-course' className='btn btn-primary'>Add Course</Link>
                                </div>
                            </div>
                            <table className="table table-light">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Course Desc</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Created Date</th>
                                        <th>Update Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        courseList.map((course) => {
                                            return (
                                                <tr key={course.id}>
                                                    <td>{course.id}</td>
                                                    <td>{course.courseName}</td>
                                                    <td>{course.courseDescription}</td>
                                                    <td>{course.price}</td>
                                                    <td>
                                                        {
                                                            course.status === true ? "Active" : "In Active"
                                                        }
                                                    </td>
                                                    <td>{course.created}</td>
                                                    <td>{course.updated}</td>
                                                    <td>
                                                        <a href="#" className='btn btn-info text-white me-2'><i className="material-icons">&#xE254;</i></a>
                                                        <a href="#" className='btn btn-danger text-white me-2'><i className="material-icons">&#xE872;</i></a>
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
