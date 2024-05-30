import { NextRequest } from "next/server";
import { MOCK_LINKEDIN_PROFILE_DATA } from "src/mocks/linkedin-profile-data";

// const puppeteer = require("puppeteer");

// async function scrapeProfile(id: string) {
//   const browser = await puppeteer.launch({
//     headless: true,
//     defaultViewport: null,
//   });

//   const page = await browser.newPage();

//   const url = `https://www.linkedin.com/in/${id}`;

//   await page.goto(url, {
//     waitUntil: "load",
//   });

//   await browser.close();

//   return;
// }

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return Response.json({ error: "Missing LinkedIn Profile Id" });
  }

  // const content = await scrapeProfile(id);
  const content = MOCK_LINKEDIN_PROFILE_DATA;

  return Response.json(content);
}
