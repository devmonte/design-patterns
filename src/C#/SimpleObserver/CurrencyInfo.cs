using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.SimpleObserver
{
    public class CurrencyInfo : ICurrencyInfo
    {
        public double CurrentValue { get; set; }
        public DateTime ChangeDateTime { get; set; }
    }
}
