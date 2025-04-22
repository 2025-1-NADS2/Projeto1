namespace Crud.Models
{ 
   public class Usuario
    {
        public required int IdUsuario { get; set; }
        public required string NomeUsuario { get; set; }
        public required string SobrenomeUsuario { get; set; }
        public required string Senha { get; set; }
        public required string Telefone { get; set; }
        public required string Cpf { get; set; }
        public required string Email { get; set; }
    }

}
