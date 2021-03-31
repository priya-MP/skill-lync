using System;

namespace inheritance1
{
    class Program
    {
        public class write
       {
           public void story()
           {
               Console.WriteLine("writing story");
           }
           public void songlyrics()
           {
                Console.WriteLine("writing songlyrics");
           }
        }
       public class read : write
       {
           public void books()
           {
               Console.WriteLine("reading books");
           }
       }
       public static void Main()
       {
           write w = new write();
           w.story();
           w.songlyrics();
           read r = new read();
           r.books();
           r.story();
           r.songlyrics();
       }
    }
}
