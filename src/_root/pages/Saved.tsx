import GridPostList from '@/components/shared/GridPostList'
import Loader from '@/components/shared/Loader';
import { useGetCurrentUser } from '@/lib/react-query/queriesAndMutations';
import { Models } from 'appwrite';

const Saved = () => {
  const { data:currentUser, isPending:isPostsPending } = useGetCurrentUser();
  const savePosts = currentUser?.save
    .map((savePost: Models.Document) => ({
      ...savePost.post,
      creator: {
        imageUrl: currentUser.imageUrl,
      },
    }))
    .reverse();
  console.log(currentUser)
  return (
    <div className='saved-container'>
      <div className='flex-start w-full gap-2'>
      <img 
        className="invert-white"
        src='/assets/icons/people.svg'
        width={36}
        height={36}
      />
      <h1 className='h3-bold md:h2-bold text-left w-full'>Saved Posts</h1>
    </div>
    {isPostsPending && !currentUser ? (
      <Loader />
      ): ( 
      <ul>
        {currentUser?.save.length === 0 ? (
            <p className="text-light-4">No available posts</p>
            ) : (
              <GridPostList posts={savePosts}  showStats={false} />
            )} 
      </ul>
    )}
    </div>
  )
}

export default Saved
