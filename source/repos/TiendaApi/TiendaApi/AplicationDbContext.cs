using Microsoft.EntityFrameworkCore;
using TiendaApi.Models;

namespace TiendaApi
{
    public class AplicationDbContext : DbContext
    {
        public DbSet<Articulo> Articulo { get; set; }

        public DbSet<Carrito> Carrito { get; set; }
        public DbSet<Categoria> Categoria { get; set; }

        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        { }

         /*   public ApliactionDbContext(DbContextOptions<ApliactionDbContext> options) : base(options)
        { }*/

    }
}
