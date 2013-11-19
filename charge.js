// make sure to update the secret key
var stripe = require('stripe')('sk_test_Yg1k3ukwmBM6nEg6e26dk1us');

module.exports = function(app){
  app.get('/stripe',
    function(req,res){
      res.json({});
    }
  );

  app.post('/stripe',
    function(req,res) {
      // obtain token
      var transaction = req.body;
      var stripeToken = transaction.stripeToken;
      // create charge
      var charge =
      {
        amount: 10*100, 
        currency: 'USD',
        card: stripeToken
      };

      stripe.charges.create(charge,
        function(err, charge) {
          if(err)
            console.log(err);
          else
            {
              res.json(charge);
              console.log('Successful charge sent to Stripe!');
            };
        }       
      );
    res.send("success!", 200);
    }
  );
};