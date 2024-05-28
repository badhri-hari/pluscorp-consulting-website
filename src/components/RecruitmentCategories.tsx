import { Box } from "@chakra-ui/react";

export default function RecruitmentCategories() {
  return (
    <div className="recruitment-categories-circle">
      <Box className="recruitment-category">
        Finance
        <Box className="recruitment-category-subtext">
          Across all industries
        </Box>
      </Box>
      <Box className="recruitment-category">
        Accounting
        <Box className="recruitment-category-subtext">
          Across all industries
        </Box>
      </Box>
      <Box className="recruitment-category">
        Payroll
        <Box className="recruitment-category-subtext">
          Across all industries
        </Box>
      </Box>
      <Box className="recruitment-category">
        Audit
        <Box className="recruitment-category-subtext">
          Internal, External, Tax
        </Box>
      </Box>
      <Box className="recruitment-category">
        Taxation
        <Box className="recruitment-category-subtext">Direct and Indirect</Box>
      </Box>
      <Box className="recruitment-category">
        BPO/KPO Staff
        <Box className="recruitment-category-subtext">
          Domestic and International
        </Box>
      </Box>
      <div className="recruitment-categories-circle-text">
        Freshers
        <br />
        <span className="recruitment-categories-circle-text-small">to</span>
        <br />
        CFOs
      </div>
    </div>
  );
}
