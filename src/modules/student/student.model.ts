import { Schema, model } from "mongoose";
import { Student } from "./student.interface";

const studentSchema = new Schema<Student>(
    {
        id: {
            type: String,
        },
        name: {
            firstName: String,
            middleName: String,
            lastName: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        gender: {
            type: String,
            enum: ["male", "female"],
        },

        dob: String,
        contactNo: String,
        address: String,
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

export const studentModel = model<Student>("Student", studentSchema);
