import React, { useState } from 'react'

export default function AddCourse() {

    const [course, setCourse] = useState({});
    let addUrl = "https://localhost:7044/api/Course";

    function changeData(e){
        let courseData = {
            [e.target.name] : e.target.value
        };
        setCourse({...course, ...courseData})
    }

    function addCourse(){
        fetch(addUrl,{
            method : "POST",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
        })
    }

  return (
    <div className="container vh-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 text-uppercase fw-bold"> Add Course </h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Course Name</label>
                                <input type="text" onChange={changeData} className="form-control" id="name" name='CourseName' placeholder='course name'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="coursePrice" className="form-label">Course Price</label>
                                <input type="number" onChange={changeData} className="form-control" id="coursePrice" name='Price' placeholder='course price'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="courseDesc" className="form-label">Course Description</label>
                                <input type="text" onChange={changeData} className="form-control" id="courseDesc" name='CourseDescription' placeholder='course description'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Course Status</label>
                                <select className="form-select" onChange={changeData} id='courseStatus' name='Status'>
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                            </div>
                            <div className="d-grid my-3">
                                <button type="button" onClick={addCourse} className="btn btn-block btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
