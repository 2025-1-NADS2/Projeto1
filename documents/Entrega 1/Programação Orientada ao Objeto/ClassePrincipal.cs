class PaginaDeEventos
{
    protected Evento[] eventos = new Evento[0];

    //MÉTODO PARA ADICIONAR UM EVENTO À PÁGINA DE EVENTOS
    public void AdicionarEvento(Evento evento)
    {
        Evento[] NovoEvento = new Evento[eventos.Length + 1]; //CRIANDO UM ARRAY MAIOR PARA COMPORTAR OS EVENTOS
        for (int i = 0; i < eventos.Length; i++) //ENQUANTO I FOR MENOR QUE O TAMANHO DA ARRAY, UM EVENTO NOVO SERÁ CRIADO
        {
            NovoEvento[i] = eventos[i];
        }
        NovoEvento[eventos.Length] = evento; //ADICIONA NOVO EVENTO À ÚLTIMA POSIÇÃO
        eventos = NovoEvento; //ATUALIZA A REFERÊNCIA DA ARRAY "EVENTOS" PARA A NOVA ARRAY "NOVOEVENTO"
    }

    //MÉTODO PARA EXIBIR UM EVENTO
    public void ExibirEventos()
    {
        Console.WriteLine("\nEVENTOS DISPONÍVEIS\n");
        for (int i = 0; i < eventos.Length; i++) //ENQUANTO I FOR MENOS QUE O TAMANHO DA ARRAY, UM EVENTO NOVO SERÁ EXIBIDO
        {
            Miniatura miniatura = new Miniatura(eventos[i].GetNome(), eventos[i].GetLocal(), eventos[i].GetDescricao(), eventos[i].GetPreco(), eventos[i].GetImagens(), eventos[i].GetHorario());
            miniatura.ExibirMiniatura(); //CRIANDO UM OBJETO "miniatura" DA CLASSE MINIATURA (AINDA NÃO IMPLEMENTADA) PARA EXIBIR AS INFORMAÇÕES DO EVENTO
        }
    }
}
