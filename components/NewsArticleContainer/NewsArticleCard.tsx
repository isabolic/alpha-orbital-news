import { css, styled } from "@stitches/react";
import { format } from "date-fns";
import { ThumbnailContainer, ParagraphContainer, Link, Button } from "@toolkit";
import Image from "next/image";
import { useNewsArticleDeleteMutation } from "@hooks";

const Card = styled("div", {
  display: "flex",
  padding: "1rem",
  marginBottom: "2rem",
  justifyContent: "center",
  position: "relative",
  backgroundColor: "black",
});

const subtitle = css({
  padding: "5px 0px",
});

const text = css({
  marginTop: "1rem",
});

const thumbnailContainer = css({
  ":hover + button": {
    zIndex: 1,
  },
});

const box = css({
  display: "flex",
  width: "calc(100% - 300px)",
  padding: "0 1.2rem",
  flexDirection: "column",
  justifyContent: "space-between",
});

const titleContainer = css({
  display: "flex",
  flexDirection: "column",
});

const button = css({
  position: "absolute",
  top: "10px",
  right: "10px",
  zIndex: "-1",
  borderRadius: "5px",
  "&:hover": {
    zIndex: 1,
  },
});

const link = css({
  color: "#4facf9",
  padding: "0",
  display: "flex",
  justifyContent: "end",
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
  const articleDate = new Date(date);
  const mutation = useNewsArticleDeleteMutation();

  const deleteNewsArticleHandler = () => {
    mutation.mutate(slug);
  };

  const dateFormatted = format(articleDate, "dd.MM.yyyy");
  return (
    <Card>
      <ThumbnailContainer className={thumbnailContainer()}>
        <Image
          alt={title}
          layout="fill"
          src={`https://www.alpha-orbital.com/assets/images/post_img/${thumbnail}`}
        />
        <Button onClick={deleteNewsArticleHandler} className={button()}>
          Delete
        </Button>
      </ThumbnailContainer>
      <div className={box()}>
        <div className={titleContainer()}>
          <h4>{title}</h4>
          <ParagraphContainer className={subtitle()}>
            {dateFormatted}
          </ParagraphContainer>
          <ParagraphContainer
            className={text()}
            dangerouslySetInnerHTML={excerpt}
          ></ParagraphContainer>
        </div>
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
