export const PrivacyPage = () => {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
            <header className="mb-10">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                    Política de Privacidade
                </h1>

                <p className="text-sm text-gray-500">
                    Última atualização: 14 de agosto de 2026
                </p>
            </header>

            <div className="space-y-8 leading-relaxed">
                <section>
                    <p>
                        Esta Política de Privacidade descreve como o{" "}
                        <strong>Insume</strong> coleta, utiliza e protege os
                        dados pessoais fornecidos pelos usuários durante a
                        utilização da aplicação.
                    </p>

                    <p className="mt-4">
                        O Insume é um projeto desenvolvido para fins de estudo
                        e portfólio, com o objetivo de demonstrar conceitos de
                        desenvolvimento web, autenticação, gerenciamento de
                        dados e construção de APIs.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        1. Dados coletados
                    </h2>

                    <p className="mb-4">
                        Durante o cadastro e utilização da aplicação, podemos
                        coletar os seguintes dados:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Nome;</li>
                        <li>Endereço de e-mail;</li>
                        <li>Senha de acesso.</li>
                    </ul>

                    <p className="mt-4">
                        A senha fornecida pelo usuário não é armazenada em
                        texto puro. Ela deve ser processada por um mecanismo de
                        hash antes de ser armazenada, de forma que a senha
                        original não fique disponível no banco de dados.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        2. Finalidade da coleta
                    </h2>

                    <p className="mb-4">
                        Os dados fornecidos são utilizados exclusivamente para
                        permitir o funcionamento da aplicação, incluindo:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Criação e gerenciamento da conta;</li>
                        <li>Autenticação do usuário;</li>
                        <li>Identificação do usuário dentro da aplicação;</li>
                        <li>Controle de acesso às funcionalidades;</li>
                        <li>Funcionamento e manutenção do sistema.</li>
                    </ul>

                    <p className="mt-4">
                        Não utilizamos os dados fornecidos para fins de
                        publicidade ou comercialização.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        3. Armazenamento e segurança
                    </h2>

                    <p>
                        Os dados são armazenados em banco de dados e protegidos
                        por medidas técnicas destinadas a reduzir os riscos de
                        acesso não autorizado, alteração ou divulgação
                        indevida.
                    </p>

                    <p className="mt-4">
                        As senhas são armazenadas utilizando mecanismos de hash,
                        e a comunicação entre o cliente e a aplicação deve
                        utilizar conexão segura (HTTPS) em ambientes de
                        produção.
                    </p>

                    <p className="mt-4">
                        Apesar da adoção de medidas de segurança, nenhum
                        sistema é completamente imune a falhas ou incidentes
                        de segurança.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        4. Compartilhamento de dados
                    </h2>

                    <p>
                        Os dados pessoais não são vendidos ou compartilhados
                        para fins comerciais.
                    </p>

                    <p className="mt-4">
                        Para o funcionamento da aplicação, determinados dados
                        podem ser processados por serviços de infraestrutura ou
                        hospedagem utilizados pelo projeto, quando necessário
                        para armazenamento, execução ou manutenção do sistema.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        5. Cookies e armazenamento local
                    </h2>

                    <p>
                        A aplicação pode utilizar mecanismos de armazenamento
                        do navegador, como o{" "}
                        <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">
                            localStorage
                        </code>
                        , para manter informações necessárias à autenticação e
                        ao funcionamento da sessão do usuário.
                    </p>

                    <p className="mt-4">
                        Essas informações não são utilizadas para publicidade
                        ou rastreamento de comportamento fora da aplicação.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        6. Direitos do titular
                    </h2>

                    <p className="mb-4">
                        Nos termos da legislação aplicável, o usuário possui
                        direitos relacionados aos seus dados pessoais,
                        incluindo, conforme aplicável:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            Solicitar informações sobre o tratamento de seus
                            dados;
                        </li>
                        <li>Solicitar acesso aos dados pessoais;</li>
                        <li>
                            Solicitar correção de dados incompletos ou
                            incorretos;
                        </li>
                        <li>
                            Solicitar a eliminação de dados pessoais, quando
                            aplicável;
                        </li>
                        <li>
                            Solicitar outras providências previstas na
                            legislação aplicável.
                        </li>
                    </ul>

                    <p className="mt-4">
                        Atualmente, a aplicação não possui uma funcionalidade
                        automatizada para exclusão de conta. Solicitações
                        relacionadas aos dados pessoais podem ser realizadas
                        por meio do canal de contato disponibilizado pela
                        aplicação.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        7. Retenção dos dados
                    </h2>

                    <p>
                        Os dados são mantidos enquanto forem necessários para o
                        funcionamento da conta e da aplicação, observadas as
                        obrigações legais eventualmente aplicáveis.
                    </p>

                    <p className="mt-4">
                        A funcionalidade de exclusão automatizada de conta e
                        dos respectivos dados está planejada para uma versão
                        futura do projeto.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        8. Alterações nesta política
                    </h2>

                    <p>
                        Esta Política de Privacidade poderá ser atualizada para
                        refletir alterações nas funcionalidades da aplicação,
                        nas práticas de tratamento de dados ou na legislação
                        aplicável.
                    </p>

                    <p className="mt-4">
                        Quando houver alterações relevantes, a data de
                        atualização será modificada nesta página.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        9. Contato
                    </h2>

                    <p>
                        Caso tenha dúvidas sobre esta Política de Privacidade
                        ou sobre o tratamento de seus dados pessoais, entre em
                        contato por meio do canal de comunicação disponibilizado
                        pela aplicação.
                    </p>
                </section>

                <hr className="border-gray-200" />

                <footer className="text-sm text-gray-500">
                    <p className="font-semibold text-gray-700">Insume</p>
                    <p>
                        Projeto desenvolvido para fins de estudo e portfólio.
                    </p>
                </footer>
            </div>
        </main>
    );
};