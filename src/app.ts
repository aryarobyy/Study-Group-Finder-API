import path from "path";
import express from "express";
import userRoutes from "./routes/user.route";
import groupchatRoutes from "./routes/groupChat.route";
import privatechatRoutes from "./routes/privatechat.route";
import todolistRoutes from "./routes/todolist.route";
import rankRoutes from "./routes/rank.route";
import fileUploadRoutes from "./routes/fileupload.route";
import pomodoroRoutes from "./routes/pomodoroHistory.route";
import interestRoutes from "./routes/interest.route";
import userInterestRoutes from "./routes/userInterest.route";
import userProfileRoutes from "./routes/user-profile.route";
import { errorHandler } from "./middlewares/errorHandler";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// users
app.use("/api/users", userRoutes);
app.use("/api/interest", interestRoutes);
app.use("/api/user-interest", userInterestRoutes);
app.use("/api/user-profile", userProfileRoutes)

// chats
app.use("/api/groups", groupchatRoutes);
app.use("/api/private-chat", privatechatRoutes);

app.use("/api/todolist", todolistRoutes);
app.use("/api/rank", rankRoutes);
app.use("/api/pomodoro", pomodoroRoutes);

app.use("/api/upload", fileUploadRoutes);
app.use(express.static(path.join(__dirname, "../public")));

app.use(errorHandler);
export default app;
