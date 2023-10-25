import { Router, Request, Response } from 'express';
import { Email } from '../mailing/email';

const router = Router();
const mailing = new Email();

router.get('/SendMail', async (req: Request, res: Response) => {
  res.send(await mailing.send());
});

export default router;