import { useNewsCategories } from "@hooks";
import { LinkCategory } from "./LinkCategory";

const Navbar = () => {
  const { data, isLoading } = useNewsCategories();
  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  console.log(data);

  return (
    <div>
      {data?.map((x) => (
        <LinkCategory key={x} categoryType={x} />
      ))}
    </div>
  );
};

export { Navbar };
