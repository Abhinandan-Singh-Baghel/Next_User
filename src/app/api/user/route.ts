import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client"
import { useRouter } from "next/navigation"
const client = new PrismaClient();

export async function POST(req: NextRequest){
    // extract the body

    const body 
}