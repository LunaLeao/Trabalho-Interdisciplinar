//header do index
const menu_horinzontal = document.querySelector("#menu_horinzontal");
menu_horinzontal.innerHTML=`
        <img class="logo" src="mídia/logo-safe-ecotour.png" alt="">
        <nav class="passeio">
            <ul class="nav-links">


                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">Selecione seu Passeio <i
                        class="bi bi-arrow-down-circle-fill"></i></label>


                <div class="menu">
                    <li><a href="cachoeira-do-elefante.html">Cachoeira do Elefante</a></li>
                    <li><a href="#">Cachoeira de Guaratuba</a></li>
                    <li><a href="#">Cachoeira da Torre 47</a></li>
                    <li><a href="#">Mirante do Itaguá</a></li>
                    <li><a href="#">Rio Jaguareguava</a></li>
                    <li><a href="#">Trilha D'Água</a></li>
                    <li><a href="#">Trilha do Vale Verde</a></li>
                </div>
            </ul>

        </nav> 
`;