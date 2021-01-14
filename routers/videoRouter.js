import express from "express";
import { deleteVideo, editVideo, upload, videoDetail, videos } from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.upload, (req, res) => upload);
videoRouter.get(routes.videoDetail, (req, res) => videoDetail);
videoRouter.get(routes.editVideo, (req, res) => editVideo);
videoRouter.get(routes.deleteVideo, (req, res) => deleteVideo);

export default videoRouter;