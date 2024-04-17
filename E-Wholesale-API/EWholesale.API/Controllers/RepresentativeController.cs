using EWholesale.Application;
using EWholesale.Application.Models;
using EWholesale.Application.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;

namespace EWholesale.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RepresentativeController : ControllerBase
    {
        private readonly IRepresentativeService _representativeService;
        public RepresentativeController(IRepresentativeService representativeService)
        {
            _representativeService = representativeService;
        }

        [HttpGet]
        [Route("{Id}")]
        public async Task<IActionResult> GetRepresentativeById(long Id)
        {
            var result = await _representativeService.GetRepresentativeById(Id);
            if(result == null)
            {
                return NotFound("Representative does not exist.");
            }
            return Ok(result);
        }


        [HttpGet]
        public async Task<IActionResult> GetRepresentatives()
        {
            var result = await _representativeService.GetRepresentatives();
            return Ok(result);
        }

        [HttpPatch]
        [Route("{Id}")]
        public async Task<IActionResult> UpdateRepresentative(long Id)
        {
            return Ok();
        }

        [HttpDelete]
        [Route("{Id}")]
        public async Task<IActionResult> DeleteRepresentative(long Id)
        {
            return NoContent();
        }
    }
}
