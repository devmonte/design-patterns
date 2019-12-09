using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.SimpleObserver
{
    public interface ICryptoCurrency
    {
        void Attach(IMarketBroker broker);
        void Dettach(IMarketBroker broker);
        void Notify();
        ICurrencyInfo CurrentValue { get; set; }
    }
}
