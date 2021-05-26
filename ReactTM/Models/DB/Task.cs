using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactTM.Models.DB
{
    public class Task
    {
        [BsonId]
        public Guid Id { get; set; }

        public string Title { get; set; }
        public DateTime DateCreate { get; set; }

        public Guid AutorId { get; set; }

        public List<Note> Notes { get; set; }

        public List<TaskStatys> Statyses { get; set; }

        public Task()
        {
            Id = Guid.NewGuid();
            Notes = new List<Note>();
            Statyses = new List<TaskStatys>();
        }
    }

    public class TaskStatyses
    {
        public static readonly string Open = "OPEN";
        public static readonly string Lose = "LOSE";
        public static readonly string Close = "CLOSE";

        public static readonly string[] All =
        {
            Open,
            Lose,
            Close
        };
    }

    public class TaskStatys
    {
        public string Title { get; set; }
        public DateTime DateCreate { get; set; }
        public Guid AutorId { get; set; }
    }

    public class Note
    {
        public string Message { get; set; }
        public DateTime DateCreate { get; set; }
        public Guid AutorId { get; set; }
    }
}
