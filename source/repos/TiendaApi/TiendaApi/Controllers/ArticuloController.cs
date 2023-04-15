using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TiendaApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TiendaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticuloController : ControllerBase
    {

        private readonly AplicationDbContext _context;
        private readonly CarritoController _carritoController;
        public ArticuloController(AplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/<ArticuloController>
        [HttpGet]
        [EnableCors("CorsPolicy")]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listArticulos = await _context.Articulo.Include(a => a.Categoria).ToListAsync();
                return Ok(listArticulos);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<ArticuloController>/5
        [HttpGet("{id}")]
        [EnableCors("CorsPolicy")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {

                var articulo = await _context.Articulo.FindAsync(id);
                if (articulo == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(articulo);
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<ArticuloController>
        [HttpPost]
        [EnableCors("CorsPolicy")]
        public async Task<IActionResult> Post([FromBody] Articulo value)
        {
            try
            {
                Categoria cat = await _context.Categoria.FindAsync(value.CategoriaId);
                Articulo articulo = new Articulo { };
                if (cat != null)
                {
                     articulo = new Articulo
                    {


                        Nombre = value.Nombre,
                        Cantidad = value.Cantidad,
                        Precio = value.Precio,
                        Imagen = value.Imagen,
                         Descripcion = value.Descripcion,
                         Categoria = cat
                        


                    };
                }
                else {
                    return NotFound();
                }
               
                
                _context.Add(articulo);
                await _context.SaveChangesAsync();
                return Ok(value);



            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<ArticuloController>/5
        [HttpPut("{id}")]
        [EnableCors("CorsPolicy")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ArticuloController>/5
        [HttpDelete("{id}")]
        [EnableCors("CorsPolicy")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var art = await _context.Articulo.FindAsync(id);
                if (art == null) { return NotFound(); }
                else
                {
                    _context.Articulo.Remove(art);
                    await _context.SaveChangesAsync();
                    return Ok(new { message = "dato eliminado" });

                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("{id}/decrementar-cantidad/{cantidad}")]
        [EnableCors("CorsPolicy")]
        public async Task<IActionResult> DecrementarCantidad(int id, int cantidad)
        {
            var articulo = await _context.Articulo.FindAsync(id);
            if (articulo == null)
            {
                return NotFound();
            }
            if (articulo.Cantidad < cantidad) {
                return BadRequest();
            }

            articulo.Cantidad -= cantidad;

            _context.Entry(articulo).State = EntityState.Modified;
            await _context.SaveChangesAsync();

           
            return Ok(articulo);
        }
        [HttpPut("{id}/aumentar-cantidad/{cantidad}")]
        [EnableCors("CorsPolicy")]
        public async Task<IActionResult> AumentarCantidad(int id, int cantidad)
        {
            var articulo = await _context.Articulo.FindAsync(id);
            if (articulo == null)
            {
                return NotFound();
            }
            

            articulo.Cantidad += cantidad;

            _context.Entry(articulo).State = EntityState.Modified;
            await _context.SaveChangesAsync();


            return Ok(articulo);
        }
    }
}
