import Index from './components/Index';
import { Route, Routes } from 'react-router-dom';
import CourseList from './components/course/CourseList';
import AddCourse from './components/course/AddCourse';
import StudentList from './components/students/StudentList';
import AddStudent from './components/students/AddStudent';
import EditStudent from './components/students/EditStudent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/course-list' element={<CourseList/>}></Route>
        <Route path='/add-course' element={<AddCourse/>}></Route>
        <Route path='/student-list' element={<StudentList/>}></Route>
        <Route path='/add-student' element={<AddStudent/>}></Route>
        <Route path='/edit-student/:id' element={<EditStudent/>}></Route>
      </Routes>
    </>
  );
}

export default App;
