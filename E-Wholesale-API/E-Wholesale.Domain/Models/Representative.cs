using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EWholesale.Domain.Models
{
    public class Representative : User
    {
        public string Name { get; set; } = string.Empty;
        public int OrdersCompleted { get; set; }


        public void UpdateRepresentative(string userName, string password, string email, string phoneNumber, string Name, int ordersCompleted)
        {
            this.UserName = userName;
            this.Password = password;
            this.Email = email;
            this.PhoneNumber = phoneNumber;
            this.OrdersCompleted = ordersCompleted;
        }
    }
}
