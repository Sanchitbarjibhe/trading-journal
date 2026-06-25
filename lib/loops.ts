import { LoopsClient } from 'loops';

if (!process.env.LOOPS_API_KEY) {
    throw new Error('Missing LOOPS_API_KEY inside environment variables');
}

export const loops = new LoopsClient(process.env.LOOPS_API_KEY);