import { connectDB } from "@/lib/mongo";
import Todo from "@/model/Todo";
import { log } from "console"
import { connect } from "http2";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        await connectDB()
        const todoData = await req.json()
        await Todo.create(todoData)
        return NextResponse.json({
            message: "todo create success"
        }, { status: 201 })
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ message: error.message })
    }
}
export const GET = async (req: NextRequest) => {
    try {

        await connectDB()
        const result = await Todo.find()
        return NextResponse.json({
            message: "todo fetch success",
            result
        }, { status: 200 })
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ message: error.message })
    }
}

