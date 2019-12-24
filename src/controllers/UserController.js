import Mail from "../lib/Mail";

export default {
    async user(req, res) {
        const {name, email, password} = req.body;

        const user = {
            name,
            email,
            password,
        };

        await Mail.sendMail({
            from: "Gustavo Silva <gustavosjn2013@gmail.com>",
            to: `${name} <${email}`,
            subject: 'Cadastro de usuário',
            html: `Bom dia ${name}, vamos testar esse sistema de filas`
        });
        return res.json(user);
    }
}