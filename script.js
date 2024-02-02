function uploadAudio() {
  const fileInput = document.getElementById('audioFile');
  const uploadStatus = document.getElementById('uploadStatus');

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const formData = new FormData();

    formData.append('audioFile', file);

    fetch('upload.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(result => {
      uploadStatus.textContent = result;
      fileInput.value = ''; // Limpa o campo de arquivo
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  } else {
    uploadStatus.textContent = 'Selecione um arquivo de áudio.';
  }
}
