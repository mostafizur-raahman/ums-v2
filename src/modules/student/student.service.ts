import { Student } from "./student.interface";
import { studentModel } from "./student.model";

const createStudentIntoDB = async (student: Student) => {
    return await studentModel.create(student);
};

const getAllStudentFromDB = async () => {
    return await studentModel.find({});
};

const getSingleStudentFromDB = async (id: string) => {
    return await studentModel.findOne({ id: id });
};

export const studentService = {
    createStudentIntoDB,
    getAllStudentFromDB,
    getSingleStudentFromDB,
};
