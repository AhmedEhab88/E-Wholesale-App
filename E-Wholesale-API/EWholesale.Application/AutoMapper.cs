using AutoMapper;
using EWholesale.Application.Models;
using EWholesale.Domain.Models;
using EWholesale.Shared.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EWholesale.Application
{
    public class AutoMapper : Profile
    {
        public AutoMapper() { 
        
            CreateMap<Representative, RepresentativeDto>();
            CreateMap<InquiryResult<Representative>, InquiryResult<RepresentativeDto>>();
        }
    }
}
