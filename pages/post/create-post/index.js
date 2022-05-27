import Head from 'next/head'
import styles from './styles.module.scss'
import { Backdrop, Button, ComponentLabel, Container, ErrorMsg, HeaderAction, Input } from 'components';
import { useState } from 'react';
import { API_POST } from 'constants/apiPath';
import { useRouter } from 'next/router';
import { ROUTER_PATH } from 'constants/routerPath';
import { getUrl, sleep } from 'utils';

export default function CreatePost({ data, id }) {
  const editMode = Boolean(id);
  const title = editMode ? 'Edit Post' : 'Create Post';
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')
  const [postTitle, setPostTitle] = useState(data?.title || '');
  const [postContent, setPostContent] = useState(data?.content || '');

  const handleSavePost = () => {
    setLoading(true)
    setErrorMsg('')

    fetch(API_POST,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          title: postTitle,
          content: postContent
        })
      })
      .then(response => response.json())
      .then(async res => {
        const { data, error } = res;
        await sleep(500)
        setLoading(false);
        await sleep(100)

        if (data) {
          // alert('Create post successfully.');
          router.push(ROUTER_PATH.POST);
        } else {
          setErrorMsg(error);
        }
      });

  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <HeaderAction title={title}>
          <Button onClick={handleSavePost}>
            Save Post
          </Button>
        </HeaderAction>

        <div className={styles.main}>
          <div className={styles.form}>
            <ComponentLabel label="Title">
              <Input
                value={postTitle}
                onChange={e => setPostTitle(e.target.value)}
                placeholder="Input..."
              />
            </ComponentLabel>

            <ComponentLabel label="Content" className="marginZero">
              <Input
                value={postContent}
                onChange={e => setPostContent(e.target.value)}
                placeholder="Input..."
              />
            </ComponentLabel>

            <ErrorMsg>{errorMsg}</ErrorMsg>
          </div>
        </div>
      </Container>
      <Backdrop open={loading} />
    </div>
  )
}

CreatePost.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { id } = query || {};

  if (!id) {
    return {};
  }

  const path = getUrl(ctx, API_POST) + `?${id}`;
  const res = await fetch(path, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const json = await res.json();
  const { data } = json;

  return { data, id };
}