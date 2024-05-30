import { Document, Link, Page, Text, View } from "@react-pdf/renderer";
import { LinkedinProfileData } from "src/mocks/linkedin-profile-data";

export interface ResumeProps {
  data: LinkedinProfileData;
}

export function Resume({ data }: ResumeProps) {
  const {
    fullName,
    links,
    subtitle,
    location,
    summary,
    topSkills,
    education,
    experience,
  } = data;

  return (
    <Document>
      <Page
        size="LETTER"
        style={{ backgroundColor: "#ffffff", padding: 64, color: "#000000" }}
        orientation="portrait"
      >
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontWeight: "bold", fontSize: 32, marginBottom: 8 }}>
            {fullName}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: 8 }}>{subtitle}</Text>
          <Text style={{ fontSize: 12, marginBottom: 8, opacity: 0.6 }}>
            {location}
          </Text>
        </View>

        <View style={{ marginBottom: 8 }}>
          {links.map((link, index) => (
            <View
              key={index}
              style={{
                fontSize: 12,
                marginBottom: 4,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontWeight: "bold", marginRight: 3 }}>
                {link.name}:
              </Text>
              <Link style={{ textDecoration: "underline" }} href={link.url}>
                {link.url}
              </Link>
            </View>
          ))}
        </View>

        <View
          style={{
            fontSize: 12,
            display: "flex",
            flexDirection: "row",
            lineHeight: 1.5,
            marginBottom: 24,
          }}
        >
          <Text style={{ marginRight: 8, fontWeight: "bold" }}>
            Top Skills:
          </Text>
          {topSkills.map((topSkill, index) => (
            <Text key={index} style={{ marginRight: 4, fontStyle: "italic" }}>
              {topSkill}
            </Text>
          ))}
        </View>

        <Text
          style={{
            fontSize: 12,
            marginBottom: 32,
            lineHeight: 1.5,
            maxWidth: 400,
          }}
        >
          {summary}
        </Text>

        <View style={{ flexDirection: "row" }}>
          <View style={{ maxWidth: "50%", paddingRight: "5%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 8 }}>
              Experience
            </Text>

            {experience.map((experienceItem, index) => {
              const {
                companyName,
                description,
                duration,
                endDate,
                isRemote,
                location,
                role,
                skills,
                startDate,
                type,
              } = experienceItem;

              return (
                <View key={index}>
                  <Text style={{ fontSize: 14, marginBottom: 4 }}>{role}</Text>
                  <Text style={{ fontSize: 12, marginBottom: 4 }}>
                    {companyName}
                  </Text>
                  <Text style={{ fontSize: 8 }}>
                    {startDate.month} {startDate.year} -{endDate.month}{" "}
                    {endDate.year}
                  </Text>
                  <Text style={{ fontSize: 8 }}>{duration}</Text>
                  <Text style={{ fontSize: 8 }}>{type}</Text>
                  <Text style={{ fontSize: 8, marginBottom: 12 }}>
                    {location} {isRemote && "- Remote"}
                  </Text>
                  <Text
                    style={{ fontSize: 10, lineHeight: 1.5, marginBottom: 8 }}
                  >
                    {description}
                  </Text>
                  <Text style={{ fontSize: 10, lineHeight: 1.5 }}>
                    Skills: {skills}
                  </Text>
                </View>
              );
            })}
          </View>

          <View style={{ maxWidth: "50%", paddingRight: "5%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 8 }}>
              Education
            </Text>

            {education.map((educationItem, index) => {
              const {
                activities,
                degree,
                description,
                endDate,
                fieldOfStudy,
                school,
                startDate,
              } = educationItem;

              return (
                <View key={index}>
                  <Text style={{ fontSize: 14, marginBottom: 8 }}>
                    {school}
                  </Text>
                  <Text style={{ fontSize: 12, marginBottom: 4 }}>
                    {fieldOfStudy}
                  </Text>
                  <Text style={{ fontSize: 12, marginBottom: 8 }}>
                    {degree}
                  </Text>
                  <Text style={{ fontSize: 8, marginBottom: 8 }}>
                    {startDate.year} - {endDate.year}
                  </Text>
                  <Text
                    style={{ fontSize: 10, lineHeight: 1.5, marginBottom: 4 }}
                  >
                    {activities}
                  </Text>
                  <Text style={{ fontSize: 10, lineHeight: 1.5 }}>
                    {description}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </Page>
    </Document>
  );
}
