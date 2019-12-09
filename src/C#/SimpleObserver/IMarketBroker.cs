using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.SimpleObserver
{
    public interface IMarketBroker
    {
        void Update(ICurrencyInfo info);
    }
}
