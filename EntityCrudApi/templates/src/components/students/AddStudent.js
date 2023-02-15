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
    const [courseId, setCourseId] = useState([]);

    let addUrl = "https://localhost:7044/api/Student";

    function changeData(e) {
        let studentData = {
            [e.target.name]: e.target.value,
            coursesId:courseId,
        };
        setStudent({ ...student, ...studentData })

        console.log(student)
    }
    
    function checkHandler(e){
        setCourseId([...courseId,...e.target.value]);
        console.log(courseId)
    }

    
    function addStudent() {
        console.log(student)
        // fetch(addUrl,{
        //     method : "POST",
        //     headers: {
        //     'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(student)
        // })
        // .then(res => res.json())
        // .then(json => {
        //     console.log(json);
        // })
    }

    return (
        <div className="container vh-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4 text-uppercase fw-bold"> Add Student </h2>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Student Name</label>
                                            <input type="text" onChange={changeData} className="form-control" id="name" name='Name' placeholder='student name' />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">Student Phone</label>
                                            <input type="text" onChange={changeData} className="form-control" id="phone" name='Phone' placeholder='student description' />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Student Email</label>
                                    <input type="text" onChange={changeData} className="form-control" id="email" name='Email' placeholder='student price' />
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="FatherName" className="form-label">Father Name</label>
                                            <input type="text" onChange={changeData} className="form-control" id="FatherName" name='FatherName' placeholder='student description' />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="FatherPhone" className="form-label">Father Phone</label>
                                            <input type="text" onChange={changeData} className="form-control" id="FatherPhone" name='FatherPhone' placeholder='student description' />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Course Name</label>
                                    <div className="row">
                                        <div className="form-group">
                                            {
                                                courseList.map((course) => {
                                                    return (
                                                        <label className="form-check-label checkbox-inline me-2" key={course.id}>
                                                            <input onChange={checkHandler} className="form-check-input me-2" id='courseId' name='courseId' type="checkbox" value={course.id} />{course.courseName}
                                                        </label>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Status" className="form-label">Status</label>
                                    <select className="form-select" onChange={changeData} id='Status' name='Status'>
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
