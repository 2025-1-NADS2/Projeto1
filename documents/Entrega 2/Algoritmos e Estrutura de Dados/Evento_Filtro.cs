using System;
using System.Collections.Generic;

namespace ConsoleApp2
{
    internal class Eventos_Filtro
    {
        public string Nome { get; set; }
        public string Local { get; set; }
        public string Horario { get; set; }
        public DateTime Data { get; set; }
        public double Preco { get; set; }
        public int ID { get; set; }

        private static int proximoID = 1;

        public Eventos_Filtro() { }

        public Eventos_Filtro(string nome, string local, string horario, DateTime data, double preco)
        {
            Nome = nome;
            Local = local;
            Horario = horario;
            Data = data;
            Preco = preco;
            ID = proximoID++;
        }

        public static void CriarEventos(List<Eventos_Filtro> listaEventos)
        {
            string continuar;

            do
            {
                Console.WriteLine("Qual o nome do evento?");
                string nome = Console.ReadLine();

                Console.WriteLine("Qual o local do evento?");
                string local = Console.ReadLine();

                Console.WriteLine("Qual o horário do evento? (Ex: 18:00)");
                string horario = Console.ReadLine();

                Console.WriteLine("Qual a data do evento? (Formato: dd/MM/yyyy)");
                DateTime data;
                while (!DateTime.TryParse(Console.ReadLine(), out data))
                {
                    Console.WriteLine("Data inválida! Tente novamente (Formato: dd/MM/yyyy):");
                }

                Console.WriteLine("Qual o preço do evento?");
                double preco;
                while (!double.TryParse(Console.ReadLine(), out preco))
                {
                    Console.WriteLine("Preço inválido! Tente novamente:");
                }

                var novoEvento = new Eventos_Filtro(nome, local, horario, data, preco);
                listaEventos.Add(novoEvento);

                Console.WriteLine("\nEvento criado com sucesso!");
                Console.WriteLine("Deseja criar outro evento? (s/n)");
                continuar = Console.ReadLine().ToLower();

            } while (continuar == "s");
        }

        public static void FiltrarEventosPor(List<Eventos_Filtro> eventos)
        {
            if (eventos.Count == 0)
            {
                Console.WriteLine("Não há eventos cadastrados para filtrar.");
                return;
            }

            Console.WriteLine("\nEscolha o critério para filtrar os eventos:");
            Console.WriteLine("1 - ID");
            Console.WriteLine("2 - Nome");
            Console.WriteLine("3 - Data");
            Console.WriteLine("4 - Preço");
            Console.Write("Opção: ");
            string escolha = Console.ReadLine();

            // Bubble Sort
            for (int i = 0; i < eventos.Count - 1; i++)
            {
                for (int j = 0; j < eventos.Count - i - 1; j++)
                {
                    bool trocar = false;

                    switch (escolha)
                    {
                        case "1":
                            if (eventos[j].ID > eventos[j + 1].ID) trocar = true;
                            break;
                        case "2":
                            if (string.Compare(eventos[j].Nome, eventos[j + 1].Nome) > 0) trocar = true;
                            break;
                        case "3":
                            if (eventos[j].Data > eventos[j + 1].Data) trocar = true;
                            break;
                        case "4":
                            if (eventos[j].Preco > eventos[j + 1].Preco) trocar = true;
                            break;
                        default:
                            Console.WriteLine("Opção inválida.");
                            return;
                    }

                    if (trocar)
                    {
                        var temp = eventos[j];
                        eventos[j] = eventos[j + 1];
                        eventos[j + 1] = temp;
                    }
                }
            }

            Console.WriteLine("\n--- Eventos ordenados ---");
            foreach (var evento in eventos)
            {
                Console.WriteLine($"\nID: {evento.ID}");
                Console.WriteLine($"Nome: {evento.Nome}");
                Console.WriteLine($"Local: {evento.Local}");
                Console.WriteLine($"Horário: {evento.Horario}");
                Console.WriteLine($"Data: {evento.Data.ToShortDateString()}");
                Console.WriteLine($"Preço: R$ {evento.Preco:F2}");
            }
        }
    }
}
