using System;

namespace ovrrde
{
    class Program
    {

        public class dairy
        {
            public virtual void writing1()  //baseclass
            {
                Console.WriteLine("Happy memories");
            }
        }
        public class story : dairy //derivedclass
        {
            public override void writing1()
            {
                Console.WriteLine("Sad memories");

            }
        }
        public class sample
        {

            public static void Main()
            {
                //calling from overhidden class
                story s = new story();
                s.writing1();
                //giving for baseclass

                dairy d = (dairy)s;
                d.writing1();
            }
        }

    }
}
