const  { createClient } = require ('@supabase/supabase-js')


const supabase = createClient('https://tuxorvjpbxowdqyasaas.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1eG9ydmpwYnhvd2RxeWFzYWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwNjc2ODIsImV4cCI6MjA0ODY0MzY4Mn0.68NueKN3OwSGCIHcyJR9PyJ2h5Xo2zB_rX8BXsjMB8w')




const express = require('express')
const app = express()
const port = 3000

app.get('/brand_car', async (req, res) => {
  const { data, error } = await supabase
  .from('brand_car')
  .select()
  res.send(data)
})

app.listen(port, ()=> {
  console.log('Example app istening on port ${port}')
})