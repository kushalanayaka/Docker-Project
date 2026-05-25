import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./modules/auth/routes/auth.routes";
import testRoutes from "./routes/test.routes";
import productRoutes from "./modules/product/routes/product.routes";
import blogRoutes from "./modules/blog/routes/blog.routes";
import commentRoutes from "./modules/blog/routes/comment.routes";
import messageRoutes from "./modules/message/routes/message.routes";
import orderRoutes from "./modules/order/routes/order.routes";


dotenv.config();

const app = express();


// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("🚀 API is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/products", productRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/orders", orderRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

