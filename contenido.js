function mostrarPaso(paso) {
  const contenido = document.getElementById('contenido');
  let texto = '';

  switch (paso) {
    case 'paso1':
      texto = '<h2>Paso 1: Recolecta</h2><p>Junta papel usado como hojas de cuadernos, sobres o periódicos. Evita papel encerado o con plástico.</p>';
      break;
    case 'paso2':
      texto = '<h2>Paso 2: Corta y Clasifica</h2><p>Corta el papel en pedacitos pequeños y sepáralos por tipo o color para obtener resultados personalizados.</p>';
      break;
    case 'paso3':
      texto = '<h2>Paso 3: Crea tu Pulpa</h2><p>Remoja el papel picado en agua por varias horas y luego licúalo para formar una pulpa suave.</p>';
      break;
    case 'paso4':
      texto = '<h2>Paso 4: Diseña tu Papel</h2><p>Extiende la pulpa sobre una malla, decora con flores secas o colorantes, deja secar y ¡listo!</p>';
      break;
    default:
      texto = '<p>Selecciona un paso para comenzar.</p>';
  }

  contenido.innerHTML = texto;
}
