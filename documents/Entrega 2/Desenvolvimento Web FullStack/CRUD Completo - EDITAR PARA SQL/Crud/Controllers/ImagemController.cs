using Crud.Models;
using Microsoft.AspNetCore.Mvc;


[ApiController]
[Route("api/[controller]")]
public class ImagemController : ControllerBase
{
    private static List<Imagem> imagens = new List<Imagem>();
    private static int nextId = 1; 

    [HttpPost]
    public IActionResult CriarImagem([FromBody] Imagem novaImagem)
    {
        novaImagem.IdImagem = nextId++;  
        novaImagem.UploadImagem = DateTime.Now;  
        imagens.Add(novaImagem);
        return CreatedAtAction(nameof(ObterImagem), new { id = novaImagem.IdImagem }, novaImagem);
    }

    [HttpGet]
    public IActionResult ObterImagens()
    {
        return Ok(imagens);
    }

    [HttpGet("{id}")]
    public IActionResult ObterImagem(int id)
    {
        var imagem = imagens.FirstOrDefault(i => i.IdImagem == id);
        if (imagem == null)
            return NotFound();

        return Ok(imagem);
    }


    [HttpPut("{id}")]
    public IActionResult AtualizarImagem(int id, [FromBody] Imagem imagemAtualizada)
    {
        var imagem = imagens.FirstOrDefault(i => i.IdImagem == id);
        if (imagem == null)
            return NotFound();

        imagem.NomeArquivo = imagemAtualizada.NomeArquivo;
        imagem.CaminhoImagem = imagemAtualizada.CaminhoImagem;
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult ExcluirImagem(int id)
    {
        var imagem = imagens.FirstOrDefault(i => i.IdImagem == id);
        if (imagem == null)
            return NotFound();

        imagens.Remove(imagem);
        return NoContent();  
    }
}
