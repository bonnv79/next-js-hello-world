import Head from 'next/head'
import { API_POST } from 'constants/apiPath'
import { getUrl } from 'utils'
import { Button, Container, HeaderAction, PostCard } from 'components'
import { useRouter } from 'next/router'
import { ROUTER_PATH } from 'constants/routerPath'

export default function PostPage({ data }) {
  const router = useRouter();

  const handleCreatePost = () => {
    router.push(ROUTER_PATH.CREATE_POST)
  }

  return (
    <div>
      <Head>
        <title>POST</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <HeaderAction title='Post Page'>
          <Button className="marginLeft" onClick={handleCreatePost}>
            Create Post
          </Button>
        </HeaderAction>
        {
          data.map(item => {
            return (
              <PostCard key={item.id} id={item.id} href={item.href} title={item.title}>
                {item.content}
              </PostCard>
            )
          })
        }
      </Container>
    </div>
  )
}

PostPage.getInitialProps = async (ctx) => {
  const path = getUrl(ctx, API_POST);
  const res = await fetch(path);
  const json = await res.json();
  const { data } = json;

  return { data };
}
