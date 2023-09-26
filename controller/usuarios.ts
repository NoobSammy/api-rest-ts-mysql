import { Request, Response } from "express";
import Usuario from "../models/usuario";

const getUsuarios = async (req: Request, res: Response) => {
	const usuarios = await Usuario.findAll({ where: { estado: true } });

	res.json({
		usuarios,
	});
};

const getUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;
	const usuario = await Usuario.findByPk(id);

	if (usuario) res.json({ usuario });
	else res.status(404).json({ msg: `No existe un usuario con el id ${id}` });
};

const postUsuario = async (req: Request, res: Response) => {
	const { body } = req;

	try {
		const existeEmail = await Usuario.findOne({
			where: { email: body.email },
		});

		if (existeEmail)
			return res
				.status(400)
				.json({ msg: `Ya existe un usuario con el email ${body.email}` });

		const usuario = Usuario.build(body);
		await usuario.save();
		res.status(201).json(usuario);
	} catch (error) {
		console.log(error);
		res.json({ msg: "Hable con el administrador" });
	}
};

const putUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req;

	try {
		const usuario = await Usuario.findByPk(id);

		if (!usuario)
			return res
				.status(404)
				.json({ msg: `No existe un usuario con el id ${id}` });

		await usuario.update(body);
		res.json(usuario);
	} catch (error) {
		console.log(error);
		res.json({ msg: "Hable con el administrador" });
	}
};

const deleteUsuario = async (req: Request, res: Response) => {
	const { id } = req.params;

	const usuario = await Usuario.findByPk(id);

	if (!usuario)
		return res
			.status(404)
			.json({ msg: `No existe un usuario con el id ${id}` });

	//await usuario.destroy();
	await usuario.update({ estado: false });

	res.json(usuario);
};

export { getUsuario, getUsuarios, postUsuario, putUsuario, deleteUsuario };
