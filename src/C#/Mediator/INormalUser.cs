using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Mediator
{
    public interface INormalUser : IUser
    {
        void ChangeSubscription();
    }
}
