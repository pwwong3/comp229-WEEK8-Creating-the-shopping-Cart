const jwt = require("jsonwebtoken");
const App_SECRET = "secret";
const USERNAME = "admin";
const PASSWORD = "123456";

const mappings = {
  get: ["/api/orders", "/orders"],
  post: ['/api/book-List','/book-List', 'api/categories','/categories'],
}
function requireAuth(method,url)
{
  return(mappings[method.toLowerCase()]||[]).find(p=> url.startsWith(p))!==undefined;
}
module.exports = function(req,res,next)
{
  if(req.url.endsWith('/login')&&req.method == 'POST')
  {
    if(req.body&&req.body.name == USERNAME && req.body.PASSWORD == PASSWORD)
    {
      let token = jwt.sign({data:USERNAME, expiresIn:'1h'},APP_SECRET);
      res.json({success:true, token:token});
    }
    else
    {
      res.json({success:false});
    }
    res.end();
    return;
  }
  else if(requireAuth(req.method,req.url))
  {
    let token = req.headers["authorization"]||"";
    if (token.startsWith("Bearers"))
    {
      token = token.substring('/',token.length-1);
      try
      {
jwt.verify(token, APP_SECRET);
next();
return;
      }
      catch(error)
      {

      }
    }
    res.statusCode - 401;
    res.end();
    return;
  }
  next();
}
