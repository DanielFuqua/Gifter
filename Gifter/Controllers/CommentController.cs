using Microsoft.AspNetCore.Mvc;
using Gifter.Data;
using Gifter.Repositories;
using Gifter.Models;

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly CommentRepository _commentRepository;
        public CommentController(ApplicationDbContext context)
        {
            _commentRepository = new CommentRepository(context);
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_commentRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var comment = _commentRepository.GetById(id);
            if (comment == null)
            {
                return NotFound();
            }
            return Ok(comment);
        }

        [HttpGet("getbypost/{id}")]
        public IActionResult GetByPost(int id)
        {
            return Ok(_commentRepository.GetByPostId(id));
        }

        //[HttpPost]
        //public IActionResult Post(Post post)
        //{
        //    _postRepository.Add(post);
        //    return CreatedAtAction("Get", new { id = post.Id }, post);
        //}

        //[HttpPut("{id}")]
        //public IActionResult Put(int id, Post post)
        //{
        //    if (id != post.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _postRepository.Update(post);
        //    return NoContent();
        //}

        //[HttpDelete("{id}")]
        //public IActionResult Delete(int id)
        //{
        //    _postRepository.Delete(id);
        //    return NoContent();
        //}

    }
}