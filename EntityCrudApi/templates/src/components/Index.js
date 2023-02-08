import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div className="container vh-100">
		<div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-3"></div>
            <div className="col-md-3">
                <div className="card p-3 border-primary">
                    <div className="card-body text-center">
                        <h3 className="card-title">Course</h3>
                        <Link to="/course-list" className="btn btn-primary text-white mt-3">Go to Course</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card p-3 border-primary">
                    <div className="card-body text-center">
                        <h3 className="card-title">Student</h3>
                        <Link to="/student-list" className="btn btn-primary text-white mt-3">Go to Student</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    </div>
  )
}
