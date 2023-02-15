using Microsoft.EntityFrameworkCore;

namespace EntityCrudApi.Models
{
    public class DBConnectEntites : DbContext
    {
        public DBConnectEntites(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Course> Courses { get; set; }
        public DbSet<Student> Students { get; set; }

    }
}
