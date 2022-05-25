// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { body } = req;
    const { account, password } = body || {};
    let userLogin = null;

    if (account === 'admin' && password === 'admin') {
      userLogin = account;
    }

    res.status(200).json({ name: userLogin })
  } else {
    // Handle any other HTTP method
  }
}