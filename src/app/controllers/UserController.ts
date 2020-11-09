import { Request, response, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import User from '../models/User';

class UserController {
	index(req: Request, res: Response) {
		return res.send({userID: req.userId});
	}

	async store(req: Request, res: Response) {
		const repository = getRepository(User);
		const { email, password } = req.body;

		const userExist = await repository.findOne({ where: { email } });

		if (userExist) return res.sendStatus(409);

		const user = repository.create({ email, password });
		await repository.save(user);

		return res.json(user);
	}
}

export default new UserController();
