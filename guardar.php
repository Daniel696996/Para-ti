<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mensaje = htmlspecialchars($_POST['mensaje']);
    $fecha = date('Y-m-d H:i:s');
    
    // Guardar el mensaje en un archivo llamado cartas.txt
    $archivo = fopen("cartas.txt", "a");
    fwrite($archivo, "[$fecha]: " . $mensaje . "\n\n");
    fclose($archivo);
    
    // Redirigir de vuelta con un mensaje de éxito
    echo "<script>
            alert('¡Tu mensaje ha cruzado el internet hacia mi corazón! 💌');
            window.location.href = 'index.html';
          </script>";
}
?>
