const express =require("express");
const { getAllProducts , 
    createProduct, 
    updateProduct, 
    deleteProduct, 
    getProductDetails,
    createProductReview,
    getProductReviews,
    deleteReview} = require("../controllers/productController");
const { getAllUser, getSingleUser, deleteUser, updateUserRole } = require("../controllers/userController");
const { isAuthenticatedUser ,authorizeRoles}=require("../middleware/auth");
const router=express.Router();

router.route("/products").get( getAllProducts);

router.route("/admin/product/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);

router.route("/admin/product/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct)
.delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct)

router.route("/admin/users").get(isAuthenticatedUser,authorizeRoles("admin"),getAllUser);

router.route("/admin/users/:id").get(isAuthenticatedUser,authorizeRoles("admin"),getSingleUser).put(isAuthenticatedUser,authorizeRoles("admin"),updateUserRole).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteUser);

router.route("/review").put(isAuthenticatedUser,createProductReview);

router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReview);

router.route("/product/:id").get(getProductDetails);


module.exports=router 