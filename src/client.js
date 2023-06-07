import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    "https://abfeeptgrejiyytvtslx.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZmVlcHRncmVqaXl5dHZ0c2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxMDczMTUsImV4cCI6MjAwMTY4MzMxNX0.mPlOEyQzmsHnbyDnu5MHUn53WkqHLIyDJQk6eANOhm8",
)