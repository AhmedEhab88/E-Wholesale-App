using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EWholesale.Domain.Models
{
    public class Order
    {
        public long Id { get; set; }

        public long RetailerId { get; set; }

        public long RepresentativeId { get; set; }

        public DateTime OrderDate { get; set; }

        public decimal TotalPrice { get; set; }

        public int NumberOfProducts { get; set; }
        
        public Retailer Retailer { get; set; }

        public Representative Representative { get; set; }
        public ICollection<Product> Products { get; set; }
    }
}
