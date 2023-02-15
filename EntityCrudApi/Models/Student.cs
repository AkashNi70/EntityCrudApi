namespace EntityCrudApi.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string FatherName { get; set; }
        public string FatherPhone { get; set;}
        public bool Status { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTime Updated { get; set; } = DateTime.UtcNow;
        public IEnumerable<Course> Courses { get; set; }

    }
}
