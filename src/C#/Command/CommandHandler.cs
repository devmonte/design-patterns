using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPatterns.Command
{
    public class CommandHandler
    {
        public void Process(ICommand command)
        {
            Console.WriteLine("Do some logic before executing the command!");
            command.Execute();
        }
        
    }
}
