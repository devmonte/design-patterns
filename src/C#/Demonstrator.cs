using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DesignPatterns.Mediator;

namespace DesignPatterns
{
    public class Demonstrator
    {
        public static void ShowMediator()
        {
            var mediator = new SimpleMediator();
            var normalUser = new NormalUser(mediator);
            var premiumUser = new PremiumUser(mediator);
            mediator.AddUser(normalUser);
            mediator.AddUser(premiumUser);

            normalUser.ChangeSubscription();
        }
    }
}
