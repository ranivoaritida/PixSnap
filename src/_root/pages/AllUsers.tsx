import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";


const AllUsers = () => {

  const {data: creators,isPending: isUsersLoading  } = useGetUsers();

  
  return (
    <div className='common-container'>
      <div className='user-container'>
        <div className='max-w flex-start gap-3 justify-start  w-full '>
            <img 
              className="invert-white"
              src='/assets/icons/people.svg'
              width={36}
              height={36}
            />
            <h2 className='h3-bold md:h2-bold text-left w-full'>All Users</h2>
        </div>
        {isUsersLoading && !creators ? (
          <Loader />
        ) : (
        <ul className="user-grid">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id}>
                <UserCard user={creator} />
              </li>
            ))}
        </ul>
        )}
        </div>
      </div>
  )
}

export default AllUsers
