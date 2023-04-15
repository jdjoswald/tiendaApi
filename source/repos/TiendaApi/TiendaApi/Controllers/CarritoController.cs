using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TiendaApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TiendaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarritoController : ControllerBase
    {
        private readonly AplicationDbContext _context;
        public CarritoController(AplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/<CarritoController>
        [HttpGet]
        [EnableCors("CorsPolicy")]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listArticulos = await _context.Carrito.Include(a => a.Articulo).ToListAsync();
                return Ok(listArticulos);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<CarritoController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CarritoController>
        [HttpPost]
        [EnableCors("CorsPolicy")]
        public async Task<IActionResult> Post([FromBody] Carrito value)
        {
             try
            {
                Articulo art = await _context.Articulo.FindAsync(value.Articulo.Id);
                Carrito car = new Carrito();
                if (art!= null) {
                    car = new Carrito {
                        Cantidad = 1,
                        ArticuloId = art.Id,
                        Articulo= art
                    
                    };


                }
                else
                {
                    return NotFound();
                }

                 var listArticulos = await _context.Carrito.Include(a => a.Articulo).ToListAsync();
                 var encontrado = false;


               
                foreach (var articuloCarrito in listArticulos)
                {
                    Console.WriteLine(art.Id + " art");
                    Console.WriteLine(articuloCarrito.Articulo.Id + " carrito");
                    if (articuloCarrito.Articulo.Id == art.Id)
                    {
                        // Si el artículo ya está en el carrito, aumentar la cantidad en 1
                        articuloCarrito.Cantidad++;
                        encontrado = true;
                        break;
                    }
                }

                if (!encontrado)
                {
                    // Si el artículo no está en el carrito, agregarlo con cantidad 1
                    _context.Carrito.Add(car);
                }

                

                await _context.SaveChangesAsync();
                return Ok(car);



            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<CarritoController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CarritoController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        [HttpDelete("eliminarCarrito/{id}")]
        public async Task<bool> EliminarDelCarrito(int id)
        {
            var carrito = await _context.Carrito.SingleOrDefaultAsync(c => c.ArticuloId == id);
            if (carrito != null)
            {
                if (carrito.Cantidad > 1)
                {
                    carrito.Cantidad -= 1;
                    await _context.SaveChangesAsync();
                }
                else
                {
                    _context.Carrito.Remove(carrito);
                    await _context.SaveChangesAsync();
                }
                return true;
            }
            else
            {
                return false;
            }
        }

        [HttpDelete("eliminarCarritoTodo")]
        public async Task<IActionResult> BorrarTodo()
        {
            try
            {
                var listArticulos = await _context.Carrito.ToListAsync();
                _context.Carrito.RemoveRange(listArticulos);
                await _context.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
