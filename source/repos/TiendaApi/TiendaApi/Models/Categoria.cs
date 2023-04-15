using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace TiendaApi.Models
{
    public class Categoria
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public String Nombre { get; set; }
        [JsonIgnore]
        public ICollection<Articulo> Articulos { get; set; } = new List<Articulo>();
    }
}

