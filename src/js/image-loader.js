export function loadImageList() {
  try {
    // Ajusta la ruta para que coincida con tu estructura
    const imageContext = require.context(
      '../assets/', // Desde la perspectiva de /src/js/
      false,
      /\.webp$/
    );
    return imageContext.keys().map(imageContext);
  } catch (error) {
    console.error("Error cargando imágenes:", error);
    return [];
  }
}