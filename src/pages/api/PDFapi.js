// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { fillPDFForm,getPDFdata  } from '../../helpers/PDFform'

export default function handler(req, res) {

  if (req.method === 'POST') {
    fillPDFForm(req.body.firstName,req.body.lastName,req.body.roles,req.body.time,req.body.firstNameA,req.body.lastNameA,req.body.rolesA,req.body.timeA)
    res.status(200).json({ name: 'Bhumio' ,message:"pdf saved successfully"})
  }

  if (req.method=='GET')
     values = getPDFdata()
     res
}
