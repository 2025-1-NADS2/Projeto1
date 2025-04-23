public class Evento
{
    public required int IdEvento { get; set; }
    public required int? IdAdmin { get; set; }
    public required string NomeEvento { get; set; }
    public required string Preco { get; set; }

    public  DateTime DataHora { get; set; }
    public required string Endereco { get; set; }
    public required string Descricao { get; set; }
    public required string Organizadores { get; set; }

    // Relacionamento com a classe Administrador
    //public Administrador Administrador { get; set; }
}