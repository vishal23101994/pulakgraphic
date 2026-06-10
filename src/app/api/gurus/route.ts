import { NextResponse } from "next/server";
import gurus from "../../../data/gurus.json";

export async function GET() {
  try {
    return NextResponse.json(gurus);
  } catch (error) {
    console.error("Error loading guru data:", error);

    return NextResponse.json(
      {
        error: "Unable to load guru data",
      },
      {
        status: 500,
      }
    );
  }
}