using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Phone
{
	class Program
	{
		static void Main(string[] args)
		{
			ShowMessage method = Show;
			Phone x = new CellPhone(1234, 4, method);
			x.Call(12345, "Hello", method);
			x.AddMoney(10, method);
			x.Call(12345, "Hello", method);
			Console.WriteLine ("IS???"+x.IsNumberInBook(12345));
			x.ShowBook ();
			x.Call(12345, "Hello", method);
			Console.ReadLine();
		}

		static void Show(string message)
		{
			Console.WriteLine(message);
		}


	}

	public delegate void ShowMessage (string message);

	class Phone
	{
		protected int account { get; set; }
		protected int myNumber { get; set; }

		Dictionary<int, string> book = new Dictionary<int, string>();

		public Phone(int number, int money, ShowMessage method)
		{
			account = money;
			myNumber = number;
			method(string.Format("Your number: {0}, and money: {1}$", number, money));

		}

		public virtual bool AbleToCall()
		{
			if (account > 5)
			{
				return true;
			}
			else
			{
				return false;
			}
		}

		public bool IsNumberInBook(int number)
		{
			return book.ContainsKey(number);
		}

		public string GetFromBook(int number)
		{
			return book[number];
		}

		public void AddMoney(int money, ShowMessage method)
		{
			account += money;
			method(string.Format("You have {0}$", account));
		}

		public void ShowMoney(ShowMessage method)
		{
			method(string.Format("You have {0}$", account));
		}

		public virtual void Call(int number, string message, ShowMessage method)
		{
			if (AbleToCall ()) 
			{
				if (IsNumberInBook (number)) 
				{
					method(string.Format("You called to {0} and said {1}", GetFromBook (number), message));
					account = account - 2;
				} 
				else 
				{
					method(string.Format("You called to {0} and said {1}", number, message));
					account = account - 1;
					method(string.Format("Would you like to add this number to your book?"));
					string answer = Console.ReadLine ();
					if (answer != "") 
					{
						book.Add (number, answer);
					}
				}
			} 
			else 
			{
				method(string.Format("You don`t have enough money"));
			}
		}

		public void ShowBook()
		{
			foreach (KeyValuePair<int, string> keyValue in book)
			{
				Console.WriteLine(keyValue.Key + " - " + keyValue.Value);
			}
		}

	}

	class CellPhone : Phone
	{
		protected int charchingLevel { get; set; }
		Dictionary<int, string> book = new Dictionary<int, string>();

		public CellPhone(int number, int money, ShowMessage method):base(number, money, method)
		{
			charchingLevel = 100;
			method(string.Format("You have phone, your number {0}, on your account {1}$,  " +
				"and it is fully charger", number, account));
		}

		public override bool AbleToCall()
		{
			if (charchingLevel < 10)
			{
				Console.WriteLine("Too low charching level");
				return false;
			}
			else if (account < 2)
			{
				Console.WriteLine("isn`t enough money");
				return false;
			}
			else
			{
				return true;
			}


		}

		public override void Call(int number, string message, ShowMessage method)
		{
			if (AbleToCall ()) 
			{
				if (IsNumberInBook (number)) 
				{
					method(string.Format("You called to {0} and said {1}", GetFromBook (number), message));
					account = account - 2;
				} 
				else 
				{
					method(string.Format("You called to {0} and said {1}", number, message));
					account = account - 1;
					method(string.Format("Would you like to add this number to your book?"));
					string answer = Console.ReadLine ();
					if (answer != "") 
					{
						book.Add (number, answer);
					}
				}
			} 
			else 
			{
				method(string.Format("You don`t have enough money"));
			}
		}
	}
}


	class DictBook
	{ int

	}