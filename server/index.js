const mongoose = require("mongoose");
const app = require("./app");

const {
    DB_USER, 
    DB_PASSWORD, 
    DB_HOST, 
    API_VERSION, 
    IP_SERVER
} = require("./constants");

const PORT = process.env.POST || 3977;

const connectDB = async () => {
    try {
      await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`)
        console.log('La conexión con la base de datos ha sido exitosa.');  

        app.listen(PORT, () => {
          console.log("##################");
          console.log("#### API REST ####");
          console.log("##################");
          console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`);    
          });
        
    } catch (err) {
        console.log('Error al conectar a la base de datos', err);
    }
  }
  
  connectDB()