using AutoMapper;
using BCrypt.Net;
using EWholesale.Application.Models;
using EWholesale.Application.Services.Interfaces;
using EWholesale.Domain.Repositories;
using EWholesale.Shared.Common;
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
        private readonly ILoginRepository _loginRepository;
        private readonly IMapper _mapper;
        
        public RepresentativeService(IRepresentativeRepository representativeRepository, IMapper mapper, ILoginRepository loginRepository)
        {
            _representativeRepository = representativeRepository;
            _loginRepository = loginRepository;
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

        public async Task<InquiryResult<RepresentativeDto>> GetRepresentatives()
        {
            var representatives = await _representativeRepository.GetAllRepresentativesAsync();
            var result = _mapper.Map<InquiryResult<RepresentativeDto>>(representatives);

            return result;
        }

        public async Task<Result> UpdateRepresentative(long Id, UpdateRepresentativeDto model)
        {
            var representativeToUpdate = await _representativeRepository.GetRepresentativeByIdAsync(Id);

            if (representativeToUpdate == null)
            {
                return Result.Failure(UpdateErrors.UpdateUserNotFound);
            }

            bool isNewUsernameTaken = await _loginRepository.CheckIfUsernameExists(model.Username, representativeToUpdate.Id);

            if (isNewUsernameTaken)
            {
                return Result.Failure(RegisterErrors.DuplicateUser);
            }

            representativeToUpdate.UpdateRepresentative(model.Username, BCrypt.Net.BCrypt.HashPassword(model.Password), model.Email, model.PhoneNumber, model.Name, model.OrdersCompleted);

            await _representativeRepository.UpdateRepresentative(representativeToUpdate);
            
            return Result.Success();
        }
    }
}
