import db from "../../db";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, lastname, contactNo, address, pinCode } = req.body;

    try {
      await db.query(
        "INSERT INTO nextjs_entries (name, lastname, contactNo, address, pinCode) VALUES (?, ?, ?, ?, ?)",
        
        [name, lastname, contactNo, address, pinCode]
      );

      res.status(200).json({ message: "Data submitted successfully" });
    } catch (error) {
      console.error(error);

      res.status(500).json({ message: "Error submitting data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
