// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { fillForm } from '../../helpers/form'

export default function handler(req, res) {

  if (req.method === 'POST') {
    console.log('hello from api:',req.body)  
    fillForm(req.body.firstName,req.body.lastName,req.body.roles,req.body.time,req.body.firstName1,req.body.lastName1,req.body.roles1,req.body.time1)
    res.status(200).json({ name: 'Bhumio' })
  }
}
