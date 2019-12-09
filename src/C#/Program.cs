using System;

namespace DesignPatterns
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Console.WriteLine("\n\n Mediator!");
            Demonstrator.ShowMediator();

            Console.WriteLine("\n\n Simple Observer!");

            Demonstrator.ShowSimpleObserver();

            Console.WriteLine("\n\n Chain!");
            Demonstrator.ShowChain();

            Console.WriteLine("\n\n Decorator!");
            Demonstrator.ShowDecorator();

            Console.WriteLine("\n\n Command!");
            Demonstrator.ShowCommand();

            Console.ReadKey();
        }
    }
}
