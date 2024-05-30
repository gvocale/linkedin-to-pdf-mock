import { PDFViewer } from "@react-pdf/renderer";
import { LinkedinProfileData } from "src/mocks/linkedin-profile-data";
import { Resume } from "../Resume";

export interface PDFViewerWrapperProps {
  className?: string;
  data: LinkedinProfileData;
}

export function PDFViewerWrapper({
  className,
  ...rest
}: PDFViewerWrapperProps) {
  return (
    <PDFViewer
      className={className}
      width="100%"
      height="100%"
      showToolbar={false}
    >
      <Resume {...rest} />
    </PDFViewer>
  );
}
