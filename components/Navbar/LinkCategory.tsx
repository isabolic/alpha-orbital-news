import { CategoryType } from "@utils";
import { Link } from "@toolkit";

interface LinkCategoryProps {
  categoryType: string;
}

const LinkCategory = ({ categoryType }: LinkCategoryProps) => {
  let component = null;

  console.log(categoryType);

  switch (categoryType) {
    case CategoryType.EVEOnline:
      component = (
        <Link text="EVE Online" href={`/filter=${CategoryType.EVEOnline}`} />
      );
      break;
    case CategoryType.XUniverse:
      component = (
        <Link text="X Universe" href={`/filter=${CategoryType.XUniverse}`} />
      );
      break;
    case CategoryType.StarpointGemini:
      component = (
        <Link
          text="Starpoint Gemini"
          href={`/filter=${CategoryType.StarpointGemini}`}
        />
      );
      break;
    case CategoryType.EliteDangerous:
      component = (
        <Link
          text="Elite: Dangerous"
          href={`/filter=${CategoryType.EliteDangerous}`}
        />
      );
      break;
  }

  return component;
};

export { LinkCategory };
