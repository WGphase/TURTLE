using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
namespace Turtle.wwwroot.Controllers;




public class AboutController : Controller
{
  
    
    public IActionResult Index()
    {
        return View();
    }
}