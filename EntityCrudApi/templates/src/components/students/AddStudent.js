import React, { useEffect, useState } from 'react'

export default function AddStudent() {

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

    const [student, setStudent] = useState({});
    let addUrl = "";

    function changeData(e){
        let studentData = {
            [e.target.name] : e.target.value
        };
        setStudent({...student, ...studentData})
    }

    function addStudent(){

    }

  return (
    <div className="container vh-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 text-uppercase fw-bold"> Add Student </h2>
                        <form>
                        <div className="mb-3">
                                <label htmlFor="name" className="form-label">Course Name</label>
                                <select className="form-select" onChange={changeData} id='courseName' name='courseName'>
                                    <option>select course name...</option>
                                    {
                                        courseList.map((course) => {
                                            return (
                                                <option key={course.id} value={course.id}>{course.courseName}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Student Name</label>
                                <input type="text" onChange={changeData} className="form-control" id="name" name='Name' placeholder='student name'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Student Email</label>
                                <input type="text" onChange={changeData} className="form-control" id="email" name='Email' placeholder='student price'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Student Phone</label>
                                <input type="text" onChange={changeData} className="form-control" id="phone" name='Phone' placeholder='student description'/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="FatherName" className="form-label">Father Name</label>
                                <input type="text" onChange={changeData} className="form-control" id="FatherName" name='FatherName' placeholder='student description'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="FatherPhone" className="form-label">Father Phone</label>
                                <input type="text" onChange={changeData} className="form-control" id="FatherPhone" name='FatherPhone' placeholder='student description'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Status</label>
                                <select className="form-select" onChange={changeData} id='status' name='Status'>
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                            </div>
                            <div className="d-grid my-3">
                                <button type="button" onClick={addStudent} className="btn btn-block btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
