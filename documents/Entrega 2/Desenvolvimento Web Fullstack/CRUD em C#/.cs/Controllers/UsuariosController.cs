using Crud.Models;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class UsuariosController : ControllerBase
{
    private static List<Usuario> usuarios = new List<Usuario>();
    private static int nextId = 1;

    [HttpPost]
    public IActionResult CriarUsuario([FromBody] Usuario novoUsuario)
    {
        novoUsuario.IdUsuario = nextId++;
        usuarios.Add(novoUsuario);
        return CreatedAtAction(nameof(ObterUsuario), new { id = novoUsuario.IdUsuario }, novoUsuario);
    }

    [HttpGet]
    public IActionResult ListarUsuarios()
    {
        return Ok(usuarios);
    }

    [HttpGet("{id}")]
    public IActionResult ObterUsuario(int id)
    {
        var usuario = usuarios.FirstOrDefault(u => u.IdUsuario == id);
        if (usuario == null)
            return NotFound();

        return Ok(usuario);
    }

    [HttpPut("{id}")]
    public IActionResult AtualizarUsuario(int id, [FromBody] Usuario usuarioAtualizado)
    {
        var usuario = usuarios.FirstOrDefault(u => u.IdUsuario == id);
        if (usuario == null)
            return NotFound();

        usuario.NomeUsuario = usuarioAtualizado.NomeUsuario;
        usuario.SobrenomeUsuario = usuarioAtualizado.SobrenomeUsuario;
        usuario.Senha = usuarioAtualizado.Senha;
        usuario.Telefone = usuarioAtualizado.Telefone;
        usuario.Cpf = usuarioAtualizado.Cpf;
        usuario.Email = usuarioAtualizado.Email;

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeletarUsuario(int id)
    {
        var usuario = usuarios.FirstOrDefault(u => u.IdUsuario == id);
        if (usuario == null)
            return NotFound();

        usuarios.Remove(usuario);
        return NoContent();
    }
}
