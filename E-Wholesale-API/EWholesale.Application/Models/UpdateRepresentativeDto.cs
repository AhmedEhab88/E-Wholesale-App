﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EWholesale.Application.Models
{
    public class UpdateRepresentativeDto
    {
        public string Username { get; set; }
        
        public string Password { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public int OrdersCompleted { get; set; }
    }
}
