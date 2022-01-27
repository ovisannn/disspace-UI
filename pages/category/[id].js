import { GetCategoriesAPI, GetCategoryByID, GetThreadsByCategoryID, GetModeratorsByCategoryID } from '../api/Helpers';
import NavbarV2 from '../../components/NavbarV2';
import AboutCategories from '../../components/AboutCategories'
import CategoriesRules from '../../components/CategoriesRules'
import ModeratorList from '../../components/ModeratorList'
import Thread from "../../components/thread";
import Footer from "../../components/Footer";
import axios from 'axios';
import { useState, useEffect } from 'react';



 
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
  const [limit, setLimit] = useState(4);
  const [threadData, setThreadData] = useState();
  const [getModData, setModData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [threadsData, modData] = await Promise.all([
          axios({
            method: "get",
            url: GetThreadsByCategoryID(category._id),
          }),
          axios({
            method: 'get',
            url : GetModeratorsByCategoryID(category._id),
          })
        ]);
        setThreadData(threadsData?.data);
        setModData(modData)
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (<div className=''>
    <div className="flex flex-col justify-center lg:items-center">
        <NavbarV2 />  
      <div className='h-14 md:h-28 w-screen md:w-screen' style={{overflow:'hidden'}}>
        <img src={category?.header} layout='cover' style={{width: '100%'}} alt="" />
      </div>
      {loading ? (
        <div className="flex items-center justify-center my-80 space-x-2 animate-bounce">
          <div className="w-5 h-5 bg-orange rounded-full"></div>
          <div className="w-5 h-5 bg-lightOrange rounded-full"></div>
          <div className="w-5 h-5 bg-gray rounded-full"></div>
        </div>
      ) : (
        <div>
          <div>
            <div className="flex flex-col md:flex-row my-8 gap-x-14">
              {/* thread */}
              <div className="">
                <div className="max-w-2xl">
                  {threadData?.data
                    ?.slice(0, limit != null ? limit : threadData?.length)
                    .map((data) => (
                      <Thread data={data} key={data?._id} limit={limit} />
                    ))}
                </div>
                {limit == threadData?.length ? (
                  ""
                ) : (
                  <button
                    className="bg-lightOrange hover:bg-orange text-white font-bold py-2 px-4 rounded mt-4 w-full"
                    onClick={() => setLimit(threadData?.length)}
                  >
                    View All
                  </button>
                )}
                <div className="mx-3 md:mx-0"></div>
              </div>
              {/* side content */}
              <div className="flex flex-col items-center my-8 md:my-0">
                <div>
                  <AboutCategories category={category} />
                </div>
                <div className="py-8">
                  <CategoriesRules category={category} />
                </div>
                {/* <div className="py-8">
                  <ModeratorList category={category} moderatorList={getModData.data} />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  </div>);
};

export default CategoryIndex;
