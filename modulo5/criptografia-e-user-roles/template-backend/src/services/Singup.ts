app.post("/signup", async (req: Request, res: Response) => {
    try {
      const userData = {
        email: req.body.email,
        password: req.body.password
      };
    
      const id = generate();
  
      const hashPassword = await hash(userData.password);
  
      await createUser(id, userData.email, hashPassword);
  
      const token = generateToken({
        id
      });
  
      res.status(200).send({
        token,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });