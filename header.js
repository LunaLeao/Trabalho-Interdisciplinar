//header do index
const menu_horinzontal = document.querySelector("#menu_horinzontal");
menu_horinzontal.innerHTML=`
        <header>
        
            <img class="logo" src="mídia/logo-safe-ecotour.png" alt="">

            <nav class="passeio">
                <ul class="nav-links">
                    
                    
                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" class="hamburger"><h5 class="select">Selecione seu Passeio</h5><i class="bi bi-arrow-down-circle-fill"></i></label>
                    

                    <div class="menu">
                        <li><a href="cachoeira-do-elefante.html">Cachoeira do Elefante</a></li>
                        <li><a href="cachoeira-do-guaratuba.html">Cachoeira de Guaratuba</a></li>
                        <li><a href="torre-47.html">Cachoeira da Torre 47</a></li>
                        <li><a href="mirante_itagua.html">Mirante do Itaguá</a></li>
                        <li><a href="rio-jaguareguava.html">Rio Jaguareguava</a></li>
                        <li><a href="trilha-d'agua.html">Trilha D'Água</a></li>
                        <li><a href="vale-verde.html">Trilha do Vale Verde</a></li>
                    </div>
                </ul>

            </nav>
        
    </header>
`;