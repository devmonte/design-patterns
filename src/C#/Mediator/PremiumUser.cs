using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Mediator
{
    public class PremiumUser : IUser
    {
        private readonly IMediator _mediator;

        public PremiumUser(IMediator mediator)
        {
            _mediator = mediator;
        }

        public void SendMessage()
        {
            _mediator.Send(this, new UserMessage { Author = "Premium User" });
        }

        public void Receive(UserMessage message)
        {
            Console.WriteLine($"Received message from {message.Author} with content: {message.Content} at {DateTime.Now}");
        }
    }
}
