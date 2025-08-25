import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  fileId: { 
    type: String, 
    required: true 
  },
  cluster: { 
    type: String, 
    required: true 
  },
  row: { 
    type: Number, 
    required: true 
  },
  column: { 
    type: Number, 
    required: true 
  },
  address: { 
    type: String, 
    required: true 
  }
});

const File = mongoose.model("File", fileSchema);

export default File;  
