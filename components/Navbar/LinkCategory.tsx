import { CategoryType } from "@utils";
import { Link } from "@toolkit";

interface LinkCategoryProps {
  categoryType: string;
  className?: string;
}

const LinkCategory = ({ categoryType, className }: LinkCategoryProps) => {
  let component = null;

  switch (categoryType) {
    case CategoryType.EVEOnline:
      component = (
        <Link
          className={className}
          text="EVE Online"
          href={{ pathname: "/", query: { filter: CategoryType.EVEOnline } }}
        />
      );
      break;
    case CategoryType.XUniverse:
      component = (
        <Link
          className={className}
          text="X Universe"
          href={{ pathname: "/", query: { filter: CategoryType.XUniverse } }}
        />
      );
      break;
    case CategoryType.StarpointGemini:
      component = (
        <Link
          className={className}
          text="Starpoint Gemini"
          href={{
            pathname: "/",
            query: { filter: CategoryType.StarpointGemini },
          }}
        />
      );
      break;
    case CategoryType.EliteDangerous:
      component = (
        <Link
          className={className}
          text="Elite: Dangerous"
          href={{
            pathname: "/",
            query: { filter: CategoryType.EliteDangerous },
          }}
        />
      );
      break;
  }

  return component;
};

export { LinkCategory };
