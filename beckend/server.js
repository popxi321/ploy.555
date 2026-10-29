const express = require('express');
const app =  express ();
PORT = 3000;

app.use(express.json());

let data = ['naeita'];

app.get('/', (req,res) =>{ 
    res.send('ยินดีตอนรับ');
});


app.get('/snackslist', (req,res) =>{ 
    res.send('รายการขนม:ข้าวเกรียบ,มันฝรั่งทอด,ลูกอม,ช็อกโกแลต!');
});
app.get('/dashboard', (req,res) =>{ 
       res.send('ห้ะ ห้ะ ห้ะ!');
    
});
app.get('/api/data',(req, res) => { 
      console.log('This one was for data');
      res.send(data)

    
})

app.post('/api/data', (req,res) => { 
       const newEntry = req.body
       res.sendStatus(201)
       data.push(newEntry.name)


})

app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);

});