import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
    const documents = await prisma.document.findMany({
        include: { user: true },
    })
    return NextResponse.json(documents)
}

export async function POST(request: Request) {
    const body = await request.json()
    const document = await prisma.document.create({
        data: {
            title: body.title,
            content: body.content,
            userId: body.userId, // Предполагается, что у вас есть система аутентификации
        },
    })
    return NextResponse.json(document)
}