import { CategoryType } from "./categoryType";

const getCategoyLabel = (type: CategoryType) => {
  switch (type) {
    case CategoryType.EVEOnline:
      return "EVE Online";
    case CategoryType.EliteDangerous:
      return "Elite: Dangerous";
    case CategoryType.StarpointGemini:
      return "Starpoint Gemini";
    case CategoryType.XUniverse:
      return "X Universe";
  }
};

export { getCategoyLabel };
