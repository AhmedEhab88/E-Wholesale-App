using EWholesale.Application.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EWholesale.Application.Services.Interfaces
{
    public interface ILoginService
    {
        Task<string?> Login(string username, string password);

        Task<Result> Register(RegisterDto request);
    }
}
