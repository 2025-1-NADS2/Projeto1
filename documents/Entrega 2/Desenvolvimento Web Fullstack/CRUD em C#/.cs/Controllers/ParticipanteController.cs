using Crud.Models;
using Microsoft.AspNetCore.Mvc;


namespace Crud.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ParticipanteController : ControllerBase
    {

        private static List<Participante> participantes = new List<Participante>();
        private static int nextId = 1;


        [HttpPost]
        public IActionResult CriarParticipante([FromBody] Participante novoParticipante)
        {

            novoParticipante.IdParticipante = nextId++;


            participantes.Add(novoParticipante);

            return CreatedAtAction(nameof(ObterParticipante), new { id = novoParticipante.IdParticipante }, novoParticipante);
        }


        [HttpGet]
        public IActionResult ObterParticipantes()
        {
            return Ok(participantes);
        }


        [HttpGet("{id}")]
        public IActionResult ObterParticipante(int id)
        {
            var participante = participantes.FirstOrDefault(p => p.IdParticipante == id);
            if (participante == null)
                return NotFound();

            return Ok(participante);
        }


        [HttpPut("{id}")]
        public IActionResult AtualizarParticipante(int id, [FromBody] Participante participanteAtualizado)
        {
            var participante = participantes.FirstOrDefault(p => p.IdParticipante == id);
            if (participante == null)
                return NotFound();

            participante.IdUsuario = participanteAtualizado.IdUsuario;
            participante.TipoIngresso = participanteAtualizado.TipoIngresso;

            return NoContent(); 
        }

        [HttpDelete("{id}")]
        public IActionResult ExcluirParticipante(int id)
        {
            var participante = participantes.FirstOrDefault(p => p.IdParticipante == id);
            if (participante == null)
                return NotFound();

            participantes.Remove(participante);
            return NoContent(); 
        }
    }
}
