// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { setCookies } from 'cookies-next';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { body } = req;
    const { account, password } = body || {};
    let userLogin = null;

    if (account === 'admin' && password === 'admin') {
      userLogin = account;
      setCookies(account);
    }

    res.status(200).json({ account: userLogin })
  } else {
    // Handle any other HTTP method
  }
}