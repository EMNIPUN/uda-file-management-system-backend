import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  fileId: { 
    type: String, 
    required: true 
  },
  Cluster: { 
    type: Buffer, 
    required: true 
  },
  FileLocation: { 
    type: String, 
    required: true 
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }
});

const File = mongoose.model("File", fileSchema);

export default File;  
