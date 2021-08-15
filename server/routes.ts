import { Router } from 'express'
const router = Router()

router.all("/", (req, res) => {
  res.status(200).send("Hello World!")
})

export default router
