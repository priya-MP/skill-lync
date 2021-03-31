using System;
using System.Collections.Generic;

namespace creating_list
{
    class clgstudents
    {
        public static void Main()
        {
            students std1 = new students()
                {
                    name = "priya",
                    regno = 8000,
                    CGPA = 8.25,
                    percentage = 80

                };
            students std2 = new students()
                {
                    name = "poorni",
                    regno = 8001,
                    CGPA = 7.25,
                    percentage = 70

                };
            students std3 = new students()
                {
                    name = "kiran",
                    regno = 8002,
                    CGPA = 7.55,
                    percentage = 70 

                };
            students std4 = new students()
                {
                    name = "promod",
                    regno = 8003,
                    CGPA = 9.2,
                    percentage = 90

                };
            List<students> liststds= new List<students>();
            
            liststds.Add(std1);
            liststds.Add(std2);
            liststds.Add(std3);
            liststds.Add(std4);
            foreach (students S in liststds)
            {
                  Console.WriteLine("name = {1}, regno = {1}, CGPA= {2}, percentage = {3}",
                       S.name, S.regno, S.CGPA, S.percentage);
                // Console.WriteLine(S.name);
                //  Console.WriteLine(S.regno);
                //  Console.WriteLine(S.CGPA);
                //  Console.WriteLine(S.percentage);
            }

        }
        public class students
        {
            public string name {get ; set;}
            public int regno {get ; set ;}
             public double CGPA{get ; set ;}
            public int percentage {get ; set ;}
        }
        //  public class civil
        // {
        //     public string name {get ; set;}
        //     public int marks {get ; set ;}      
        //     public int percentage {get ; set ;}
        // }
    }
}
