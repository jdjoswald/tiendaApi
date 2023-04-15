using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace TiendaApi.Models
{
    public class Articulo
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public String Nombre { get; set; }
        [Required]
        public int Cantidad { get; set; }
        [Required]
        public int Precio { get; set; }
        [Required]
        public String Imagen { get; set; }
        
        public String Descripcion { get; set; }
        [Required]
        public int CategoriaId { get; set; }

        [ForeignKey("CategoriaId")]
        public Categoria Categoria { get; set; }

    }
}
