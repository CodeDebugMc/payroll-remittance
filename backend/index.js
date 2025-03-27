import express from 'express';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json);

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'payroll',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Get all payroll records
app.get('/api/payroll', (req, res) => {
  db.query('SELECT * FROM payroll', (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

// Add a new payroll record
app.post('/api/payroll', (req, res) => {
  const {
    name,
    position,
    rateNbc188,
    nbc594,
    increment,
    grossSalary,
    abs,
    d,
    h,
    m,
    netSalary,
    withholdingTax,
    totalGsisDeds,
    totalPagibigDeds,
    philhealth,
    totalOtherDeds,
    totalDeductions,
    pay1st,
    pay2nd,
    rtIns,
    ec,
    pagibig,
  } = req.body;

  const sql = `
      INSERT INTO payroll
      (name, position, rateNbc188, nbc594, increment, grossSalary, abs, d, h, m,
       netSalary, withholdingTax, totalGsisDeds, totalPagibigDeds, philhealth,
       totalOtherDeds, totalDeductions, pay1st, pay2nd, rtIns, ec, pagibig)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      name,
      position,
      rateNbc188,
      nbc594,
      increment,
      grossSalary,
      abs,
      d,
      h,
      m,
      netSalary,
      withholdingTax,
      totalGsisDeds,
      totalPagibigDeds,
      philhealth,
      totalOtherDeds,
      totalDeductions,
      pay1st,
      pay2nd,
      rtIns,
      ec,
      pagibig,
    ],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({
          message: 'Payroll record added successfully',
          id: result.insertId,
        });
      }
    }
  );
});

// Update a payroll record
app.put('/api/payroll/:id', (req, res) => {
  const { id } = req.params;
  const {
    name,
    position,
    rateNbc188,
    nbc594,
    increment,
    grossSalary,
    abs,
    d,
    h,
    m,
    netSalary,
    withholdingTax,
    totalGsisDeds,
    totalPagibigDeds,
    philhealth,
    totalOtherDeds,
    totalDeductions,
    pay1st,
    pay2nd,
    rtIns,
    ec,
    pagibig,
  } = req.body;

  const sql = `UPDATE payroll SET
    name=?, position=?, rateNbc188=?, nbc594=?, increment=?, grossSalary=?, abs=?, d=?, h=?, m=?,
    netSalary=?, withholdingTax=?, totalGsisDeds=?, totalPagibigDeds=?, philhealth=?,
    totalOtherDeds=?, totalDeductions=?, pay1st=?, pay2nd=?, rtIns=?, ec=?, pagibig=?
    WHERE id=?`;

  db.query(
    sql,
    [
      name,
      position,
      rateNbc188,
      nbc594,
      increment,
      grossSalary,
      abs,
      d,
      h,
      m,
      netSalary,
      withholdingTax,
      totalGsisDeds,
      totalPagibigDeds,
      philhealth,
      totalOtherDeds,
      totalDeductions,
      pay1st,
      pay2nd,
      rtIns,
      ec,
      pagibig,
      id,
    ],
    (err) => {
      if (err) res.status(500).send(err);
      else res.json({ message: 'Payroll record updated successfully' });
    }
  );
});

app.delete('/api/payroll/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM payroll WHERE id=?', [id], (err, result) => {
    if (err) res.status(500).send(err);
    else res.json({ message: 'Payroll record deleted successfully' });
  });
});

// Get all remittance records
app.get('/api/remittance', (req, res) => {
  db.query('SELECT * FROM remittances', (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

// Add a new remittance record
app.post('/api/remittance', (req, res) => {
  const {
    name,
    withHoldingTax,
    personalLifeRet,
    gsisSalarayLoan,
    gsisPolicyLoan,
    gfal,
    cpl,
    mpl,
    mplLite,
    emergencyLoan,
    totalGsisDeds,
    pagibigFundCont,
    pagibig2,
    multiPurpLoan,
    totalPagibigDeds,
    philhealth,
    disallowance,
    landbankSalaryLoan,
    earistCreditCoop,
    feu,
    mtslaSalaryLoan,
    savingAndLoan,
    totalOtherDeds,
    totalDeds,
  } = req.body;

  const sql = `
      INSERT INTO remittances
      ( name,
    withHoldingTax,
    personalLifeRet,
    gsisSalarayLoan,
    gsisPolicyLoan,
    gfal,
    cpl,
    mpl,
    mplLite,
    emergencyLoan,
    totalGsisDeds,
    pagibigFundCont,
    pagibig2,
    multiPurpLoan,
    totalPagibigDeds,
    philhealth,
    disallowance,
    landbankSalaryLoan,
    earistCreditCoop,
    feu,
    mtslaSalaryLoan,
    savingAndLoan,
    totalOtherDeds,
    totalDeds)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      name,
      withHoldingTax,
      personalLifeRet,
      gsisSalarayLoan,
      gsisPolicyLoan,
      gfal,
      cpl,
      mpl,
      mplLite,
      emergencyLoan,
      totalGsisDeds,
      pagibigFundCont,
      pagibig2,
      multiPurpLoan,
      totalPagibigDeds,
      philhealth,
      disallowance,
      landbankSalaryLoan,
      earistCreditCoop,
      feu,
      mtslaSalaryLoan,
      savingAndLoan,
      totalOtherDeds,
      totalDeds,
    ],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({
          message: 'Remittance record added successfully',
          id: result.insertId,
        });
      }
    }
  );
});

