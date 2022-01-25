import { GetCategoriesAPI, GetCategoryByID } from '../api/Helpers';


 
export const getStaticPaths = async () =>{
  const res = await fetch(GetCategoriesAPI())
  const data = await res.json()
  // console.log(data.data)
  const paths = data.data.map(item =>{
    return {
      params:{id : item._id.toString()}
    }
  })

  return{
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) =>{ 
    const id = context.params.id
    const res = await fetch(GetCategoryByID(id))
    const data = await res.json()
    // console.log(data.data)
    return {
      props : {category : data.data}
    }
}

const CategoryIndex = ({ category }) => {

  return (<div>
    {category.category_name}
  </div>);
};

export default CategoryIndex;
