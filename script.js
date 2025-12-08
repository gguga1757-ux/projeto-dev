function toggleMode() {
  const html = document.documentElement
  const image = document.querySelector("#profile img")

  // Alterna entre light e dark
  html.classList.toggle("light")

  // Se estiver no modo claro
  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/avatar-light.png")
    image.setAttribute(
      "alt",
      "A imagem apresenta Gustavo, destacado em um retrato com iluminação dramática e estilo cinematográfico. Seu rosto está parcialmente iluminado, revelando uma expressão séria e focada — transmitindo concentração, disciplina e visão. O fundo vermelho intenso contrasta com o terno escuro e reforça uma atmosfera de força e determinação, características presentes em sua trajetória na programação. O enquadramento circular mantém o foco na figura de Gustavo, representando clareza, precisão e objetivo — qualidades essenciais em seus projetos e no desenvolvimento de soluções digitais."
    )
  }
  // Se estiver no modo escuro
  else {
    image.setAttribute("src", "./assets/avatar.png")
    image.setAttribute(
      "alt",
      "gustavo henrique posa em meio a uma iluminação dramática, com metade do rosto iluminada pelo sol e a outra em sombra. Ele veste um casaco escuro, transmitindo um ar sério e sofisticado. O fundo vermelho profundo destaca ainda mais o contraste de luz e sombra, criando uma atmosfera moderna, minimalista e intensa."
    )
  }
}
