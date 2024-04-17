using EWholesale.Application.Models;
using EWholesale.Shared.Common;

namespace EWholesale.Application.Services.Interfaces
{
    public interface IRepresentativeService
    {
        Task<RepresentativeDto?> GetRepresentativeById(long Id);

        Task<InquiryResult<RepresentativeDto>> GetRepresentatives();
    }
}
