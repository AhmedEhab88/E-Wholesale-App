using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EWholesale.Shared.Common
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

            IsSuccess = isSuccess;
            Error = error;
        }

        public bool IsSuccess { get; }
        public bool IsFailure => !IsSuccess;

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

    public static class UpdateErrors
    {
        public static readonly Error UpdateUserNotFound = new Error("Update.UserNotFound", "User you are trying to update is not found.");
    }
}
