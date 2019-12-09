using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Chain
{
    public class TireOrder
    {
        public string Name { get; set; }
        public TireType TireType { get; set; }
    }

    public enum TireType
    {
        Winter,
        Summer,
        Racing
    }
}
