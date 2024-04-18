using EWholesale.Domain.Models;
using EWholesale.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EWholesale.Domain.Repositories
{
    public interface IRepresentativeRepository
    {
        Task<Representative?> GetRepresentativeByIdAsync(long Id);

        Task<InquiryResult<Representative>> GetAllRepresentativesAsync();

        Task UpdateRepresentative(Representative representative);
    }
}
