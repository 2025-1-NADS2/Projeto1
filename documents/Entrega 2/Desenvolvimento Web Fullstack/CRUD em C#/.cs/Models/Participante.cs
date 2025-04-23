namespace Crud.Models
{
    public class Participante
    {
        public required int IdParticipante { get; set; }
        public required int IdUsuario { get; set; }
        public required string TipoIngresso { get; set; }

        // Relacionamento com a classe Usuario que sera adicionado pelo backend.
        //public Usuario Usuario { get; set; }
    }
}
