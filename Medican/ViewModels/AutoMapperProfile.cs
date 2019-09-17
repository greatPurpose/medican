// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using AutoMapper;
using Microsoft.AspNetCore.Identity;

namespace Medican.ViewModels
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<IdentityRoleClaim<string>, ClaimViewModel>()
                .ForMember(d => d.Type, map => map.MapFrom(s => s.ClaimType))
                .ForMember(d => d.Value, map => map.MapFrom(s => s.ClaimValue))
                .ReverseMap();
        }
    }
}
