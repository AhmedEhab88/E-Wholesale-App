using EWholesale.Application.Models;
using EWholesale.Shared.Common;

namespace EWholesale.Application.Services.Interfaces
{
    public interface ILoginService
    {
        Task<string?> Login(string username, string password);

        Task<Result> Register(RegisterDto request);
    }
}
