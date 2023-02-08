using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EntityCrudApi.Models;

namespace EntityCrudApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly DBConnectEntites _context;

        public CourseController(DBConnectEntites context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Course> GetCourses()
        {
            return _context.Courses.ToList();
        }

        [HttpGet("{id}")]
        public Course GetCourse(int id)
        {
            var course = _context.Courses.Find(id);
            return course;
        }

        [HttpPut("{id}")]
        public IActionResult PutCourse(int id, Course course)
        {
            if (id != course.Id)
            {
                return BadRequest();
            }

            _context.Update(course);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpPost]
        public ActionResult<Course> PostCourse(Course course)
        {
            _context.Courses.Add(course);
            _context.SaveChanges();

            return CreatedAtAction("GetCourse", new { id = course.Id }, course);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCourse(int id)
        {
            var course = _context.Courses.Find(id);
            if (course == null)
            {
                return NotFound();
            }

            _context.Courses.Remove(course);
            _context.SaveChanges();

            return NoContent();
        }


    }
}
