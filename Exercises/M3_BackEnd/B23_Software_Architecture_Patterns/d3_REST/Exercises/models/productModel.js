const connection = require("./connection");

const add = async (name, brand) => {
  try {
    const [result] = await connection.execute(
      `INSERT INTO products (name, brand) VALUES (?, ?);`,
      [name, brand]
    );

    return { id: result.insertId, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const [products] = await connection.execute("SELECT * FROM products");
    return products;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const [result] = await connection.execute(
      "SELECT * FROM products WHERE id = ?",
      [id]
    );
    if (!result.length) return null;
    return result[0];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    const [updatedProduct] = await connection.execute(
      "UPDATE products SET name = ?, brand = ? WHERE id = ?",
      [name, brand, id]
    );
    return { id, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return {};
    await connection.execute("DELETE FROM products WHERE id = ?", [id]);
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };
