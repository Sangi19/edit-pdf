// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { fillForm } from '../../helpers/form'

export default function handler(req, res) {
  console.log('hello from api:',req.name)
  fillForm('sam',24,'Developer','parttime','ram',12,'Testing','fulltime')
  res.status(200).json({ name: 'John Doe' })
}
