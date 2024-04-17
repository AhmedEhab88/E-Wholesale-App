using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EWholesale.Shared.Common
{
    public class InquiryResult<T>
    {
        public InquiryResult(IEnumerable<T> list, int totalCount)
        {
            List = list;
            TotalCount = totalCount;
        }

        public IEnumerable<T> List { get; set; }

        public int? TotalCount { get; set; }
    }
}
