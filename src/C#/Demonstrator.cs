using DesignPatterns.Mediator;
using DesignPatterns.Observer;

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

        public static void ShowObserver()
        {
            BaggageHandler provider = new BaggageHandler();
            ArrivalsMonitor observer1 = new ArrivalsMonitor("BaggageClaimMonitor1");
            ArrivalsMonitor observer2 = new ArrivalsMonitor("SecurityExit");

            provider.BaggageStatus(712, "Detroit", 3);
            observer1.Subscribe(provider);
            provider.BaggageStatus(712, "Kalamazoo", 3);
            provider.BaggageStatus(400, "New York-Kennedy", 1);
            provider.BaggageStatus(712, "Detroit", 3);
            observer2.Subscribe(provider);
            provider.BaggageStatus(511, "San Francisco", 2);
            provider.BaggageStatus(712);
            observer2.Unsubscribe();
            provider.BaggageStatus(400);
            provider.LastBaggageClaimed();
        }
    }
}
