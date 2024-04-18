using EWholesale.Domain.Models;
using EWholesale.Domain.Repositories;
using EWholesale.Infrastructure.Persistence;
using EWholesale.Shared.Common;
using Microsoft.EntityFrameworkCore;

namespace EWholesale.Infrastructure.Repositories
{
    public class RepresentativeRepository : IRepresentativeRepository
    {
        private readonly EWholesaleDbContext _dbContext;
        public RepresentativeRepository(EWholesaleDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<InquiryResult<Representative>> GetAllRepresentativesAsync()
        {
            var result = await _dbContext.Representatives.ToListAsync();
            int count = result.Count();

            return new InquiryResult<Representative>(result, count);
        }

        public async Task<Representative?> GetRepresentativeByIdAsync(long Id)
        {
            return await _dbContext.Representatives.Where(rep => rep.Id == Id).FirstOrDefaultAsync();
        }

        public async Task UpdateRepresentative(Representative representative)
        {
            _dbContext.Representatives.Update(representative);

            await _dbContext.SaveChangesAsync();
        }
    }
}
