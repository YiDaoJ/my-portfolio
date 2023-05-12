import { promises as fs } from "fs";
import path from "path";

export async function getLocalData() {
  // get data file path
  const filePath = path.join(process.cwd(), "/src/static/data.json");
  // read json file
  const fileContent = await fs.readFile(filePath);
  // parse data
  const data = JSON.parse(fileContent.toString());

  return data;
}
