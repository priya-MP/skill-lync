using Microsoft.AspNetCore.Mvc;
using dependency.Services;
using dependency.Model;

namespace dependency.Controllers
{
     [ApiController]
    [Route("[controller]")]
    public class computerController : ControllerBase
    {
        computerServices _computerServices;  // dependency injection in (services)
        public computerController(computerServices computerservices)
        {
          this._computerServices=computerservices;

        }
        [HttpGet]
        public ActionResult Get()
        {
            return Ok(this._computerServices.GetComputers());

        }
        [HttpPost]
        public ActionResult Post(Computer computer)
        {
            this._computerServices.AddComputer(computer);
            return Ok();
        }
    }
}