import { CategoryType, getCategoyLabel } from "@utils";
import { Link } from "@toolkit";
import { useRouter } from "next/router";

interface LinkCategoryProps {
  categoryType: CategoryType;
  className?: string;
}

const LinkCategory = ({ categoryType, className }: LinkCategoryProps) => {
  const router = useRouter();

  return (
    <Link
      className={className}
      text={getCategoyLabel(categoryType)}
      href={{
        pathname: "/",
        query: { ...router.query, filter: categoryType },
      }}
    />
  );
};

export { LinkCategory };
