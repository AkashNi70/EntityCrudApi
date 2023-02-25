using EntityCrudApi.Models;

namespace EntityCrudApi.VIewModels
{
    public class UpdateStudentModel : AddStudentModel
    {
        public int Id { get; set; }
        public IEnumerable<Course> Courses { get; set; }
    }
}
