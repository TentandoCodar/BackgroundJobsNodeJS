import Mail from '../lib/Mail';

export default {
    key: 'UserReport',
    options: {
        delay: 5000
    },
    async handle({data}) {
        const {user} = data;
        const {name,email} = user;
        await Mail.sendMail({
            from: "Gustavo Silva <gustavosjn2013@gmail.com>",
            to: `${name} <${email}`,
            subject: 'Cadastro de usuário',
            html: `Bom dia ${name}, relatorio produzido`
        });
    }
}