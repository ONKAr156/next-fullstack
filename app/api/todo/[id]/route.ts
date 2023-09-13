import { connectDB } from "@/lib/mongo";
import Todo from "@/model/Todo";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        // console.log(params); // old new
        const { id } = params

        const result = await Todo.findByIdAndDelete(id)
        await connectDB()

        return NextResponse.json(
            {
                message: "Todo Delete Success",
                result
            },
            { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ Message: error.message }, { status: 500 })
    }
}
export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const { id } = params
        const body = await req.json() 
        const result = await Todo.findByIdAndUpdate(id, body)
        await connectDB()

        return NextResponse.json(
            {
                message: "Todo updated Success",
                result
            },
            { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ Message: error.message }, { status: 500 })
    }
}