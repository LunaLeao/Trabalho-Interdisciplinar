// mostra o menu em outra paginas.
const section_menu_lateral = document.querySelector("#menu_lateral")
section_menu_lateral.innerHTML=`
  <section id="menu_lateral">
            
            <nav class="menu-lateral">

                    <div class="btn-expandir" id="btn-exp">
                    
                        <i class="bi bi-list"></i>
                        
                    </div>

                    <ul>
                        <li class="item-menu ativo">
                            <a href="#">
                                <span class="icon-menu">
                                    <i class="bi bi-house-door"></i>
                                </span>
                                <span class="txt-menu">Home</span>
                            </a>
                        </li>

                        <li class="item-menu">
                            <a href="#">
                                <span class="icon-menu">
                                    <i class="bi bi-people"></i>    
                                </span>
                                <span class="txt-menu">Equipe</span>
                            </a>
                        </li>

                        <li class="item-menu">
                            <a href="#">
                                <span class="icon-menu">
                                    <i class="bi bi-instagram"></i>    
                                </span>
                                <span class="txt-menu">Instagram</span>
                            </a>
                        </li>

                        <li class="item-menu">
                            <a href="#">
                                <span class="icon-menu">
                                    <i class="bi bi-youtube"></i>
                                </span>
                                <span class="txt-menu">Youtube</span>
                            </a>
                        </li>

                        <li class="item-menu">
                            <a href="#">
                                <span class="icon-menu">
                                    <i class="bi bi-whatsapp"></i>      
                                </span>
                                <span class="txt-menu">Marque seu Passeio</span>
                            </a>
                        </li>

                        <img class="fundacao" src="mídia/fundacao-florestal.png" alt="">
                    </ul>      
`