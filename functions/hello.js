const hello = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello world ${Math.floor(Math.random() * 10)}` })
    };
  }


  exports.handler = hello