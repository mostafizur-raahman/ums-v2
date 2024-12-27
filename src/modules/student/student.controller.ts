import { Request, Response } from "express";
import { studentService } from "./student.service";
import { StudentValidationSchema } from "./student.validate";

const createStudent = async (req: Request, res: Response) => {
    try {
        const student = req.body;

        const zodParseData = StudentValidationSchema.parse(student);

        const result = await studentService.createStudentIntoDB(zodParseData);

        res.status(201).json({
            success: true,
            message: "student created succesfully.",
            data: result,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.errors[0].message,
        });
    }
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
