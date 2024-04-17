using EWholesale.Application.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EWholesale.Application.Services.Interfaces
{
    public interface IRepresentativeService
    {
        Task<RepresentativeDto?> GetRepresentativeById(long Id);
    }
}
