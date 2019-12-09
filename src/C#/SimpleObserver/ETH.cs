using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.SimpleObserver
{
    public class ETH
    {
        private ICurrencyInfo _currentValue;
        private readonly List<IMarketBroker> _observers = new List<IMarketBroker>();
        
        public ETH(ICurrencyInfo currentValue)
        {
            _currentValue = currentValue;
        }

        public void Attach(IMarketBroker broker)
        {
            _observers.Add(broker);
        }

        public void Dettach(IMarketBroker broker)
        {
            _observers.Remove(broker);
        }

        public void Notify()
        {
            foreach (var observer in _observers)
            {
                observer.Update(_currentValue);
            }
        }

        public ICurrencyInfo CurrentValue
        {
            get { return _currentValue; }
            set
            {
                if (_currentValue != value)
                {
                    _currentValue = value;
                    Notify();
                }
            }
        }
    }
}
