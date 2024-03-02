exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "hello, lambda functions!",
  })
}

// exports.handler = async function (event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: "Hello World" }),
//   };
// };
