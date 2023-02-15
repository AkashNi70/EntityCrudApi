namespace EntityCrudApi.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string CourseName { get; set; }
        public string CourseDescription { get;set; }
        public double Price { get; set; }
        public bool Status { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTime Updated { get; set; } = DateTime.UtcNow;
        public IEnumerable<Student> Students { get; set; }

    }
}
