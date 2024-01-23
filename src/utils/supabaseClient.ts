import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KYE = process.env.NEXT_PUBLIC_SUPABASE_ANON_KYE!;

export const supabase = createClient(SUPABASE_URL,SUPABASE_ANON_KYE,{
    auth:{
        persistSession:false,
    },
})