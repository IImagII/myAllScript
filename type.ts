class MyResponse {
   header = 'response header';
   result = 'response result';
}

class MyError {
   header = 'error header';
   message = 'error message';
}

function handle(res: MyResponse | MyError) {
   if (res instanceof MyResponse) {
      return {
         info: res.header + res.result,
      };
   } else
      return {
         info: res.header + res.message,
      };
}

type AlertType = 'succes' | 'danger' | 'waening';
