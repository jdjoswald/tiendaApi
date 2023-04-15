using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TiendaApi.Models;
using static System.Net.Mime.MediaTypeNames;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TiendaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaController : ControllerBase
    {
        private readonly AplicationDbContext _context;
        public CategoriaController(AplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/<CategoriaController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listCategoria = await _context.Categoria.ToListAsync();
                return Ok(listCategoria);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<CategoriaController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {

                var categoria = await _context.Categoria.FindAsync(id);
                if (categoria == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(categoria);
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<CategoriaController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Categoria categoria)
        {
            try
            {
                categoria.Articulos = new List<Articulo>();
                var listCategoria = await _context.Categoria.ToListAsync();
                Boolean duplicado = false;
                foreach (Categoria cat in listCategoria)
                {
                    Console.WriteLine(cat.Nombre);
                    if (cat.Nombre.Equals(categoria.Nombre, StringComparison.InvariantCultureIgnoreCase))
                    { duplicado = true; }
                        
                   
                }
                if (duplicado == false)
                {
                    _context.Add(categoria);
                    await _context.SaveChangesAsync();
                    return Ok(categoria);
                }
                else {
                    return BadRequest("Categoria ya existe");
                }
               



            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<CategoriaController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CategoriaController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var categoria = await _context.Categoria.FindAsync(id);
                if (categoria == null) { return NotFound(); }
                else
                {
                    _context.Categoria.Remove(categoria);
                    await _context.SaveChangesAsync();
                    return Ok(new { message = "dato eliminado" });

                }





            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
