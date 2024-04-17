using BCrypt.Net;
using EWholesale.Application.Models;
using EWholesale.Application.Services.Interfaces;
using EWholesale.Domain.Models;
using EWholesale.Domain.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace EWholesale.Application.Services.Implementations
{
    public class LoginService : ILoginService
    {
        private readonly ILoginRepository _loginRepository;
        private readonly IConfiguration _configuration;

        public LoginService(ILoginRepository loginRepository, IConfiguration configuration)
        {
            _loginRepository = loginRepository;
            _configuration = configuration;
        }


        public async Task<string?> Login(string username, string password)
        {
            var user = await _loginRepository.GetUserByUsernameAsync(username);

            if(user is not null && CheckPassword(user, password)) 
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.Name, user.UserName),
                        new Claim(ClaimTypes.Role, user.UserName == "admin" ? "admin" : "representative")
                    }),
                    Expires = DateTime.UtcNow.AddDays(7),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                return tokenHandler.WriteToken(token);
            }
            else
            {
                return null;
            }
        }


        public async Task<Result> Register(RegisterDto request)
        {
            bool userNameExists = await _loginRepository.CheckIfUsernameExists(request.Username);

            if(userNameExists)
            {
                return Result.Failure(RegisterErrors.DuplicateUser);
            }
            else
            {
                var newRepresentative = new Representative
                {
                    Name = request.Name,
                    Email = request.Email,
                    UserName = request.Username,
                    Password = BCrypt.Net.BCrypt.HashPassword(request.Password),
                    PhoneNumber = request.PhoneNumber,
                    OrdersCompleted = 0
                };
                await _loginRepository.SaveRepresentativeAsync(newRepresentative);
                
                return Result.Success();
            }

            
        }

        private bool CheckPassword(User user, string password)
        {
            return BCrypt.Net.BCrypt.Verify(password, user.Password);
        }



    }
}
