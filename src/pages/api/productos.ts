import type { APIRoute } from 'astro';
import mysql from 'mysql2/promise';

// Configuración de la base de datos
const dbConfig = {
  host: 'mysql',        // nombre del servicio en docker-compose
  user: 'tiendauser',
  password: 'tiendapass',
  database: 'productos',
  port: 3306
};

export const GET: APIRoute = async () => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.query('SELECT  idProductTable, referencia, modelo, specs_es AS specs, visible_es AS visible, titulo_es AS titulo, meta_title_es AS meta_title, meta_desc_es AS meta_desc, imagen, dcorta_es AS dcorta, idProducto FROM ProductTable LIMIT 3');

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error al leer productos:', err);
    return new Response(JSON.stringify({ error: 'Error al leer productos' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  } finally {
    if (connection) await connection.end();
  }
};
