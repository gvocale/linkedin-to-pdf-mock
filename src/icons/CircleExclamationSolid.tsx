import { IconProps } from "./types";

export function CircleExclamationSolid(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      {...props}
    >
      <path d="M256 512a256 256 0 100-512 256 256 0 100 512zm0-384c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm-32 224a32 32 0 1164 0 32 32 0 11-64 0z"></path>
    </svg>
  );
}
