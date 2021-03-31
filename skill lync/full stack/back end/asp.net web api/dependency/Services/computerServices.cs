using System.Collections.Generic;
using dependency.Model;


namespace dependency.Services
{
    public class computerServices
    {
        List<Computer> _computerList= new List<Computer>();
        public computerServices()
        {

        }
        public List<Computer> GetComputers()   // List<Computer> is list of computers...// this is for getting
        {
            return  _computerList;
        }
        public void AddComputer(Computer computer)
        {
             _computerList.Add(computer);
        }

    }
}