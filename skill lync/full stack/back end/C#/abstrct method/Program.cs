using System;

namespace abstrct_method
{
    class Program
    {
       public abstract class purchase
       {
           public void dress()
           {
               Console.WriteLine("purchase chudi");
           }
           public abstract void dress1();
       }
       public class theatre : purchase
       {
           public void vijay()
           {
               Console.WriteLine("Master movei");
           }
           public override void dress1()
           {
                Console.WriteLine("purchase saree");
           }
       }
       public static void Main()
       {
           theatre t = new theatre();
           t.vijay();
           t.dress1();
           t.dress();

       }
    }
}
