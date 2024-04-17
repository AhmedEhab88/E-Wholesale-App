using EWholesale.Application.Models;
using EWholesale.Application.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EWholesale.API.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;

        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpPost]
        [Route("login")]
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

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto model)
        {
            var result = await _loginService.Register(model);

            if (result.IsFailure)
            {
                return BadRequest(result.Error);
            }

            return Ok("User has been created!");

        }
    }
}
