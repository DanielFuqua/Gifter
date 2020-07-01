using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Gifter.Data;
using Gifter.Models;

namespace Gifter.Repositories
{
    public class UserProfileRepository
    {
        private readonly ApplicationDbContext _context;

        public UserProfileRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<UserProfile> GetAll()
        {
            return _context.UserProfile.ToList();
        }

        public UserProfile GetById(int id)
        {
            return _context.UserProfile.FirstOrDefault(uP => uP.Id == id);
        }

        //public List<Post> GetByUserProfileId(int id)
        //{
        //    return _context.Post.Include(p => p.UserProfile)
        //                    .Where(p => p.UserProfileId == id)
        //                    .OrderBy(p => p.Title)
        //                    .ToList();
        //}

        //public void Add(Post post)
        //{
        //    _context.Add(post);
        //    _context.SaveChanges();
        //}

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