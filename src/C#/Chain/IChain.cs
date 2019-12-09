using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Chain
{
    public abstract class TireOrderHandler
    {
        protected TireOrderHandler Next;

        public void SetNextHandler(TireOrderHandler next)
        {
            Next = next;
        }

        public abstract void ProcessOrder(TireOrder order);
    }
}
