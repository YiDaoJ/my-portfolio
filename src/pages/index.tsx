import PageContainer from "@/components/pageContainer";
import { RegularH1, StyledH2 } from "@/components/styledComponents";
import { AppTheme } from "@/styles/theme";

export default function Home() {
  return (
    <PageContainer index={0} background={AppTheme.colors["bg-home"]}>
      <RegularH1>{`Hi, I'm Xiao`}</RegularH1>
      <StyledH2>Web Engineer, Front-End Addict.</StyledH2>
    </PageContainer>
  );
}
