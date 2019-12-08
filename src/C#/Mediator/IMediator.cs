using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Mediator
{
    public interface IMediator
    {
        void AddUser(IUser user);
        void Send(IUser caller, UserMessage message);
    }
}
