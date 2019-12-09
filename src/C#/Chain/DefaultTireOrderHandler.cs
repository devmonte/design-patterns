using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Chain
{
    public class DefaultTireOrderHandler : TireOrderHandler
    {
        public override void ProcessOrder(TireOrder order)
        {
            Console.WriteLine($"Processing order for tire: {order.Name}");
            Console.WriteLine("Checking warehouse!...");
            Next?.ProcessOrder(order);
        }

    }
}
