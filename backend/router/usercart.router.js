const express = require('express');
const router = express.Router();
const userCart = require('../Schema/usercart.model');
const verifyUser = require('../middleware/verification');

// Add to cart route
router.post('/items', verifyUser, async (req, res) => {
  try {
      const { name, price, category, color, gender, image } = req.body;
      
      // Add createdby from authenticated user
      const myusercart = {
          name,
          price,
          category,
          color,
          gender,
          image,
          createdby: req.user
      };

      let cart = await userCart.create(myusercart);
      
      res.status(200).send({
          success: true,
          message: 'Added to cart successfully',
          data: cart
      });
  } catch (error) {
      console.error('Error storing cart:', error);
      res.status(400).send({ // Fixed typo: res.success() → res.status()
          success: false,
          message: error.message // More descriptive error
      });
  }
});

// Get cart items route
router.get("/getcart", verifyUser, async (req, res) => {
    try {
        const carts = await userCart.find({ createdby: req.user })
            .populate("createdby", "username email") 
            .lean();

        if (!carts.length) {
            return res.status(200).send({
                success: true,
                message: "Your cart is empty",
                cart: []
            });
        }

        res.status(200).send({
            success: true,
            results: carts.length,
            message: "Cart items fetched successfully",
            cart: carts
        });
    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).send({
            success: false,
            message: "Internal server error"
        });
    }
});


router.delete('/remove:id',verifyUser,async(req,res)=>{
  try{
    let deleteitems= await userCart.findByIdAndDelete(req.params.id)
    res.status(200).send({
      success:true,
      message:"deleted item successfully",
      items:deleteitems
    })
  }
  catch(error){
    res.status(400).send({
      success:false,
      message:"internal server error"
    })
  }
})





module.exports = router;