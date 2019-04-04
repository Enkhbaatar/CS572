{
  const dns = require("dns");
  const { promisify } = require("util");

  //Question 1
  dns.resolve4("www.mum.edu", function(err, addresses) {
    if (err) throw err;
    console.log(addresses);
  });

  //Question 2
  let promise = promisify(dns.resolve4);
  promise("www.mum.edu")
    .then(data => console.log("Promise: " + data))
    .catch(err => console.log(err));

  //Question 3
  (async function() {
    const result = await promise("www.mum.edu");
    console.log(result);
  })();
}
