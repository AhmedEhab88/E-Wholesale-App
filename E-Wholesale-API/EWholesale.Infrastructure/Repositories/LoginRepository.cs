using EWholesale.Domain.Models;
using EWholesale.Domain.Repositories;
using EWholesale.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EWholesale.Infrastructure.Repositories
{
    public class LoginRepository : ILoginRepository
    {
        private readonly EWholesaleDbContext _dbContext;

        public LoginRepository(EWholesaleDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<User?> GetUserByUsernameAsync(string username)
        {
            var user = await _dbContext.Users.Where(user => user.UserName == username).FirstOrDefaultAsync();
            return user;
        }

        public async Task SaveRepresentativeAsync(Representative representative)
        {
            await _dbContext.Users.AddAsync(representative);

            await _dbContext.SaveChangesAsync();
        }

        public async Task<bool> CheckIfUsernameExists(string username)
        {
            return await _dbContext.Users.Where(user => user.UserName == username).AnyAsync();
        }
    }
}
