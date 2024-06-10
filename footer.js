
const footer = document.querySelector("#footer")
footer.innerHTML=`
      <footer>
        <img src="mídia/fundacao-florestal.png" alt="">
        <div>
            <a class="link-footer" href="#">Quem Somos</a>
            <svg class="linha" width="2" height="24" viewBox="0 0 2 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" x2="1" y2="24" stroke="white" stroke-width="2"/>
            </svg>   
            <a class="link-footer" href="index.html">Voltar à Home</a>
        </div>

        <div class="icon-footer">
            <a href="https://www.instagram.com/safeecotour/">
                <span class="insta">
                    <i class="bi bi-instagram"></i>    
                </span>
            </a>

            <a href="https://www.youtube.com/channel/UCLz3QlwG2m_yZJYbh6GET8Q">
                <span class="youtube">
                    <i class="bi bi-youtube"></i>
                </span>
            </a>
        </div>
    </footer>
    `
console.log(footer)