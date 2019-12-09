using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Decorator
{
    public interface ICoffee
    {
        CoffeeInfo GetCoffeeInfo();
        void SaveCoffee();
    }
}
