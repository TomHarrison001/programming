using System;
using System.Text; // StringBuilder

namespace Inheritance
{
    class Program
    {
        /// XMl Comments
        /// <summary>
        /// This is the main sample application function
        /// </summary>
        /// <param name='args'> An array of string arguments from the command line </param>
        /// <returns>
        /// No return value
        /// </returns>

        static void Main(string[] args)
        {
            Console.WriteLine("hello world");
            // Console.WriteLine("What is your name?");
            // string input = Console.ReadLine();
            // Console.WriteLine("Hello " + input);

            int i = 1;
            float f = 1.0f;
            decimal d = 1.0m;

            var x = 1;

            int[] vals = new int[5];
            string[] strs = { "one", "two", "three" };

            Console.WriteLine("{0}, {1}, {2}", i, f, d);

            float i_to_f = (float)i;

            string str = null;
            Console.WriteLine(str ?? "Unknown string");
            str ??= "New String";
            Console.WriteLine(str);

            Console.WriteLine(String.Concat(strs));
            // string methods: Concat, Join, Compare, Equals, IndexOf, LastIndexOf, Length, Replace

            int val = 1;
            Console.WriteLine("{0:N}, {0:G}, {0:F}, {0:E}", val);
            Console.WriteLine("{0:D}, {0:P}, {0:X}, {0:C}", val);
            Console.WriteLine($"{val} + {val} = {{{val + val}}}");

            StringBuilder sb = new StringBuilder("Initial string.", 200);
            sb.Append($" Capacity: {sb.Capacity}");
            Console.WriteLine(sb.ToString());

            string num = "0.1";
            int target;
            try
            {
                target = int.Parse(num);
            }
            catch (FormatException e)
            {
                Console.WriteLine(e.Message);
            }
            finally
            {
                Console.WriteLine("This always runs.");
            }

            target = 1;
            Console.WriteLine((target == 1) ? "True" : "False");

            switch (target)
            {
                case 1:
                    break;
                default:
                    break;
            }

            for (i = 0; i < 5; i++)
            {
                Console.Write(i);
                if (i == 4) {
                    Console.WriteLine("");
                }
            }

            i = 0;
            while (i < 5)
            {
                Console.Write(i);
                if (i == 4)
                {
                    Console.WriteLine("");
                }
                i++;
            }

            i = 0;
            do
            {
                Console.Write(i);
                if (i == 4)
                {
                    Console.WriteLine("");
                }
                i++;
            } while (i < 5);

            static void Func()
            {
                Console.WriteLine("Function.");
            }

            Func();

            (bool, int) GetStringLength(string str)
            {
                int len = str.Length;
                return (!(len > 0), len);
            }

            (bool empty, int len) result = GetStringLength("Hello");
            Console.WriteLine($"{result.empty} {result.len}");

            // Player p1 = new Player("Rock", 20);
            // Console.WriteLine(p1.GetDescription());

            Mage m1 = new Mage("Rock", 20, 10);
            Console.WriteLine(m1.GetDescription());
        }
    }
}