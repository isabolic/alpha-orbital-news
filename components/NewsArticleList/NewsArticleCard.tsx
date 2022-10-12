import { css, styled } from "@stitches/react";
import { ThumbnailContainer, ParagraphContainer, Link } from "@toolkit";
import Image from "next/image";

const Card = styled("div", {
  display: "flex",
  padding: "1rem",
  marginBottom: "2rem",
  justifyContent: "center",
  backgroundColor: "black",
});

const box = css({
  display: "flex",
  maxWidth: "50%",
  padding: "0 1.2rem",
  flexDirection: "column",
  justifyContent: "space-between",
});

const link = css({
  color: "#4facf9",
  padding: "1rem",
  display: "flex",
});

interface NewsArticleCardProps {
  thumbnail: string;
  date: string;
  title: string;
  slug: string;
  excerpt: string;
}

const NewsArticleCard = ({
  thumbnail,
  title,
  date,
  excerpt,
  slug,
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
      <div className={box()}>
        <h4>{title}</h4>
        <ParagraphContainer
          dangerouslySetInnerHTML={excerpt}
        ></ParagraphContainer>
        <Link
          className={link()}
          text="Full article"
          target="_blank"
          href={`https://www.alpha-orbital.com/news/${slug}`}
        />
      </div>
    </Card>
  );
};

export { NewsArticleCard };
