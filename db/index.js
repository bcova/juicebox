const { Client } = require('pg');
const client = new Client('postgres://localhost:5432/juicebox-dev');




  async function getAllUsers() {
    const { rows } = await client.query(
      `SELECT id, username 
      FROM users;
    `);
  
    return rows;
  }
  


  async function createUser() {
    try {
      const { rows } = await client.query(`
        SELECT id, username 
        FROM users;
      `);
      
  
      return rows;
    } catch (error) {
      throw error;
    }
  }

  module.exports ={
   createUser, client, getAllUsers
  }