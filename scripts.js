// Função para alternar menu mobile
function toggleMenu() {
  const menu = document.getElementById('menuLista');
  menu.classList.toggle('active');
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menuLista').classList.remove('active');
  });
});

// Simulação de envio de e-mail
function enviarEmail(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const assunto = document.getElementById('assunto').value;
  const mensagem = document.getElementById('mensagem').value;
  
  const formData = {
    nome,
    email,
    telefone,
    assunto,
    mensagem
  };

  // Enviar e-mail usando FormSubmit
  fetch("https://formsubmit.co/ajax/seu_email_aqui", {
    method: "POST",
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    alert("Obrigado! Sua mensagem foi enviada com sucesso.");
    document.getElementById('formularioContato').reset();
  })
  .catch(error => {
    alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.");
  });
}
