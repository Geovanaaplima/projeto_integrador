// Função para validar o formulário e exibir mensagens de feedback
function enviarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const comentarios = document.getElementById('comentarios').value;
    const mensagemDiv = document.getElementById('mensagem');
  
    // Verificar se todos os campos foram preenchidos
    if (nome === '' || email === '' || comentarios === '') {
      mensagemDiv.innerHTML = `<p style="color: red;">Por favor, preencha todos os campos!</p>`;
    } else {
      // Caso o formulário seja preenchido corretamente
      mensagemDiv.innerHTML = `<p style="color: green;">Obrigado, ${nome}! Seu feedback foi enviado com sucesso.</p>`;
      
      // Limpar o formulário
      document.getElementById('feedbackForm').reset();
    }
  }
  
  // Exemplo de alteração de conteúdo dinâmico
  function mudarDescricao() {
    const descricao = document.getElementById('descricao');
    descricao.innerHTML = `<h2>Nova Descrição do Problema</h2><p>Esta é a descrição atualizada do seu projeto.</p>`;
  }
  
  // Alteração dinâmica com base em uma interação
  document.getElementById('formulario').addEventListener('mouseover', function() {
    document.body.style.backgroundColor = '#f0f8ff'; // Mudando a cor de fundo quando o mouse passa sobre o formulário
  });
  
  document.getElementById('formulario').addEventListener('mouseout', function() {
    document.body.style.backgroundColor = ''; // Restaurando a cor de fundo quando o mouse sai
  });
  