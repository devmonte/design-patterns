using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Chain
{
    public class RacingTireOrderHandler : TireOrderHandler
    {
        public override void ProcessOrder(TireOrder order)
        {
            if (order.TireType == TireType.Racing)
            {
                Console.WriteLine("Handling order for racing tire!");
            }
            Next?.ProcessOrder(order);
        }

    }
}
