using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Chain
{
    public class WinterTireOrderHandler : TireOrderHandler
    {
        public override void ProcessOrder(TireOrder order)
        {
            if (order.TireType == TireType.Winter)
            {
                Console.WriteLine("Handling order for winter tire!");
            }
            Next?.ProcessOrder(order);
        }
    }
}
