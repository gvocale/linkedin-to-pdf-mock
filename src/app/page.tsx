"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { FormEvent, useState } from "react";
import { PDFViewerWrapper } from "src/components/PDFViewerWrapper";
import { Resume } from "src/components/Resume";
import { Spinner } from "src/components/Spinner";
import { CircleExclamationSolid } from "src/icons/CircleExclamationSolid";
import { LinkedinProfileData } from "src/mocks/linkedin-profile-data";

export interface Error {
  message: string;
}

export default function Home() {
  const [profileUrl, setProfileUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<LinkedinProfileData | null>(null);

  async function fetchData(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setData(null);
    setError("");

    try {
      const profileId = profileUrl.split("in/").pop()?.replace("/", "");

      if (!profileId) {
        throw new Error("Invalid LinkedIn profile URL");
      }

      const res = await fetch(`/api/scrape?id=${profileId}`);
      const json = (await res.json()) as LinkedinProfileData | null;
      setData(json);
    } catch (error: Error | any) {
      console.error({ error });
      if (error.message) setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function updateInput(value: string) {
    setError("");
    setProfileUrl(value);
  }

  return (
    <main className="grid min-h-screen grid-cols-2 bg-lavander-200">
      <div className="p-16 h-screen flex items-center">
        <div className="pb-32">
          <div className="mb-8">
            <h1 className="font-serif text-7xl tracking-tighter leading-tight mb-4 font-normal">
              Profile to PDF
            </h1>
            <p className="font-sans tracking-tight text-xl">
              Craft Resumes Effortlessly from Your LinkedIn Profile
            </p>
          </div>
          <form id="generate_pdf" onSubmit={fetchData}>
            <div className="grid grid-cols-[1fr_max-content] bg-gray-100 rounded-full w-full gap-2 h-16 max-w-[640px]">
              <input
                autoComplete="off"
                className="h-full w-full flex-grow rounded-full px-6 py-4 text-lg placeholder:text-black placeholder:text-opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-black bg-transparent col-[1/3] row-[1/2] pr-40 font-sans bg-white border border-gray-300 hover:border-black"
                name="profile_url"
                onChange={(event) => updateInput(event.target.value)}
                placeholder="Type LinkedIn Profile URL..."
                type="text"
                value={profileUrl}
              />

              <div
                className={`${
                  profileUrl
                    ? "scale-100 opacity-1 duration-100"
                    : "scale-95 opacity-0 pointer-events-none duration-200"
                } flex items-center justify-center gap-1 col-[2/3] row-[1/2] transition-scale ease-out-quart px-1`}
              >
                <button
                  type="submit"
                  disabled={!profileUrl || isLoading}
                  className="flex h-14 w-40 flex-row items-center justify-center rounded-full bg-lavander-300 hover:bg-lavander-400 active:bg-lavander-500 active:scale-95 disabled:active:scale-100 active:duration-0 px-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black disabled:bg-gray-300 disabled:text-opacity-50 text-black gap-2 font-sans font-semibold focus-visible:-outline-offset-2"
                >
                  Generate PDF
                </button>
              </div>
            </div>
          </form>
          {error && (
            <div role="status" className="text-red-500">
              <p className="mt-4 text-sm font-medium font-sans">
                <CircleExclamationSolid className="w-4 h-4 mr-1.5 inline-flex shrink-0 relative -top-0.5" />
                {error}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="grid p-32 bg-[#525659] ">
        <div className="grid">
          {!!data ? (
            <div className="flex flex-col items-center">
              <div className="flex w-full justify-end mb-8 max-w-[826px]">
                <PDFDownloadLink
                  document={<Resume data={data} />}
                  fileName="resume.pdf"
                  className="flex h-14 w-max flex-row items-center justify-center rounded-full bg-lavander-300 hover:bg-lavander-400 active:bg-lavander-500 px-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black disabled:bg-gray-300 disabled:text-opacity-50 text-black gap-2 font-sans font-semibold mt-6"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : "Download PDF"
                  }
                </PDFDownloadLink>
              </div>
              <PDFViewerWrapper
                data={data}
                className="grid aspect-[17/22] bg-transparent max-w-[826px] m-x-auto"
              />
            </div>
          ) : (
            <div className="grid place-items-center">
              {isLoading && (
                <div
                  role="status"
                  className="grid justify-center gap-3 text-white"
                >
                  <div className="flex justify-center">
                    <Spinner className="w-12" />
                  </div>
                  <div className="font-sans tracking-tight leading-tight">
                    Generating PDF
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
