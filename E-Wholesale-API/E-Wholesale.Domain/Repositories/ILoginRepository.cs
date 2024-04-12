using EWholesale.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EWholesale.Domain.Repositories
{
    public interface ILoginRepository
    {
        Task<User?> FindUserByUsername(string username);
    }
}
