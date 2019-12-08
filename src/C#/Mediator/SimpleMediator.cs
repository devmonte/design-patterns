using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Mediator
{
    public class SimpleMediator : IMediator
    {
        private readonly List<IUser> _users = new List<IUser>();

        public SimpleMediator()
        {
                
        }

        public void AddUser(IUser user)
        {
            _users.Add(user);
        }

        public void Send(IUser caller, UserMessage message)
        {
            foreach (var user in _users.Where(x => x != caller))
            {
                user.Receive(message);
            }
        }
    }
}
