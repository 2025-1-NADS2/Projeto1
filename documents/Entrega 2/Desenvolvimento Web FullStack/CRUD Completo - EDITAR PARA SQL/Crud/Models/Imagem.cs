using Crud.Models;

public class Imagem
{
      public required int IdImagem { get; set; }
      public required string NomeArquivo { get; set; }
      public required string CaminhoImagem { get; set; }

        public DateTime UploadImagem { get; set; }
 
}