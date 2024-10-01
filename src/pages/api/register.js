import { NextApiRequest, NextApiResponse } from 'next';

const registerUser = async (req, res) => {
  if (req.method === 'POST') {
    const { fullName, email, password, phone, university } = req.body;

    // Here you would typically save the user to your database
   
    console.log('User Registered:', { fullName, email, password, phone, university });

    return res.status(201).json({ message: 'User registered successfully!' });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
};

export default registerUser;
