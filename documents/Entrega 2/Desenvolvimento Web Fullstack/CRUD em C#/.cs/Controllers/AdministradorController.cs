using Crud.Models;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AdministradorController : ControllerBase
{
    private static List<Administrador> Administrador = new List<Administrador>();
    private static int nextId = 1;

    [HttpPost]
    public IActionResult CriarAdministrador([FromBody] Administrador novoAdministrador)
    {
        novoAdministrador.IdAdmin = nextId++;
        Administrador.Add(novoAdministrador);
        return CreatedAtAction(nameof(ObterAdministrador), new { id = novoAdministrador.IdAdmin }, novoAdministrador);
    }

    [HttpGet]
    public IActionResult ListarAdministradores()
    {
        return Ok(Administrador);
    }

    [HttpGet("{id}")]
    public IActionResult ObterAdministrador(int id)
    {
        var administrador = Administrador.FirstOrDefault(u => u.IdAdmin == id);
        if (Administrador == null)
            return NotFound();

        return Ok(Administrador);
    }

    [HttpPut("{id}")]
    public IActionResult AtualizarAdministrador(int id, [FromBody] Administrador AdministradorAtualizado)
    {
        var administrador = Administrador.FirstOrDefault(u => u.IdAdmin == id);
        if (administrador == null)
            return NotFound();

        administrador.IdAdmin = AdministradorAtualizado.IdAdmin;
        administrador.IdUsuario = AdministradorAtualizado.IdUsuario;
        administrador.Cargo = AdministradorAtualizado.Cargo;
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeletarAdministrador(int id)
    {
        var administrador = Administrador.FirstOrDefault(u => u.IdAdmin == id);
        if (administrador == null)
            return NotFound();

        Administrador.Remove(administrador);
        return NoContent();
    }
}