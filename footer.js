
const footer = document.querySelector("footer")
footer.innerHTML=`
      <div class="informativos">
            <h3 class="tit-inform">Seu passeio seguro durante a Trilha</h3>

            <div class="itensLevar">
                <div class="itens">
                    <ul>
                        <h3>Responsabilidade Pessoal</h3>
                        <h4>Itens Obrigatórios</h4>

                        <li>Calçado fechado</li>
                        <li>Calça</li>
                        <li>camiseta</li>

                        <h4>Itens Recomendados</h4>
                        <li>Repelente</li>
                        <li>Protetor Solar</li>
                        <li>Boné ou chapéu</li>
                    </ul>
                </div>

                <div class="itens">
                    <ul>
                        <h3>Responsabilidade Ecotour</h3>
                        <h4>Kit de Primeiros Socorros</h4>

                        <li>Maleta de primeiros socorros</li>
                        <li>Máscara pocket para RCP</li>
                        <li>Kit talas moldáveis</li>

                        <h4>Equipamento de Segurança</h4>
                        
                        <li>Cordas de ancoragem</li>
                        <li>Boia salva vidas</li>
                        <li>Rádio comunicador</li>
                    </ul>
                </div>

            </div>
        </div>

        <div class="contato">
            <div class="texto">
                <h3>Agende seu Passeio</h3>
                <p>Explore as trilhas de Bertioga! Traga sua família e amigos para uma aventura inesquecível. Agende seu passeio por
                    telefone ou WhatsApp, ou preencha seu nome e telefone no formulário ao lado, e nós entraremos em contato.Prepare-se
                    para se encantar com a natureza de Bertioga!
                </p>

                <div>
                    <img src="mídia/whatsapp icon.png" alt="whatsapp">
                    <h5>Clique no botão do Whatsapp no menu lateral!</h5>
                </div>
            </div>

            <form class="forms">
                <h5>Se preferir podemos entrar em contato para realizar o agendamento</h5>

                <input type="text" id="nome" placeholder="Digite seu nome">
                <input type="text" id="numero" placeholder="Digite seu número de celular">

                <button>Enviar</button>
            </form>
        </div>
    `
console.log(footer)