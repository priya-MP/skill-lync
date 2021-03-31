using System;

namespace method1
{
    class Program
    {
     public abstract class vp
       {
           public void name()
           {
               Console.WriteLine("vasanthipriya");
           }
           public void course()
           {
               Console.WriteLine("full stack development");
           }
           
           public abstract void prsnldtls();
       }
       public class working : vp
       {
           public void fresher()
           {
               Console.WriteLine("yes im fresher .. not a employe");
           }
           public void training()
           {
                Console.WriteLine("training in skill lync");
           }
           public override void prsnldtls()
           {
               Console.WriteLine("completed B.E (cse)in AKTMCET");
           }

       }
       public static void Main()
       {
           working w = new working();
          w.fresher();
           w.training();
           w.course();
           w.name();
            w.prsnldtls();
        }
    }
}
