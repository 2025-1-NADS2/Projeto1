using System;
using System.Collections.Generic;
using ConsoleApp2;

namespace ConsoleApp2App
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Eventos_Filtro> listaEventos = new List<Eventos_Filtro>();
            string opcao;

            do
            {
                Console.Clear();
                Console.WriteLine("=== Gerenciador de Eventos ===");
                Console.WriteLine("1 - Criar novo evento");
                Console.WriteLine("2 - Listar todos os eventos");
                Console.WriteLine("3 - Filtrar eventos (ordenar)");
                Console.WriteLine("0 - Sair");
                Console.Write("Escolha uma opção: ");
                opcao = Console.ReadLine();

                switch (opcao)
                {
                    case "1":
                        Console.Clear();
                        Eventos_Filtro.CriarEventos(listaEventos);
                        break;

                    case "2":
                        Console.Clear();
                        if (listaEventos.Count == 0)
                        {
                            Console.WriteLine("Nenhum evento cadastrado.");
                        }
                        else
                        {
                            Console.WriteLine("--- Lista de Todos os Eventos ---");
                            foreach (var evento in listaEventos)
                            {
                                Console.WriteLine($"\nID: {evento.ID}");
                                Console.WriteLine($"Nome: {evento.Nome}");
                                Console.WriteLine($"Local: {evento.Local}");
                                Console.WriteLine($"Horário: {evento.Horario}");
                                Console.WriteLine($"Data: {evento.Data.ToShortDateString()}");
                                Console.WriteLine($"Preço: R$ {evento.Preco:F2}");
                            }
                        }
                        Console.WriteLine("\nPressione qualquer tecla para continuar...");
                        Console.ReadKey();
                        break;

                    case "3":
                        Console.Clear();
                        Eventos_Filtro.FiltrarEventosPor(listaEventos);
                        Console.WriteLine("\nPressione qualquer tecla para continuar...");
                        Console.ReadKey();
                        break;

                    case "0":
                        Console.WriteLine("Saindo...");
                        break;

                    default:
                        Console.WriteLine("Opção inválida! Tente novamente.");
                        Console.ReadKey();
                        break;
                }

            } while (opcao != "0");
        }
    }
}
