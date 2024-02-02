document.addEventListener('DOMContentLoaded', function() {
  const backgroundAudio = document.getElementById('backgroundAudio');

  // Adicione mais lógica JavaScript conforme necessário

  // Exemplo: Mude a cor do texto quando o áudio estiver tocando
  backgroundAudio.addEventListener('play', function() {
    document.querySelector('.content').style.color = '#ffcc00';
  });

  backgroundAudio.addEventListener('pause', function() {
    document.querySelector('.content').style.color = '#fff';
  });
});
