using EWholesale.Application.Models;
using EWholesale.Application.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EWholesale.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;

        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginDto model)
        {
            var token = await _loginService.Login(model.Username, model.Password);
            if (token is null)
            {
                return NotFound("User not found");
            }
            else
            {
                return Ok(new { Token = token });
            }
        }
    }
}
