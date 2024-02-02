<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["audioFile"])) {
  $targetDir = "uploads/";
  $targetFile = $targetDir . basename($_FILES["audioFile"]["name"]);

  if (move_uploaded_file($_FILES["audioFile"]["tmp_name"], $targetFile)) {
    echo "Upload bem-sucedido! Link do arquivo: " . $_SERVER["HTTP_REFERER"] . $targetFile;
  } else {
    echo "Erro ao fazer o upload do arquivo.";
  }
}
?>
