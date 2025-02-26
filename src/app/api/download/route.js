import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = path.join(process.cwd(), "public/files/IgniteMedia.pdf");
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Disposition": "attachment; filename=IgniteMedia.pdf",
      "Content-Type": "application/pdf",
    },
  });
}
