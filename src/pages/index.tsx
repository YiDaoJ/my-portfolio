import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PageContainer index={0} background={AppTheme.colors["bg-home"]}>
      <RegularH1>{`Hi, I'm Xiao`}</RegularH1>
      <StyledH2>Web Engineer, Front-End Addict.</StyledH2>
    </PageContainer>
  );
}
