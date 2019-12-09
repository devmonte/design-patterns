using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Decorator
{
    public class Coffee : ICoffee
    {
        private readonly string _name;
        private readonly int _price;

        public Coffee(string name, int price)
        {
            _name = name;
            _price = price;
        }

        public CoffeeInfo GetCoffeeInfo()
        {
            return new CoffeeInfo
            {
                Name = _name,
                Price = _price
            };
        }

        public void SaveCoffee()
        {
            Console.WriteLine("Saving coffee for no reason at all!");
        }
    }
}
