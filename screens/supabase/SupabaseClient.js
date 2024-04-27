import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://xhcymgkimqniykvdqoiv.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoY3ltZ2tpbXFuaXlrdmRxb2l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyMDM2MDgsImV4cCI6MjAyOTc3OTYwOH0.Zwwod5wyEKOGQ8Iew7xtgSe9GVJMSOsUSbFrJX79MWY'

)