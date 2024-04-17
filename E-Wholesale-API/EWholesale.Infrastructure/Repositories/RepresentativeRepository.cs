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
    public class RepresentativeRepository : IRepresentativeRepository
    {
        private readonly EWholesaleDbContext _dbContext;
        public RepresentativeRepository(EWholesaleDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Representative?> GetRepresentativeByIdAsync(long Id)
        {
            return await _dbContext.Representatives.Where(rep => rep.Id == Id).FirstOrDefaultAsync();
        }
    }
}
