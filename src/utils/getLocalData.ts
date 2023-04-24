import path from "path";
import { promises as fs } from "fs";

export async function getLocalData() {
  // get data file path
  const filePath = path.join(process.cwd(), "/src/static/data.json");
  // read json file
  const fileContent = await fs.readFile(filePath);
  // parse data
  const data = JSON.parse(fileContent);

  return data;
}
