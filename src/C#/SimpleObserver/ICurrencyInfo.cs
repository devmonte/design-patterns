using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.SimpleObserver
{
    public interface ICurrencyInfo
    {
        double CurrentValue { get; set; }
        DateTime ChangeDateTime { get; set; }
    }
}
