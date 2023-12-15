import UserRouter from "./users.router.js";
import PagesRouter from "./pages.router.js";

export const userRouter = new UserRouter().getRouter();
export const pageRouter = new PagesRouter().getRouter();