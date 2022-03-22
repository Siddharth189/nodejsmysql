
import express, { urlencoded, json } from 'express';
import { join } from "path";
const app = express();
import con from "./db.js";
const port = 8080;
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

con.connect(function (err) {
  if(err) throw err;
  else{
    console.log("database connected🥳🥳🥳🥳 ");
  }
});

app.use("/public", express.static("./public"));
app.use(urlencoded({ extended: true })); 
app.use(json());   

app.get("/", function(req, res) {
  res.sendFile(join(__dirname, "index.html"));
});

app.post('/add', (req, res) => {
  const val = req.body;
  // console.log(val.id+" "+val.name+" "+val.address);

  let add_q = `INSERT INTO company_details (id, name, address) VALUES ('${val.id}', '${val.name}', '${val.address}')`;
  con.query(add_q,function (err) {
    if(err) throw err;
    else{
      res.send('Values inserted in the table succesfully!');
    }
  });

});

app.post('/view', (req, res) => {
  const val = req.body;
  
  let view_q;
  if(val.id == 0)
  view_q = `SELECT * FROM company_details`;
  else
  view_q = `SELECT * FROM company_details WHERE id=${val.id}`;

  con.query(view_q,function (err,result) {
    if(err) throw err;
    else{
      // result.forEach(row => {
      //   console.log(row);
      // });
      if(result.length > 0) res.send(result);  
      else res.send(`There is no entry coresponding to this Id: ${val.id}`);
    }
  });
});


app.post('/delete', (req, res) => {
  const val = req.body;
  
  let del_q = `DELETE FROM company_details WHERE id=${val.id}`;
  con.query(del_q,function (err,result) {
    if(err) throw err;
    else{
      res.send(`Entry coresponding to Id: ${val.id} deleted succesfully!`);
    }
  });
});

app.post('/update', (req, res) => {
  const val = req.body;
  let upd_q;
  console.log(req.body);
  if(val.address == ''){
    upd_q = `UPDATE company_details SET name="${val.name}" WHERE id=${val.id}`;
  }else if(val.name == ''){
    upd_q = `UPDATE company_details SET address="${val.address}" WHERE id=${val.id}`;
  }else{
    upd_q = `UPDATE company_details SET name="${val.name}", address="${val.address}" WHERE id=${val.id}`;
  }
  con.query(upd_q,function (err,result) {
    if(err) throw err;
    else{
      res.send(`Entry coresponding to Id: ${val.id} updated succesfully!`);
    }
  });
});


app.listen(port, () => {
  console.log(`Server 🏃🏃🏃🏃 at http://localhost:${port}`);
});
