namespace EntityCrudApi.VIewModels
{
    public class AddStudentModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string FatherName { get; set; }
        public string FatherPhone { get; set; }
        public bool Status { get; set; }
        public int[] coursesId { get; set; }
    }
}
