using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Command
{
    public class TireCommand : ICommand
    {
        private readonly Tire _tire;
        private readonly PriceAction _priceAction;
        private readonly int _amount;

        public TireCommand(Tire tire, PriceAction priceAction, int amount)
        {
            _tire = tire;
            _priceAction = priceAction;
            _amount = amount;
        }

        public void Execute()
        {
            if (_priceAction == PriceAction.Increase)
            {
                Console.WriteLine($"Increasing price of the tire by {_amount}");
                _tire.Price += _amount;
            }
            else
            {
                Console.WriteLine($"Decreasing price of the tire by {_amount}");
                _tire.Price -= _amount;
            }
        }
    }
}
