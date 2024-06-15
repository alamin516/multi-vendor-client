import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    let reqBody = await req.json();

    const ipData = {
        ip: reqBody.ip,
        date: new Date().toISOString(),
      };

    return NextResponse.json({ status: true, data: ipData});
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}
