using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Decorator
{
    public class MilkCoffee : ICoffee
    {
        private readonly Coffee _coffee;

        public MilkCoffee(Coffee coffee)
        {
            _coffee = coffee;
        }

        public CoffeeInfo GetCoffeeInfo()
        {
            var coffeeInfo = _coffee.GetCoffeeInfo();
            return new MilkCoffeeInfo
            {
                Name = coffeeInfo.Name + "+Milk",
                Price = coffeeInfo.Price + 5,
                HasMilk = true
            };
        }

        public void SaveCoffee()
        {
            _coffee.SaveCoffee();
            Console.WriteLine("Saving extra info about milk in coffee!");
        }
    }
}
