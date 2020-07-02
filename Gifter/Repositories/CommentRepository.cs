using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Gifter.Data;
using Gifter.Models;

namespace Gifter.Repositories
{
    public class CommentRepository
    {
        private readonly ApplicationDbContext _context;

        public CommentRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Comment> GetAll()
        {
            return _context.Comment.ToList();
        }

        public Comment GetById(int id)
        {
            return _context.Comment.FirstOrDefault(c => c.Id == id);
        }

        public List<Comment> GetByPostId(int id)
        {
            return _context.Comment
                            .Where(c => c.PostId == id)
                            .ToList();
        }

        public void Add(Comment comment)
        {
            _context.Add(comment);
            _context.SaveChanges();
        }

        //public void Update(Post post)
        //{
        //    _context.Entry(post).State = EntityState.Modified;
        //    _context.SaveChanges();
        //}

        //public void Delete(int id)
        //{
        //    var post = GetById(id);
        //    _context.Post.Remove(post);
        //    _context.SaveChanges();
        //}

    }
}