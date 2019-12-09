using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Chain
{
    public class SummerTireOrderHandler : TireOrderHandler
    {
        public override void ProcessOrder(TireOrder order)
        {
            if (order.TireType == TireType.Summer)
            {
                Console.WriteLine("Handling order for summer tire!");
            }
            Next?.ProcessOrder(order);
        }

    }
}
