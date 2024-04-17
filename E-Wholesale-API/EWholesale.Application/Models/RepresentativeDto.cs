using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EWholesale.Application.Models
{
    public class RepresentativeDto
    {
        public string Name { get; set; } = string.Empty;
        public int OrdersCompleted { get; set; }
    }
}
