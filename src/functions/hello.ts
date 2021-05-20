export const handle = async (event) => {
  return {
    statusCode: 201,
    body: 
    JSON.stringify({
      message: "Hello World from my first serverless function :-)"
    }),
    headers: {
      "Content-Type":"application/json"
    },
  };
};