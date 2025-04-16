import { createClient } from '@supabase/supabase-js'


const supabase = createClient('https://dfdpmsikmcvhpzngdhev.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmZHBtc2lrbWN2aHB6bmdkaGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3Nzk0ODgsImV4cCI6MjA2MDM1NTQ4OH0.aib2WAphitLGyVScTbSJV1-D04rhcNU81iQELZCPUIY')




const express = require('express')
const app = express()
const port = 3000

app.get('/students', async (req, res) => {
  const { data, error } = await supabase
  .from('students')
  .select()
  res.send('список студентов')
})

app.post('/students', (req, res) => {
  res.send('добавление студентов')
})

app.delete('/students', (req, res) => {
  res.send('удаление студентов')
})

app.put('/students', (req, res) => {
  res.send('изменение студентов')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})