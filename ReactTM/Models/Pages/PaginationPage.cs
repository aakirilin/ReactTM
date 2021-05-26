using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactTM.Models.Pages
{
    public class PaginationPage<T>
    {
        public int Skip { get; set; }
        public int Take { get; set; }
        public int Total { get; set; }

        public T[] Items { get; set; }
    }
}
