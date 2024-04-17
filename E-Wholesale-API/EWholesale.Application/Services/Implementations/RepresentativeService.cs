using AutoMapper;
using EWholesale.Application.Models;
using EWholesale.Application.Services.Interfaces;
using EWholesale.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EWholesale.Application.Services.Implementations
{
    public class RepresentativeService : IRepresentativeService
    {
        private readonly IRepresentativeRepository _representativeRepository;
        private readonly IMapper _mapper;
        
        public RepresentativeService(IRepresentativeRepository representativeRepository, IMapper mapper)
        {
            _representativeRepository = representativeRepository;
            _mapper = mapper;
        }

        public async Task<RepresentativeDto?> GetRepresentativeById(long Id)
        {
            var representative = await _representativeRepository.GetRepresentativeByIdAsync(Id);

            if (representative != null) {
                var representativeDto = _mapper.Map<RepresentativeDto>(representative);
                return representativeDto;
            }

            return null;
        }
    }
}
