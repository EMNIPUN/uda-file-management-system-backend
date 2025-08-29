import File from "../infrastructure/schemas/file.js"; 

export const getAllFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: "Error fetching files", error });
  }
};

export const getFileById = async (req, res) => {
  try {
    const { id } = req.params;
    const file = await File.findById(id);
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ message: "Error fetching file", error });
  }
};

export const createFile = async (req, res) => {
  try {

    const file = req.body;

    if (
      !file.fileId ||
      !file.cluster ||
      !file.row ||
      !file.column ||
      !file.address
    ) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    await File.create({
        fileId: file.fileId,
        cluster: file.cluster,
        row: file.row,
        column: file.column,
        address: file.address
    });

    res.status(201).json({ message: "File created successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error creating file", error });
  }
};

export const deleteFile = async (req, res) => {
  try {
    const { id } = req.params;
    const file = await File.findByIdAndDelete(id);
    
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }
    
    res.status(200).json({ message: "File deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting file", error });
  }
};

export const updateFile = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const file = await File.findByIdAndUpdate(id, updates, { new: true });
    
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }
    
    res.status(200).json({ message: "File updated successfully", file });
  } catch (error) {
    res.status(500).json({ message: "Error updating file", error });
  }
};
