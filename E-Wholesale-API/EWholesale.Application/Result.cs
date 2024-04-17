using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EWholesale.Application
{
    public class Result
    {
        private Result(bool isSuccess, Error error)
        {
            if (isSuccess && error != Error.None ||
            !isSuccess && error == Error.None)
            {
                throw new ArgumentException("Invalid error", nameof(error));
            }

            IsSucess = isSuccess;
            Error = error;
        }

        public bool IsSucess { get; }
        public bool IsFailure => !IsSucess;

        public Error Error { get; }

        public static Result Success()
        {
            return new Result(true, Error.None);
        }
        public static Result Failure(Error error)
        {
            return new Result(false, error);
        }
    }



    public sealed record Error(string Code, string Description)
    {
        public static readonly Error None = new(string.Empty, string.Empty);
    }


    public static class RegisterErrors
    {
        public static readonly Error DuplicateUser = new Error("Register.DuplicateUser", "Username is already taken");
    }
}
