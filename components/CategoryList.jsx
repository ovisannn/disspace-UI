import Link from "next/link";

const CategoryButton = ({ category }) => {
  return (
    <Link href={`/category/${category._id}`}>
      <a>
        <button className="bg-white rounded-md shadow-md w-full my-1 py-2 px-3 text-left font-light">
          #{category.category_name}
        </button>
      </a>
    </Link>
  );
};

const CategoryList = ({ categories }) => {
  return (
    <div className="w-80 h-auto grid grid-flow-row border-2 border-lightGray shadow-sm rounded">
      <div className="h-20 w-full relative rounded-t text-white font-light text-2xl text-center align-middle py-5 bg-orange">
        Topics
      </div>
      <div className="w-full px-5 font-light bg-lightGray">
        {categories?.map((item) => (
          <CategoryButton key={item._id} category={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
