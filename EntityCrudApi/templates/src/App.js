import Index from './components/Index';
import { Route, Routes } from 'react-router-dom';
import CourseList from './components/course/CourseList';
import AddCourse from './components/course/AddCourse';
import StudentList from './components/students/StudentList';
import AddStudent from './components/students/AddStudent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/course-list' element={<CourseList/>}></Route>
        <Route path='/add-course' element={<AddCourse/>}></Route>
        <Route path='/student-list' element={<StudentList/>}></Route>
        <Route path='//add-student' element={<AddStudent/>}></Route>
      </Routes>
    </>
  );
}

export default App;
