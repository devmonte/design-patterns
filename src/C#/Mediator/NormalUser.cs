using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Mediator
{
    public class NormalUser : INormalUser
    {
        private readonly IMediator _mediator;

        public NormalUser(IMediator mediator)
        {
            _mediator = mediator;
        }

        public void SendMessage()
        {
            _mediator.Send(this, new UserMessage { Author = "Normal User" });
        }

        public void Receive(UserMessage message)
        {
            Console.WriteLine($"Received message from {message.Author} with content: {message.Content} at {DateTime.Now}");
        }

        public void ChangeSubscription()
        {
            _mediator.Send(this, new UserMessage { Author = "Normal User", Content = "Subscription change!" });
        }
    }
}