// Update a remittances record
app.put('/api/remittance/:id', (req, res) => {
  const { id } = req.params;
  const {
    name,
    withHoldingTax,
    personalLifeRet,
    gsisSalarayLoan,
    gsisPolicyLoan,
    gfal,
    cpl,
    mpl,
    mplLite,
    emergencyLoan,
    totalGsisDeds,
    pagibigFundCont,
    pagibig2,
    multiPurpLoan,
    totalPagibigDeds,
    philhealth,
    disallowance,
    landbankSalaryLoan,
    earistCreditCoop,
    feu,
    mtslaSalaryLoan,
    savingAndLoan,
    totalOtherDeds,
    totalDeds,
  } = req.body;

  const sql = `UPDATE remittances SET
      name = ?,
      withHoldingTax = ?,
      personalLifeRet= ?,
      gsisSalarayLoan= ?,
      gsisPolicyLoan= ?,
      gfal= ?,
      cpl= ?,
      mpl= ?,
      mplLite= ?,
      emergencyLoan= ?,
      totalGsisDeds= ?,
      pagibigFundCont= ?,
      pagibig2= ?,
      multiPurpLoan= ?,
      totalPagibigDeds= ?,
      philhealth= ?,
      disallowance= ?,
      landbankSalaryLoan= ?,
      earistCreditCoop= ?,
      feu= ?,
      mtslaSalaryLoan= ?,
      savingAndLoan= ?,
      totalOtherDeds= ?,
      totalDeds= ?
    WHERE id=?`;

  db.query(
    sql,
    [
      name,
      withHoldingTax,
      personalLifeRet,
      gsisSalarayLoan,
      gsisPolicyLoan,
      gfal,
      cpl,
      mpl,
      mplLite,
      emergencyLoan,
      totalGsisDeds,
      pagibigFundCont,
      pagibig2,
      multiPurpLoan,
      totalPagibigDeds,
      philhealth,
      disallowance,
      landbankSalaryLoan,
      earistCreditCoop,
      feu,
      mtslaSalaryLoan,
      savingAndLoan,
      totalOtherDeds,
      totalDeds,
      id,
    ],
    (err) => {
      if (err) res.status(500).send(err);
      else res.json({ message: 'Payroll record updated successfully' });
    }
  );
});

app.delete('/api/remittance/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM remittances WHERE id=?', [id], (err) => {
    if (err) res.status(500).send(err);
    else res.json({ message: 'Remittance record deleted successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
