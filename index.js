// Major problem of ES5

var a = "a";

{
  var a = "a";
}

console.log(a);

// hijacked function

function foo() {
  console.log("Original");
}

foo = function() {
  console.log("hijacked");
};

console.log(foo());

// Solve hijack problem

const foo = function() {
  console.log("Original");
};

foo = function() {
  console.log("hijacked");
};

console.log(foo());

// deep of constant

const a = "a";

{
  const a = "b";
  console.log(a);
}

console.log(a);

// ES5 Way to concatenated string

const fistName = "Yagnesh";
const lastName = "Modh";

const fullName = "Hello, " + fistName + " " + lastName;

console.log(fullName);

// ES6 Way to concatenate string

const fullName1 = `Hello, ${fistName}`;

console.log(fullName1);

const html =
  "<!DOCTYPE html>" +
  '\n<html lang="en">' +
  "\n\t<head>" +
  '\n\t\t<meta charset="UTF-8" />' +
  '\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
  '\n\t\t<meta http-equiv="X-UA-Compatible" content="ie=edge" />' +
  "\n\t\t<title>Document</title>" +
  "\n\t</head>" +
  "\n\t<body></body>" +
  "\n</html>";

console.log(html);

const html5 = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body></body>
</html>
`;

console.log(html5);
