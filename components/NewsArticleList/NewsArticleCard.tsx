import { css, styled } from "@stitches/react";
import { ThumbnailContainer, ParagraphContainer } from "@toolkit";
import Image from "next/image";

const Card = styled("div", {
  display: "flex",
  padding: "1rem",
  marginBottom: "2rem",
  justifyContent: "center",
});

const paragraphClass = css({
  maxWidth: "50%",
});

interface NewsArticleCardProps {
  thumbnail: string;
  date: string;
  title: string;
  excerpt: string;
}

const NewsArticleCard = ({
  thumbnail,
  title,
  date,
  excerpt,
}: NewsArticleCardProps) => {
  return (
    <Card>
      <ThumbnailContainer>
        <Image
          alt={title}
          layout="fill"
          src={`https://www.alpha-orbital.com/assets/images/post_img/${thumbnail}`}
        />
      </ThumbnailContainer>
      <ParagraphContainer
        className={paragraphClass()}
        dangerouslySetInnerHTML={excerpt}
      ></ParagraphContainer>
    </Card>
  );
};

export { NewsArticleCard };
