using Crud.Models;

public class Administrador
{
    public required int  IdAdmin { get; set; }
    public required int IdUsuario { get; set; }
    public required string Cargo { get; set; }

    // Relacionamento com a classe Usuario
    //public Usuario Usuario { get; set; }
}