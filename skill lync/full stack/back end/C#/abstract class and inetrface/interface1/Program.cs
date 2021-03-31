using System;

namespace interface1
{
    class Program
    {
        public static void Main()
        {
            program p = new program(); // object for child class
            p.shopping();
            p.shopping1();
           // p.study();
            p.clinic();
            p.hotel();
            p.theatre();
            p.parlar();
            todayprogram tp = new todayprogram();
           // tp.study();
          //  tp.study("studying");
          //  tp.study("priyo",300);
        }
        public abstract class case1 //abstract class 
        {
            public void parlar()
            {
                Console.WriteLine("facial and hair cut");
            }
            public abstract void theatre(); //abstract method
        }
        interface case2  // interface can have methods...and it can only declared not a defining
        {
            void clinic();
            void hotel();
        }
        public class todayprogram : case1 // inheritance for only abstract 
        {
          
            public todayprogram ()                      //constructor is a method same as class name
            {
                Console.WriteLine("oops concept");
            }
            public override void theatre()
            {
                Console.WriteLine("watching master movei");
            }
            public void study(string person) //poly overloading concept will applied
            {
                Console.WriteLine("java concept");
            }

        
        public void study(string person, int time)
        {
            if (person == "priyo" && time == 100)
            {
                Console.WriteLine("priyo studying 1 hr oops concept");
            }
            else if (person == "anu" && time == 200)
            {
                Console.WriteLine("anu studying 2 hr java concept");
            }
            else
            {
                Console.WriteLine("both are playing");
            }

        }
        }

        public class program : todayprogram, case2 // inheritance for both abstract and interface
        {
            public void shopping()
            {
                Console.WriteLine("buying dressess");
            }
            public void shopping1()
            {
                Console.WriteLine("buying dressess ,mackup things ,snacks and etc....");
            }
            public void clinic()
            {
                Console.WriteLine("buying  medicine");
            }
            public void hotel()
            {
                Console.WriteLine("eating briyani with my friends");
            }

        }
        
    }
}
