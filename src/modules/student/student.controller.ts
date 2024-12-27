import { Request, Response } from "express";
import { studentService } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
    const student = req.body;

    console.log(student);

    const result = await studentService.createStudentIntoDB(student);

    res.status(201).json({
        success: true,
        message: "student created succesfully.",
        data: result,
    });
};

const getAllStudent = async (req: Request, res: Response) => {
    const result = await studentService.getAllStudentFromDB();

    res.status(200).json({
        success: true,
        message: "All students fetched successfully.",
        data: result,
    });
};

const getSingleStudent = async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await studentService.getSingleStudentFromDB(id);

    res.status(200).json({
        success: true,
        message: "Single student fetched successfully.",
        data: result,
    });
};

export const studentController = {
    createStudent,
    getAllStudent,
    getSingleStudent,
};
