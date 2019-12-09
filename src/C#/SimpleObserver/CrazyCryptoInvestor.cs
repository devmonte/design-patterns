using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.SimpleObserver
{
    public class CrazyCryptoInvestor : IMarketBroker
    {
        public void Update(ICurrencyInfo info)
        {
            Console.WriteLine($"OMG current value of X is: {info.CurrentValue}! I will buy all of it!");
        }
    }
}
