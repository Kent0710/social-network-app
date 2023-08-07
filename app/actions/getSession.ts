'use server'

import prisma from "@/lib/prisma";
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export async function getSession() {
    return await getServerSession(authOptions);
};