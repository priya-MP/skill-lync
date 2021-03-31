using System;

namespace polyanu
{
    class Program
    {
         public class priya3
        {
            public void jump()
            {
                Console.WriteLine("high jump");
            }
            public void jump(string person)
            {
                Console.WriteLine("low jump");
            }
          public void jump(string person ,int distance)
         {
                  if (person=="low " && distance==100)
            {
                 Console.WriteLine("low jump");
            }
                 else if (person=="high"&& distance==300)
            {
                Console.WriteLine("high jump");
            }
                else
            {
            Console.WriteLine(" running");
            }
         }
        public static void Main()
           {
            priya3 p=new priya3();
            p.jump();
            p.jump("jumping");
            p.jump("jumping",300);
           }
       }
    }
}
