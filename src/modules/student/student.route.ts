import express, { Router } from "express";
import { studentController } from "./student.controller";

const studentRouter = Router();

studentRouter.post("/create-student", studentController.createStudent);
studentRouter.get("/", studentController.getAllStudent);
studentRouter.get("/id/:id", studentController.getSingleStudent);

export default studentRouter;
