
// change HTTP_GET to be a let variable, typescript will throw an error
const HTTP_GET = "GET"; // Inferred type: "GET"
const HTTP_POST = "POST"; // Inferred type: "POST"

function request(url: string, method: "GET" | "POST") {
  return 'hello!'
}

request("https://example.com/", HTTP_GET);
// this happens because 'let' allow value changes, so type inference from the HTTP_GET results in 'string', but if used with 'const' it will result in a literal type, which is "GET", and will always be get, so it will be safe to pass as parameter the variable HTTP_GET as long as it was declared as a constant

// the problem gets tougher if the variable is an object:
const req = { url: "https://example.com", method: "GET" };
request(req.url, req.method) // throws error because "GET" here is infered as 'string' and not 'GET'
// documentation offers 2 solutions through type assertions:
// 1- first solution:
    // change 1:
const req2 = { url: "https://example.com", method: "GET"  as "GET"};
     // change 2:
request(req2.url, req2.method as "GET")
// Change 1 means “I intend for req.method to always have the literal type "GET"”, preventing the possible assignment of "GUESS" to that field after. Change 2 means “I know for other reasons that req.method has the value "GET"“.

// 2- second solution:
const req3 = { url: "https://example.com", method: "GET" } as const;
// const type converts the object properties types all to literal types, from the official docs:
// The as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.
// hover your mouse on const suffix to see the transformed object