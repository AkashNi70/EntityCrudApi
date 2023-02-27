import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function EditStudent() {

    let baseUrl = "https://localhost:7044/api/";
    let param = useParams();

    const [stdName, setStdName] = useState('');
    const [stdPhone, setStdPhone] = useState('');
    const [stdEmail, setStdEmail] = useState('');
    const [fatName, setFatName] = useState('');
    const [fatPhone, setFatPhone] = useState('');
    const [courses, setCourses] = useState({ allCourses: [], selectedCourse: [] });
    const [status, setStatus] = useState('');

    function getStudentById() {
        let putUrl = baseUrl + `student/${param.id}`;
        fetch(putUrl, {
            method: "GET",
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setStdName(json.name);
                setStdPhone(json.phone);
                setStdEmail(json.email);
                setFatName(json.fatherName);
                setFatPhone(json.fatherPhone);
                setStatus(json.status);

                let data = {
                    allCourses: json.courses,
                    selectedCourse: json.coursesId
                }
                setCourses(data);
            })
    }

    useEffect(() => {
        getStudentById();
    }, []);

    const [courseList, setCourseList] = useState([]);

    // function getCourseList() {
    //     let courseUrl =  baseUrl +"Course";
    //     fetch(courseUrl)
    //         .then(res => res.json())
    //         .then(json => {
    //             setCourseList(json)
    //         });
    // }

    // useEffect(() => {
    //     getCourseList()
    // }, []);




    return (
        <div className="container vh-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4 text-uppercase fw-bold"> Edit Student </h2>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Student Name</label>
                                            <input type="text" className="form-control" id="name" name='Name'
                                                onChange={(e) => { setStdName(e.target.value) }} value={stdName} placeholder='student name' />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">Student Phone</label>
                                            <input type="text" className="form-control" id="phone" name='Phone'
                                                onChange={(e) => { setStdPhone(e.target.value) }} value={stdPhone} placeholder='student description' />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Student Email</label>
                                    <input type="text" className="form-control" id="email" name='Email'
                                        onChange={(e) => { setStdEmail(e.target.value) }} value={stdEmail} placeholder='student price' />
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="FatherName" className="form-label">Father Name</label>
                                            <input type="text" className="form-control" id="FatherName" name='FatherName'
                                                onChange={(e) => { setFatName(e.target.value) }} value={fatName} placeholder='student description' />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="FatherPhone" className="form-label">Father Phone</label>
                                            <input type="text" className="form-control" id="FatherPhone" name='FatherPhone'
                                                onChange={(e) => { setFatPhone(e.target.value) }} value={fatPhone} placeholder='student description' />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Course Name</label>
                                    <div className="row">
                                        <div className="form-group">
                                            {
                                                courses.allCourses.map((course) => {
                                                    return (
                                                        <label className="form-check-label checkbox-inline me-2" key={course.id}>
                                                            <input checked className="form-check-input me-2" id='courseId' name='courseId' type="checkbox" value={course.id} />{course.courseName}
                                                        </label>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Status" className="form-label">Status</label>
                                    <select className="form-select" id='Status' value={status} name='Status' onChange={(e) => { setStatus(e.target.value) }}>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>
                                <div className="d-grid my-3">
                                    <button type="button" className="btn btn-block btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
