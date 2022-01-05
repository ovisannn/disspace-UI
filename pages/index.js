import { momodList, dummyCategory, topUser, categoryList, threadData } from '../dummyData'
import LeaderBoards from '../components/LeaderBoards'
import CategoryList from '../components/CategoryList'
import Navbar from '../components/navbar'
import Thread from '../components/thread'
import ThreadSelector from '../components/ThreadSelector'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col justify-center overflow-x-hidden'>
      <Navbar />
      <div className='flex justify-center'>
        <div className="md:w-8/12 flex justify-center">
          <div className="flex flex-col md:flex-row justify-between my-20 gap-x-14">
            {/* thread */}
            <div className=''>
              <div className='flex flex-row justify-between'>
                <div className='p-5'>
                  All threads
                </div>
                <div>
                  <ThreadSelector />
                </div>
              </div>
              <Thread data={threadData} />
            </div>
            {/* side content */}
            <div className='flex flex-col items-center my-20 md:my-0'>
              <div>
                <LeaderBoards topUsers={topUser} />
              </div>
              <div className='py-20'>
                <CategoryList categories={categoryList}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  )
}
