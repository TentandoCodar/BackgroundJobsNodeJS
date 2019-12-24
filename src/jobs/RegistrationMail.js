import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    async handle({data}) {
        const {user} = data;
        const {name,email} = user;
        await Mail.sendMail({
            from: "Gustavo Silva <gustavosjn2013@gmail.com>",
            to: `${name} <${email}`,
            subject: 'Cadastro de usuário',
            html: `Bom dia ${name}, vamos testar esse sistema de filas`
        });
    }
}