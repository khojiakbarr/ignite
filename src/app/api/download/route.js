import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public/files/Hojiakbar_Chinozbekov_Frontend.docx"
  );
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Disposition":
        "attachment; filename=Hojiakbar_Chinozbekov_Frontend.docx",
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    },
  });
}
